const setWiner = (playersScore) => {
  const [ minPoints, computerScore ] = playersScore
  setTimeout(() => {
    if(computerScore === minPoints) {
      alert('empate')
    } else if(minPoints > 21) {
      alert('perdiste')
    } else if(computerScore > 21) {
      alert('ganaste!')
    } else {
      alert('perdiste')
    }
  }, 100)
}

export { setWiner }