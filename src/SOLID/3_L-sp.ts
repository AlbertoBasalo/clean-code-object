import { Animal } from "./1_Srp";

abstract class mamal extends Animal {
  abstract breastFeed();
  abstract giveBirth();
}

abstract class oviparous extends Animal {
  abstract layEggs();
}

class Pigeon extends oviparous {
  layEggs() {}
}

class Platypus extends mamal {
  breastFeed() {}
  layEggs() {}
}
