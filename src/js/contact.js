//FUNÇÃO ASSÍNCRONA PARA TRATAR A API DE ENVIO//
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const submitBtn = form.querySelector("button[type='submit']");
    const buttonText = submitBtn.textContent;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        submitBtn.textContent = 'Enviando';
        submitBtn.disabled = true;

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
            });

            if (response.ok) {
                submitBtn.textContent = "Enviado!";
                setTimeout(() => {
                    window.location.href = form.querySelector("input[name='_next']").value;
                }, 1000);
            } else {
                throw new Error('Erro ao enviar');
            }
        } catch (err) {
            console.error('Erro ao enviar!', err);
            submitBtn.textContent = 'Erro';
        } finally {
            setTimeout(() => {
                submitBtn.textContent = buttonText;
                submitBtn.disabled = false;
            }, 2000);
        }
    });
});