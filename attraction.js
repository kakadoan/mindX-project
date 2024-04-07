A=["bánh bèo","bánh hỏi","bánh ít ngọt","bánh ít","nem","nem chợ huyện"]
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
else if(search.value.trim()==A[4].trim() || search.value.trim()==A[5].trim() ){
  window.location = "nem.html"
  alert("khám phá đặc sản của Bình Định?")
}
else{
  alert("Hiện tại chúng tôi chưa có món/khu du lịch này, vui lòng chọn theo gợi ý")
}
}
const ss1 = document.getElementById("ss1")
const ss2 = document.getElementById("ss2")
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
const wrong = document.getElementById("wrong")
const ef = document.getElementById("efeedback")
const f = document.getElementById("feedback")
const sm = document.getElementById("submit")
sm.addEventListener("click",submit)
function submit(){
  if(ef.value == "" || ef.value ==""){
    wrong.style.display = "block"
    wrong.innerHTML = "Vui lòng điền facebook và đánh giá của bạn"
  }
  else if(ef.value ==""){
    wrong.style.display = "block"
    wrong.innerHTML = "Vui lòng ghi đánh giá của bạn"
  }
  else if(ef.value == ""){
    wrong.style.display = "block"
    wrong.innerHTML = "Vui lòng điền facebook"
  }
  else{
    wrong.style.display = "none"
    alert("đã nhận thông tin:")
    alert("facebook "+ef.value) 
    alert("Cảm ơn bạn đã gửi "+f.value+" đến Blook")
}
}