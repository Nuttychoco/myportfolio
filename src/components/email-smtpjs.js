const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('form-contract')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Clicked");


    Email.send({
        SecureToken: "ab05b593-baef-4859-8879-7c5af98f8ccf",
        To: 'ads@dsignfab.com',
        From: "ads@dsignfab.com",
        Subject: "Dsign Fabs Website Contact Inquiry",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email:" + document.getElementById("email").value
            + "<br> Phone no.:" + document.getElementById("phone").value
            + "<br> Message:" + document.getElementById("message").value
    }).then(
        message => alert(message)
    );

});