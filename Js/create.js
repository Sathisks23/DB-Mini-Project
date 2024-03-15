"use strict"

// ----------------------------------------------------------Select The Category--------------------------------------------------------------------------------

let category_name
let category_id

document.addEventListener("DOMContentLoaded", function() {
    let selectButton = document.querySelector('.select');
    let dropCategory = document.querySelector('.drop-category');
    let categoryItems = dropCategory.querySelectorAll('li');

    selectButton.addEventListener('click', function() {
        dropCategory.style.display = (dropCategory.style.display === 'block') ? 'none' : 'block';
    });

    categoryItems.forEach(function(item) {
        
        item.addEventListener('click', function() {
            selectButton.textContent = this.textContent;
            dropCategory.style.display = 'none';
            category_name= this.innerText
            category_id = this.id
            // console.log(category);
        });
    });
});

// ----------------------------------------------------------Style(Bold,Italic...)-------------------------------------------------------------------------------------

let area = document.getElementById('create');
area.addEventListener('click' ,function(){
    area.focus();
});

let bold = document.getElementById('bold');
let underline = document.getElementById('underline');
let italic = document.getElementById('italic');

bold.addEventListener('click', function() {
  document.execCommand('bold');
});

underline.addEventListener('click', function() {
  document.execCommand('underline');
});

italic.addEventListener('click', function() {
  document.execCommand('italic');
});

// --------------------------------------------------------------Cancel Button-----------------------------------------------------------------------------------

let cancelButton = document.querySelector('.can');
cancelButton.addEventListener('click', function()
 {
    window.location.href = "HomePage.html";
});

// --------------------------------------------------------------Adding Image---------------------------------------------------------------------

let div = document.querySelector(".create")
let imageUpload = document.getElementById("img") 

imageUpload.addEventListener('change', function() {
    let img = document.createElement("img")
    let input = this.files[0];
    let text;
    if (input) {
        text = URL.createObjectURL(input);
        // text  = img.src
        console.log(text);
        // console.log(text);
    }
    // img.accept =".jpg,.png,.jpeg,.webp"
    img.src = text; 
    // img.id = 'p_image'
    div.prepend(img)
    
});

//-------------------------------------------------------------------Adding data in firebase----------------------------------------------------------


let publish =document.getElementById('submit')
    publish.addEventListener('click',create_post)
let title = document.getElementById('lines')
let desc = document.getElementById('create')

//-----------------------------------------------------------------------------------------------------------------------------------------------





async function create_post(){
    

 



let usersData=JSON.parse(localStorage.getItem("usersData"))






}






 
