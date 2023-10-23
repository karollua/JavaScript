// Inicialize as variáveis
let totalHomens = 0;
let totalMulheres = 0;
let somaIdadesHomens = 0;
let somaIdadesMulheres = 0;

function calcularDados() {
    const idadeInput = document.getElementById("idade");
    const pesoInput = document.getElementById("peso");
    const sexoInput = document.getElementById("sexo");

    const idade = parseInt(idadeInput.value);
    const peso = parseFloat(pesoInput.value);
    const sexo = sexoInput.value.toUpperCase();

    if (sexo === 'M') {
        totalHomens++;
        somaIdadesHomens += idade;
    } else if (sexo === 'F') {
        totalMulheres++;
        somaIdadesMulheres += idade;
    }

    // Atualize os resultados na página
    document.getElementById("totalHomens").textContent = totalHomens;
    document.getElementById("totalMulheres").textContent = totalMulheres;
    document.getElementById("mediaIdadesHomens").textContent = (somaIdadesHomens / totalHomens).toFixed(2);
    document.getElementById("mediaIdadesMulheres").textContent = (somaIdadesMulheres / totalMulheres).toFixed(2);

    // Limpe os campos de entrada
    idadeInput.value = "";
    pesoInput.value = "";
    sexoInput.value = "";
}

document.getElementById("calcularButton").addEventListener("click", calcularDados);