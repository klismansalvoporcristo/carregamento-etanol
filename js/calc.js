function converter (num) {
  var coranteMl = num*15
  var coranteL= coranteMl/1000
  document.getElementById("res").innerText=coranteMl+" Ml de corante"
  document.getElementById("resL").innerText=coranteL+" Litros de corante"
}
