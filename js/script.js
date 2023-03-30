

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  const emailInput = document.querySelector('#email');
  const fnameInput = document.querySelector('#first-name');
  const lnameInput = document.querySelector('#last-name');
  const messageTextarea = document.querySelector('#message');

  //Removing whitespace
  const fname = fnameInput.value.trim();
  const lname = lnameInput.value.trim();
  const message = messageTextarea.value.trim();

  // Add an event listener to the email input to validate email
  emailInput.addEventListener('input', function() {
    const email = emailInput.value.trim();
    // Regular expression pattern to validate the email
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Test the input value against the pattern
    const isEmailValid = pattern.test(email);
    // If the email is valid, remove the "is-invalid" class and add the "is-valid" class
    if (isEmailValid) {
      emailInput.classList.remove('is-invalid');
      emailInput.classList.add('is-valid');
    } else {
      // If the email is not valid, remove the "is-valid" class and add the "is-invalid" class
      emailInput.classList.remove('is-valid');
      emailInput.classList.add('is-invalid');
    }
  });

})();