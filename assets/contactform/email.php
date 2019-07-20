<?php
    header('Content-type: application/json');
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
    return $from_email;

/*     header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    $request = json_decode(file_get_contents("php://input"));
    $to_email = $request->email;
    $email_subject = "Contact form of Sombank";
    $from_email = "sombank@sombank.skillathontech.com";
	$email_to = $to_email
	$headers = 'From: ' . $from_email . "\r\n";
	$content  = "Contact Person Name: \r\n";
	$content .= "Email ID: " . $from_email . "\r\n";
	$content .= "Contact Number: \r\n";
	$content .= "Company or Hospital Name: \r\n";
	$content .= "Message: Test";
	@mail($email_to, $email_subject, $content, $headers); */
?>