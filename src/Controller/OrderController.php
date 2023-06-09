<?php

namespace App\Controller;

use App\classe\Cart;
use App\Entity\Order;
use App\Entity\OrderDetails;
use App\Entity\Product;
use App\Form\OrderType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OrderController extends AbstractController
{
    private $entityManager;
    public function __construct(EntityManagerInterface $entityManager){
        $this->entityManager = $entityManager;
    }
    #[Route('/commande', name: 'order')]
    public function index(Cart $cart,Request $request): Response
    {   
        $cartComplete = [];
        if($cart->get()){
            foreach($cart->get() as $id => $quantity){
            $cartComplete[] = [
                'product' => $this->entityManager->getRepository( Product::class)->findOneById($id),
                'quantity' => $quantity
            ];
        }
        }
        
        $form = $this->createForm( OrderType::class,null,[
            'user' => $this->getUser()
        ]);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){

        }

        return $this->render('order/index.html.twig',[
            'form' => $form->createView(),
            'cart' => $cartComplete
        ]);
    }
     #[Route('/commande/recapitulatif', name: 'order-recap')]
     public function add(Cart $cart,Request $request): Response
     {   
         $cartComplete = [];
         if($cart->get()){
             foreach($cart->get() as $id => $quantity){
             $cartComplete[] = [
                 'product' => $this->entityManager->getRepository( Product::class)->findOneById($id),
                 'quantity' => $quantity
             ];
         }
         }
         
         $form = $this->createForm( OrderType::class,null,[
             'user' => $this->getUser()
         ]);
         $form->handleRequest($request);
         if($form->isSubmitted() && $form->isValid()){
            $date= new \DateTime();
            $carriers = $form->get('carriers')->getData();
            $delivery = $form->get('addresses')->getData();
            $delivery_content = $delivery->getFirstname().$delivery->getPhone();
            if($delivery->getCompany()){
                $delivery_content.= '<br/>'.$delivery->getCompany();
            }
            //enregistrer ma commande
            $delivery_content.='<br/>'.$delivery->getAddress(); 
            $order = new Order ();
            $order->setUser($this->getUser());
            $order->setCreatedAt($date);
            $order->setCarrierName($carriers->getName());
            $order->setCarrierPrice($carriers->getPrice());
            $order->setDelivery($delivery_content);
            $order->setIsPaid(0);
            $this->entityManager->persist($order);
            //enregistrer mes produits OrderDetails
            foreach($cartComplete as $product){
                $orderDetails= new OrderDetails();
                $orderDetails->setMyOrder($order);
                $orderDetails->setProduct($product['product']->getName());
                $orderDetails->setQuantity($product['quantity']);
                $orderDetails->setPrice($product['product']->getPrice());
                $orderDetails->setTotal($product['product']->getPrice() * $product['quantity']);
                $this->entityManager->persist($orderDetails);
                
            }
            $this->entityManager->flush();
            return $this->render('order/add.html.twig',[
                'form' => $form->createView(),
                 'cart' => $cartComplete,
                 'delivery'=>$delivery_content,
                 'carrier' => $carriers
             ]);
         }
         return $this->redirectToRoute('cart');
         }
 
        
}
