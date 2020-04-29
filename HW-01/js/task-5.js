'use strict';

let price;

let message;

let country = prompt('Select a country');

if(country !== null) {
    country = country.toLowerCase();
}


switch(country) {
    case country = 'китай':
        price = '120 кредитов';
        alert(message = `Доставка в ${country} будет стоить ${price} кредитов`);
        break;

    case country = 'Чили':
        price = '250 кредитов';
        alert(message = `Доставка в ${country} будет стоить ${price} кредитов`);
        break;

    case country = 'Австралия':
         price = '170 кредитов';
         alert(message = `Доставка в ${country} будет стоить ${price} кредитов`);
        break;

     case country = 'Индия':
          price = '80 кредитов';
          alert(message = `Доставка в ${country} будет стоить ${price} кредитов`);
          break;
 
    case country = 'Ямайка':
         price = '120 кредитов';
         alert(message = `Доставка в ${country} будет стоить ${price} кредитов`);
          break;

    default:
        alert(message = 'В вашей стране доставка не доступна');

}

