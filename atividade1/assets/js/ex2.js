// Inicialize as variáveis
let totalIdadesOtimo = 0;
let quantidadeRegular = 0;
let quantidadeBom = 0;
let totalEspectadores = 0;

function calcularRespostas() {
    const idadeInput = document.getElementById("idade");
    const opiniaoInput = document.getElementById("opiniao");

    const idade = parseInt(idadeInput.value);
    const opiniao = parseInt(opiniaoInput.value);

    // Verifique a opinião
    if (opiniao === 3) {
        totalIdadesOtimo += idade;
    } else if (opiniao === 1) {
        quantidadeRegular++;
    } else if (opiniao === 2) {
        quantidadeBom++;
    }

    totalEspectadores++;

    // Calcular a média das idades das opiniões "ótimo"
    const mediaIdadesOtimo = totalIdadesOtimo / (totalEspectadores - quantidadeRegular);

    // Calcular a porcentagem das opiniões "bom" entre todos os espectadores
    const porcentagemBom = (quantidadeBom / totalEspectadores) * 100;

    // Atualize os resultados na página
    document.getElementById("mediaIdadesOtimo").textContent = mediaIdadesOtimo.toFixed(2) + " anos";
    document.getElementById("quantidadeRegular").textContent = quantidadeRegular;
    document.getElementById("porcentagemBom").textContent = porcentagemBom.toFixed(2) + "%";

    // Limpe os campos de entrada
    idadeInput.value = "";
    opiniaoInput.value = "";
}

document.getElementById("calcularButton").addEventListener("click", calcularRespostas);