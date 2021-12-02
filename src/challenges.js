// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let arrayString = frase.split(" ");
  return arrayString;
}

// Desafio 4
function concatName(array) {
  let lastFirst = array[array.length - 1] + ',' + ' ' + array[0];
  return lastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosW = wins * 3;
  let pontosT = ties * 1;
  let pontuacaoTotal = pontosW + pontosT;

  return pontuacaoTotal;
}

// Desafio 6
function highestCount(array) {
  let numMaior = array[0];
  let numRepeticao = 0; 
  for (let index in array){
    if (numMaior < array[index]){
      numMaior = array[index];
    }
  }
  for (let index2 in array){
    let numAvaliado = array[index2];
    if (numAvaliado === numMaior){
      numRepeticao += 1;
    }
  }
  return numRepeticao;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
