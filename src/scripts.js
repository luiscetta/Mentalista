// lib para gerar um número aleatório de 0 a 10.
let numeroSecreto = parseInt(Math.random() * 11);

console.log("o numero secreto é " + numeroSecreto);

function Chutar() {
  let elementoResultado = document.getElementById("resultado");

  // pegar apenas o valor inserido no input; parseInt - pega apenas numeros inteiros.
  let chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Acertô, mizeravi!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Digite um número de 0 a 10!";
  } else {
    elementoResultado.innerHTML = "Errrrrou! Tente novamente! ";
  }
}

// numero de tentativas
// ao errar, mostrar se q o número é maior ou menor do que vc colocou
