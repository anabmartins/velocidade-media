resultado = []
desloc = document.getElementById('deslocamento').value
tempo = document.getElementById('tempo').value

function limpar() {
    document.getElementById('deslocamento').value = ''
    document.getElementById('tempo').value = ''
    document.getElementById('resultado').value = ''
}

function calcular() {
    if(desloc == ''|| tempo == ''){
    alert('preencha todos os campos')
}else{
    velocidade = (desloc/tempo)
    document.getElementById('resultado').value = velocidade
    
    lista = document.getElementById('lista').value

}
}