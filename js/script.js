let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let dot = document.getElementById('dot');
let addition = document.getElementById('addition');
let subtraction = document.getElementById('subtraction');
let multiplication = document.getElementById('multiplication');
let division = document.getElementById('division');
let result = document.getElementById('result');
let clear = document.getElementById('clear');
let pole = document.getElementById('screen');
let number = document.getElementsByClassName('number');

//0. Начальное состояние строки ввода (в дальнейшем "экран") "0"
//1. При нажатии на цифры и точку - добавляется на экран
//2. Резльтат запоминается, пока не сотрем с помощью "С"
//3. При нажатии на оператор инпут очищается, операнд запоминается
//   При очередном нажатии на оператор, прозиводится предыдущая операция и запоминатся для дальнейших дествий
//4. При нажатии на "=" выводится результат на экран
//5. При нажатии на "С" экран переходит в начальное состояние и память очищается

function onButtonClick(eventObject) {
  let clickedElement = eventObject.currentTarget;
  let operation = clickedElement.innerHTML;
  console.log(operation);
}

let ton = document.getElementsByTagName('button');

for (i = 0; i < ton.length; i++) {
  ton[i].addEventListener('click', onButtonClick)
}
