slideshow = 0
slide()
function slide() {
  var i;
  var x = document.getElementsByClassName("img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideshow++;
  if (slideshow > x.length) {slideshow = 1} 
  x[slideshow-1].style.display = "block"; 
  setTimeout(slide, 2000); 
}
const before = document.getElementsByClassName("beforelogin")
before.addEventListener("click",alert("you need to login to your account first"))
A=["bánh bèo","bánh hỏi","bánh ít ngọt","bánh ít"]
const search =document.getElementById("searchplace")
const btn =document.getElementById("searchbutton")
btn.addEventListener("click",find)
function find(){
if(search.value.trim()==A[0].trim()){
    window.location = "banhbeo.html"
    alert("khám phá đặc sản của Bình Định?")
}
else if(search.value.trim()==A[1].trim()){
  window.location = "banhhoi.html"
  alert("khám phá đặc sản của Bình Định?")
}
else if(search.value.trim()==A[3].trim() || search.value.trim()==A[2].trim() ){
  window.location = "banhitngot.html"
  alert("khám phá đặc sản của Bình Định?")
}
}