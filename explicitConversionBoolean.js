function convertUsingDoubleNegation(value) {
  return Boolean(value);
}

console.log(convertUsingDoubleNegation("hello"));
console.log(convertUsingDoubleNegation(""));
console.log(convertUsingDoubleNegation(42));
console.log(convertUsingDoubleNegation(0));
console.log(convertUsingDoubleNegation({}));
console.log(convertUsingDoubleNegation(null));
console.log(convertUsingDoubleNegation(undefined));
console.log(convertUsingDoubleNegation(NaN));
// Для явного преобразования значений в логический тип в JavaScript используются функции Boolean() или двойное логическое отрицание !!. Эти методы позволяют контролировать преобразование и точно определить, какие значения считаются "ложными" (false), а какие — "истинными" (true).
