let productList = [];
let basketList = [];

import fs from 'fs'

const getProducts = () => {
    fetch("./js/products.json")
    .then((res)=>res.json())
    .then((products)=> (productList=products));
};

getProducts();

const createProductsListHtml = () =>{
    const productsListEl =  document.querySelector(".gallery");
    let  productsListHtml = "";
    productList.forEach((products) => {
        
        productsListHtml += `<div class="product">
        <a href="#" onclick="addToBasket(${products.id})"><img src="${products.imgSource}" alt="${products.info}"></a>
        <p>${products.name}</p>
        <p class="price">${products.price}</p>
        <div class="add">
            <a href="#" onclick="addToBasket(${products.id})">Add to Your Shopping Bag:</a>
            <button>+</button>
            <button>-</button>
        </div>
    </div>`;
    });
    if(productsListEl) {
    productsListEl.innerHTML = productsListHtml;}
};

setTimeout(()=>{
    createProductsListHtml();
}, 100);


const data = fs.readFileSync('data.json');
const jsonData = JSON.parse(data);

const listBasketItems = (()=>{
    const basketListEl = document.querySelector(".items-list"); 
    let basketListHtml = "";
    basketList.forEach(material => {
        basketListHtml+= `<li>
        <img src="${material.item.imgSource}">
        <div class="item-info">
            <h3>${material.item.name}</h3>
            <span>${material.item.price}$</span><br>
            <span class="remove">remove</span>
        </div>
        <div>
            <span class="decrease">-</span>
            <span style="font-size: 20px;">${material.quantity}</span>
            <span class="increase">+</span>
        </div>
    </li>`;
    })
    if(basketDataHtml) {
        jsonData.users.push((basketDataHtml));
        fs.writeFileSync('./js/data.json', JSON.stringify(jsonData));
    }
});

const addToBasket = ((productsId) =>{
    let findedItem = productList.find(products => products.id == productsId)
    if(findedItem) {
        const basketAlreadyIndex = basketList.findIndex(
            (basket) => basket.item.id == productsId
        );
    if (basketAlreadyIndex == -1){
        let addedItem = { quantity: 1, item: findedItem };
        basketList.push(addedItem);
    } else{
        basketList[basketAlreadyIndex].quantity += 1;
    }
    listBasketItems();
    console.log(basketList);
    }
});






