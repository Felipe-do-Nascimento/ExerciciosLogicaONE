var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 800, 500);

var raio = 10;
var xAleatorio;
var yAleatorio;
var pontos = 0;
var tentativas = 0;
var intervalo;

function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
pincel.clearRect(0, 0, 800, 500);
}

function desenhaAlvo(x, y) {
desenhaCirculo(x, y, raio+20, 'red');
desenhaCirculo(x, y, raio+10, 'white');
desenhaCirculo(x, y, raio, 'red');
}

function sorteiaPosicao(maximo) {
    return Math.floor(Math.random() * maximo);
}

function atualizaTela() {
    limpaTela();
    xAleatorio = sorteiaPosicao(800);
    yAleatorio = sorteiaPosicao(500);
    desenhaAlvo(xAleatorio, yAleatorio);
    tentativas++;
    if (tentativas >= 20) {
        clearInterval(intervalo);
        limpaTela();
        alert('Suas tentativas acabaram! Vocês acertou o alvo ' + pontos + ' vez(es).');
    }
}

function resultadoTentativa(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    if(x > (xAleatorio - raio) 
            && x < (xAleatorio + raio)
            && y > (yAleatorio - raio)
            && y < (yAleatorio + raio)) {
        alert('Acertou! Parabéns!')
        pontos = pontos + 1;

    }
}

function facil () {
    intervalo = setInterval(atualizaTela, 1000);
}

function medio () {
    intervalo = setInterval(atualizaTela, 700);
}

function dificil () {
    intervalo = setInterval(atualizaTela, 400);
}

function reiniciar () {
    tentativas = 0;
    pontos = 0;
}
  
tela.onclick = resultadoTentativa;
