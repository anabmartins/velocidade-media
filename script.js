resultados = []

function limpar() {
    document.getElementById('deslocamento').value = ''
    document.getElementById('tempo').value = ''
    document.getElementById('velmedia').value = ''
    document.getElementById('lista').innerHTML = ''
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
    resultados.unshift(`Velocidade média de ${velMedia}`)
    document.getElementById('lista').innerHTML += velMedia + '<br>'
    //local storage
    if (localStorage.getItem(velMedia) != null) {
        resultados = JSON.parse(localStorage.getItem('resultados'))
    }
    resultados.unshift(velMedia)
    localStorage.setItem('resultados', JSON.stringify(resultados))
    }
 }
  
