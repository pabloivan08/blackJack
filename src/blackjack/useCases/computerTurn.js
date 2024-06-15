import { takeCard, acumPoints, createCard, setWiner } from ".";

const computerTurn = ( playersScore, deck, turno, scores, deckDiv ) => {
  let computerScore = 0
  let minPoints = playersScore[0]

  if(!playersScore[turno]) throw new Error('minPoints required')
  if(!deck) throw new Error('deck required')

  do {
    const card = takeCard(deck)
    computerScore = acumPoints(card, playersScore, playersScore.length - 1, scores)
    createCard(card, playersScore.length - 1, deckDiv)

  } while ((computerScore < minPoints) && (minPoints < 22));

  setWiner(playersScore)
}

export { computerTurn }