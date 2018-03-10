/* nav hamburger menu */
(function(){
   var hamburger = document.getElementById('hamburger');

   hamburger.addEventListener('click', function() {
       this.classList.toggle("change");
       document.getElementsByClassName('menu__nav')[0].classList.toggle("is-close");
   });
})()
/* end menu */

/* smooth scroll */
function handleLinkClick (e) {
    e.preventDefault();

    document
        .querySelector(e.target.hash)
        .scrollIntoView({ behavior: 'smooth' });
}

var links = document.querySelectorAll('ul.menu__nav li a');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', handleLinkClick);
}
/* end smooth scroll */