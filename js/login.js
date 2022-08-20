//1.add click the button with the aubmit button
document.getElementById('btn-submit').addEventListener('click',function () {
    
    //2 get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
   // console.log(emailField.value);
    //3. get the password inside the password input Field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //console.log(passwordField.value);
    //4. check input mail or password are valid or not 
    if(email === 'habu@gimal.com' && password ==='habukhay'){
        console.log('habu is a good boy!');
    }
    else{
        alert('You forgoter your mail or password!! We are very upsate dear.')
    }

})