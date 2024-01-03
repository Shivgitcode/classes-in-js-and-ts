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

  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {
    this.first = first;
    this.last = last;
    this.secretMethod();
  }

  private secretMethod(): void {
    console.log("Secret method!!");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  //   set fullName(): string {}
  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this._score = newScore;
  }
}

class AdminPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 9999999999;
  }
}

const elton = new Player("shivansh", "Aggarwal", 30);

console.log(elton.first);
console.log(elton.score);
console.log(elton.score);

elton.score = 30;
// elton.score = 50;
// elton.secretMethod();
// elton.first="hello"

interface Colorful {
  color: string;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful {
  constructor(public brand: string, public color: string) {}
}

const bike1 = new Bike("red");

const jacket1 = new Jacket("Prada", "black");
