
const Sform=document.querySelector('.Sform');
const mailPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

Sform.addEventListener('submit' , e=>{
    e.preventDefault(); 
    const name=Sform.name.value;
    const age=Sform.age.value;
    const Smail=Sform.Semail.value;
    const Spassword=Sform.Spassword.value;


    if(mailPattern.test(Smail)){
        console.log(name, age, Smail, Spassword);
        console.log("User registered."); 
    }else{
        alert("Error. Please check the information you entered.")
    }

})  