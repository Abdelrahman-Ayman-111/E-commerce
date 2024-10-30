// open & close cart

window.onload = function() {
    cart.classList.remove("active");
};


var cart = document.querySelector(".cart")

function open_cart(){
    cart.classList.add("active")
}
function close_cart(){
    cart.classList.remove("active")
}


// open & close menu


var menu = document.querySelector("#menu")

function open_menu(){
    menu.classList.add("active")
}
function close_menu(){
    menu.classList.remove("active")
}




// add item in cart

var all_product_json;

var item_in_cart = document.querySelector(".items-in-cart")
let product_cart = []

function addToCart(id , btn){
    product_cart.push(all_product_json[id])
    btn.classList.add("active")

    getCartItem()
}


let count_item = document.querySelector(".count-item")
let count_item_cart = document.querySelector(".count_item_cart")
let price_cart_total = document.querySelector(".price-cart-total")
let price_cart_head = document.querySelector(".price-cart-head")


function getCartItem(){
    let total_price = 0
    let item_c = "";
    for(let i = 0; i < product_cart.length; i++){
        item_c += `
        
            <div id="ic" class="item-cart">

                <img src="${product_cart[i].img}">
                <div class="content">
                    <h4>${product_cart[i].name}</h4>
                    <p class="price-cart">$${product_cart[i].price}</p>
                </div>
                <button onclick="removeFromCart(${i})" class="delete-item">
                    <i class="fa-solid fa-trash-can"></i>
                </button>

            </div>

        `

        total_price += product_cart[i].price

    }
    item_in_cart.innerHTML = item_c

    price_cart_head.innerHTML = '$' + total_price
    price_cart_total.innerHTML = '$' + total_price

    count_item.innerHTML = product_cart.length
    count_item_cart.innerHTML = `(${product_cart.length} item in cart)`
}

function removeFromCart(index){
    product_cart.splice(index, 1)
    getCartItem()

    let addToCartButtons = document.querySelectorAll(".fa-cart-plus")
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].classList.remove("active")

        product_cart.forEach(product =>{
            if(product.id == i){
                addToCartButtons[i].classList.add("active")
            }
        })
    }
}




// back to top

let back_to_top = document.querySelector(".back_to_top")

back_to_top.onclick = function(){
    window.scroll({
        top: 0,
        left:0,
        behavior:"smooth"
    })
}



// item page

let main_img = document.getElementById("main_img")

let img1 = document.getElementById("img1")
let img2= document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")


img1.onclick = function(){
    main_img.src = this.src
}
img2.onclick = function(){
    main_img.src = this.src
}
img3.onclick = function(){
    main_img.src = this.src
}
img4.onclick = function(){
    main_img.src = this.src
}