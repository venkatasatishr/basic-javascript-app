function validation(){
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    var dob = document.getElementById("date").value.toString();
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    var cnfPassword = document.getElementById("cnfpwd").value.toString();
    var fn,ln,db,em,pm;
    console.log("date: "+date.value);
    //1. for first Name
    if(!(fn =nameValidation(fName)))
        document.getElementById("fnMsg").innerText = "First name field should not be empty";
    else
        document.getElementById("fnMsg").innerText = "";
    //2.last name
    if(!(ln = nameValidation(lName)))
        document.getElementById("lnMsg").innerText = "Last name field should not be empty";
    else
        document.getElementById("lnMsg").innerText = "";
    //3. DOB
    if(!(db = dateOfBirth(dob)))
        document.getElementById("dateMsg").innerText = "DOB field should not be empty";
    else
        document.getElementById("dateMsg").innerText = "";
    //4.eMail
    if(!(em =emailCheck(email)))
        document.getElementById("emailMsg").innerText = "Enter a valid eMailId";
    else
        document.getElementById("emailMsg").innerText = "";
    //5. password
    var p,cp;
    if(!(pwdCheck(password)))
        document.getElementById("pwdMsg").innerText = "Enter Password";
    else
        document.getElementById("pwdMsg").innerText = "";

    //6.conform password
    if(!(pwdCheck(cnfPassword)))
        document.getElementById("cnfPwdMsg").innerText = "Enter confirm Password";
    else
    if(!(pm = pMatch(password,cnfPassword))) {

        document.getElementById("cnfPwdMsg").innerText = "Does not match";
    }
    else
        document.getElementById("cnfPwdMsg").innerText = "";
    console.log("---"+pm+"---");
    //fn,ln,db,em,pm
    if(((fn && ln) && (db && em)) && pm) {
       /* document.getElementsByClassName("fname").innerHTML = "<b>First Name:</b>" + "    " + fName;
        document.getElementsByClassName("lname").innerHTML = "<b>Last Name:</b>" + "     " + lName;
        document.getElementsByClassName("date").innerHTML = "<b>Date:</b>" + "           " + dob;
        document.getElementsByClassName("fname").innerHTML = "<b>E-Mail:</b>" + "        " + email;*/
        return true;
    }
    // window.location.href = "display.html"*/
    return false;
}

function nameValidation(name){
    //1. for first Name
    // var fName = document.getElementById("fname").value;
    if(name === "")
        return false;
    else
        return true;
}
function dateOfBirth(dob){
    if(dob === "")
        return false;
    else
        return true;
}
function emailCheck(email){
    var emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    var regex = RegExp(emailPattern);
    var res = regex.test(email);
    if(email === "" || res === false)
        return false;
    else
        return true;
}
function pwdCheck(pwd){
    if(pwd === "")
        return false;
    else
        return true
}
function pMatch(p,cp){
    console.log(p+"     "+cp);
    if(p === cp)
        return true;
    else
        return false;
}