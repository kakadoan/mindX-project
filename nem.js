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