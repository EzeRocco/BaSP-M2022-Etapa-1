window.onload = function() {
    var email = document.getElementById("email");
    var error_email = document.getElementById("error-email");
    var password = document.getElementById("password");
    var error_password = document.getElementById("error-password");
    var form = document.getElementById("login-form");
    var bottom = document.getElementById("bottom");
    var flag;
    var final_validation;
    var final_validation2;

    error_email.style.display = "none";
    error_password.style.display = "none";

    email.addEventListener('focus', function(){
        error_email.style.display = "none";
    })

    email.addEventListener('blur',function(){
        var validation = email.value.indexOf("@");
        var validation2 = email.value.indexOf(".com");  
        if (validation === -1 || validation2 === -1){
            error_email.style.display = "flex";
            error_email.style.color = "red";
            email.style.borderColor = "red";
        } else {
            error_email.style.display = "none";
            email.style.borderColor = "green";
            final_validation = 1;
        }
    })

    password.addEventListener('focus', function(){
        error_password.style.display = "none";
    })

    password.addEventListener('blur', function(){
        flag = 0;
        if (password.value.length < 7 || password.value.length === 0) {
            flag = -1;
        }
        if (flag===-1){
            error_password.style.display = "flex";
            error_password.style.color = "red";
            password.style.borderColor= "red";
        } else {
            error_password.style.display = "none";
            password.style.borderColor = "green";
            final_validation2 = 1;
        }
    })

    bottom.addEventListener('click', function(){
        if((final_validation === 1) && (final_validation2 === 1)){
            window.alert("You logged in successfully");
        } else {
            window.alert("Email or password was not correct");
        }
    })
}




