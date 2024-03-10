const registerinp = document.getElementById("name")
const fname = document.getElementById("familyname")
const accname = document.getElementById("accname")
const pw = document.getElementById("pw")
const acc = document.querySelector("#btn2")
const wrong = document.getElementById("wrong")
acc.addEventListener("click",myfunction) 
function myfunction(){
    if(registerinp.value.length==0 && fname.value.length==0 && accname.value.length==0 && pw.value.length==0){
        wrong.style.display= "block"
        wrong.innerHTML="please enter all"
    }
    else if(registerinp.value.length==0){
        wrong.style.display= "block"
        wrong.innerHTML="please enter your name"
    }
    else if(fname.value.length==0){
        wrong.style.display= "block"
        wrong.innerHTML="please enter your last name"
    }
    else if( accname.value.length==0){
        wrong.style.display= "block"
        wrong.innerHTML="your user name doesn't suitable"
    }
    else if(pw.value.length==0){
        wrong.style.display= "block"
        wrong.innerHTML="your password doesn't suitable"
    }
    else if(localStorage.users){
        let users = JSON.parse(localStorage.users)
        users.push({
            username: accname.value.trim(),
            pw: pw.value.trim()
        })
        localStorage.setItem("users", JSON.stringify(users))
        wrong.style.display= "block"
        wrong.innerHTML="You have an account now go to sign in to continue"
    }   
    else {
        localStorage.setItem("users",
        JSON.stringify(
        [
            {
              username: accname.value.trim(),
              pw: pw.value.trim()
            }
        ]));
        wrong.style.display= "block"
        wrong.innerHTML="You have an account now, go to sign in to continue"
    }
}

