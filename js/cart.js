const form=document.querySelector('.form');
const pInfo=document.querySelector('.submit-form')
const username=document.getElementById('#name')
const usernamePattern=/[a-z]{3,100}/;
const telPattern=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

form.addEventListener('submit', e=>{
    e.preventDefault();
    const name=pInfo.username.value;
    const tel=pInfo.phone.value;
    const payment=pInfo.payment.value;
    const adress=pInfo.adress.value;
  
    if(usernamePattern.test(name) && telPattern.test(tel) && adress != "")
    {
        console.log(name, tel, payment, adress);
        console.log("Success.");
        alert("Here's a message! \n Shipment will be provided to your address.");
    }else{
        alert("Error. Please check the information you entered.");
    }    
})