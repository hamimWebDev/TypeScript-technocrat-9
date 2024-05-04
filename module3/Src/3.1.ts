{
  // OOP class

  //   class Animal {
  //     name: string;
  //     species: string;
  //     sound: string;

  //     constructor(name: string, species: string, sound: string) {
  //       this.name = name;
  //       this.species = species;
  //       this.sound = sound;
  //     }

  //     makeSound() {
  //       console.log(`The ${this.name} say ${this.sound}`);
  //     }
  //   };

  // parameter properties

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} say ${this.sound}`);
    }
  }

  const dog = new Animal("Roky", "dog", "GAuGau");

  const cat = new Animal("Meo", "Cat", "MeoMeo");

  console.log(dog);
  console.log(cat);
  cat.makeSound();
  dog.makeSound();

  //
}
