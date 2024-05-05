{
  //instanceof guard

  class Animal {
    constructor(public name: string, public species: string) {}

    makeSound() {
      console.log(`I am making sound`);
    }
  }

  class Dog extends Animal {
    constructor(public name: string, public species: string) {
      super(name, species);
    }

    makeBark() {
      console.log(`I am barking`);
    }
  }

  class Cat extends Animal {
    constructor(public name: string, public species: string) {
      super(name, species);
    }

    makeMeaw() {
      console.log(`I am Meaoing`);
    }
  }

  const dog = new Dog("Rokky", "dog");
  const cat = new Cat("Mini", "Cat");

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  cat.makeMeaw();
  dog.makeBark();
  getAnimal(cat);
  getAnimal(dog);
  //
}
