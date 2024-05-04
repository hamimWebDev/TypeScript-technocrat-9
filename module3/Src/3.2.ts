{
  // oop inheritance

  class person {
    constructor(public name: string, public age: number) {}
    sleepTime(hours: number) {
      console.log(`${this.name} sleep time is ${hours} hours`);
    }
  }

  class student extends person {
    constructor(public name: string, public age: number, public Class: number) {
      super(name, age);
    }
  }

  const student1 = new student("Hamim", 21, 13);

  console.log(student1.sleepTime(6));

  class teacher extends person {
    constructor(
      public name: string,
      public age: number,
      public subject: string
    ) {
      super(name, age);
    }

    classTime(hours: number) {
      console.log(`${this.name} class time is ${hours} hours`);
    }
  }

  const teacher1 = new teacher("Abdul Ahad", 26, "English");

  console.log(teacher1.classTime(8));

  //
}
