const sum = document.querySelector('.sum').value;
const button = document.querySelector('.button');
const total = document.querySelector('.total');

let interestRate = 18.5;

const deposit = '30000';

const growth = '150';

const currency = 'руб';

console.log( 'Ваш депозит на начало расчётного периода составлял ' +  deposit + ' ' + currency + '.' );
console.log( 'Согласно вашему тарифу, вам была присвоена ставка ' + interestRate + '%' );


let depositAsNumber = Number(deposit); 
// console.log(depositAsNumber); 

let growthAsNumber = Number(growth); 
// console.log(growthAsNumber); 
let newSum = depositAsNumber + growthAsNumber;

console.log('К концу расчётного периода прирост составил ' + growth + ' ' + currency + '.,' + ' и на данный момент ваш депозит составляет ' + newSum +  currency + ' .' );

button.addEventListener('click', () => {
  const sum = document.querySelector('.sum').value;
  total.textContent = (message); // Через год у вас будет XXX руб. на счету", где вместо ХХХ выведите сколько получится на счету с учетом процентной ставки 7% годовых
});

const newInterestRate = 7;
let sumAfterYear = sum * newInterestRate / 100;
console.log( 'Через год у вас будет ' + sumAfterYear + ' ' + currency + '.' + 'на счету' );