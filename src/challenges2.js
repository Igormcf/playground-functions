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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
