document.getElementById('submit-button').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    var userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //checking pass and email

    if (userEmail == 'sontan@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
    else if (userEmail == 'reazrafsan@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
})

