const formPage= document.querySelector(".form-page");

formPage.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const inputPeso = e.target.querySelector('#input-peso');
    const inputAltura = e.target.querySelector('#input-altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setresult('Preto aqui não tem vez!', false)
        return;
    }

    if (!altura) {
        setresult('Preto aqui não tem vez!', false)
        return;
    }

    const imc = getImc(peso, altura);
    const classificationImc = getImcClassification(imc);

    const msg = `Seu imc é de ${imc}`

    setresult(msg, true)
});

function getImc(peso, altura) {
    const calculoToImc = peso / altura ** 2;
    return calculoToImc.toFixed(2);
}

function getImcClassification (imc) {
    const classificationImc = ['Abaixo do peso normal', 'Peso normal', 'Excesso de peso', 'Excesso de peso I',
         'Excesso de peso II', 'Excesso de peso III'];

    if (imc >= 39.9 ) return classificationImc[5];
    if (imc >= 34.9) return classificationImc[4];
    if (imc >= 29.9) return classificationImc[3];
    if (imc >= 24.9) return classificationImc[2];
    if (imc >= 18.5) return classificationImc[1];
    if (imc <= 18.5) return classificationImc[0];
}

function creatorForP () {
    const p = document.createElement('p');
    return p;
}

function setresult (msg, isValid) {
    const result = document.querySelector('.result')
    result.innerHTML += ``
    const p = creatorForP();

    if (isValid) {
        p.classList.add('result-paragrafo');
    } else {
        p.classList.add('error-paragrafo');
    }

    p.innerHTML = msg;
    result.appendChild(p);

}