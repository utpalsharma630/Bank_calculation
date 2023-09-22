document.getElementById('log-in').addEventListener('click', function(){
    const emailField= document.getElementById('email-field');
    const email= emailField.value;
    const passField= document.getElementById('pass-field');
    const pass =passField.value;

    if(email=== 'email@gamil.com' && pass==='password' ){
        console.log('valid user')
    }
    
    else{
        console.log('invalid number')
    }
})