
/* for log in page */
const form=document.querySelector('.items');

form.addEventListener('submit' , buttonClicked=>{
    e.preventDefault(); 
    console.log("form gönderildi"); 

})  

function buttonClicked(){
    var mail=document.querySelector('#email');
    var password=document.querySelector('#password');
    console.log(form.mail.value, form.password.value);
}