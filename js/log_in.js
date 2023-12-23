
const form=document.querySelector('.form');
const mailPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

form.addEventListener('submit' , e=>{
    e.preventDefault(); 

    const mail=form.email.value;
    const password=form.password.value;

    if(mailPattern.test(mail)){
        console.log(mail, password);
        console.log("Form sent."); 
    }else{
        alert("Error. Please check the information you entered.")
    }

})  
