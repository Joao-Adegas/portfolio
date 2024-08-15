document.addEventListener("DOMContentLoaded", function() {
    const texto = "João Pedro Santos Adegas";
    const spanNome = document.querySelector('.nome');
    let i = 0;

    function escreverTexto() {
        if (i < texto.length) {
            spanNome.textContent += texto.charAt(i);
            i++;
            setTimeout(escreverTexto, 100); // Velocidade da digitação
        } else {
            // Aguarda um pouco e reinicia
            setTimeout(reiniciar, 2500); // Tempo de espera antes de reiniciar
        }
    }

    function reiniciar() {
        spanNome.textContent = '';
        i = 0;
        escreverTexto();
    }

    escreverTexto();
});