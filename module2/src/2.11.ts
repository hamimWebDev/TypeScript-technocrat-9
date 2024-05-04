// utility types
// pick

type person = {
  name: string;
  age: number;
  email: string;
  contactNo: string;
};

type name = Pick<person, "name" | "age">;

// Omit
type OmitAge = Omit<person, "age">;

// require
type requirePerson = Required<person>;

// Partial
type PartialPerson = Partial<person>;

// readOnly

type readOnlyPerson = Readonly<person>;
const person1: readOnlyPerson = {
  name: "HAmim",
  age: 12,
  email: "h@gmail.com",
  contactNo: "01714977010",
};

// record

// type obj = {
//   a: string;
//   b: string;
// };

type obj = Record<string, string>;

const Obj: obj = {
  a: "a",
  b: "b",
  c: "c",
  // e: 5
  f: "f",
};

const emtObject: Record<string, unknown> = {};
