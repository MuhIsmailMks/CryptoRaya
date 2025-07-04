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




// Submit form
const submitButton = document.getElementById('submitBtn')
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = this;

    submitButton.disabled = true;
    submitButton.classList.add('active')

    // for my
    emailjs.sendForm('service_yspdk47', 'template_jcoygt9', this)
        .then(function () {
            alert('Pesan berhasil dikirim!');
            form.reset(); 
            submitButton.innerText = 'Pesan Terkirim';
        }, function (error) {
            alert('Terjadi kesalahan: ' + error.text);
        });

 
});