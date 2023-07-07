let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let popup = document.getElementById("popup");



openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'SHAHI PANNER',
        image: 'shahipanneer.jpeg',
        price: 350
    },
    {
        id: 7,
        name: 'BHURJI',
        image: 'bhurji.jpeg',
        price: 90
    },
    {
        id: 8,
        name: 'CHOLE BHATURE',
        image: 'chole.jpeg',
        price: 120
    },
    {
        id: 9,
        name: 'CHICKEN LOLLIPOP',
        image: 'lolipop.jpeg',
        price: 130
    },
    {
        id: 9,
        name: 'FISH',
        image: 'fish.jpeg',
        price: 200
    },
    {
        id: 10,
        name: 'DAL FRY',
        image: 'dal.jpeg',
        price: 130
    },
    {
        id: 11,
        name: 'COLD COFFEE',
        image: 'cc.jpg',
        price: 70
    },
    {
        id: 12,
        name: ' BUTTER CHICKEN  ',
        image: 'curry.jpeg',
        price: 240
    },
    {
        id: 2,
        name: 'BIRYANI',
        image: 'biryani.jpeg',
        price: 200
    },
    {
        id: 3,
        name: 'NOODLES',
        image: 'nd.jpeg',
        price: 140
    },
    {
        id: 3,
        name: 'NOODLES',
        image: 'nd.jpeg',
        price: 140
    },
    {
        id: 13,
        name: 'IDLI',
        image: 'Vegetable-Sambar-Instant-Pot-Piping-Pot-Curry.webp',
        price: 80
    },
    {
        id: 5,
        name: 'PULAV',
        image: 'pulaw.jpeg',
        price: 80
    },
    {
        id: 14,
        name: 'DOSA',
        image: 'Dosa-recipe-plain-sada-dosa-Piping-Pot-Curry.jpg',
        price: 70
    },
    {
        id: 6,
        name: 'PAV-BHAJI',
        image: 'pavbhaji.jpeg',
        price: 120
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
function openPopup(){
    popup.classList.add("open-popup");
  }
   
  function closePopup(){
    popup.classList.remove("open-popup");
  }
