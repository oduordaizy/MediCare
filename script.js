document.getElementById('registrationForm').addEventListener('submit' , function(event){
    let valid = true;

    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const email = document.getElementById('email').value;

    // if(!regex.test(email)){
    //     document.getElementById('emailError').textContent = "Invalid email format"
    //     valid=false;
    // }
    // else{
    //     document.getElementById('emailError').textContent = " "
    // }


    //Ensuring passwords match
    const x = document.getElementById('password').value;
    const y = document.getElementById('confirmPassword').value;
    
    if (x.length < 8){
        document.getElementById('passwordError').textContent = "Password is less than 8 characters"
        valid=false;
    }
    else{
        document.getElementById('passwordError').textContent = " "
    }
    
    if (x !== y){
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match"
    }
    else{
        document.getElementById('confirmPasswordError').textContent = ""
    }
    

    //Age validation
    const age = document.getElementById('age').value;

    if (isNaN(age) | age < 18 | age > 100){
        document.getElementById('ageError').textContent = "Age must be between 18 and 100"
        valid=false;
    }
    else{
        document.getElementById('ageError').textContent = " "
    }

    // Validating the terms and Conditions
    const terms = document.getElementById('terms').checked;
    if(!terms){
        document.getElementById('termsError').textContent = "You must agree to the terms and Conditions"
        valid=false;
    }
    else{
        document.getElementById('termsError').textContent = " "
    }

    if(!valid){
        event.preventDefault()
    }
    
})

// Validating the login form

document.getElementById('loginForm').addEventListener('submit', function(event){
    let valid = true;

    //validating email
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = document.getElementById('email').value;

    if(!regex.test(email)){
        document.getElementById('loginEmailError').textContent = "Invalid email format"
        valid=false;
    }
    else{
        document.getElementById('loginEmailError').textContent = " "
    }

})




