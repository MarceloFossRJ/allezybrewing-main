// Signup Form.
  (function() {

    // Vars.
      var $form = document.querySelectorAll('#contato-form')[0],
        $submit = document.querySelectorAll('#contato-form input[type="submit"]')[0],
        $message;

    // Bail if addEventListener isn't supported.
      if (!('addEventListener' in $form))
        return;

    // Message.
      $message = document.createElement('span');
        $message.classList.add('text-black');
        $form.appendChild($message);

      $message._show = function(type, text) {

        $message.innerHTML = text;
        $message.classList.add(type);
        $message.classList.add('visible');

        window.setTimeout(function() {
          $message._hide();
        }, 3000);

      };

      $message._hide = function() {
        $message.classList.remove('visible');
      };

    // Events.
    // Note: If you're *not* using AJAX, get rid of this event listener.

      $form.addEventListener('submit', function(event) {
        event.stopPropagation();
        event.preventDefault();

        // Hide message.
          $message._hide();

        // Disable submit.
          $submit.disabled = true;

          $.ajax({
            type: "POST",
            url: "mail.php",
            datatype: "html",
            data: $(this).serialize()
          })
          .done(function(){
            $message._show('text-black', 'Obrigado!');
          })
          .fail(function(){
            console.log("error");
            $submit.disabled = false;
            $message._show('text-danger', 'Ocorreu algum erro, tente novamente.');
          });
        // Process form.
        // Note: Doesn't actually do anything yet (other than report back with a "thank you"),
        // but there's enough here to piece together a working AJAX submission call that does.
          window.setTimeout(function() {

            // Reset form.
              $form.reset();

            // Enable submit.
            //	$submit.disabled = false;

            // Show message.
              //$message._show('text-black', 'Obrigado!!');
              //$message._show('failure', 'Something went wrong. Please try again.');

          }, 750);

      });

  })();
