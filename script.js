let suitArray = ["hearts", "spades", "clubs", "diamonds"]
let rankArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
let scoreArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

class Card {
    constructor(suit, rank, score) {
        this.suit =suit;
        this.rank = rank;
        this.score = score;
    }
}