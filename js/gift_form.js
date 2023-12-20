const form = document.getElementById('gift-form');
const agePattern=/{2}/;

// form.addEventListener('submit', e=>{
//     e.preventDefault();
    
//     const age = fonm.age.value;

//     if()
// })

form.name.addEventListener('keyup', e =>{

    if(form.name != 0)
    {
        form.name.setAttribute('class','success');
    }
})
