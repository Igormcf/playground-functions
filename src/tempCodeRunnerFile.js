function generatePhoneNumber(numeros) {
  let ddd;
  let contadorNum = 0;
  let grupoNum1;
  let grupoNum2;
  
  for (let index = 0; index < numeros[2]; index += 1){
    ddd = numeros[index];
  }
  for (let index2 = 0; index2 >= numeros[2] || index2 <  numeros[7]; index2 += 1){
    grupoNum1 = numeros[index2];
  }
  for (let index3 = 0; index3 >= numeros[7] || index3 <= numeros.length - 1; index3 += 1){
    grupoNum2 = numeros[index3];
  }
  for (let index4 in numeros){
    let numeroAvaliado = numeros[index4];
    for (let index5 in numeros){
      let numCamparacao = numeros[index5];
        if (numCamparacao === numeroAvaliado){
          contadorNum += 1;
        }
    }
  }
  if (numeros.length > 11){
    return "Array com tamanho incorreto.";
  } else if (numeroAvaliado < 0 || numeroAvaliado > 9 || contadorNum === 3){
    return "não é possível gerar um número de telefone com esses valores";
  } else {
    return "(" + ddd + ")" + " " + grupoNum1 + "-" + grupoNum2;
  }
}
 console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));