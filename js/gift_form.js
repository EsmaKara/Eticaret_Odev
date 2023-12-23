const form=document.querySelector('.form');
const usernamePattern=/[a-z]{3,100}/;
const mailPattern=/^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/


form.username.addEventListener('keyup', e =>{
    if(usernamePattern.test(e.target.value))
    {
        form.username.setAttribute('class','success');
    }
    else
    {
        form.username.setAttribute('class','error');
    }
})

form.mail.addEventListener('keyup', e =>{
    if(mailPattern.test(e.target.value))
    {
        form.mail.setAttribute('class','success');
    }
    else
    {
        form.mail.setAttribute('class','error');
    }
})

form.age.addEventListener('keyup', e =>{
    if(e.target.value < 120 && e.target.value >= 18)
    {
        form.age.setAttribute('class','success');
    }
    else if(e.target.value > 120 && e.target.value < 18)
    {
        form.age.setAttribute('class','error');
    }
})

// function saydir(){
//     const checkBox = document.getElementsByClassName(".lovedOnes");
//     const sayac = 0;
//     for(var i=0; checkBox.length; i++){
//         if (checkBox[i].checked == true){
//             sayac = sayac + 1;
//         }
//     }
//     return sayac;
// }



/* AFTER SUBMİT */
form.addEventListener('submit', e=>{
    e.preventDefault();
    const username=form.username.value;
    const mail=form.mail.value;
    const age=form.age.value;
    console.log(username, mail, age);

    const answer = form.enjoyment.value;
    if(answer === "Yes")
    {
        //if(saydir() >= 3)
        console.log("Success.");
        alert("Here's a message! \n Congratulations. You won our gift.");
    }else{
        console.log("Fail.");
        alert("Try again.");
    }
})