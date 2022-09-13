resultado = []

function limpar() {
    document.getElementById('deslocamento').value = ''
    document.getElementById('tempo').value = ''
    document.getElementById('resultado').value = ''
}

function calcular() {
    desloc = document.getElementById('deslocamento').value
    tempo = document.getElementById('tempo').value

    velocidade = (desloc/tempo)

    document.getElementById('resultado').value = velocidade

}