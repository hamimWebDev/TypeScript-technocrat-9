{
  // generic Type

  type GenArray<T> = Array<T>;

  //   const studentName: string[] = ["a", "b", "c", "d", "e"];
  //   const studentName: Array<string> = ["a", "b", "c", "d", "e"];
  const studentName: GenArray<string> = ["a", "b", "c", "d", "e"];

  //   const rollNumbers: number[] = [1, 2, 3, 4, 5];
  //   const rollNumbers: Array<number> = [1, 2, 3, 4, 5];
  const rollNumbers: GenArray<number> = [1, 2, 3, 4, 5];

  //   const isGood: boolean[] = [true, false, true, false, true];
  //   const isGood: Array<boolean> = [true, false, true, false, true];
  const isGood: GenArray<boolean> = [true, false, true, false, true];

  const users: GenArray<{ name: string; age: number }> = [
    {
      name: "Hamim",
      age: 12,
    },
    {
      name: "Asif",
      age: 21,
    },
  ];

  //   generic tuple Array

  type GenType<x, y> = [x, y];

  const userIdName: GenType<number, { name: string; email: string }> = [
    1234,
    {
      name: "Hamim",
      email: "h@gmail.com",
    },
  ];
}
