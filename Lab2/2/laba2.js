function calculate() {
  const number = document.getElementById('numberInput').value;

  if (number.length !== 4) {
    document.getElementById('result').innerHTML = "Пожалуйста, введите четырехзначное число.";
    return;
  }

  const digits = number.split('').map(Number);
  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  const product = digits.reduce((acc, digit) => acc * digit, 1);

  document.getElementById('result').innerHTML = `Сумма цифр: ${sum}, Произведение цифр: ${product}`;
}
