let porcentagem_combinacao = 0;

var btn_calcular = document.getElementById("btn_calcular");
btn_calcular.addEventListener("click", () => {
  let nome1 = document.getElementById("nome1").value;
  let nome2 = document.getElementById("nome2").value;
  let nome1manipulado = document.getElementById("nome1chave").value;
  let nome2manipulado = document.getElementById("nome1chave").value;
  let nome1min = nome1.toLowerCase();
  let nome2min = nome2.toLowerCase();
  var divporcentagemresult = document.getElementById("porcentagemresult");
  if (nome1manipulado == nome1min && nome2manipulado == nome2min) {
    var porcentagem_manipulada = document.getElementById(
      "porcentagem_manipulada"
    );
    porcentagem_combinacao = porcentagem_manipulada.value;
  }
  divporcentagemresult.innerHTML = porcentagem_combinacao + "%";
});
var enviar_nome_manipulado = document.getElementById("enviar_nome_manipulado");
enviar_nome_manipulado.addEventListener("click", () => {
  var caixa_manipular = document.getElementById("caixa_manipular");
  caixa_manipular.style.display = "none";
});
