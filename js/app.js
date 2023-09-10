let cheaking = [];
let productList = [];
let Order = [];

function main() {

    let navEmail = document.querySelector('.navbar-email');
    navEmail.addEventListener('click', toggleNavDesktop);

    let menuHamburguesa = document.querySelector('.menu');
    menuHamburguesa.addEventListener('click', toggleNavMobile)

    let carrito = document.querySelector('.navbar-shopping-cart');
    carrito.addEventListener('click', toggleCarritoCompras);


    productList.push({
        id: 0,
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
    });

    productList.push({
        id: 1,
        name: 'Bike',
        price: 150,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
    });

    productList.push({
        id: 2,
        name: 'Bike',
        price: 200,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
    });

    productList.push({
        id: 3,
        name: 'Bike',
        price: 500,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
    });

    productList.push({
        id: 4,
        name: 'Bike',
        price: 700,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
    });

    renderProducts(productList, cheaking);
}


function toggleNavDesktop(e) {

    let navDesktop = document.querySelector('.desktop-menu');
    navDesktop.classList.toggle('inactive');
    let shoppingCartContainer = document.querySelector('#shoppingCartContainer');
    let productDetail = document.querySelector('#product-detail');

    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }

    if (!productDetail.classList.contains('inactive')) {
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

    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }

    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive');
    }

}

function toggleCarritoCompras(e) {

    let shoppingCartContainer = document.querySelector('#shoppingCartContainer');
    shoppingCartContainer.classList.toggle('inactive');
    let navMobile = document.querySelector('.mobile-menu');
    let navDesktop = document.querySelector('.desktop-menu');
    let productDetail = document.querySelector('#product-detail');
    let closeCard = document.querySelector('#arrow');


    if (!navMobile.classList.contains('inactive')) {
        navMobile.classList.add('inactive');
    }

    if (!navDesktop.classList.contains('inactive')) {
        navDesktop.classList.add('inactive');
    }

    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive');
    }

    closeCard.addEventListener('click', () => {
        shoppingCartContainer.classList.add('inactive');
    })

}

function renderProducts(productList, productCheaking) {

    let cheaking = productCheaking;

    for (product of productList) {

        let productCard = document.createElement('div');
        productCard.classList.add('product-card');

        let img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.setAttribute('marcador', product.id);
        img.addEventListener('click', (e) => {
            openDetail(e.target.getAttribute('marcador'), productList, cheaking);

        });

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
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
        productImgCard.setAttribute('marcador', product.id);
        const countItems = document.querySelector('#cantidad');
        countItems.textContent = '0';
        productImgCard.addEventListener('click', (e) => {
            for(product of productList){
                addToCard(e.target.getAttribute('marcador'));
            }
        })

        productFigure.appendChild(productImgCard);
        productInfo.append(productInfoDiv, productFigure);
        productCard.append(img, productInfo);

        let productContainer = document.querySelector('.cards-container');
        productContainer.appendChild(productCard);

    }
}

function addToCard(id){

    const countItems = document.querySelector('#cantidad');

    if (id == product.id) {
        cheaking.push(product);
        countItems.textContent = `${cheaking.length}`;
        console.log(cheaking);
    }
}

function openDetail(id, productList, cheaking) {

    let productDetail = document.querySelector('#product-detail');
    if (productDetail.classList.contains('inactive')) {
        renderDetail(id, productList, cheaking);
    }

    productDetail.classList.remove('inactive');
    let shoppingCartContainer = document.querySelector('#shoppingCartContainer');

    let navDesktop = document.querySelector('.desktop-menu');

    if (!navDesktop.classList.contains('inactive')) {
        navDesktop.classList.add('inactive');
    }

    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }

    let close = document.querySelector('.product-detail-close')
    close.addEventListener('click', () => {
        productDetail.classList.add('inactive');
        const productInfo = document.querySelector('.remove');
        if(productInfo){
            productInfo.remove();
        }

        const imagenInfo = document.querySelector('.imgDetailP');
        if(imagenInfo){
            imagenInfo.remove();
        }
    })
}

function renderDetail(id, productList, cheaking) {
    productList.forEach(element => {
        if (id == element.id) {
            const productDetail = document.querySelector('#product-detail');

            let imgProductDetail = document.createElement('img');
            imgProductDetail.setAttribute('src', element.image);
            imgProductDetail.classList.add('imgDetailP')

            const productInfoDiv = document.createElement('div');
            productInfoDiv.classList.add('product-info');
            productInfoDiv.classList.add('remove');

            const parrafoPrice = document.createElement('p');
            parrafoPrice.innerText = `$${element.price},00`;

            const parrafoName = document.createElement('p');
            parrafoName.innerText = `${element.name}`;

            const parrafoDescribe = document.createElement('p');
            parrafoDescribe.innerText = 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.';

            const buttom = document.createElement('buttom');
            buttom.classList.add('primary-button', 'add-to-cart-button');
            buttom.innerText = 'Add to cart';
            buttom.setAttribute('marcador', element.id);

            const iconoCart = document.createElement('img');
            iconoCart.setAttribute('src', './icons/bt_add_to_cart.svg');
            buttom.appendChild(iconoCart);
            productInfoDiv.append(parrafoPrice, parrafoName, parrafoDescribe ,buttom);
            productDetail.append(imgProductDetail, productInfoDiv);

            const countItems = document.querySelector('#cantidad');
            buttom.addEventListener('click', (e) => {
                for(product of productList){
                        addToCard(e.target.getAttribute('marcador'));
                    
                }
            })

        }
    });
}


main();