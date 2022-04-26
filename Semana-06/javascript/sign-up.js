window.onload = function() {
    var name = document.getElementById("name");
    var error_name = document.getElementById("name-error");
    var last_name = document.getElementById("lname");
    var error_lastname = document.getElementById("lastname-error");
    var dni = document.getElementById("dni");
    var error_dni = document.getElementById("dni-error");
    var birth = document.getElementById("birth");
    var error_birth = document.getElementById("birth-error");
    var phone = document.getElementById("phone");
    var error_phone = document.getElementById("phone-error");
    var address = document.getElementById("address");
    var error_address = document.getElementById("address-error");
    var location = document.getElementById("location");
    var error_location = document.getElementById("location-error");
    var postal = document.getElementById("postal");
    var error_postal = document.getElementById("postal-error");
    var email = document.getElementById("email");
    var error_email = document.getElementById("email-error");
    var password = document.getElementById("password");
    var error_password = document.getElementById("password-error");
    var repeat_password = document.getElementById("rpassword");
    var error_password = document.getElementById("repeat-password-error");
    var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var validation_name;

    error_name.style.display = "none";

    name.addEventListener('focus', function(){
        error_name.style.display = "none";
    })

    name.addEventListener('blur',function(){
        var name_value = name.value;
        var letras = 0;
        for(var i = 0; i < name.value.length; i++) {
            if(abc.includes(name_value[i].toLocaleLowerCase())) {
                console.log(letras);
                letras++;
            }
        }
        if(name.value.length < 3) {
            error_name.style.display = "flex";
            error_name.style.color = "red";
            name.style.borderColor= "red";
        } else {
            error_name.style.display = "none";
            name.style.borderColor = "green";
        }
        if (letras <= 0 ){
            error_name.style.display = "flex";
            error_name.style.color = "red";
            name.style.borderColor= "red";
        } else {
            error_name.style.display = "none";
            name.style.borderColor = "green";
        }
    })

    error_lastname.style.display = "none";

    last_name.addEventListener('focus', function(){
        error_lastname.style.display = "none";
    })

    last_name.addEventListener('blur',function(){
        var last_name_value = last_name.value;
        var letras = 0;
        for(var a = 0; a < last_name.value.length; a++) {
            if(abc.includes(last_name_value[a].toLocaleLowerCase())) {
                letras++;
            }
        }
        console.log(letras);
        if(last_name.value.length  > 3) {
            error_lastname.style.display = "none";
            last_name.style.borderColor = "green";

        } else {
            error_lastname.style.display = "flex";
            error_lastname.style.color = "red";
            last_name.style.borderColor= "red";
        }
        if (letras <= 0 ){
            error_lastname.style.display = "flex";
            error_lastname.style.color = "red";
            last_name.style.borderColor= "red";
        } else {
            error_lastname.style.display = "none";
            last_name.style.borderColor = "green";
        }
    })

    error_dni.style.display = "none";

    dni.addEventListener('focus', function(){
        error_dni.style.display = "none";
    })

    dni.addEventListener('blur',function(){
        if((dni.value.length >= 7) && (isNaN(dni.value) == false)){
            error_dni.style.display = "none";
            dni.style.borderColor = "green";
        } else {
            error_dni.style.display = "flex";
            error_dni.style.color = "red";
            dni.style.borderColor= "red";
        }
    })

}