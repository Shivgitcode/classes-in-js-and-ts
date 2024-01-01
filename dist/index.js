"use strict";
console.log("Hello");

class Player {
  static description = "Player In Our Game";
  numLives = 10;
  #score = 0;
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#sceret();
    // console.log("IN constructor");
  }

  getScore() {
    console.log(this.#score);
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive");
    }
    this.#score = newScore;
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  get score() {
    return this.#score;
  }

  updateScore(newscore) {
    this.#score = newscore;
  }

  taunt() {
    console.log("BOOYAH!");
  }

  loseLife() {
    this.numLives -= 1;
  }
  #sceret() {
    console.log("Wallah");
  }
}

const player1 = new Player();
console.log(player1);

const player2 = new Player("shivansh", "aggrwal");
// console.log(player2.first);
// console.log(player1.numLives);
// console.log(player1.score);
// player1.loseLife();
// console.log(player1.numLives);
// player2.taunt();
// // player2.#score;
player2.getScore();
player2.updateScore(30);
player2.getScore();
console.log(player2.fullName);
player1.score = 2342;
console.log(player1.score);
// player1.description;
console.log(player1.description);
console.log(Player.description);
