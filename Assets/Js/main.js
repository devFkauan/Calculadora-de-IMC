const formPage= document.querySelector(".form-page");
import { getImc } from './getImc.js';
import { getImcClassification } from './ClassificationImc.js';
import { setResult } from './setResult.js';

formPage.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const inputPeso = e.target.querySelector('#input-peso');
    const inputAltura = e.target.querySelector('#input-altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResult('Erro, peso errado!', false)
        return;
    }

    if (!altura) {
        setResult('Erro, altura errada!', false)
        return;
    }

    const imc = getImc(peso, altura);
    const classificationImc = getImcClassification(imc);

    const msg = `
    Seu imc é de ${imc}
    `;

    setResult(msg, true)
});