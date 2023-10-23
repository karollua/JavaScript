function isPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function calcularSomas() {
    const numbersInput = document.getElementById("numbers");
    const numbers = numbersInput.value.split(",").map(Number);

    let somaPares = 0;
    let somaPrimos = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            somaPares += numbers[i];
        }

        if (isPrimo(numbers[i])) {
            somaPrimos += numbers[i];
        }
    }

    
    document.getElementById("somaPares").textContent = somaPares;
    document.getElementById("somaPrimos").textContent = somaPrimos;
}

document.getElementById("calcularButton").addEventListener("click", calcularSomas);