let num = 5;

function applyUnaryPlus(num) {
  return +num;
}

function applyUnaryMinus(num) {
  return -num;
}

function increment(num) {
  return ++num;
}

function decrement(num) {
  return --num;
}

function increment(num) {
  return num++;
}

function decrement(num) {
  return num--;
}

console.log(applyUnaryPlus(5));
console.log(applyUnaryPlus("10"));

console.log(applyUnaryMinus(5));
console.log(applyUnaryMinus(-10));

console.log(increment(num));

console.log(decrement(num));

//якум кансоли функсия applyUnaryPlus танхо 5 мебарорад
//дуюм кансоли функсия applyUnaryPlus танхо string ро number када 10 мебарорад

//якум кансоли функсия applyUnaryMinus танхо -5 мебарорад
//дуюм кансоли функсия applyUnaryMinus адади минусаро адади плюса када  10  мебарорад

//кансоли функсия increment танхо +1 када мебарорад 6 мебарорад
//кансоли функсия decrement танхо -1 када мебарорад 4 мебарорад

//кансоли функсия increment  аввал ракамро бармегардона баьд +1 мекунад
//кансоли функсия decrement  аввал ракамро бармегардона баьд -1 мекунад
