function calculateY() {
    let x = parseFloat(document.getElementById("inputX").value);

    if (isNaN(x)) {
        document.getElementById("result").innerHTML = "Пожалуйста, введите число.";
        return;
    }

    if (x < 0) {
        document.getElementById("result").innerHTML = "Невозможно вычислить корень из отрицательного числа.";
        return;
    }

    let y = 6 * Math.pow(x, 2) - 3 * Math.sqrt(x) - 7;
    document.getElementById("result").innerHTML = "Значение y: " + y;
}
