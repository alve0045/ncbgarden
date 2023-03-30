(function () {
  'use strict';

  var forms = document.querySelectorAll('.needs-validation');

  const emailInput = document.querySelector('#email');
  const fnameInput = document.querySelector('#first-name');
  const lnameInput = document.querySelector('#last-name');
  const messageTextarea = document.querySelector('#message');

  // Move the isEmailValid variable declaration here
  let isEmailValid = false; 

  emailInput.addEventListener('input', function () {
      const email = emailInput.value.trim();
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isEmailValid = pattern.test(email);
      if (isEmailValid) {
          emailInput.classList.remove('is-invalid');
          emailInput.classList.add('is-valid');
      } else {
          emailInput.classList.remove('is-valid');
          emailInput.classList.add('is-invalid');
      }
  });

  Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
          'submit',
          function (event) {
              // Move the declarations and initializations inside the form submit event listener
              const fname = fnameInput.value.trim();
              const lname = lnameInput.value.trim();
              const message = messageTextarea.value.trim();
              if (!form.checkValidity() || !isEmailValid) {
                  event.preventDefault();
                  event.stopPropagation();
              } else {
                // Prevent the default form submission behavior
                  event.preventDefault(); 
                  form.classList.add('was-validated');

                  // Construct the email
                  let body =
                      'First Name: ' +
                      fname +
                      '<br/>Last Name: ' +
                      lname +
                      '<br/>Email: ' +
                      emailInput.value.trim() +
                      '<br/>Message: ' +
                      message;

                  // SMTP JS Email Verification
                  Email.send({
                      SecureToken: '54ed28c8-faa9-4001-ba7a-d475870aaa9d',
                      To: 'alve0045@algonquinlive.com',
                      From: 'odinquiries@gmail.com',
                      Subject: 'You got a new feedback from NCB Microsite',
                      Body: body,
                  }).then((message) => alert('We appreciate your story!'));
              }
          },
          false
      );
  });
})();