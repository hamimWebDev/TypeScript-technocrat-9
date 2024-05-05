{
  // polymorphism
  class person {
    getSleep() {
      console.log(`I am sleeping per day 8 hours`);
    }
  }

  class student {
    getSleep() {
      console.log(`I am sleeping per day 7 hours`);
    }
  }

  class developer {
    getSleep() {
      console.log(`I am sleeping per day 6 hours`);
    }
  }

  const getSleep = (prams: person) => {
    prams.getSleep();
  };

  const person1 = new person();
  const person2 = new student();
  const person3 = new developer();

  getSleep(person1);
  getSleep(person2);
  getSleep(person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    constructor(public hight: number, public wight: number) {
      super();
    }
    getArea(): number {
      return this.hight * this.wight;
    }
  }

  const DefineArea = (params: Shape) => {
    console.log(params.getArea());
  };

  const shape1 = new Shape().getArea();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10, 20);

  console.log(shape1);
  DefineArea(shape2);
  DefineArea(shape3);
  //
}
