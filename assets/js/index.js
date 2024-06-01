
// nav handler
const menu_btn = document.querySelector('nav .menu');
const links = document.querySelector('nav ul');

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('active')
    links.classList.toggle('active')
})

function chnageNavImage() {
    let lebarLayar = window.innerWidth;
    const gambar = document.querySelector('nav .icon img');

    if (lebarLayar < 1024) {
        gambar.src = "./assets/images/logo-nav_mobile.png";
    } else {
        gambar.src = "./assets/images/logo-nav.png";
    }
}

window.onload = chnageNavImage;
window.addEventListener('resize', chnageNavImage);


// copied 

document.addEventListener('DOMContentLoaded', function() {
    const copyContractBtns = document.querySelectorAll('.copy-contract');
  
    copyContractBtns.forEach(copyContractBtn => {
      copyContractBtn.addEventListener('click', function() { 
        
      let copiedMessage = copyContractBtn.querySelector('.copied');
      let contractInput = copyContractBtn.querySelector('.contractInput');

        contractInput.select();
        document.execCommand('copy');
    
        // Tampilkan pesan terkopikan
        copiedMessage.classList.add('flex')
        copiedMessage.classList.remove('hidden')
     
        setTimeout(function() {
          copiedMessage.classList.remove('flex')
          copiedMessage.classList.add('hidden')
        }, 2000);
      });
      
    })
     
  });