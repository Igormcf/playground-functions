// Desafio 10
function techList(technology, name) {
  technology.sort();
  let resultado = [];
  for (let index in technology) {
    let objeto = {
      tech: technology[index],
      name,
    };
    resultado.push(objeto);
  }
  if(technology.length === 0){
    return"Vazio!";
  } else {
    return resultado;
  }
}

// Desafio 11
function generatePhoneNumber(numeros) {
  let ddd = numeros.join('').slice(0, 2);
  let grupoNum1 = numeros.join('').slice(2, 7);
  let grupoNum2 = numeros.join('').slice(7, );
  let telefone = "(" + ddd + ")" + " " + grupoNum1 + "-" + grupoNum2;
 
  if (numeros.length !== 11){
    return "Array com tamanho incorreto.";
  }
  for (let index in numeros){
    let contador = 0;
    if (numeros[index] < 0 || numeros[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    for (let index2 in numeros){
      if(numeros[index2] === numeros[index]){
        contador = contador + 1;
      }
      if(contador >= 3){
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
  return telefone
}

// Desafio 12
function triangleCheck(l1, l2, l3) {
  let somaL1L2 = l1 + l2;
  let somaL1L3 = l1 +l3;
  let somaL2L3 = l2 + l3;
  let abs3 = Math.abs(l1 - l2);
  let abs2 = Math.abs(l1 - l3);
  let abs1 = Math.abs(l2 - l3);
  if (l3 > somaL1L2 || l3 < abs3 || l2 > somaL1L3 || l2 < abs2 || l1 > somaL2L3 || l1 < abs1){
    return false;
  } else {
    return true;
  }
}

// Desafio 13
function hydrate(frase) {
  let a = /[1-9]/g;
  let match = frase.match(a).map(Number);
   let soma = 0;
  for (let index = 0; index < match.length; index += 1) {
      soma = soma + match[index];
  } 
  if (soma === 1) {
    return soma + " copo de água";
  } else {
    return soma + " copos de água";
  }
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
