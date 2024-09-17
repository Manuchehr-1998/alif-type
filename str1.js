function toUpperCase(str) {
  return str.toUpperCase();
}

function toLowerCase(str) {
  return str.toLowerCase();
}

function replaceSubstring(str, oldSubstr, newSubstr) {
  return str.replace(oldSubstr, newSubstr);
}

function splitString(str, delimiter) {
  return str.split(delimiter);
}

function trimString(str) {
  return str.trim();
}

//
console.log(toLowerCase("HELLO WORLD"));

//
console.log(toUpperCase("hello world"));

//
console.log(replaceSubstring("Hello world", "world", "everyone"));

//
console.log(splitString("apple,banana,orange", ","));

console.log(trimString("   Hello world   "));

// Методи toLowerCase ва  toUpperCase барои хамаи калимаро калон ва майда кадан мебошанд
// Методи replaceSubstring бошад барои буридан ва аз нав мондани калима дар хат мебошад
// Методи splitString бошад чумларо ба масив мегардонад ва хар як калимаро ба вергул чудо мекунад
// Методи trimString барои нест кардани пробелхо аз пеш ва кафо калима дар чумла мебошад
