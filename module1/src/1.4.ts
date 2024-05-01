// TypeScript basic data type

// 1.String
let fastName: string = "Hamim";

// 2.Number
let RollNumber: number = 64;

// 3.Boolean
let isAdmin: boolean = true;

// 4.Undefined
let x: undefined = undefined;

// 5.Null
let y: null = null;

// 6.AnyType
let d: number; // setType
d = 123;
// d = "Hamim";
// d = true;

// 7.Array
let friends: string[] = ["Rasel", "Monika"];
friends.push("Hamim");
let friendRoll: number[] = [1, 2, 3, 4, 5];
friendRoll.push(6);

// 8.Tuple--> Array--> Order--> type of value.
let ageName: [number, string, boolean] = [21, "Hamim", true];
ageName[0] = 12;
