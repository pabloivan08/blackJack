import { createDeck } from "./"
import _ from 'underscore'

const startGame = ( numPlayers, deck, playersScore, scores, deckDiv, takeBtn, stopBtn ) => {
  deck = createDeck( deck )
  
  for(let i = 0; i < numPlayers; i++) {
    playersScore.push(0)
  }
  
  scores.forEach(elem => elem.innerText = 0 )
  deckDiv.forEach(elem => elem.innerText = '' )
  
  takeBtn.disabled = false
  stopBtn.disabled = false
}

export { startGame }