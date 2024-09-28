let porcentagem_combinacao = 0;

var caixa_manipular = document.getElementById("caixa_manipular");
var enviar_nome_manipulado = document.getElementById("enviar_nome_manipulado");
enviar_nome_manipulado.addEventListener("click", () => {
  caixa_manipular.style.display = "none";
});

var btn_calcular = document.getElementById("btn_calcular");
btn_calcular.addEventListener("click", () => {
  let nome1 = document.getElementById("nome1").value;
  let nome2 = document.getElementById("nome2").value;
  let nome1min = nome1.toLowerCase();
  let nome2min = nome2.toLowerCase();
  let nome1manipulado = document.getElementById("nome1chave").value;
  let nome2manipulado = document.getElementById("nome2chave").value;
  var divporcentagemresult = document.getElementById("porcentagemresult");
  if(nome1min == '' || nome2min == '') { 
    divporcentagemresult.innerHTML = 'Escolha dois nomes.'
  }
  else if (
    (nome1manipulado == nome1min && nome2manipulado == nome2min) ||
    (nome2manipulado == nome1min && nome1manipulado == nome2min)
  ) {
    var porcentagem_manipulada = document.getElementById(
      "porcentagem_manipulada"
    );
    porcentagem_combinacao = porcentagem_manipulada.value;
    divporcentagemresult.innerText = porcentagem_combinacao + "%";
  } else { 
    porcentagem_combinacao = Math.floor(Math.random() * 100);
    divporcentagemresult.innerText = porcentagem_combinacao + "%";
  }
  
});
window.addEventListener("keydown", (Event) => {
  if (Event.shiftKey && Event.code === "Space") {
    if (caixa_manipular.style.display == "block") {
      caixa_manipular.style.display = "none";
    } else {
      caixa_manipular.style.display = "block";
    }
  }
});
