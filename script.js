resultados = []

function limpar() {
    document.getElementById('deslocamento').value = ''
    document.getElementById('tempo').value = ''
    document.getElementById('velmedia').value = ''
}

function calcular() {
    desloc = document.getElementById('deslocamento').value
    tempo = document.getElementById('tempo').value
    lista = document.getElementById('velmedia').value
    hist = document.getElementById('lista').value
    if(desloc == ''|| tempo == ''){
    alert('preencha todos os campos')
}else{
    velMedia = (desloc/tempo).toFixed(2)
    document.getElementById('velmedia').value = velMedia
    resultados.unshift(`Velocidade média de ${velMedia}`)
// document.getElementById('lista').innerHTML += resultados + '<br>'
    resultados.forEach(result => {
    document.getElementById('lista').innerHTML += result + "<br>"
   });
    }
}
