import _ from 'underscore'
const createDeck = ( deck ) => {

  const especiales = ['A', 'J', 'Q', 'K'],
        tipos = ['C', 'H', 'C', 'D']

  for(let i = 2; i <= 10; i++) {
    for(let tipo of tipos) {
      deck.push(i + tipo)
    }
  }
  for(let tipo of tipos) {
    for(let esp of especiales) {
      deck.push(esp + tipo)
    }
  }
  return deck
}

export { createDeck }