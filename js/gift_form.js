const form=document.querySelector('.form');

const usernamePattern =/{1,200}/
const agePattern=/{2}/;

// form.addEventListener('submit', e=>{
//     e.preventDefault();
    
//     const age = fonm.age.value;

//     if()
// })

form.addEventListener('submit', e =>{
    e.preventDefault();

});

form.username.addEventListener('keyup', e =>{
    if(usernamePattern.test(e.target.value))
    {
        form.username.setAttribute('class','success');
    }
    else
    {
        form.username.setAttribute('class','error');
    }
}); 