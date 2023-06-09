<?php
nameSpace App\classe;
use Mailjet\Client;
use Mailjet\Resources;
class Mail {
private $api_key = '412749147e3b1143294ed2e62444ec02';
private $api_key_secret='4f36c2c13cc6868fa1815c86dcb2e6cb';

public function send($to_email,$to_name,$subject,$content){
$mj = new Client($this->api_key,$this->api_key_secret,true,['version' =>'v3.1']);

$body = [
    'Messages' => [
        [
            'From' => [
                'Email' => "hbenkahla8@gmail.com",
                'Name' => "hassen ben kahla"
            ],
            'To' => [
                [
                    'Email' => $to_email,
                    'Name' => $to_name
                ]
            ],
            'TemplateID' => 1763445,
            'TemplateLanguage' => true,
            'Subject' => $subject,
            'Variable' =>[
                'content' => $content,
            ]
        ]
    ]
];
$response = $mj->post(Resources::$Email, ['body' => $body]);
$response->success() && dd($response->getData());
}
}