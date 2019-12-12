import { Chicken, LayEggs } from "./4_I-sp";

export class OldEggsFarmer {
  produceEggs() {
    const chicken = new Chicken();
    chicken.layEggs();
  }
}

export class NewEggsFarmer {
  constructor(private eggsProducer: LayEggs) {}
  produceEggs() {
    this.eggsProducer.layEggs();
  }
}
