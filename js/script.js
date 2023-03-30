function sendEmail(){

    let formData = {};
    //let errors = [];

    let firstNameInput = document.getElementById("first-name").value;
    let lastNameInput = document.getElementById("last-name").value;
    let emailInput = document.getElementById("email").value;
    let messageTextarea = document.getElementById("message").value;

    //Email Regular Expression
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Removing Whitespace
    let firstNameValue = firstNameInput.trim();
    let lastNameValue = lastNameInput.trim();
    let emailValue = emailInput.trim();
    let messageValue = messageTextarea.trim();

    //First name validation
    if (firstNameValue !== "") {
        formData.fname = firstNameValue;
    } else {
        alert("Please enter your first name!");
        //errors.push("Full name is missing.");
    }

    //Last name validation
    if (lastNameValue !== "") {
        formData.lname = lastNameValue;
    } else {
        alert("Please enter your last name!");
        //errors.push("Full name is missing.");
    }

    //Email validation
    if (emailValue !== "") {
        if (emailRegex.test(emailValue)) {
          formData.email = emailValue;
        } else {
          alert("Please enter a valid email!");
          //errors.push("Invalid email.");
        }
      } else {
        alert("Please enter your email!");
        //errors.push("Email is missing.");
      }

      //Message validation
      if (messageValue !== "") {
        formData.message = messageValue;
      } else {
        alert("Please enter your message!");
        //errors.push("Message name is missing.");
      }


    let body = "First Name: " + formData.fname + "<br/>Last Name: " + formData.lname + "<br/>Email: " + formData.email + 
                "<br/>Message: " + formData.message;

    //SMTP JS Email Verification
    Email.send({

        SecureToken : "54ed28c8-faa9-4001-ba7a-d475870aaa9d",
        To : 'diss0005@algonquinlive.com',
        From : 'odinquiries@gmail.com',
        Subject : "You got a new feedback from NCB Microsite",
        Body : body
    }).then(
      message => alert("We appreciate your feedback!")
    );
};

