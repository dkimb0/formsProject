function validateEmail(){
    let email = document.getElementById('email');
    let emailError = document.getElementById('errorEmail');

    if(email.validity.typeMismatch){
        emailError.textContent = 'Enter valid email.';
        return false;
    }else if(email.value.length === 0){
        emailError.textContent = 'Email is required.'
        return false;
    }
    else{
        emailError.textContent = '';
        return true;
    }
    
}


function validateZip(){
    const constraints = {
        us: [
            /^\d{5}$/,
            "US ZIP is five digits."
        ],
        ch: [
            /^\d{4}$/,
            "Swiss ZIP is four digits"
        ]
    }

    let country = document.getElementById('country').value;
    let zipField = document.getElementById('zip');
    let zipError = document.getElementById('errorZip');

    let constraint = new RegExp(constraints[country][0], "")

    if(!constraint.test(zipField.value)){
        zipError.textContent = constraints[country][1];
        return false;
    }else{
        zipError.textContent = '';
        return true;
    } 
}

function validatePass(){
    let errorPassLC = document.getElementById('errorPassLC');
    let errorPassUC = document.getElementById('errorPassUC');
    let errorPassNum = document.getElementById('errorPassNum');
    let errorPassSpecial = document.getElementById('errorPassSpecial');
    let errorPassLength = document.getElementById('errorPassLength');

    const constraints = {
        lowerCase: /[a-z]/,
        upperCase: /[A-Z]/,
        number: /[0-9]/,
        special: /[$|@|#|!|$|%|\^|&|*|(|)]/,
    }

    let constraintLC = new RegExp(constraints.lowerCase);
    let constraintUC = new RegExp(constraints.upperCase);
    let constraintNum = new RegExp(constraints.number);
    let constraintSpecial = new RegExp(constraints.special);


    let password = document.getElementById('password');
    let failFlag = false;

    if(!constraintLC.test(password.value)){
        errorPassLC.className = 'error';
        failFlag = true;
    }else{
        errorPassLC.className = 'validPassword';
    }

    if(!constraintUC.test(password.value)){
        errorPassUC.className = 'error';
        failFlag = true;
    }else{
        errorPassUC.className = 'validPassword';
    }

    if(!constraintNum.test(password.value)){
        errorPassNum.className = 'error';
        failFlag = true;
    }else{
        errorPassNum.className = 'validPassword';
    }

    if(!constraintSpecial.test(password.value)){
        errorPassSpecial.className = 'error';
        failFlag = true;
    }else{
        errorPassSpecial.className = 'validPassword';
    }

    if(password.value.length < 8 | password.value.length > 32){
        errorPassLength.className = 'error';
        failFlag = true;
    }else{
        errorPassLength.className = 'validPassword';
    }

    return !failFlag

}

function validatePassConfirm(){
    let password = document.getElementById('password');
    let passwordConfirm = document.getElementById('passwordConfirm');
    let passwordConfirmError = document.getElementById('passwordConfirmError');
    
    if (password.value !== passwordConfirm.value){
        passwordConfirmError.textContent = 'Passwords do not match';
    }else{
        passwordConfirmError.textContent = '';
    }
    
}


function validateSubmit(){
    let submitError = document.getElementById('errorSubmit');

    validateEmail();
    validateZip();
    validatePass();
    validatePassConfirm();

    if (!validateEmail() || !validateZip() || !validatePass()
        ||!validatePassConfirm()){
        submitError.textContent = 'Please fix errors.';
        return false;
    }else{
        alert('high five');
    }
}