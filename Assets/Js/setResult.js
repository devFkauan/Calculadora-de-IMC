import { creatorForP } from "./creatorForP.js";

export function setResult (msg, isValid) {
    
    const result = document.querySelector('.result')
    result.innerHTML = ``
    const p = creatorForP();

    if (isValid) {
        p.classList.add('result-paragrafo');
    } else {
        p.classList.add('error-paragrafo');
    }

    p.innerHTML = msg;
    result.appendChild(p);

}