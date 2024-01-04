function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

const el = document.getElementById("idK");

if (el) {
  el;
} else {
  el;
}

// const printLetters = (word?: string) => {
//   if (word) {
//     for (let char of word) {
//       console.log(char);
//     }
//   } else {
//     word;
//     console.log("YOU Did no pass in a word");
//   }
// };

// function someDemo(x: string | number, y: string | boolean) {
//   if (x === "3") {
//     x.toUpperCase();
//   }
// }

// someDemo(3, "3");

interface Movie {
  title: string;
  duration: number;
}

interface TVshow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVshow) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

console.log(getRuntime({ title: "Amadeus", duration: 140 }));
console.log(
  getRuntime({ title: "Spongebob", numEpisodes: 80, episodeDuration: 30 })
);

// console.log()

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    entity;
  } else {
    entity;
  }
}

interface Cats {
  name: string;
  numlives: number;
}

interface Dogs {
  name: string;
  breed: string;
}

function isCat(animal: Cats | Dogs): animal is Cats {
  return (animal as Cats).numlives !== undefined;
}

function makeNoise(animal: Cats | Dogs): string {
  if (isCat(animal)) {
    animal;
    return "Meow";
  } else {
    animal;
    return "Bow";
  }
}

interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink!";
    case "cow":
      return "Moo!";
    case "rooster":
      return "Cockadoodledoo!";
    case "sheep":
      return "Baaa!";
    default:
    // we should never make it here , if  we handled all cases correctly
    // const shouldNeverGetHere: never = animal;
    // return shouldNeverGetHere
  }
}

const stevie: Rooster = {
  name: "Stevia Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster",
};
