function createBody(surname) {
    var body = `<p>Dear Prof. ` + surname + `</p>
    <p>Thank you for pre-registering for the International Conference on Orthogonal Polynomials.</p>
    <p>
        If you submitted a proposed contribution, final acceptance will be communicated on March 15th. Please remember to
        complete your registration with the payment of the registration fee at the following website: <a
            class="link-corte-ingles" href="http://sevilla-en.congresoseci.com/orthogonalpolynomials/index"> registration portal </a>.

    </p>
    <p>We are looking forward to seeing you in Cádiz.</p>
    <p>The Organizing Committee</p>`;

    return body;
}
function createBodyDavid(name,surname,institution,presents,title,abstract) {
    var body = `<p>NEW PARTICIPANT REGISTERED</p>
    <p> Name: `+ name +` </p>
    <p> Surname: `+ surname +` </p>
    <p> Institution: `+ institution +` </p>
    <p> Presents: `+ presents +` </p>
    <p> Title: `+ title +` </p>
    <p> Abstract: `+ abstract +` </p>

    
    <p>---EMAIL SENT---</>
    <p></p>
    <p>Dear Prof. ` + surname + `</p>
    <p>Thank you for pre-registering for the International Conference on Orthogonal Polynomials.</p>
    <p>
        If you submitted a proposed contribution, final acceptance will be communicated on March 15th. Please remember to
        complete your registration with the payment of the registration fee at the following website: <a
            class="link-corte-ingles" href="http://sevilla-en.congresoseci.com/orthogonalpolynomials/index"> registration portal </a>.

    </p>
    <p>We are looking forward to seeing you in Cádiz.</p>
    <p>The Organizing Committee</p>`;

    return body;
}

document.addEventListener("submit", (e) => {

    // Store reference to form to make later code easier to read
    form = e.target
    //console.log(form)
    var email = form.email.value;
    var name = form.name.value;
    var surname = form.surname.value;
    var institution = form.institution.value;
    var presents = form.presents.value;
    var title = form.title.value;
    var abstract = form.abstract.value;
    console.log(createBodyDavid(name,surname,institution,presents,title,abstract))
    //console.log(email, name, surname, institution)

    //Send reception email to the user
    Email.send({
        Host: "smtp.gmail.com",
        Username: "marcellanfest@gmail.com",
        Password: "exactewqvhqfbfsp",
        To: email,
        From: "marcellanfest@gmail.com",
        Subject: "Pre-registration for Intl Conf on Orthogonal Polynomials (Cádiz, 21-23 April)",
        Body: createBody(surname)
    }).then(
        message => console.log(message)
    );

    Email.send({
        Host: "smtp.gmail.com",
        Username: "marcellanfest@gmail.com",
        Password: "exactewqvhqfbfsp",
        To: "david.gomezullate@uca.es",
        From: "marcellanfest@gmail.com",
        Subject: "New Pre-registration for Intl Conf on Orthogonal Polynomials (Cádiz, 21-23 April)",
        Body: createBodyDavid(name,surname,institution,presents,title,abstract)
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
    // TODO: Cambiar enlace
    window.open("http://sevilla-en.congresoseci.com/orthogonalpolynomials/index", '_blank').focus();


});


