resultados = []

function limpar() {
    document.getElementById('deslocamento').value = ''
    document.getElementById('tempo').value = ''
    document.getElementById('velmedia').value = ''
    document.getElementById('lista').innerHTML = ''
}
if (localStorage.getItem('resultados') != null) {
    resultados = JSON.parse(localStorage.getItem('resultados'))
}
function calcular() {
    desloc = document.getElementById('deslocamento').value
    tempo = document.getElementById('tempo').value
    result = document.getElementById('velmedia').value
    hist = document.getElementById('lista').value
    if(desloc == ''|| tempo == ''){
    alert('preencha todos os campos')
}else{

    velMedia = (desloc/tempo).toFixed(2)
    document.getElementById('velmedia').value = velMedia
    resultados.unshift(velMedia)
    document.getElementById('lista').innerHTML += `Velocidade média de ${velMedia} Km/h <br>`
    //local storage

    resultados
    window.localStorage.setItem('resultados', JSON.stringify(resultados))

    }
 }
  
