function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validate_form(){
    var surName = document.cohot5.surname.value;
    var givenName = document.cohot5.givenName.value;
    var bd = document.cohot5.bd.value;
    var place = document.cohot5.place.value;
    var occupation = document.cohot5.occupation.value;
    var nationality = document.cohot5.nationality.value;
    var gender = document.cohot5.gender.value;
    var category = document.cohot5.category.value;

    // ___ Defining error varriables with defaul value
    var surname_err = givenname_err  = bd_err = place_err = occupation_err = nationality_err = gender_err = category_err = true;

    // _______ validating first name
    if(surName === ""){
        printError("surname_err", "please enter your Surname");
        const errId = document.getElementById('surname');
        errId.style.border = '1px solid red';
    }
    else  if(surName.length > 16){
        printError("surname_err", "Your name is too long");
        const errId = document.getElementById('surname');
        errId.style.border = '1px solid red';
    }
    else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(surName) === false){
            printError("surname_err", "please enter a valid name");
            const errId = document.getElementById('surname');
            errId.style.border = '1px solid red';
        }else{
            printError("surname_err", "");
            surname_err = false;
        }
    }
   
    // __________ Validating last name
    if(givenName === ""){
        printError("givenname_err", "name should have atleast 1 character");
        const errId = document.getElementById('givenName');
        errId.style.border = '1px solid red';
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(givenName) === false){
            printError("givenname_err", "please enter a valid name")
            const errId = document.getElementById('givenName');
            errId.style.border = '1px solid red';
        }else{
            printError("givenname_err", "");
            givenname_err = false;
        }
    }

     // _______ validating bd
     if(bd === ""){
        printError("bd_err", "please enter date of birth");
        const errId = document.getElementById('bd');
        errId.style.border = '1px solid red';
    }else{
        printError("bd_err", "");
        bd_err = false;
    }

     // _______ validating place
     if(place === ""){
        printError("place_err", "please enter place of residance");
        const errId = document.getElementById('place');
        errId.style.border = '1px solid red';
    }
    else  if(place.length > 20){
        printError("place_err", "too long");
        // const errId = document.getElementById('place');
        // errId.style.border = '1px solid red';
    }
    else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(place) === false){
            printError("place_err", "please enter a valid location")
            const errId = document.getElementById('place');
            errId.style.border = '1px solid red';
        }else{
            printError("place_err", "");
            place_err = false;
        }
    }

    // _______ validating occupation
    if(occupation === ""){
        printError("occupation_err", "please enter ocupation");
        const errId = document.getElementById('occupation');
        errId.style.border = '1px solid red';
    }
    else  if(occupation.length < 5 || occupation.length > 50){
        printError("occupation_err", "check lenth");
        // const errId = document.getElementById('occupation');
        // errId.style.border = '1px solid red';
    }
    else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(occupation) === false){
            printError("occupation_err", "please enter a valid occupation")
            const errId = document.getElementById('occupation');
            errId.style.border = '1px solid red';
        }else{
            printError("occupation_err", "");
            occupation_err = false;
        }
    }
     // _______ validating nationality
     if(nationality === ""){
        printError("nationality_err", "please enter nationality");
        const errId = document.getElementById('nationality');
        errId.style.border = '1px solid red';
    }
    else  if(nationality.length < 5 || nationality.length > 20){
        printError("nationality_err", "invalid lenght");
        // const errId = document.getElementById('nationality');
        // errId.style.border = '1px solid red';
    }
    else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(nationality) === false){
            printError("nationality_err", "please enter a valid name")
            const errId = document.getElementById('nationality');
        errId.style.border = '1px solid red';
        }else{
            printError("nationality_err", "");
            nationality_err = false;
        }
    }

    // _____ Validating gender
    if(gender === ""){
        printError("gender_err", "please select your gender");
    }else{
        printError("gender_err", "");
        gender_err = false;
    }
       
     // _______ validating first name
     if(category === "-- Select Category --"){
        printError("category_err", "please select category");
        const errId = document.getElementById('category');
        errId.style.border = '1px solid red';
    }else{
        printError("category_err", "");
        category_err = false;
    }
    
    // _______ Preventing the form from being submited if their are any errors
    if((surname_err || givenname_err  || bd_err || place_err || occupation_err || nationality_err || gender_err || category_err) === true){
        event.preventDefault()
    }else{
        event.currentTarget.submit()
    }
     
}