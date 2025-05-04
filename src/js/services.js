async function loadSiteImage(){
    const response = await fetch('sites.json')
    const sites = await response.json()
    const siteImage = document.querySelectorAll('.site-image')
    const siteName = document.querySelectorAll('.name')

    sites.forEach((site, index) => {
        if(siteImage[index] && siteName[index]){
            siteImage[index].src = site.src 
            siteName[index].textContent = site.name
        }
    })
}

loadSiteImage()

const infoSites = document.getElementById('info-site')

document.querySelectorAll('.site').forEach((element, index) => {

    element.addEventListener('click', async () => {
        infoSites.classList.remove('hidden')
        await setInfo(index)
    })
})

const infoClose = document.getElementById('info-close')

infoClose.addEventListener('click', () => {
    infoSites.classList.add('hidden')
})

async function setInfo(index){
    try{
        const response = await fetch('sites.json')
        const site = await response.json()

        if (index >= 0 && index < site.length) {
            document.getElementById('src').src = site[index].src
            document.getElementById('name').textContent = site[index].name
            document.getElementById('theme').textContent = site[index].theme
            document.getElementById('desc').textContent = site[index].desc
            document.getElementById('link').href = site[index].link        
        }
    } catch (err) {
        console.error('Erro ao carregar informações!')
    }
}