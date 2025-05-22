document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('formSorteio').addEventListener('submit' , function(event){
        event.preventDefault();
        let numeroMaximo = document.getElementById('numeroMaximo').value;
        numeroMaximo = parseInt(numeroMaximo);
        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.round(numeroAleatorio);
        if (numeroAleatorio === 0) {
            numeroAleatorio = 1;
        }
        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})