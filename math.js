let arrMax = [1, 2222, 5, 7, 8, 9, 7, 25, 101];
let arrMin = [1, 2222, 5, 7, 8, 9, 7, 25, 101];

let nearest = 5.4;

let sqrt = 9;

///
function max(a) {
  return Math.max(...a);
}

///

function min(a) {
  return Math.min(...a);
}

///
function roundToNearest(a) {
  return Math.round(a);
}

///
function roundUp(a) {
  return Math.ceil(a);
}

//
function roundDown(a) {
  return Math.floor(a);
}

//
function findSquareRoot(a) {
  return Math.sqrt(a);
}

///
function randomNumber(a) {
  return Math.floor(Math.random() * a * 10);
}

///
console.log("максимального=", max(arrMax));
console.log("минимального=", min(arrMin));

///
console.log("ближайшего целого", roundToNearest(nearest));
console.log("округления вверх", roundUp(nearest));
console.log("кругления вниз", roundDown(nearest));

//
console.log("квадратного корня", findSquareRoot(sqrt));

//
console.log(randomNumber(12));

// Ма ба фахмидагии худам чавоб медихам хар як методи ки аз библотекаи Math мо мегирем танхо бо ракам кор мекунад ва хар як номи метод мегуяд ки чок мекнуд аз номашд дида истифода мебарем мисол min max ба мо кумак мекунанд ки аз массив хурдтарин ва калонтарин ебанд мисли фор кор мекунад мисол фор ва иф дорад ки хар як раками масивро гирифта месанчанд ва хурдтарин ва калонтаринро ба мо медиханд
// Дагар метод хо низ логикаи кор куни худро доранд
