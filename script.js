document.querySelector('button').addEventListener('click', validateForm())




function validateEmail(email){

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return regex.test(email);  //determines if the email matches the regex
}

function validateForm(){
    //Ensuring passwords match
    const x = document.getElementById('password');
    const y = document.getElementById('confirmPassword');

    if (x !== y){
        alert("Passwords do not match")
    }
}