const menuIcon = document.querySelector('.menu__icon');
const navList = document.querySelector('.nav-list');
const mainBlock = document.querySelector('.main');

if(menuIcon){
menuIcon.addEventListener("click", () => {
   document.body.classList.toggle('_lock');
   menuIcon.classList.toggle('active');
   navList.classList.toggle('active');
   mainBlock.classList.toggle('active');
})
}


const navLinks = document.querySelectorAll('.nav__link[data-goto]');
if(navLinks.length > 0) {
   navLinks.forEach(navLink => {
      navLink.addEventListener('click', onNavLinkClick)
      function onNavLinkClick(e) {
         const navLink = e.target;
         if(navLink.dataset.goto && document.querySelector(navLink.dataset.goto)){
            const goto = document.querySelector(navLink.dataset.goto);
            const gotoBlock = goto.getBoundingClientRect().top + pageYOffset;

            if(menuIcon.classList.contains('active')){
               document.body.classList.remove('_lock')
               menuIcon.classList.remove('active');
               navList.classList.remove('active');
               mainBlock.classList.remove('active')
            }

            window.scrollTo({
               top: gotoBlock,
               behavior: "smooth",
            })
            e.preventDefault();
         }
      }
   })
}


   
