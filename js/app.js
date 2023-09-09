function main(){

    let navEmail = document.querySelector('.navbar-email');
    navEmail.addEventListener('click',toggleNavDesktop);

    let menuHamburguesa = document.querySelector('.menu');
    menuHamburguesa.addEventListener('click',toggleNavMobile)

    let carrito = document.querySelector('.navbar-shopping-cart');
    carrito.addEventListener('click',toggleCarritoCompras);
}


function toggleNavDesktop(e) {
    
    let navDesktop = document.querySelector('.desktop-menu');
    navDesktop.classList.toggle('inactive');
    let carritoCompras = document.querySelector('.product-detail');

    if(!carritoCompras.classList.contains('inactive')){
        carritoCompras.classList.add('inactive');
    }

}

function toggleNavMobile(e) {
    
    let navMobile = document.querySelector('.mobile-menu');
    navMobile.classList.toggle('inactive');
    let carritoCompras = document.querySelector('.product-detail');

    if(!carritoCompras.classList.contains('inactive')){
        carritoCompras.classList.add('inactive');
    }

}

function toggleCarritoCompras(e){

    let carritoCompras = document.querySelector('.product-detail');
    carritoCompras.classList.toggle('inactive');
    let navMobile = document.querySelector('.mobile-menu');
    let navDesktop = document.querySelector('.desktop-menu');

    if(!navMobile.classList.contains('inactive')){
        navMobile.classList.add('inactive');
    }

    if(!navDesktop.classList.contains('inactive')){
        navDesktop.classList.add('inactive');
    }

}


main();