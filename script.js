// Deck parts
let suitArray = ["hearts", "spades", "clubs", "diamonds"];
let rankArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
let scoreArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let fullDeck = [];


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
        this.deck = []
    }
}

class Deck {
    constructor(cards) {
        this.length = cards.length;
        this.cards = cards;
    }
}