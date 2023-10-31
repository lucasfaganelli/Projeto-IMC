export function notANumber(value) {
  return isNaN(value) || value == '' // isso || quer dizer OU
}

export function calculateIMC(weight, height) {
  // Função IMC
  return (weight / (height / 100) ** 2).toFixed(2)
}
