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
    var error_rpassword = document.getElementById("repeat-password-error");
    var bottom = document.getElementById("bottom");
    var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var validation_name;
    var validation_last_name;
    var validation_dni;
    var validation_birth;
    var validation_phone;
    var validation_address;
    var validation_location;
    var validation_postal;
    var validation_email;
    var validation_password;
    var validation_repeat_password;

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
        if(letras >= 3) {
            error_name.style.display = "none";
            name.style.borderColor = "green";
            validation_name = 1;
        } else {
            error_name.style.display = "flex";
            error_name.style.color = "red";
            name.style.borderColor= "red";
        }
        if (letras <= 0 ){
            error_name.style.display = "flex";
            error_name.style.color = "red";
            name.style.borderColor= "red";
        }
    })

    error_lastname.style.display = "none";

    last_name.addEventListener('focus', function(){
        error_lastname.style.display = "none";
    })

    last_name.addEventListener('blur',function(){
        var last_name_value = last_name.value;
        var letras2 = 0;
        for(var a = 0; a < last_name.value.length; a++) {
            if(abc.includes(last_name_value[a].toLocaleLowerCase())) {
                letras2++;
            }
        }
        console.log(letras2);
        if(letras2 >= 3) {
            error_lastname.style.display = "none";
            last_name.style.borderColor = "green";
            validation_last_name = 1;

        } else {
            error_lastname.style.display = "flex";
            error_lastname.style.color = "red";
            last_name.style.borderColor= "red";
        }
        if (letras2 <= 0 ){
            error_lastname.style.display = "flex";
            error_lastname.style.color = "red";
            last_name.style.borderColor= "red";
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
            validation_dni = 1;
        } else {
            error_dni.style.display = "flex";
            error_dni.style.color = "red";
            dni.style.borderColor= "red";
        }
    })

    error_birth.style.display = "none";

    birth.addEventListener('focus', function(){
        error_birth.style.display = "none";
    })

    birth.addEventListener('blur',function(){
        var actual_day = new Date();
        var input_day = new Date(birth.value);
        if (input_day > actual_day ) {
            error_birth.style.display = "flex";
            error_birth.style.color = "red";
            birth.style.borderColor= "red";
        } else {
            error_birth.style.display = "none";
            birth.style.borderColor = "green";
            validation_birth = 1;
        }
    })

    error_phone.style.display = "none";

    phone.addEventListener('focus', function(){
        error_phone.style.display = "none";
    })

    phone.addEventListener('blur',function(){
        if((phone.value.length >= 10) && (isNaN(phone.value) == false)){
            error_phone.style.display = "none";
            phone.style.borderColor = "green";
            validation_phone = 1;
        } else {
            error_phone.style.display = "flex";
            error_phone.style.color = "red";
            phone.style.borderColor= "red";
        }
    })
    error_address.style.display = "none";

    address.addEventListener('focus', function(){
        error_address.style.display = "none";
    })

    address.addEventListener('blur',function(){
        var space_address = address.value.replaceAll(' ', '');
        var flag_num = 0;
        var flag_let = 0;
        for(var d = 0; d < space_address.length; d++) {
            if(isNaN(space_address[d]) == false) {
                flag_num = 1;
            }
        }
        for(var e = 0; e < space_address.length; e++) {
            if(isNaN(space_address[d]) == true) {
                flag_let = 1;
            }
        }
        if(address.value.length > 5 && flag_num == 1 && flag_let == 1 && address.value.indexOf(' ') > 0 &&
        address.value.indexOf(' ') < address.value.length - 1 && address.value.length > address.value.lastIndexOf(' ')) {
            error_address.style.display = "none";
            address.style.borderColor = "green";
            validation_address = 1;
        } else {
            error_address.style.display = "flex";
            error_address.style.color = "red";
            address.style.borderColor= "red";
        }

    })

    error_location.style.display = "none";

    location.addEventListener('focus', function(){
        error_location.style.display = "none";
    })

    location.addEventListener('blur',function(){
        if(location.value.length >= 3) {
            error_location.style.display = "none";
            location.style.borderColor = "green";
            validation_location = 1;
        } else {
            error_location.style.display = "flex";
            error_location.style.color = "red";
            location.style.borderColor= "red";
        }
    })


    error_postal.style.display = "none";

    postal.addEventListener('focus', function(){
        error_postal.style.display = "none";
    })

    postal.addEventListener('blur',function(){
        if((postal.value.length >= 4) && (postal.value.length <= 5) && (isNaN(postal.value) == false)){
            error_postal.style.display = "none";
            postal.style.borderColor = "green";
            validation_postal = 1;
        } else {
            error_postal.style.display = "flex";
            error_postal.style.color = "red";
            postal.style.borderColor= "red";
        }
    })

    error_email.style.display = "none";

    email.addEventListener('focus', function(){
        error_email.style.display = "none";
    })

    email.addEventListener('blur',function(){
       if(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.value)){
        error_email.style.display = "none";
        email.style.borderColor = "green";
        validation_email = 1;
       } else {
        error_email.style.display = "flex";
        error_email.style.color = "red";
        email.style.borderColor = "red";
       }
    })

    error_password.style.display = "none";

    password.addEventListener('focus', function(){
        error_password.style.display = "none";
    })

    password.addEventListener('blur',function(){
        var pass_value = password.value;
        var letr = 0;
        var numr = 0;
        for(var c = 0; c < password.value.length; c++) {
            if(abc.includes(pass_value[c].toLocaleLowerCase())) {
                console.log(letr);
                letr++;
            } else {
                Number.isInteger(pass_value[c])
                numr++;
            }
        }
        if((letr + numr) >= 8) {
            error_password.style.display = "none";
            password.style.borderColor = "green";
            validation_password = 1;
        } else {
            error_password.style.display = "flex";
            error_password.style.color = "red";
            password.style.borderColor= "red";
        }
        if (letr <= 0  || numr <= 0 || password.value.indexOf(" ") > -1){
            error_password.style.display = "flex";
            error_password.style.color = "red";
            password.style.borderColor= "red";
        }
    })

    error_rpassword.style.display = "none";

    repeat_password.addEventListener('focus', function(){
        error_rpassword.style.display = "none";
    })

    repeat_password.addEventListener('blur',function(){
        if(password.value !== repeat_password.value || repeat_password.value.length === 0){
            error_rpassword.style.display = "flex";
            error_rpassword.style.color = "red";
            repeat_password.style.borderColor= "red";
        } else {
            error_rpassword.style.display = "none";
            repeat_password.style.borderColor = "green";
            validation_repeat_password = 1;
        }
    })

    bottom.addEventListener('click', function(){
        if((validation_name === 1) && (validation_last_name === 1) && (validation_dni === 1) && (validation_birth === 1)
        && (validation_phone === 1) && (validation_address === 1) && (validation_location === 1) && (validation_postal === 1)
        && (validation_email === 1) && (validation_password === 1) && (validation_repeat_password === 1)){
            alert("You sign up in successfully\n" +" Name: "+ name.value +"\n Last name: "+ last_name.value +"\n DNI: "+ dni.value
            +"\n Date of birth: "+ birth.value +"\n Phone: "+ phone.value +"\n Address "+ address.value +"\n Location: "+ location.value
            +"\n Postal code: " + postal.value +"\n Email: "+ email.value +"\n Password: "+ password.value);
        } else {
            alert("Email or password was not correct");
        }
    })

}