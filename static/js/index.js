//  scroll animation Effect
window.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true,
        offset: 120,
    });
})


// menuBtn
const menuBtn = document.querySelector('.menuBtn'); 
const menuContainer = document.querySelector('.menuContainer');
const menuIcon = document.querySelector('#menuIcon');

menuBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('active')

    if (menuContainer.classList.contains('active')) {
        menuIcon.src = './static/images/menuActive.svg';
    } else {
        menuIcon.src = './static/images/menuBtn.svg';
    }

})


document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();  
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 100;
            const targetPosition = targetElement.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }

        // menu
        menuContainer.classList.remove('active')
        menuIcon.src = './static/images/menuBtn.svg';
    });
});


// animation
// ScrollReveal().reveal('.topAnimation', {
//     origin: 'bottom',   
//     distance: '70px',   
//     duration: 1000,    
//     easing: 'ease-in-out',  
//     reset: false     
//   });

  
//   document.querySelectorAll('.topAnimation').forEach((el) => {
//     const delay = el.getAttribute('data-delay') || 0;
//     sr.reveal(el, { delay: parseInt(delay) });
//   });