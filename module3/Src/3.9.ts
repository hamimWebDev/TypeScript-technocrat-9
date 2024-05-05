{
  // Abstraction

  // Abstraction with interface & abstract
  interface Vesical1 {
    startEngin(): void;
    stopEngin(): void;
    move(): void;
  }

  class car implements Vesical1 {
    startEngin(): void {
      console.log(`Start the car`);
    }
    stopEngin(): void {
      console.log(`Stop the car`);
    }
    move(): void {
      console.log(`Moving the car`);
    }
    test() {
      console.log(`I am just Testing`);
    }
  }

  const toyota = new car();
  //   toyota.startEngin();
  //   toyota.stopEngin();
  //   toyota.move();
  //   toyota.test();

  // Abstraction with Abstract Class

  abstract class Car2 {
    abstract startEngin(): void;
    abstract stopEngin(): void;
    abstract move(): void;
    test() {
      console.log(`I am just Testing`);
    }
  }

  class HondaCAr extends Car2 {
    startEngin(): void {
      console.log(`Honda Start`);
    }
    stopEngin(): void {
      console.log(`Honda Start`);
    }
    move(): void {
      console.log(`Move Honda`);
    }
  }
  const hondaCar = new HondaCAr();
  hondaCar.startEngin();
  hondaCar.test();
  //
}
