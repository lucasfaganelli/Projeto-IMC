import { Modal } from './modal.js' //importando coisas do export la do modal
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'

// variáveis - variable
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => {
  AlertError.close()
}
inputHeight.oninput = () => {
  AlertError.close()
}
form.onsubmit = function (event) {
  event.preventDefault() // faz com que ao enviar o formulario a pagina não recarregue

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height) // vai mostrar se vai ter numero ou não

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}` // mudando o texto da mensagem utilizando a variavel Message

  Modal.message.innerText = message
  Modal.open() // abrir o modal para aparecer na tela
}
