window.onload = function() {
    var email = document.getElementById("email");
    var error_email = document.getElementById("error-email");
    var password = document.getElementById("password");
    var error_password = document.getElementById("error-password");
    var form = document.getElementById("login-form");
    var bottom = document.getElementById("bottom")

    error_email.style.display = "none";
    error_password.style.display = "none";

    email.addEventListener('focus', function(){
        error_email.style.display = "none";
    })

    email.addEventListener('blur',function(){
        var comprobation = email.value.indexOf("@");
        var comprobation2 = email.value.indexOf(".com");  
        if (comprobation=== -1 || comprobation2 === -1){
            error_email.style.display = "flex";
            error_email.style.color = "red";
            email.style.borderColor= "red";
        } else {
            error_email.style.display = "none";
            email.style.borderColor= "green";
            var final_comprobation=2;
        }
    })

}




