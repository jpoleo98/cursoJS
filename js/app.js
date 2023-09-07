function main(){

    let navEmail = document.querySelector('.navbar-email');
    navEmail.addEventListener('click',toggleNavDesktop);


}


function toggleNavDesktop(e) {
    
    let navDesktop = document.querySelector('.desktop-menu');
    navDesktop.classList.toggle('inactive');

}


main();