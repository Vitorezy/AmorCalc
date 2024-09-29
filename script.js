let porcentagem_combinacao = 0;
var btn_resetar = document.getElementById('btn_resetar')
var caixa_manipular = document.getElementById("caixa_manipular");
var enviar_nome_manipulado = document.getElementById("enviar_nome_manipulado");
var porcentagem_manipulada = document.getElementById(
  "porcentagem_manipulada"
)
enviar_nome_manipulado.addEventListener("click", () => {
  caixa_manipular.style.display = "none";
});
var descricao_resultado = document.getElementById('descricao_resultado')
var btn_calcular = document.getElementById("btn_calcular");
var divporcentagemresult = document.getElementById("porcentagemresult");
btn_calcular.addEventListener("click", () => {
  let nome1 = document.getElementById("nome1").value;
  let nome2 = document.getElementById("nome2").value;
  let nome1min = nome1.toLowerCase();
  let nome2min = nome2.toLowerCase();
  let nome1manipulado = document.getElementById("nome1chave").value;
  let nome2manipulado = document.getElementById("nome2chave").value;
  function mensagemfinal() { 
    if(porcentagem_combinacao == 0) { 
      descricao_resultado.innerHTML = `FUJA PARA AS COLINAS!!! ELES NÃO PODEM FICAR JUNTOS DE MANEIRA ALGUMA. 😭🤒🤮`
    }
    else if(porcentagem_combinacao > 0 && porcentagem_combinacao < 20) { 
      descricao_resultado.innerHTML = `Sinto lhe dizer mas ${nome1min} e ${nome2min} é uma péssima combinação... mas eles podem viver felizes com outras pessoas :) (ou não... mas seremos positivos) 😪😥🤢`
    }
    else if(porcentagem_combinacao > 20 && porcentagem_combinacao < 40) { 
      descricao_resultado.innerHTML = `Quem sabe ${nome1min} e ${nome2min} devessem procurar em outro lugar... não combina muito, mas quem sabe, né? 🤔😓😦`
    }
    else if(porcentagem_combinacao > 40 && porcentagem_combinacao < 60) { 
      descricao_resultado.innerHTML = `existe uma micro química entre ${nome1min} e ${nome2min}, com esforço pode sim dar certo! eles seriam um bom casal. 😳😼😏`
    }
    else if(porcentagem_combinacao > 60 && porcentagem_combinacao < 80) { 
      descricao_resultado.innerHTML = `WOW, esse é um ótimo casal, vale a pena tentar! ${nome1min} e ${nome2min} seriam muito felizes juntos 😉😌🙂`
    }
    else if(porcentagem_combinacao > 80 && porcentagem_combinacao < 100) { 
      descricao_resultado.innerHTML = `${nome1min} e ${nome2min} são um casal PERFEITO... essa combinação resultará em uma linda e feliz família. qualquer outro casal sentiria inveja da magnitude que são! 😁😄😎`
    }
    else if(porcentagem_combinacao == 100) { 
      descricao_resultado.innerHTML = `${nome1min} e ${nome2min} são um casal EXTRAORDINÁRIO... SE CASEM E FORMEM UMA FAMILIA O QUANTO ANTES... vocês me encantam 😲🥳😻`
    }
  }
  if(nome1min == '' || nome2min == '') { 
    divporcentagemresult.innerHTML = 'Escolha dois nomes.'
    divporcentagemresult.style.display = 'block'
    descricao_resultado.style.display = 'none'
  }
  else if (
    (nome1manipulado == nome1min && nome2manipulado == nome2min) ||
    (nome2manipulado == nome1min && nome1manipulado == nome2min)
  ) {
    porcentagem_combinacao = porcentagem_manipulada.value;
    divporcentagemresult.innerText = porcentagem_combinacao + "%";
    divporcentagemresult.style.display = 'block'
    descricao_resultado.style.display = 'inline-block'
    mensagemfinal()
  } else { 
    porcentagem_combinacao = Math.floor(Math.random() * 100);
    divporcentagemresult.innerText = porcentagem_combinacao + "%";
    divporcentagemresult.style.display = 'block'
    descricao_resultado.style.display = 'inline-block'
    mensagemfinal()
  }
}); 
btn_resetar.addEventListener('click', ()=> { 
  descricao_resultado.style.display = 'none'
  divporcentagemresult.style.display = 'none'
})
window.addEventListener("keydown", (Event) => {
  if (Event.shiftKey && Event.code === "Space") {
    if (caixa_manipular.style.display == "block") {
      caixa_manipular.style.display = "none";
    } else {
      caixa_manipular.style.display = "block";
    }
  }
});
var botao_escondido = document.getElementById('botao_escondido')
botao_escondido.addEventListener('click', ()=> { 
    if (caixa_manipular.style.display == "block") {
      caixa_manipular.style.display = "none";
    } else {
      caixa_manipular.style.display = "block";
    }
  
})