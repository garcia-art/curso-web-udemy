var altura = 0
var largura = 0
var vidas = 3
var tempo = 10
var criaMosquitoTempo = 2000

var nivel = window.location.search // retorna tudo que está a direita do ponto de interrogação
nivel = nivel.replace('?','')

if (nivel === 'facil') {
	var criaMosquitoTempo = 3000
}
else if (nivel === 'normal') {
	var criaMosquitoTempo = 1500
} 
else if(nivel === 'dificil') {
	var criaMosquitoTempo = 1000
}
else if (nivel === 'corona'){
	var criaMosquitoTempo = 750
}


function ajustaTamanhoPalcoJogo() {

	altura = window.innerHeight
	largura = window.innerWidth

}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
	tempo -= 1
	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
	document.getElementById('cronometro').innerHTML  = tempo// innerHTML -> texto que estra dentro das tags 
}

},1000)

//Criar o elemento html

function posicaoRandomica(){

	if(document.getElementById('mosquito')){

		if (vidas < 1) {
			window.location.href = 'fim_de_jogo.html'
		}else {
			document.getElementById('mosquito').remove()
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
			vidas--
		}


}// o if já interpreta true

var posicaox = Math.floor(Math.random() * largura) - 90
var posicaoy = Math.floor(Math.random() * altura) - 90

posicaox = posicaox < 0 ? 0 : posicaox
posicaoy = posicaoy < 0 ? 0 : posicaoy

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = tamanhoAleatorio() + ' ' +ladoAleatorio()
mosquito.style.left = posicaox + 'px'
mosquito.style.top = posicaoy + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function() {
	this.remove()
}
document.body.appendChild(mosquito)

}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)

	switch (classe) {
		case 0: 
		return 'mosquito1'
		case 1:
		return 'mosquito2'
		case 2: 
		return 'mosquito3'
	}
}

function ladoAleatorio(){

	var classe = Math.floor(Math.random() * 2)

	switch (classe) {
		case 0: return 'ladoA'
		case 1: return  'ladoB'
	}
}