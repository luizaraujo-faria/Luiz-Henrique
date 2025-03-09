//FUNÇÃO ASSÍNCRONA PARA TRATAR A API DE ENVIO//
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')
    const submitBtn = form.querySelector("button[type='submit']")
    const buttonText = submitBtn.textContent

    form.addEventListener('submit', async (event) => {
        event.preventDefault()
        submitBtn.textContent = 'Enviando'
        submitBtn.disable = true

        try{
            const formData = new FormData(form)
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
            })

            if(response){
                submitBtn.textContent = "Enviado!"
                setTimeout(() => {
                    window.location.href = form.querySelector("input[name='_next']").value
                }, 1000)
            }
            else { 
                throw new error('Erro!')
            }
        }
        catch (err){
            console.error('Erro ao enviar!')
            submitBtn.textContent = 'Erro'
        }
        finally {
            setTimeout(() => {
                submitBtn.textContent = buttonText
                submitBtn.disabled = false
            }, 2000)
        }
    })
})