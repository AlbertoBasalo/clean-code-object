import { Animal } from "./1_Srp";

export interface LayEggs {
  layEggs();
}

export interface GiveBirth {
  giveBirth();
}

export interface BreastFeed {
  breastFeed();
}

export class Chicken implements LayEggs {
  layEggs() {}
}

export class Platypus implements LayEggs, BreastFeed {
  breastFeed() {}
  layEggs() {}
}
