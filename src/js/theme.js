//DARK/WHITE MODE//
let modeBar = document.querySelector('.modebar')//BARRA DE MODO
let mode = document.querySelector('.mode')//BOTÃO DE MODO
let modeHead = document.querySelector('.modehead')
let header = document.querySelector('header')//HEADER
let texts = document.querySelectorAll('.texts')//TODOS OS TEXTOS
let section = document.querySelectorAll('.sections')//TODAS AS SESSOES
let slideArticle = document.querySelectorAll('.slide article')
let html = document.documentElement

function applyLightMode(isLightMode){
    if(!isLightMode){
        html.classList.add('dark')
        mode.classList.add('translate-x-[150%]', 'bg-white')
        header.classList.add('dark:bg-white')
        slideArticle.forEach(slideArticle => { slideArticle.classList.remove('dark:bg-whitefade') })
        texts.forEach(text => { text.classList.add('dark:text-black') })
        section.forEach(section => { section.classList.add('dark:bg-white') })
    }
    else{
        html.classList.remove('dark')
        mode.classList.remove('translate-x-[150%]', 'bg-white')
        header.classList.remove('dark:bg-white')
        slideArticle.forEach(slideArticle => { slideArticle.classList.add('dark:bg-whitefade') })
        texts.forEach(text => { text.classList.remove('dark:text-black') })
        section.forEach(section => { section.classList.remove('dark:bg-white') })
    }
}

let savedMode = localStorage.getItem('theme')
if(savedMode){ applyLightMode(savedMode !== 'dark') }

modeBar.addEventListener('click', () => {
    let isLightMode = html.classList.toggle('dark')

    localStorage.setItem('theme', isLightMode ? 'dark' : 'light')

    mode.classList.toggle('bg-white')
    mode.classList.toggle('translate-x-[150%]')

    header.classList.toggle('dark:bg-white')
    texts.forEach(text => { text.classList.toggle('dark:text-black') })
    slideArticle.forEach(slideArticle => { slideArticle.classList.toggle('dark:bg-whitefade') })
    section.forEach(section => { section.classList.toggle('dark:bg-white') })
})