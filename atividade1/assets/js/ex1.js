// Inicialize as variáveis
let maiorAltura = 0;
let menorAltura = Infinity;
let mediaAlturaMulheres = 0;
let numHomens = 0;

function calcularAlturas() {
    const alturaInput = document.getElementById("altura");
    const sexoInput = document.getElementById("sexo");

    const altura = parseFloat(alturaInput.value);
    const sexo = sexoInput.value.toUpperCase();

    // Verifique a maior e a menor altura
    if (altura > maiorAltura) {
        maiorAltura = altura;
    }
    if (altura < menorAltura) {
        menorAltura = altura;
    }

    // Calcule a média de altura das mulheres
    if (sexo === 'F') {
        mediaAlturaMulheres += altura;
    }

    // Contagem de homens
    if (sexo === 'M') {
        numHomens++;
    }

    // Atualize os resultados na página
    document.getElementById("maiorAltura").textContent = maiorAltura + " cm";
    document.getElementById("menorAltura").textContent = menorAltura + " cm";
    document.getElementById("mediaAlturaMulheres").textContent = (mediaAlturaMulheres / numHomens).toFixed(2) + " cm";
    document.getElementById("numHomens").textContent = numHomens;

    // Limpe os campos de entrada
    alturaInput.value = "";
    sexoInput.value = "";
}

document.getElementById("calcularButton").addEventListener("click", calcularAlturas);
index.html