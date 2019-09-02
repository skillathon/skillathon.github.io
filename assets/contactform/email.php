<?php
    $data = [
        'email'     => 'johndoe@example.com',
        'status'    => 'subscribed',
        'firstname' => 'john',
        'lastname'  => 'doe'
    ];
    
    syncMailchimp($data);
    
    function syncMailchimp($data) {
        $apiKey = 'd6c2d0e5124de0a4c7a5aa952581c624-us5';
        $listId = '74e8857ac4';
    
        $memberId = md5(strtolower($data['email']));
        $dataCenter = substr($apiKey,strpos($apiKey,'-')+1);
        $url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $listId . '/members/' . $memberId;
    
        $json = json_encode([
            'email_address' => $data['email'],
            'status'        => $data['status'], // "subscribed","unsubscribed","cleaned","pending"
            'merge_fields'  => [
                'FNAME'     => $data['firstname'],
                'LNAME'     => $data['lastname']
            ]
        ]);
    
        $ch = curl_init($url);
    
        curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);                                                                                                                 
    
        $result = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
    
        return $httpCode;


    /* header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    $from_email = "sombank@sombank.skillathontech.com";

    $message = "Welcome.";

    $from_name = "your name goes here";

    $to_email = "m.afroz4@gmail.com";

    $contact = "<p><strong>Name:</strong>$from_name</p><p><strong>Email:</strong> $from_email</p>";

    $email_subject = "Angular Php Email Example: Neue Nachricht von $from_name erhalten";

    $email_body = '<html><body>';
    $email_body .= "$<p><strong>Name:</strong>$from_name</p><p><strong>Email:</strong> $from_email</p>
                    <p>$message</p>";
    $email_body .= '</body></html>';

    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $headers .= "From: $from_email\n";
    $headers .= "Reply-To: $from_email";

    mail($to_email,$email_subject,$email_body,$headers);

    $response_array['status'] = 'success';
    $response_array['from'] = $from_email;

    echo json_encode($response_array);
    echo json_encode($from_email);
    header($response_array);
    return $from_email; */

 /* header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    $request = json_decode(file_get_contents("php://input"));
    $to_email = $request->email;
    $email_subject = "Contact form of Sombank";
    $from_email = "sombank@sombank.skillathontech.com";
    $email_to = $to_email
    $email_to = "m.afroz4@gmail.com";
	$headers = 'From: ' . $from_email . "\r\n";
	$content  = "Contact Person Name: \r\n";
	$content .= "Email ID: " . $from_email . "\r\n";
	$content .= "Contact Number: \r\n";
	$content .= "Company or Hospital Name: \r\n";
	$content .= "Message: Test";
    @mail($email_to, $email_subject, $content, $headers);
    
    $response_array['status'] = 'success';
    $response_array['from'] = $from_email;

    echo json_encode($response_array);
    echo json_encode($from_email);
    header($response_array);
    return $from_email;  */
?>