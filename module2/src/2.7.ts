{
  // generic constraints with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship";

  type Owner2 = keyof Vehicle;

  const person1: Owner = "car";
  const person2: Owner2 = "bike";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Hamim",
    age: 21,
    address: "Brishal",
  };

  const User1 = getPropertyValue(user, "address");

  console.log(User1);

  //   console.log(user["age"]);
  //
}
