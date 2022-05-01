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
    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';


    error_email.style.display = "none";
    error_password.style.display = "none";

    email.addEventListener('focus', function(){
        error_email.style.display = "none";
    })

    email.addEventListener('blur',function(){
        if(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.value)){
         error_email.style.display = "none";
         email.style.borderColor = "green";
         final_validation = 1;
        } else {
         error_email.style.display = "flex";
         error_email.style.color = "red";
         email.style.borderColor = "red";
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

    bottom.addEventListener('click', function(e){
        e.preventDefault();
        if((final_validation === 1) && (final_validation2 === 1)){
            fetch(url + '?email=' + email.value + '&password=' + password.value)
            .then(function(response){
                return response.json();
            })
            .then(function(res){
                if(res.success){
                    window.alert(` ${res.msg}
                    ---information---
                    Email: ${email.value}
                    Password: ${password.value}`);
                } else {
                    window.alert(res.msg)
                }
            })             
            .catch(function(err){
                window.alert(err.errors[0].msg);
            });
        } else {
            window.alert("error");
        }
    })


    

}




