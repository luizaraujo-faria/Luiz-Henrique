//EFEITO HEADER//
let lastScroll = 0

window.addEventListener('scroll', () => {
    let header = document.querySelector('header')
    const currentScroll = window.scrollY

    if(currentScroll > lastScroll){
        header.classList.add('-translate-y-28')
    }
    else{
        header.classList.remove('-translate-y-28')
    }
    lastScroll = currentScroll
})

//TELA DE CARREGAMENTO//
window.onload = function() {
    let loadScreen = document.querySelector('#load-screen')
    let loadImage = document.querySelector('#load-img')
    let loadBar = document.querySelector('#load-bar')
    let body = document.querySelector('body')
    
    //TEMPO LIMITE//
    setTimeout(() =>{
        loadScreen.classList.remove('w-full')
        loadScreen.classList.add('w-0')
        
        body.classList.remove('overflow-hidden')
        loadImage.classList.add('opacity-0')
        loadBar.classList.add('opacity-0')

    },2000)
}

//BARRA DE OPÇOES//
const clickDivs = document.querySelectorAll('[data-target]')

//FUNÇÃO PARA CADA DIV//
clickDivs.forEach(div => {
    div.addEventListener('click', () => {

    //PEGA O ID DO CONTIANER ASSOCIADO//
    const targetId = div.getAttribute('data-target')

    //ESCONDE TODOS OS CONTAINERS//
    document.querySelectorAll('[id^="container"]').forEach(container => {
        container.classList.add('faded')
    })

    //MOSTRA O BOTÃO CLICADO AO CONTAINER ASSOCIADO//
    const targetContainer = document.getElementById(targetId)

    if (targetContainer) {
        targetContainer.classList.remove('faded');
    }
    })
})

//SLIDESHOW//
// const slides = document.querySelector('.slides')
// const prevButton = document.querySelector('.prev')
// const nextButton = document.querySelector('.next')
// let currentIndex = 0//VARIAVEL CONTADOR//
// const totalSlides = document.querySelectorAll('.slide').length

// function showSlide(index) {
//     const slideWidth = document.querySelector('.slide').clientWidth
//     slides.style.transform = `translateX(-${index * slideWidth}px)`
// }

// nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % totalSlides
//     showSlide(currentIndex)
// })

// prevButton.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides
//     showSlide(currentIndex)
// })

// setInterval(() => {
//     nextButton.click()
// },5000)

//EFEITO LINKS DE NAVEGAÇÃO//
document.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY

    document.querySelectorAll('.sections').forEach((sections) => {
        
        let id = sections.getAttribute('id')
        let offsetTop = sections.offsetTop - 100
        let offsetBottom = offsetTop + sections.offsetHeight

        if(scrollPosition >= offsetTop && scrollPosition < offsetBottom){
            document.querySelectorAll('.links').forEach((links) => {
    
                links.classList.remove('before:scale-y-[1]', 'text-black')
                links.classList.add('text-zero')

                if (links.getAttribute('href') === `#${id}`) {

                    links.classList.remove('text-zero')
                    links.classList.add('before:scale-y-[1]', 'text-black')
                }
            })
        }
    })
})

//BARRA DE MENU//
const mediaQuery = window.matchMedia("(width < 640px)");{

    const menuIcon = document.getElementById('icon-menu')
    const closeIcon = document.getElementById('icon-close')
    const menuBar = document.getElementById('menu-bar')
    const body = document.querySelector('body')

    document.querySelectorAll('.links').forEach(links => {
        links.addEventListener('click', () => {
            menuBar.classList.remove('translate-x-[0%]')
            body.classList.remove('overflow-y-hidden')
        })
    })

    menuIcon.addEventListener('click', () => {
        menuBar.classList.add('translate-x-[0%]')
        body.classList.add('overflow-y-hidden')
    })

    closeIcon.addEventListener('click', () => {
        menuBar.classList.remove('translate-x-[0%]')
        body.classList.remove('overflow-y-hidden')
    })
}