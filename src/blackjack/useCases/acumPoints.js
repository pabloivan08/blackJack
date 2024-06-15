import { cardValue } from "./"

const acumPoints = ( card, playersScore, turno, scores ) => {

  playersScore[turno] = cardValue( card ) + playersScore[turno]
  scores[turno].innerText = playersScore[turno]
  
  return playersScore[turno]
}

export { acumPoints }