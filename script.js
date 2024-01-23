document.getElementById('registrationForm').addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Access form elements and log their values to the console
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var num = document.getElementById('phoneno').value;
    console.log('First Name:', fname);
    console.log('Last Name:', lname);
    console.log('Email:', email);
    console.log('Contact Number:', phoneno);
});