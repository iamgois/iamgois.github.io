const reload = () => {
    window.scrollTo(0, 0);
}

/* Letter Change */

const vendas = document.getElementById('vendas')

var example = ['Online.', 'Design.', 'Marketing.', 'E-Commerce.', 'Portfólio.'];

        textSequence(0);
        function textSequence(i) {

            if (example.length > i) {
                setTimeout(function() {
                    document.getElementById("vendas").innerHTML = example[i];
                    textSequence(++i);
                }, 2000); // 1 second (in milliseconds)

            } else if (example.length == i) { // Loop
                textSequence(0);
            }

        }

/* Mobile Menu */

const closeBtn = document.getElementById('close-btn')
const menu = document.getElementById('nav-menu')

const navItem0 = document.getElementById('nav-item0')
const navItem1 = document.getElementById('nav-item1')
const navItem2 = document.getElementById('nav-item2')
const navItem3 = document.getElementById('nav-item3')

function toggleMenu(){
    closeBtn.style.display = "flex"

    menu.classList.toggle('active')
}


closeBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    closeBtn.style.display = "none"
})

navItem0.addEventListener('click', () => {
    menu.classList.remove('active')
    closeBtn.style.display = "none"
})

navItem1.addEventListener('click', () => {
    menu.classList.remove('active')
    closeBtn.style.display = "none"
})

navItem2.addEventListener('click', () => {
    menu.classList.remove('active')
    closeBtn.style.display = "none"
})

navItem3.addEventListener('click', () => {
    menu.classList.remove('active')
    closeBtn.style.display = "none"
})

/* Área de Testes */

