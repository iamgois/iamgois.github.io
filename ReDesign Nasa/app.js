/* Mobile Menu */

const mobileBtn = document.getElementById('mobile-menu')
const closeBtn = document.getElementById('close-mobile-menu')

mobileBtn.addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu')

    closeBtn.style.display = 'flex'
    mobileBtn.style.display = 'none'
    navMenu.classList.toggle('active')
})

closeBtn.addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu')

    mobileBtn.style.display = 'flex'
    navMenu.classList.toggle('active')
})

/* Animation */

function animate(){
    const bgPhoto = document.getElementById('bg-photo')
    const headerP = document.getElementById('header-p')
    const headerH1 = document.getElementById('header-h1')

    bgPhoto.classList.add('animation')
    headerP.classList.add('opacity')
    headerH1.classList.add('opacity')
}
