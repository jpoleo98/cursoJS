function main(){

    let navEmail = document.querySelector('.navbar-email');
    navEmail.addEventListener('click',toggleNavDesktop);

    let menuHamburguesa = document.querySelector('.menu');
    menuHamburguesa.addEventListener('click',toggleNavMobile)

    let carrito = document.querySelector('.navbar-shopping-cart');
    carrito.addEventListener('click',toggleCarritoCompras);

    let productList = [];

    productList.push({
        id:0,
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
    });

    productList.push({
        id:1,
        name: 'Bike',
        price: 150,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
    });

    productList.push({
        id:2,
        name: 'Bike',
        price: 200,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
    });

    productList.push({
        id:3,
        name: 'Bike',
        price: 500,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
    });

    productList.push({
        id:4,
        name: 'Bike',
        price: 700,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
    });

    renderProducts(productList);
}


function toggleNavDesktop(e) {
    
    let navDesktop = document.querySelector('.desktop-menu');
    navDesktop.classList.toggle('inactive');
    let shoppingCartContainer = document.querySelector('#shoppingCartContainer');
    let productDetail = document.querySelector('#product-detail');

    if(!shoppingCartContainer.classList.contains('inactive')){
        shoppingCartContainer.classList.add('inactive');
    }

    if(!productDetail.classList.contains('inactive')){
        productDetail.classList.add('inactive');
    }

}

function toggleNavMobile(e) {
    
    let navMobile = document.querySelector('.mobile-menu');
    navMobile.classList.toggle('inactive');
    let shoppingCartContainer = document.querySelector('#shoppingCartContainer');

    let productDetail = document.querySelector('#product-detail');

    let main = document.querySelector('.main-container');
    main.classList.toggle('inactive');

    if(!shoppingCartContainer.classList.contains('inactive')){
        shoppingCartContainer.classList.add('inactive');
    }

    if(!productDetail.classList.contains('inactive')){
        productDetail.classList.add('inactive');
    }

}

function toggleCarritoCompras(e){

    let shoppingCartContainer = document.querySelector('#shoppingCartContainer');
    shoppingCartContainer.classList.toggle('inactive');
    let navMobile = document.querySelector('.mobile-menu');
    let navDesktop = document.querySelector('.desktop-menu');
    let productDetail = document.querySelector('#product-detail');
    let closeCard = document.querySelector('#arrow');


    if(!navMobile.classList.contains('inactive')){
        navMobile.classList.add('inactive');
    }

    if(!navDesktop.classList.contains('inactive')){
        navDesktop.classList.add('inactive');
    }

    if(!productDetail.classList.contains('inactive')){
        productDetail.classList.add('inactive');
    }

    closeCard.addEventListener('click',()=>{
        shoppingCartContainer.classList.add('inactive');
    })

}

function renderProducts(productList){
    for(product of productList){

        let productCard = document.createElement('div');
        productCard.classList.add('product-card');

        let img = document.createElement('img');
        img.setAttribute('src', product.image)
        img.addEventListener('click',openDetail);

        let productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        let productInfoDiv = document.createElement('div');

        let productPrice = document.createElement('p');
        productPrice.innerText = `${product.price},00`;

        let productName = document.createElement('p');
        productName.innerText = `${product.name}`;

        productInfoDiv.append(productPrice, productName);

        let productFigure = document.createElement('figure');
        let productImgCard = document.createElement('img');
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg')
        
        productFigure.appendChild(productImgCard);
        productInfo.append(productInfoDiv, productFigure);
        productCard.append(img, productInfo);

        let productContainer = document.querySelector('.cards-container');
        productContainer.appendChild(productCard);

    }
}

function openDetail(e){
    let productDetail = document.querySelector('#product-detail');
    productDetail.classList.remove('inactive');
    let shoppingCartContainer = document.querySelector('#shoppingCartContainer');

    let navDesktop = document.querySelector('.desktop-menu');

    if(!navDesktop.classList.contains('inactive')){
        navDesktop.classList.add('inactive');
    }

    if(!shoppingCartContainer.classList.contains('inactive')){
        shoppingCartContainer.classList.add('inactive');
    }

    let close = document.querySelector('.product-detail-close')
    close.addEventListener('click',() =>{
        productDetail.classList.add('inactive');
    })
}


/* <aside id="product-detail" class="inactive">
<div class="product-detail-close">
  <img src="./icons/icon_close.png" alt="close">
</div>
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
<div class="product-info">
  <p>$35,00</p>
  <p>Bike</p>
  <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
  <button class="primary-button add-to-cart-button">
    <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
    Add to cart
  </button>
</div>
</aside> */

function renderDetail(producto){

}



main();