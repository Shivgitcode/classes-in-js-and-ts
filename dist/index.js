"use strict";
// fconsole.log("Hello");
// class Player {
//   readonly first: string;
//   readonly last: string;
//   //   public score: number = 0;
//   private score: number = 0;
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     this.secretMethod();
//   }
//   private secretMethod(): void {
//     console.log("Secret method!!");
//   }
// }
class Player {
    //   public score: number = 0;
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
        this.first = first;
        this.last = last;
        this.secretMethod();
    }
    secretMethod() {
        console.log("Secret method!!");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    //   set fullName(): string {}
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }
}
class AdminPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 9999999999;
    }
}
const elton = new Player("shivansh", "Aggarwal", 30);
console.log(elton.first);
console.log(elton.score);
console.log(elton.score);
elton.score = 30;
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
