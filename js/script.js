(function () {
  'use strict';

  // Hide the alert message by default
  var alert = document.getElementById('custom-alert');
  alert.style.display = 'none';

  // Initialize variables
  var forms = document.querySelectorAll('.needs-validation');

  var emailInput = document.querySelector('#email');
  var fnameInput = document.querySelector('#first-name');
  var lnameInput = document.querySelector('#last-name');
  var messageTextarea = document.querySelector('#message');

  // Email Validation
  var isEmailValid = false; 
  emailInput.addEventListener('input', function () {
      var email = emailInput.value.trim();
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

  // First Name Validation
  var isFnameValid = false; 
  fnameInput.addEventListener('input', function () {
      var fname = fnameInput.value.trim();
      if (fname === '') {
        isFnameValid = false; 
        fnameInput.classList.remove('is-valid');
        fnameInput.classList.add('is-invalid');
      } else {
        isFnameValid = true; 
        fnameInput.classList.remove('is-invalid');
        fnameInput.classList.add('is-valid');
        
      }
  });

  // Last Name Validation
  var isLnameValid = false; 
  lnameInput.addEventListener('input', function () {
      var lname = lnameInput.value.trim();
      if (lname === '') {
        isLnameValid = false; 
        lnameInput.classList.remove('is-valid');
        lnameInput.classList.add('is-invalid');
      } else {
        isLnameValid = true; 
        lnameInput.classList.remove('is-invalid');
        lnameInput.classList.add('is-valid');
        
      }
  });

  // Message Validation
  var isMessageValid = false; 
  messageTextarea.addEventListener('input', function () {
      var message = messageTextarea.value.trim();
      if (message === '') {
        isMessageValid = false; 
        messageTextarea.classList.remove('is-valid');
        messageTextarea.classList.add('is-invalid');
      } else {
        isMessageValid = true; 
        messageTextarea.classList.remove('is-invalid');
        messageTextarea.classList.add('is-valid');
        
      }
  });

  Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
          'submit',
          function (event) {
              if (!isEmailValid ||  !isFnameValid || !isLnameValid || !isMessageValid) {
                  event.preventDefault();
                  event.stopPropagation();
                  console.log('Validation Fail');
              } 
              if (isEmailValid && isFnameValid && isLnameValid && isMessageValid){
                    console.log('Validation Success');
                    // Prevent the default form submission behavior
                    event.preventDefault(); 
                    form.classList.add('was-validated');

                    // Construct the email
                    let body =
                      'First Name: ' +
                      fnameInput.value.trim() +
                      '<br/>Last Name: ' +
                      lnameInput.value.trim() +
                      '<br/>Email: ' +
                      emailInput.value.trim() +
                      '<br/>Message: ' +
                      messageTextarea.value.trim();

                  // SMTP JS Email Verification
                  Email.send({
                      SecureToken: '54ed28c8-faa9-4001-ba7a-d475870aaa9d',
                      To: 'alve0045@algonquinlive.com',
                      From: 'odinquiries@gmail.com',
                      Subject: 'You got a new feedback from NCB Microsite',
                      Body: body,
                  }).then((message) => alert.style.display = 'block' );
              }
          },
          false
      );
  });
})();