{
  // type Alias

  type studentType = {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
  };
  const student1: studentType = {
    name: "Hamim",
    age: 20,
    gender: "Male",
    contactNo: "01714977010",
  };
  const student2: studentType = {
    name: "Asif",
    age: 21,
    gender: "Male",
    contactNo: "0176159900",
  };

  const student3: studentType = {
    name: "Shihab",
    age: 21,
    gender: "Male",
    contactNo: "01714977010",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Jihad";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
