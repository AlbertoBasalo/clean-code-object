import { Animal } from "./1_Srp";

const animals: Array<Animal> = [new Animal("lion"), new Animal("mouse")];

// ❌ the switch way down
function makeAnimalSound(animals: Array<Animal>) {
  for (let i = 0; i <= animals.length; i++) {
    if (animals[i].name === "lion") console.log("roar");
    if (animals[i].name === "mouse") console.log("shee");
  }
}
makeAnimalSound(animals);

// ✔️ closed for modification
export abstract class AnimalTalker extends Animal {
  abstract makeSound();
}
class Lion extends AnimalTalker {
  makeSound() {
    return "roar";
  }
}
// ✔️ Open for extension
class Mouse extends AnimalTalker {
  makeSound() {
    return "shee";
  }
}
function makeTalkingAnimalSound(animals: Array<AnimalTalker>) {
  animals.forEach(animal => animal.makeSound());
}
const talkingAnimals = [new Lion("lion"), new Mouse("mouse")];
makeTalkingAnimalSound(talkingAnimals);
