function convertStringToNumber(str) {
  return Number(str);
}

function convertBooleanToNumber(bool) {
  return Number(bool);
}

function convertNullUndefinedToNumber(value) {
  return Number(value);
}

function convertStringToInt(str) {
  return parseInt(str, 10);
}

function convertStringToFloat(str) {
  return parseFloat(str);
}

function convertUsingUnaryPlus(value) {
  return +value;
}

console.log(convertUsingUnaryPlus("123"));
console.log(convertUsingUnaryPlus("12.34"));
console.log(convertUsingUnaryPlus(true));
console.log(convertUsingUnaryPlus(false));
console.log(convertUsingUnaryPlus(null));
console.log(convertUsingUnaryPlus(undefined));

console.log(convertStringToFloat("123.45"));
console.log(convertStringToFloat("12.34abc"));
console.log(convertStringToFloat("abc123"));

console.log(convertStringToInt("123"));
console.log(convertStringToInt("12.34"));
console.log(convertStringToInt("abc123"));

console.log(convertNullUndefinedToNumber(null));
console.log(convertNullUndefinedToNumber(undefined));

console.log(convertBooleanToNumber(true));
console.log(convertBooleanToNumber(false));

console.log(convertStringToNumber("123"));
console.log(convertStringToNumber("12.34"));
console.log(convertStringToNumber("abc"));

//  коротко тут Number переобразует тип если в стринге число или это булен если null то 0 будет а если undefined то NaN будет
// parseInt преобразует строку в целое число. Если строка содержит символы, которые нельзя преобразовать в число, результатом будет NaN.
// parseFloat() преобразует строку в число с плавающей точкой. Если строка содержит дополнительные символы после числа, они игнорируются, но если строка начинается с некорректного символа, результатом будет NaN.
// Унарный оператор + также используется для явного преобразования значений в числа.
