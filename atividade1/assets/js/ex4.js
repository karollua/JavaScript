function calcular() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    var soma = num1 + num2;
    var produto = num1 * num2;
    var divisao = num1 / num2;
    var resto = num1 % num2;

    document.getElementById("tabela").innerHTML += "<tr><td>Soma</td><td>" + soma + "</td></tr>";
    document.getElementById("tabela").innerHTML += "<tr><td>Produto</td><td>" + produto + "</td></tr>";
    document.getElementById("tabela").innerHTML += "<tr><td>Divisão</td><td>" + divisao + "</td></tr>";
    document.getElementById("tabela").innerHTML += "<tr><td>Resto da Divisão (%)</td><td>" + resto + "</td></tr>";
}
