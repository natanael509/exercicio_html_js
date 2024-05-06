const form = document.getElementById ('form-numero');

form.addEventListener ('submit', function(e) {
    e.preventDefault();

    const numeroUm = document.getElementById('numeroA');
    const numeroDois = document.getElementById('numeroB');

    const campo1 = parseFloat(numeroUm.value);
    const campo2 = parseFloat(numeroDois.value);

    const mensagemTrue = `O campo A com o numero: ${campo1} é menor que o campo B de numero: ${campo2}`;
    const mensagemFalse = `Esta errado o campo A deve ser menor que o campo B`;

    if (campo1 >= campo2) {
        const formfalso = document.querySelector('.mensagem-erro');
        formfalso.innerHTML = mensagemFalse;
        formfalso.style.display = 'block';
        document.querySelector('.mensagem-certo').style.display = 'none';
}
else{
    const formTrue = document.querySelector('.mensagem-certo');
    formTrue.innerHTML = mensagemTrue;
    formTrue.style.display = 'block';
    document.querySelector('.mensagem-erro').style.display = 'none';
}

});
