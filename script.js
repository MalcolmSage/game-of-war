// Deck parts
let suitArray = ["hearts", "spades", "clubs", "diamonds"];
let rankArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
let scoreArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let fullDeck = [];
let decks = [];


class Card {
    constructor(suit, rank, score) {
        this.suit =suit;
        this.rank = rank;
        this.score = score;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.deck = decks.pop()
    }
}

shuffle = () => {
    for(let i = fullDeck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random()*(i+1));
      [fullDeck[i], fullDeck[j]] = [fullDeck[j], fullDeck[i]];
  }
}

splitDeck = () => {
    let split = Math.ceil(fullDeck.length / 2);
    let one = fullDeck.splice(0, split)
    let two = fullDeck.splice(-split)
    decks.push(one,two)
}

dealCards = () => {
    fullDeck = [];
    for (let i = 0; i < suitArray.length; i++) {
      for (let j = 0; j < rankArray.length; j++){
        let card = new Card(suitArray[i], rankArray[j], scoreArray[j])
        fullDeck.push(card)   
      }
    }
    shuffle()
    splitDeck()
  }



let round = []

war = (playerOne, playerTwo) => {
    
    let surrender = false;
    let oneDeck = playerOne.deck
    let twoDeck = playerTwo.deck
    console.log(oneDeck)
    console.log(playerOne.deck)

    while(!surrender) {
        round.push(oneDeck[0]);
        oneDeck.splice(0,1);
        round.push(twoDeck[0]);
        twoDeck.splice(0,1);
        console.log(`${playerOne.name} played: ${round[0].rank} of ${round[0].suit}`); 
        console.log(`${playerTwo.name} played: ${round[1].rank} of ${round[1].suit}`);
        if (round[0].score > round[1].score) {
            oneDeck.push(round[0], round[1]);
            console.log(`${playerOne.name} won with: ${round[0].rank} of ${round[0].suit}`)
            round = [];
            if (twoDeck.length === 0) {
                surrender = true
            }
        } else if (round[0].score < round[1].score) {
            twoDeck.push(round[0], round[1]);
            console.log(`${playerTwo.name} won with: ${round[1].rank} of ${round[1].suit}`)
            round = [];
            if (oneDeck.length === 0) {
                surrender = true
            }
        } else {
            console.log("war!")
            surrender = true
        }
    }
}


dealCards()
let playerOneName = prompt("Player One's Name: ")
let playerTwoName = prompt("Player Two's Name: ")

let playerOne = new Player(playerOneName)
let playerTwo = new Player(playerTwoName)

war(playerOne, playerTwo)

