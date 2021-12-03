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

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
