const button = document.querySelector(".add");

let itemList = [];

const getProducts = () => {
    fetch("./js/products.json")
    .then((res)=>res.json())
    .then((items)=> (itemList=items));
};

getProducts();

button.addEventListener('click', () =>{
    let div = document.querySelector(".product");
    let itemListHtml = "";
    itemList.forEach((items) => {
        itemListHtml += `<div class="product">
        <a href="#""><img src="${items.imgSource}" alt="${items.info}"></a>
        <p>${items.name}</p>
        <p class="price">${items.price}</p>
        <div>
            <button class="add" >Add to Your Shopping Bag:</button>
        </div>
    </div>`;
    })
    div = itemListHtml;

    console.log(div);
}); 


// const jsonData = div;

// var newJson = JSON.stringify(obj.push(jsonData));

// fs.writeFileSync('./js/data.json', JSON.stringify(jsonData));