// Deck parts
let suitArray = ["hearts", "spades", "clubs", "diamonds"];
let rankArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
let scoreArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let fullDeck = [];
let decks = [];
let round = [];
let warRound = [];


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

war = (playerOne, playerTwo) => {
    
    let surrender = false;
    let oneDeck = playerOne.deck
    let twoDeck = playerTwo.deck
    console.log(oneDeck)
    console.log(playerOne.deck)

    while(!surrender) {
        if (surrender) {
            break;
        }
        if (oneDeck === 0 || twoDeck === 0) {
            surrender = true
        }
        console.log(`${playerOne.name}: ${oneDeck.length} ${playerTwo.name}: ${twoDeck.length}`)
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
                break;
            }
        } else if (round[0].score < round[1].score) {
            twoDeck.push(round[0], round[1]);
            console.log(`${playerTwo.name} won with: ${round[1].rank} of ${round[1].suit}`)
            round = [];
            if (oneDeck.length === 0) {
                surrender = true
                break;
            }
        } else {
            console.log("war!")
            let war = true;
            while(war) {
                if (!war) {
                    break;
                }
                if(oneDeck.length < 4 || twoDeck.length < 4) {
                    surrender = true
                    console.log("line 100")
                    if (oneDeck < twoDeck) {
                        console.log(`${playerTwo.name} won!`); 
                        for (let i = 0; i < round.length; i++) {
                            twoDeck.push(round[i])
                        }
                        round = []
                        twoDeck.push(warRound[0], warRound[1])
                    } else if (oneDeck > twoDeck) {
                        console.log(`${playerOne.name} won!`);
                        for (let i = 0; i < round.length; i++) {
                            oneDeck.push(round[i])
                        }
                        round = []
                        oneDeck.push(warRound[0], warRound[1])
                    }
                    break;
                }
                console.log(`${playerOne.name}: ${oneDeck.length} ${playerTwo.name}: ${twoDeck.length}`)
                round.push(oneDeck[0], oneDeck[1], oneDeck[2])
                round.push(twoDeck[0], twoDeck[1], twoDeck[2])
    
                oneDeck.splice(0,3)
                twoDeck.splice(0,3)
    
                warRound.push(oneDeck[0], twoDeck[0])

                oneDeck.splice(0,1)
                twoDeck.splice(0,1)

                console.log(`WAR! ${playerOne.name} played: ${warRound[0].rank} of ${warRound[0].suit}`); 
                console.log(`WAR! ${playerTwo.name} played: ${warRound[1].rank} of ${warRound[1].suit}`);

                if (warRound[0].score > warRound[1].score) {
                    round.push(warRound[0], warRound[1])
                    for (let i = 0; i < round.length; i++) {
                        oneDeck.push(round[i])
                    }
                    round = []
                    console.log(`WAR! ${playerOne.name} won with: ${warRound[0].rank} of ${warRound[0].suit}`);
                    warRound = []
                    // console.log("should be 0", warRound, round)
                    war = false
                    if (twoDeck < 4) {
                        console.log(twoDeck.length)
                        surrender = true
                        break;
                    }
                } else if (warRound[1].score > warRound[0].score) {
                    round.push(warRound[0], warRound[1])
                    for (let i = 0; i < round.length; i++) {
                        twoDeck.push(round[i])
                    }
                    round = []
                    console.log(`WAR! ${playerTwo.name} won with: ${warRound[1].rank} of ${warRound[1].suit}`); 
                    warRound = []
                    // console.log("should be 0", warRound, round)
                    war = false
                    if (oneDeck < 4) {
                        console.log(oneDeck.length)
                        surrender = true
                        break;
                    }
                } else {
                    round.push(warRound[0], warRound[1])
                    warRound = []
                    // console.log("should be 0", warRound)
                    console.log("The War Continues!")
                }
            }

        } 
    }
    if (surrender) {
        console.log("Game over", surrender)
        console.log(`${playerOne.name}: ${oneDeck.length}, ${playerTwo.name}: ${twoDeck.length}`)
        if (oneDeck < twoDeck) {
            console.log(`${playerTwo.name} won!`); 
        } else if (oneDeck > twoDeck) {
            console.log(`${playerOne.name} won!`);
        }
    }
}


dealCards()

let playerOneName = prompt("Player One's Name: ")
let playerTwoName = prompt("Player Two's Name: ")

let playerOne = new Player(playerOneName)
let playerTwo = new Player(playerTwoName)

war(playerOne, playerTwo)

