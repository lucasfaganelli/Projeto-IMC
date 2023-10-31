export const Modal = {
  // variáveis
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonclose: document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonclose.onclick = () => {
  Modal.close() // fechar o modal quando clicar no X
}

window.addEventListener('keydown', handleKeydown) // vai fechar o modal quando apertar ESC do teclado
function handleKeydown(event) {
  if (event.key == 'Escape') {
    Modal.close()
  }
}
