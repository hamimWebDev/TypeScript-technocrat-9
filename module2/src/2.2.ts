{
  // object interface
  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserRoll = User1 & {
    roll: number;
  };

  interface UserRoll2 extends User1 {
    roll: number;
  }

  const user: UserRoll2 = {
    name: "Hamim",
    age: 21,
    roll: 54,
  };

  // Array interface

  type Rolls1 = number[];
  interface Rolls2 {
    [index: number]: number;
  }
  const rollNumbers1: Rolls2 = [1, 2, 3, 4, 5];

  // Function interface

  type Add = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;
  const add2: Add = (num1, num2) => num1 + num2;
}
