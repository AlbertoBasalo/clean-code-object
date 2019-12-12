// ❌ two jobs for the same buddy
export class AnimalFULL {
  constructor(public name: string) {}
  getAnimalName() {}
  saveAnimal(a: Animal) {}
}

// ✔️ holds data an basic logic
export class Animal {
  constructor(public name: string) {}
  getAnimalName() {}
}
// ✔️ persistance
export class AnimalDB {
  selectAnimal(name: string) {}
  saveAnimal(a: Animal) {}
}
