const cardValue = ( card ) => {
  const value = card.substring(0, card.length - 1) 
  return value === 'A' ? 11 : !isNaN(value) ? value * 1 : 10
}

export { cardValue }