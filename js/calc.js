function converter (num) {
  var coranteMl = (num/1000)*15
  var coranteL= (coranteMl/1000).toFixed(3)
  document.getElementById("resM").innerText=(num/1000)+" Metros cubicos de etanol"
  document.getElementById("res").innerText=coranteMl+" Ml de corante"
  document.getElementById("resL").innerText=coranteL+" Litros de corante"
}
