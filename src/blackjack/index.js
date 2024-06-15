import _ from 'underscore'
import { takeCard, computerTurn, startGame, acumPoints, createCard } from './useCases'

(() => {
  'use strict'

  let deck = [],
      playersScore = []

  const takeBtn = document.querySelector('#takeBtn'),
        resetBtn = document.querySelector('#resetBtn'),
        stopBtn = document.querySelector('#stopBtn'),
        scores = document.querySelectorAll('small'),
        deckDiv = document.querySelectorAll('.deck-cards'),
        money = document.querySelector('span') 

  resetBtn.addEventListener('click', () => {
    deck = []
    playersScore = []
    startGame(2, deck, playersScore, scores, deckDiv, takeBtn, stopBtn)
    deck = _.shuffle(deck)
    console.clear()
  })

  takeBtn.addEventListener('click', () => {
    const card = takeCard( deck )
    const playerScore = acumPoints( card, playersScore, 0, scores )
    
    createCard(card, 0, deckDiv)
    console.log(deck)
    
    if ( playerScore >= 21 ) {
      takeBtn.disabled = true 
      computerTurn( playersScore, deck, 0, scores, deckDiv )
    } 
  })

  stopBtn.addEventListener('click', () => {
    takeBtn.disabled = true 
    stopBtn.disabled = true
    computerTurn(playersScore, deck, 0, scores, deckDiv)
  })

  startGame(2, deck, playersScore, scores, deckDiv, takeBtn, stopBtn)
  deck = _.shuffle(deck)

})()
