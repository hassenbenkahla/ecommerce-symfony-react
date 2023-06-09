<?php
namespace App\Controller;


use App\classe\Cart;
use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Stripe\Stripe;
use Stripe\Checkout\Session;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StripeController extends AbstractController
{
    private $entityManager;
    public function __construct(EntityManagerInterface $entityManager){
        $this->entityManager = $entityManager;
    }
    #[Route('/commande/create-session', name: 'stripe_create_session')]
    public function index(Cart $cart): Response
    {
        $product_for_stripe=[];

        $YOUR_DOMAIN = 'http://127.0.0.1:8000/';
        $cartComplete = [];
         if($cart->get())
         {
             foreach($cart->get() as $id => $quantity){
             $cartComplete[] = [
                 'product' => $this->entityManager->getRepository( Product::class)->findOneById($id),
                 'quantity' => $quantity
             ];
         }
        }
        foreach($cartComplete as $product){
           $product_for_stripe[] = [
               'price_data' =>[
                   'currency' => 'eur',
                   'unit_amount' => $product['product']->getPrice(),
                   'product_data' =>[
                       'name' => $product['product']->getName(),
                      
                   ],
                ],
                'quantity' =>$product['quantity'],
            ];
        }
    
    Stripe::setApiKey('sk_test_51NAaWhDuEjEa3xX7umuSjvFCO03aAYc133cxzIsYmUAamN5vx8RF0Ky7B0PpcqNrBgHMd7Im6GMNh75G2VjYBFUA00gV0GVDxR');
    $checkout_session = Session::create([
        'line_items' => [[
         $product_for_stripe
        ]],
        'mode' => 'payment',
        'success_url' => $YOUR_DOMAIN . '/success.html',
        'cancel_url' => $YOUR_DOMAIN . '/cancel.html',
      ]);
    
      $response = new JsonResponse(['id' =>$checkout_session->id]);
      return $response;
}
}
