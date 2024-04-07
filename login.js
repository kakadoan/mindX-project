const uname = document.getElementById("username")
const upw = document.getElementById("userpw")
const login = document.getElementById("btn2")
const mainpage = document.getElementById("mainpage")
const note = document.getElementById("alert")
    const users = JSON.parse(localStorage.users)
login.addEventListener("click",loginacc)
function loginacc(){
    if(users){
        for(i=0;i<=users.length;i++){
            if(uname.value == users[i].username.trim() && upw.value == users[i].pw.trim()){
                window.location.href = "index.html"
            }
            else if(uname.value != users[i].username.trim() && upw.value != users[i].pw.trim()){
                note.style.display = "block" 
                note.innerHTML = "wrong password or username"
            }
    }
    }
}
