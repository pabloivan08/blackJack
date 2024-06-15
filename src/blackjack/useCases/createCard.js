const createCard = (card, turn, deckDiv) => {
  const cardImg = document.createElement('img')
  cardImg.src = `./assets/cartas/${card}.png`
  cardImg.classList.add('card')
  deckDiv[turn].append(cardImg)
}

export { createCard }