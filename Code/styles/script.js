function LeiaMais{
  var pontos = document.getElementById ('pontos');
  var Mais = document.getElementById ('Hidden-Text');
  var bttnMais = document.getElementById ('Ver Mais')

  if(pontos.style.display === "none"){
    pontos.style.display = "inline";
    bttnMais.style.display = "inline";
    Mais.style.display = "none";
  }else{
    pontos.style.display = "none";
    bttnMais.style.display = "none";
    Mais.style.display = "inline";
  }
}