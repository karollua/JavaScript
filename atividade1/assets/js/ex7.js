function converterData() {
    const dataInput = document.getElementById("data");
    const data = dataInput.value;

    const partesData = data.split("/");
    if (partesData.length === 3) {
        const dia = partesData[0];
        const mes = partesData[1];
        const ano = partesData[2];

        // Array de nomes dos meses
        const meses = [
            "janeiro", "fevereiro", "março", "abril", "maio", "junho",
            "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
        ];

        const dataExtenso = dia + " de " + meses[mes - 1] + " de " + ano;

        // Atualize o resultado na página
        document.getElementById("dataExtenso").textContent = dataExtenso;
    } else {
        alert("Formato de data inválido. Use dd/mm/aaaa.");
    }
}

document.getElementById("converterButton").addEventListener("click", converterData);