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
/*
window.onload = function() {
    let loadScreen = document.querySelector('#load-screen')
    let loadImage = document.querySelector('#load-img')
    let loadBar = document.querySelector('#load-bar')
    let body = document.querySelector('body')
    
    //TEMPO LIMITE//
    setTimeout(() =>{
        loadScreen.classList.add('w-[0]')
        
        body.classList.remove('overflow-hidden')
        loadImage.classList.add('opacity-0')
        loadBar.classList.add('opacity-0')

    },2000)
}
*/
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

//SLIDER PROJETOS//
const slides = document.querySelector('.slides')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
let currentIndex = 0//VARIAVEL CONTADOR//
const totalSlides = document.querySelectorAll('.slide').length

//FUNÇÃO PARA PASSAR AS IMAGENS DO SLIDESHOW//
function showSlide(index) {
    const slideWidth = document.querySelector('.slide').clientWidth
    slides.style.transform = `translateX(-${index * slideWidth}px)`
}
//FUNÇÃO DE CLICK PARA BOTAO PROXIMO//
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides
    showSlide(currentIndex)
})
//FUNÇÃO DE CLICK PARA BOTAO VOLTAR//
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides
    showSlide(currentIndex)
})
//AUTOMATIZAÇÃO DO SLIDESHOW//
setInterval(() => {
    nextButton.click()
},5000)
//DARK/WHITE MODE//

let modeBar = document.querySelector('.modebar')//BARRA DE MODO
let mode = document.querySelector('.mode')//BOTÃO DE MODO
let modeHead = document.querySelector('.modehead')
let header = document.querySelector('header')//HEADER
let texts = document.querySelectorAll('.texts')//TODOS OS TEXTOS
let section = document.querySelectorAll('.container')//TODAS AS SESSOES
let slideArticle = document.querySelectorAll('.slide article')
let html = document.querySelector('html')//CHAMA HTML

modeBar.addEventListener('click', () => {
    mode.classList.toggle('bg-white')
    mode.classList.toggle('translate-x-[150%]')
    modeHead.classList.toggle('max-sm:bg-white')

    header.classList.toggle('bg-white')
    html.classList.toggle('dark')

    //PARA CADA ESCRITA//
    texts.forEach(texts => {
        texts.classList.toggle('dark:text-black')
    })
    slideArticle.forEach(slideArticle => {
        slideArticle.classList.toggle('bg-whitefade')
    })
    //PARA CADA SESSAO//
    section.forEach(section => {
        section.classList.toggle('bg-white')
    })
})