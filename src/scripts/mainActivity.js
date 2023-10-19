const phrases = [
  "De todas as palavras do dicionário, escolho usar três hoje: <rb> <br> Quer namorar comigo?",
  "Tô precisando de uma pessoa para dividir minhas piadas sem graça e minhas besteiras. Quer ser essa pessoa e namorar comigo?",
  "Sempre quando penso em você, meu corpo inteiro sorri! <br> <br> Aceita namorar comigo e me provocar cada vez mais sorrisos?",
  "Eu te ofereço amor e cafuné. Em troca, você namora comigo. <br> <br> Que tal?",
  "Temos o poder de tornar essa data inesquecível. Como? Podemos combinar que será o dia do início do nosso namoro. <br> <br> Aceita?",
  "Você preencheu o meu coração, ocupou o vazio entre os meus braços e agora só falta mudar o meu status. <br> <br> Vamos namorar?",
  "Já preparei tudo para garantir um futuro fantástico para a gente. <br> <br> Só preciso de uma coisa de você: aceita namorar comigo?",
  "Hoje escutei uma música que me fez pensar em você:<br> <br> Ela começava com “namora” e terminava “comigo?”",
  "Desde que te conheci, meu coração nunca mais foi o mesmo. Agora ele bate num ritmo diferente. Pela felicidade do meu coração, namora comigo?",
  "Acho que a vida sem você já não tem mais sentido. <br> <br> Vamos namorar?",
  "Vamos fazer um jogo? Você precisa dizer sim para as três próximas perguntas. Lá vai: Vamos ver o seu filme predileto hoje? Vamos pedir comida? <br> <br> Aceita namorar comigo?",
  "Todos sempre me perguntam o porquê de ainda não namorarmos. <br> <br> E eu também não sei! Aceita namorar comigo?",
  "Já que não posso me namorar, pergunto para a única outra pessoa no mundo que eu namoraria: <br> <br> namora comigo?",
]

function randomPhrase(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max + min) - min)
}

const crush = localStorage.getItem("crush") ?? "",
  boxMessage = document.querySelector(".box-message > p"),
  noBtnArea = document.querySelector(".no-btn-area")

boxMessage.innerHTML = `Oi${crush ? "" : ","} ${crush ? crush + "," : ""} ${
  phrases[randomPhrase(0, phrases.length)]
}`

noBtnArea.addEventListener("mouseover", () => {
  noBtnArea.style = `transform: translate(${randomNumber(
    10,
    10
  )}rem, ${randomNumber(10, 10)}rem)`
})

function randomNumber(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max + min) - min)
}
