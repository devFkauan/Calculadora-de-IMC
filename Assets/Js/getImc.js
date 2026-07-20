export function getImc(peso, altura) {
    const calculoToImc = peso / altura ** 2;
    return calculoToImc.toFixed(2);
}