class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {

    // ... write your code here
for (let i =0; i < this.cards.length; i++) {
  let j = Math.ramdom(this.cards.length)
  console.log(this.cards)
  if (j !== i) {
  this.cards[i] = this.cards[j]
  return this.cards[i]
}
}

  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    let guessed = card1 === card2
    guess ? this.pairGuessed++:false

    return guessed
  }

  checkIfFinished() {
    // ... write your code here

return this.pairsGuessed === this.cards.lenght/2  }
  }

// The following is required for automated testing. Please, ignore it
if (typeof module !== 'undefined') module.exports = MemoryGame;


