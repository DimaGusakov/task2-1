// Task 1
// const user = prompt('Введите своё имя');
// alert('Привет, ' + user + '!');
// Task 2
// const num = prompt('Введите число');
// const pow = prompt('Введите степень');
// console.log(num ** pow);
// Task 4
// let text = 'my text';
// if (text === 'some text'){
//   text = 'another text';
// } else {
//     text = 'some text';
//   }
// console.log(text);
//Task 5
// let num = 0;
// if (num === 0) {
//   num = 1;
// } else if (num < 0) {
//   num = 'less then zero';
// } else {
//   num*= 10;
// }
// console.log(num);
//Task 6
// const num = prompt('Введите число ');
// let result = 0;
// if (num < 5) {
//   result = '0';
// } else {
//   result = '1';
// }
// console.log(result);
//Task 7
// const num1 = prompt('Введите первое число');
// const num2 = prompt('Введите второе число');
// if (num1 > num2){
//   console.log(num1);
// } else if (num1 == num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }
//Task 8
// const num1 = prompt('Введите первое число');
// const num2 = prompt('Введите второе число');
// if ((num1 % num2) == 0){
//   console.log('Число ' + num1 + ' кратно числу ' + num2);
// } else{
//   console.log('Число ' + num1 + ' некратно числу ' + num2);
// }
//Task 9
// const srbal = prompt('Введите свой средний балл');
// if (srbal >= 1 && srbal <= 4) {
//   console.log('Двоечник, иди учись!');
// } else if (srbal >= 5 && srbal <= 8) {
//   console.log('Неплохо, но давай еще поднажмем!');
// } else {
//   console.log('Ого, да ты настоящий отличник!');
// }
//Task 10
// const num1 = prompt('Введите балл за экзамен');
// const num2 = prompt('Введите количество выполненных проектов');
// if (num1 > 90 || num2>10) {
//   console.log(100);
// } else if (num1 > 75 && num2 >= 5) {
//   console.log(90);
// } else if (num1 > 50 && num2 >= 2) {
//   console.log(75);
// } else {
//   console.log(0);
// }
//Task 11
// const day = prompt('Введите количество дней аренды');
// const money = day * 40;
// let obstoim = 0;
// if (day >= 7){
//   obstoim = money - 50;
// } else if (day >= 3) {
//   obstoim = money - 20;
// } else {
//   obstoim = money;
// }
// console.log('Общая стоимасть равна ' + obstoim + '$' );