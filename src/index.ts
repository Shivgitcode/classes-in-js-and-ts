// // fconsole.log("Hello");

// // class Player {
// //   readonly first: string;
// //   readonly last: string;
// //   //   public score: number = 0;
// //   private score: number = 0;

// //   constructor(first: string, last: string) {
// //     this.first = first;
// //     this.last = last;
// //     this.secretMethod();
// //   }

// //   private secretMethod(): void {
// //     console.log("Secret method!!");
// //   }
// // }
// class Player {
//   //   public score: number = 0;

//   constructor(
//     public first: string,
//     public last: string,
//     protected _score: number
//   ) {
//     this.first = first;
//     this.last = last;
//     this.secretMethod();
//   }

//   private secretMethod(): void {
//     console.log("Secret method!!");
//   }

//   get fullName(): string {
//     return `${this.first} ${this.last}`;
//   }

//   //   set fullName(): string {}
//   set score(newScore: number) {
//     if (newScore < 0) {
//       throw new Error("Score cannot be negative");
//     }
//     this._score = newScore;
//   }
// }

// class AdminPlayer extends Player {
//   public isAdmin: boolean = true;
//   maxScore() {
//     this._score = 9999999999;
//   }
// }

// const elton = new Player("shivansh", "Aggarwal", 30);

// console.log(elton.first);
// console.log(elton.score);
// console.log(elton.score);

// elton.score = 30;
// // elton.score = 50;
// // elton.secretMethod();
// // elton.first="hello"

// interface Colorful {
//   color: string;
// }

// class Bike implements Colorful {
//   constructor(public color: string) {}
// }

// class Jacket implements Colorful {
//   constructor(public brand: string, public color: string) {}
// }

// const bike1 = new Bike("red");

// const jacket1 = new Jacket("Prada", "black");

// Generics

// function doThing(thing: number | string): number | string {}

// const nums : number[]=[]
const numbs: Array<number> = [];
const colors: Array<string> = [];

const input = document.querySelector<HTMLInputElement>("#username")!;
console.dir(input);
input.value = "hacked";

const btn = document.querySelector<HTMLButtonElement>("#btn");

// (<HTMLInputElement>input).value

// document.querySelector();

function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: boolean): boolean {
  return item;
}

// function identity(item: any): any {
//   return item;
// }

// function identity<Type>(item: Type): Type {
//   return item;
// }

// identity<string>("shivansh");
// identity<boolean>(true);
// identity<Cat>({})

function getRandomElement<Type>(item: Type[]): Type {
  const index = Math.floor(Math.random() * item.length);
  return item[index];
}

getRandomElement<number>([0, 1, 2, 3]);

function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

const comboObj = merge({ name: "shivansh" }, { pets: ["baki", "json"] });

// const combObj = merge({ name: "Colt" }, 9);

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

// console.log(combObj);

console.log(printDoubleLength("asdasdfsa"));
// console.log(printDoubleLength(234));

function makeEmptyArray<T = number>(): T[] {
  return [];
}

// const strings=makeEmptyArray<()

// function merge<T, U>(object1: T, object2: U) {
//   return {
//     ...object1,
//     ...object2,
//   };
// }

const comboobj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
