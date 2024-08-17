AOS.init({
    once: true
  });


//   navbar
const menuBtn = document.querySelector('.mobile-menu')
const menuLinks = document.querySelector('.outer-links');
const close = document.querySelector('.close');

menuBtn.addEventListener('click',() => {
    menuLinks.classList.add('show')
})

close.addEventListener('click',() => {
    menuLinks.classList.remove('show');
})

// whitepaper
 const white_btn = document.querySelector('.white-btn');
const dropdown_menu = document.querySelector('.dropdown-menu');
 
function toggleDropdown(event) {
    event.stopPropagation(); 
    dropdown_menu.style.display = dropdown_menu.style.display === 'block' ? 'none' : 'block';
}
 
white_btn.addEventListener('click', toggleDropdown);
 
// document.body.addEventListener('click', (event) => {
//     if (!dropdown_menu.contains(event.target) && !white_btn.contains(event.target)) {
//         dropdown_menu.style.display = 'none';
//     }
// });

document.body.addEventListener('click', (event) => {
    if (!dropdown_menu.contains(event.target) && !white_btn.contains(event.target)) {
        dropdown_menu.style.display = 'none';
    }
});
