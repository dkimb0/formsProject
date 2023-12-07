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
        zipField.setCustomValidity("Invalid field.")
        return false;
    }else{
        zipError.textContent = '';
        zipField.setCustomValidity("");
        return true;
    } 
}

function togglePasswordValidity(errorName, validityState){
    if (!validityState){
        password.setCustomValidity('Invalid field.');
        errorName.className = 'error';    
    }else{
        password.setCustomValidity('');
        errorName.className = 'validPassword'
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
        togglePasswordValidity(errorPassLC, false);
        failFlag = true;
    }else{
        togglePasswordValidity(errorPassLC, true);
    }

    if(!constraintUC.test(password.value)){
        togglePasswordValidity(errorPassUC, false);
        failFlag = true;
    }else{
        togglePasswordValidity(errorPassUC, true);
    }

    if(!constraintNum.test(password.value)){
        togglePasswordValidity(errorPassNum, false);
        failFlag = true;
    }else{
        togglePasswordValidity(errorPassNum, true);
    }

    if(!constraintSpecial.test(password.value)){
        togglePasswordValidity(errorPassSpecial, false);
        failFlag = true;
    }else{
        togglePasswordValidity(errorPassSpecial, true);
    }

    if(password.value.length < 8 | password.value.length > 32){
        togglePasswordValidity(errorPassLength, false);
        failFlag = true;
    }else{
        togglePasswordValidity(errorPassLength, true);
    }


    return !failFlag

}

function validatePassConfirm(){
    let password = document.getElementById('password');
    let passwordConfirm = document.getElementById('passwordConfirm');
    let passwordConfirmError = document.getElementById('passwordConfirmError');
    
    if (password.value !== passwordConfirm.value){
        passwordConfirmError.textContent = 'Passwords do not match';
        passwordConfirm.setCustomValidity('Invalid field.');
    }else{
        passwordConfirmError.textContent = '';
        passwordConfirm.setCustomValidity('');
    }
    
}


function validateSubmit(){
    let submitError = document.getElementById('errorSubmit');

    validateEmail();
    validateZip();
    validatePass();
    validatePassConfirm();

    if (!validateEmail() ||
        !validateZip() ||
        !validatePass()||
        !validatePassConfirm()){
        submitError.textContent = 'Please fix errors.';
        return false;
    }else{
        alert('high five');
    }
}