function enviaDados(event) {
    event.preventDefault();
    var pegaltura = document.getElementById("altura"); 
    var altura = pegaltura.value;
    var pegaPeso = document.getElementById("peso"); 
    var peso = pegaPeso.value;
    calcularImc(peso, altura)
    pegaPeso.value = '';
    pegaltura.value = '';
}

function calcularImc(peso, altura) {
    var imc = (peso / (altura * altura));
    document.getElementById('value').innerHTML = imc.toFixed(2);

    var mensagem = '';
    var classe = '';

    if (imc < 18.5) {
        mensagem = 'Cuidado, você está abaixo do peso!';
        classe = 'atencao'; 
    } else if (imc >= 18.5 && imc < 25) {
        mensagem = 'Você está no peso ideal!';
        classe = 'normal'; 
    } else if (imc >= 25 && imc < 30) {
        mensagem = 'Você está com sobrepeso.';
        classe = 'atencao';
    } else if (imc >= 30 && imc < 35) {
        mensagem = 'Você está com obesidade moderada.';
        classe = 'atencao'; 
    } else {
        mensagem = 'Você está com obesidade severa.';
        classe = 'atencao'; 
    }

    var mensagemElement = document.getElementById('mensagem');
    mensagemElement.innerHTML = mensagem;
    mensagemElement.className = classe;
}
