document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o EmailJS com seu User ID
    emailjs.init('qQ_5DoaJE5x9yMgB3')
    // Captura o envio do formulário
    const form = document.getElementById('formulario')
    const formButton = document.querySelector('#form-button')
    const buttonSpan = document.querySelector('#form-button span')
    const buttonLoad = document.getElementById('button-load')
  
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      buttonSpan.textContent = ''
      buttonLoad.classList.remove('hidden')
      formButton.disabled = true
  
      emailjs.sendForm('service_uckvhrn', 'template_pazgqk9', form)
        .then(() => {
            buttonLoad.classList.add('hidden')
            buttonSpan.textContent = "Enviado com sucesso!"
          
            form.reset() // limpa os campos após envio

            setTimeout(() => {
                window.location.href = '../thanks.html'
            },500)
        })
        .catch((error) => {
            console.error('Erro ao enviar:', error)
            buttonSpan.textContent = "Erro ao enviar!"
        })
        .finally(() => {
            setTimeout(() => {
                buttonSpan.textContent = 'ENVIAR'
                formButton.disabled = false
            }, 1000)
        })
    })
})