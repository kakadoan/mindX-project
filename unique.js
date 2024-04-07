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
A=["bánh bèo","bánh hỏi","bánh ít ngọt","bánh ít","bãi tắm hoàng hậu"]
const search =document.getElementById("searchplace")
const btn =document.getElementById("searchbutton")
btn.addEventListener("click",find)
function find(){
if(search.value.trim()==A[0].trim()){
    window.location = "banhbeo.html"
    alert("Khám phá đặc sản của Bình Định?")
}
else if(search.value.trim()==A[1].trim()){
  window.location = "banhhoi.html"
  alert("Khám phá đặc sản của Bình Định?")
}
else if(search.value.trim()==A[3].trim() || search.value.trim()==A[2].trim() ){
  window.location = "banhitngot.html"
  alert("Khám phá đặc sản của Bình Định?")
}
else if(search.value.trim()==A[4].trim()){
    window.location = "baitamhoanghau.html"
    alert("Địa danh nổi tiếng của Bình Định")
}
}