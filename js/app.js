function main(){

    let navEmail = document.querySelector('.navbar-email');
    navEmail.addEventListener('click',toggleNavDesktop);

    let menuHamburguesa = document.querySelector('.menu');
    menuHamburguesa.addEventListener('click',toggleNavMobile)

    let carrito = document.querySelector('.navbar-shopping-cart');
    carrito.addEventListener('click',toggleCarritoCompras);

    let productList = [];

    productList.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
    });

    productList.push({
        name: 'Bike',
        price: 150,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
    });

    productList.push({
        name: 'Bike',
        price: 200,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
    });

    productList.push({
        name: 'Bike',
        price: 500,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
    });

    productList.push({
        name: 'Bike',
        price: 700,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
    });

    renderProducts(productList);

    let productCard = document.querySelector('.product-card')
    productCard.addEventListener('click',toggleDetail);

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

    if(!navMobile.classList.contains('inactive')){
        navMobile.classList.add('inactive');
    }

    if(!navDesktop.classList.contains('inactive')){
        navDesktop.classList.add('inactive');
    }

    if(!productDetail.classList.contains('inactive')){
        productDetail.classList.add('inactive');
    }

}

function renderProducts(productList){
    for(product of productList){

        let productCard = document.createElement('div');
        productCard.classList.add('product-card');

        let img = document.createElement('img');
        img.setAttribute('src', product.image)

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

function toggleDetail(e){
    let productDetail = document.querySelector('#product-detail');
    productDetail.classList.toggle('inactive');
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


main();