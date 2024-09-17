function findSubstring(str, substr) {
  return str.indexOf(substr);
}

function checkSubstring(str, substr) {
  return str.includes(substr);
}

function extractSubstring(str, start, end) {
  return str.slice(start, end);
}

function startsWithSubstring(str, substr) {
  return str.startsWith(substr);
}

function endsWithSubstring(str, substr) {
  return str.endsWith(substr);
}

function formatString(str) {
  const trimmedStr = str.trim();
  const upperStr = trimmedStr.toUpperCase();
  return upperStr;
}

console.log(findSubstring("Salom Dushanbe", "Dushanbe"));
console.log(findSubstring("Salom Dushanbe", "abc"));

console.log(checkSubstring("Salom Dushanbe", "Dushanbe"));
console.log(checkSubstring("Salom Dushanbe", "abc"));

console.log(extractSubstring("Salom Dushanbe", 0, 5));
console.log(extractSubstring("Salom Dushanbe", 6, 14));

console.log(startsWithSubstring("Salom Dushanbe", "Salom"));
console.log(endsWithSubstring("Salom Dushanbe", "Dushanbe"));
console.log(endsWithSubstring("Salom Dushanbe", "Salom"));

console.log(formatString("   Salom Duhsanbe  "));

// indexOf этои поиск подстроки если найдет ответит под какой индекс если нет то ответ -1 будет
// includes Проверка наличия подстроки если найдет будет true если нет то будет false
// slice   Извлечение подстроки  мы отправим три параметр и можем дать start end и покажит все это в индекс
// Проверка начала и конца строки startsWith проверка по старту если есть true если нет то false
// Проверка начала и конца строки endsWith проверка по последный если есть true если нет то false
// Форматирование строки  trim как мы уже знаем для удаление пробелов toUpperCase как мы знаем для Преобразуем в верхний регистр
