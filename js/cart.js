const form=document.querySelector('.form');
const usernamePattern=/[a-z]{3,100}/;

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