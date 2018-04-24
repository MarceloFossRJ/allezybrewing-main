<html>

   <head>
      <title>Allez-y Brewing</title>
   </head>

   <body>

      <?php
         $from = $_POST['email'];
         $nome = $_POST['nome'];
         $telefone = $_POST['telefone'];
         $assunto = $_POST['assunto'];
         $mensagem = $_POST['mensagem'];

         $to = "contato@gmail.com";
         $subject = $assunto;

         $message = "<b>Nome:</b>";
         $message .= $nome;
         $message .= "<br><b>Telefone:</b>";
         $message .= $telefone;
         $message .= "<br><b>Email:</b>";
         $message .= $from;
         $message .= "<br><b>Assunto:</b>";
         $message .= $assunto;
         $message .= "<br><b>Mensagem:</b>";
         $message .= $mensagem;

         $header = "From:";
         $header .= $from;
         $header .= "\r\n";
         $header .= "Cc:contato@allezybrewing.com.br \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";

         $retval = mail ($to,$subject,$message,$header);

         if( $retval == true ) {
            echo "Message sent successfully...";
         }else {
            echo "Message could not be sent...";
         }
      ?>

   </body>
</html>
