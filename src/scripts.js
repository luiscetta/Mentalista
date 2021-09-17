// lib para gerar um número aleatório de 0 a 10.
let numeroSecreto = parseInt(Math.random() * 11);
console.log("o numero secreto é " + numeroSecreto);

let tentativas = 3;
const elementoResultado = document.getElementById("resultado");

// pode esconder o form todo
let hideForm = false;
let hideTryAgainButton = true;

function toggleTryAgainButton() {
  document.getElementById("again-btn").hidden = hideTryAgainButton;
}

function toggleForm() {
  hideForm = !hideForm;

  document.getElementById("form-1").hidden = hideForm;
}

function fillResult(text) {
  document.getElementById("resultado").innerHTML = text;
}


function Chutar() {

    // pegar apenas o valor inserido no input; parseInt - pega apenas numeros inteiros.
    let chute = parseInt(document.getElementById("valor").value);
    console.log(chute);

    if (chute == numeroSecreto) {
      fillResult("Acertô, mizeravi!")
    } else if (chute > 10 || chute < 0) {
      fillResult("Digite um número de 0 a 10!")
    } else {
      tentativas -= 1;
      tentativas === 0 ?
        TryAgain(`Tentativas esgotadas! O número era ${numeroSecreto}.`)
        :
        fillResult(`Errrrrou! Tente novamente. ${tentativas} tentativas restantes.`)
    }
}

function TryAgain(message) {
  toggleForm();
  toggleTryAgainButton();
  fillResult(message);
}

// numero de tentativas
// ao errar, mostrar se q o número é maior ou menor do que vc colocou
