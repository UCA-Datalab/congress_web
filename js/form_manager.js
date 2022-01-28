function createBody(surname) {
    var body = "Dear Prof. " + surname + ",\n\nThank you for pre-registering for the International Conference on Orthogonal Polynomials.\nIf you submitted a proposed contribution, final acceptance will be communicated on March 15th. Please remember to complete your registration with the payment of the registration fee at the following website: (enlace a web de El Corte Inglés).\nWe are looking forward to seeing you in Cádiz.\n\nThe Organizing Committee";

    return body;
}

document.addEventListener("submit", (e) => {

    // Store reference to form to make later code easier to read
    form = e.target
    //console.log(form)
    var email = form.email.value;
    var surname = form.surname.value;
    //console.log(createBody(surname))
    //console.log(email, name, surname, institution)

    //Send reception email to the user
    Email.send({
        Host: "smtp.gmail.com",
        Username: "smartshipping.contact@gmail.com",
        Password: "zvaememugzmdlfqr",
        To: email,
        From: "smartshipping.contact@gmail.com",
        Subject: "Pre-registration for Intl Conf on Orthogonal Polynomials (Cádiz, 21-23 April)",
        Body: createBody(surname)
    }).then(
        message => console.log(message)
    );

    //Prevent the form from being sent (page realoaded)
    e.preventDefault();


    //Url to google sheets api
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxIyyUwkzHVpAW99GFQ1Jh7Ajc-GQoyOO1EiRAC9Q-VRq3aQZGhpSFQm6xnpn46LAjA/exec'
    //Send the data to google sheets
    fetch(SCRIPT_URL,
        {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))


    //Open the registration payment on a new windows
    window.open("https://www.elcorteingles.es/", '_blank').focus();


});


