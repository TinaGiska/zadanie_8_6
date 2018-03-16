
var a = prompt('Podaj dowolną liczbę "a"');
    b = prompt('Podaj dowolną liczbę "b"');
    operationArea = ((a * a) - (2 * a * b) - (b * b));


if (operationArea < 0) {
    document.write('wynik ujemny');
} else if (operationArea > 0) {
    document.write('wynik dodatni');
} else {
    document.write('Wynik "0"');
}

