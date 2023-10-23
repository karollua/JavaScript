function calcularReajuste() {
    const salarioInput = document.getElementById("salario");
    const salario = parseFloat(salarioInput.value);

    let percentualAumento = 0;
    let valorAumento = 0;
    let novoSalario = 0;

    if (salario <= 280) {
        percentualAumento = 20;
    } else if (salario > 280 && salario <= 700) {
        percentualAumento = 15;
    } else if (salario > 700 && salario <= 1500) {
        percentualAumento = 10;
    } else {
        percentualAumento = 5;
    }

    valorAumento = (salario * percentualAumento) / 100;
    novoSalario = salario + valorAumento;

    // Atualize os resultados na página
    document.getElementById("salarioAtual").textContent = salario.toFixed(2);
    document.getElementById("percentualAumento").textContent = percentualAumento;
    document.getElementById("valorAumento").textContent = valorAumento.toFixed(2);
    document.getElementById("novoSalario").textContent = novoSalario.toFixed(2);
}

document.getElementById("calcularButton").addEventListener("click", calcularReajuste);