var a = 3,
    b = 2,
    operationArea = -7;
console.log((a * a) - (2 * a * b) - (b * b));


if (operationArea == -7) {
    document.write('wynik ujemny');
} else if (operationArea.length == +7) {
    document.write('wynik dodatni');
} else if (operationArea.length == 0) {
    document.write('Wynik "0"');
}

