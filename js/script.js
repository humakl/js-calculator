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
let pole = document.getElementById('window');


let btn = (btn) => document.getElementById(btn).innerHTML;

let alertt = () => alert('one');

let putInWindow = () => pole.value = 4;

one.addEventListener('click', alertt);
two.addEventListener('click', alertt);
three.addEventListener('click', alertt);
four.addEventListener('click', putInWindow);
clear.addEventListener('click', putInWindow);