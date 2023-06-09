<?php

namespace App\Controller;

use App\Entity\Address;
use App\Form\AddressType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AcountAddressController extends AbstractController
{
    private $entityManager;
    public function __construct(EntityManagerInterface $entityManager){
        $this->entityManager = $entityManager;
    }
    #[Route('/acount/address', name: 'app_acount_address')]
    public function index(): Response
    {  
        return $this->render('acount/address.html.twig');
    }
     #[Route('/acount/ajoutaddress', name: 'acount_address_add')]
     public function add(Request $request): Response
     {  
        $address=new Address() ;
        $form= $this->createForm(AddressType::class,$address);

$form->handleRequest($request);
if($form->isSubmitted()&& $form->isValid()){
    $address->setUser($this->getUser());
    $this->entityManager->persist($address);
    $this->entityManager->flush();
    return $this->redirectToRoute('app_acount_address');
}

         return $this->render('acount/address_form.html.twig',[
             'form'=>$form->createView()
         ]);
     }
     
     #[Route('/acount/editaddress/{id}', name: 'acount_address_edit')]
     public function edit(Request $request , $id): Response
     {  
        $address=$this->entityManager->getRepository(Address::class)->findOneById($id);
        if(!$address || $address->getUser() != $this->getUser()){
            return$this->redirectToRoute('app_acount_address');
        }
        $form= $this->createForm(AddressType::class,$address);

$form->handleRequest($request);
if($form->isSubmitted()&& $form->isValid()){

    $this->entityManager->flush();
    return $this->redirectToRoute('app_acount_address');
}

         return $this->render('acount/address_form.html.twig',[
             'form'=>$form->createView()
         ]);
     }
      #[Route('/acount/supprimeraddress/{id}', name: 'acount_address_delete')]
      public function delete( $id): Response
      {  
         $address=$this->entityManager->getRepository(Address::class)->findOneById($id);
         if($address && $address->getUser() == $this->getUser()){
            $this->entityManager->remove($address);
              $this->entityManager->flush();
         }
         
          return $this->redirectToRoute('app_acount_address');
      }
}
