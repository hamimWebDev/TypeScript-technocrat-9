{
  // ternary operator || nullish coalescing operator

  // ternary operator
  const age: number = 20;
  if (age > 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }

  const isAdult = age >= 18 ? "Adult" : "Not Adult";

  console.log(isAdult);

  // nullish coalescing operator

  //   const isAuthenticated = null;
  const isAuthenticated = "Hi";

  const result = isAuthenticated ?? "Guest";
  console.log({ result });
}
