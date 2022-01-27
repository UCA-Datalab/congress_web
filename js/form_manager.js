function createBody(surname) {
    var body = "Dear Prof. " + surname + ",\n\nThank you for pre-registering for the International Conference on Orthogonal Polynomials.\nIf you submitted a proposed contribution, final acceptance will be communicated on March 15th. Please remember to complete your registration with the payment of the registration fee at the following website: (enlace a web de El Corte Inglés).\nWe are looking forward to seeing you in Cádiz.\n\nThe Organizing Committee";

    return body;
}

function sendEmail(email, surname) {
    var senderEmail = "smartshipping.contact@gmail.com"

    Email.send({
        Host: "smtp.gmail.com",
        Username: senderEmail,
        Password: "smartshipping123",
        To: email,
        From: senderEmail,
        Subject: "Pre-registration for Intl Conf on Orthogonal Polynomials (Cádiz, 21-23 April)",
        Body: createBody(surname),

    }).then(
        message => console.log(message)
    );
}

function processEmail(form) {
    var email = form.email.value;
    var name = form.name.value;
    var surname = form.surname.value;
    var institution = form.institution.value;

    if (email == "" || name == "" || surname == "" || institution == "") {
        alert("* must be filled out.");
        return false;
    }

    // stop form submission
    //if (!ValidateEmail(email))
    //event.preventDefault();

    console.log(email);
    console.log(name);
    console.log(surname);
    console.log(institution);

    sendEmail(email, surname);

    return true;
}