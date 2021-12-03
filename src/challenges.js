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
function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseC1 = Math.abs(mouse - cat1);
  let distanceMouseC2 = Math.abs(mouse - cat2);

  if (distanceMouseC1 < distanceMouseC2){
    return "cat1";
  } else if (distanceMouseC2 < distanceMouseC1){
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index in array){
    let number = array[index];
    if (number % 3 === 0 && number % 5 !== 0){
      resultado.push("fizz");
    } else if (number % 5 === 0 && number % 3 !== 0){
      resultado.push("buzz");
    } else if (number % 3 === 0 && number % 5 === 0){
     resultado.push("fizzBuzz");
    } else {
      resultado.push("bug!");
    }
  }
  return resultado;
}

// Desafio 9
function encode(string1) {
  let novaFrase = string1.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5);
  return novaFrase;
}
function decode(string2) {
  let novaFrase2 = string2.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
  return novaFrase2;
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
