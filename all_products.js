// open and close filter in all_products page

var filter = document.querySelector(".filter")

function open_close_filter(){
    filter.classList.toggle("active")
}





fetch('items.json')
        .then(response => response.json())
        .then(data =>{
            const products_dev = document.getElementById("products_dev")

            all_product_json = data

            data.forEach(product => {

                    const old_price_paragraph = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : "";
                    // Math.floor((product.old_price - product.price) / product.old_price * 100)
                    const percent_discount_div = product.old_price ? `<span class="sale-persent">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";
                    
                    products_dev.innerHTML += `
                    <div class="product swiper-slide">


                        <div class="icons">
                            <span><i  onclick="addToCart(${product.id} , this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>

                        ${percent_discount_div}

                        <div class="img-product">
                            <img src="${product.img}" alt="">
                            <img class="img-hover" src="${product.img_hover}" alt="">
                        </div>

                        <h3 class="name-product">
                            <a href="#">
                            ${product.name}
                            </a>
                        </h3>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_paragraph}
                        </div>

                    </div> 
                    `
            })

        })