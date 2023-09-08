function main(){

    let navEmail = document.querySelector('.navbar-email');
    navEmail.addEventListener('click',toggleNavDesktop);

    let menuHamburguesa = document.querySelector('.menu');
    menuHamburguesa.addEventListener('click',toggleNavMobile)
}


function toggleNavDesktop(e) {
    
    let navDesktop = document.querySelector('.desktop-menu');
    navDesktop.classList.toggle('inactive');

}

function toggleNavMobile(e) {
    
    let navMobile = document.querySelector('.mobile-menu');
    navMobile.classList.toggle('inactive');

}


main();