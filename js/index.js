
document.getElementById("login-btn").addEventListener('click', function(){
    
    const email = document.getElementById('user-email');
    const userEmail = email.value;
    console.log(userEmail);

    const password = document.getElementById('user-password');
    const userPass = password.value;
    console.log(userPass);

})