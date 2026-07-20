export function getImcClassification (imc) {
    const classificationImc = ['Abaixo do peso normal', 'Peso normal', 'Excesso de peso', 'Excesso de peso I',
         'Excesso de peso II', 'Excesso de peso III'];

    if (imc >= 39.9 ) return classificationImc[5];
    if (imc >= 34.9) return classificationImc[4];
    if (imc >= 29.9) return classificationImc[3];
    if (imc >= 24.9) return classificationImc[2];
    if (imc >= 18.5) return classificationImc[1];
    if (imc <= 18.5) return classificationImc[0];
}