'use strict';

let input = '';
let total = 0;

while(input !== null) {
    input = prompt('Введите число.');

    if(isNaN(+input)) {
        alert('Вы ввели не число');
    } else {
        total += +input;
    }         
}

alert(`Общая сумма чисел равна  ${total}` );




