const button=document.querySelector('.tdysButton');
const mainPopup=document.querySelector('.main-popup');
const close=document.querySelector('.popup-close');



button.addEventListener('click',()=>{
    mainPopup.style.display='block';
})


close.addEventListener('click',()=>{
    mainPopup.style.display='none';
})