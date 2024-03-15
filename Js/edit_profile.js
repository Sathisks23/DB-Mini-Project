

let usersData=JSON.parse(localStorage.getItem("usersData"))
console.log(usersData);




var inputname=document.getElementById("text2")
var button=document.getElementById("btn")
var button2=document.getElementById("btn2")
var bio1=document.getElementById("bio")
var trash=document.querySelector("#icon")


//profile dp change

let ProfileImg = document.querySelector("#change");
    let inputfile= document.querySelector("#drop_zone");

inputfile.onchange = function(){
    ProfileImg.src = URL.createObjectURL(inputfile.files[0]) 
}

//profile dp remove

trash.addEventListener("click",()=>{
  if (confirm("Are you sure want to delete the image") && !(ProfileImg.src="https://firebasestorage.googleapis.com/v0/b/dckap-news-904dc.appspot.com/o/dp.png?alt=media&token=c62830cb-cb05-429e-8390-8485c2dac6c4") ) {
    ProfileImg.src="https://firebasestorage.googleapis.com/v0/b/dckap-news-904dc.appspot.com/o/dp.png?alt=media&token=c62830cb-cb05-429e-8390-8485c2dac6c4" 
  }
 
})



let bio 
let dp
let email
let faver
let pass



button.addEventListener("click",(event)=>{


event.preventDefault()
    if (inputname.value.trim()=="") {
      inputname.value="User"
    
    }
 if (inputfile.value==false) {

   
 }else{
  




 }



})
button2.addEventListener("click",(event)=>{
  event.preventDefault()
  location.replace("spr.html")
})
