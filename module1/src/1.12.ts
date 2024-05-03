{
  // nullable types
  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching...");
    } else {
      console.log("There is nothing to search");
    }
  };

  // searchName(null);

  // unknown types

<<<<<<< HEAD

=======
>>>>>>> 324a4d8336993b29c710abd472e76b92d03f445b
  const carSpeed = (value: unknown) => {
    if (typeof value === "number") {
      const speedMetrePerSecond = (value * 1000) / 3600;
      console.log(`The car speed is ${speedMetrePerSecond}ms^-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const speedMetrePerSecond = (parseFloat(result) * 1000) / 3600;
      console.log(`The car speed is ${speedMetrePerSecond}ms^-1`);
    } else {
      console.log(`${value} This input is Wrong`);
    }
  };

  // carSpeed(`1000 ms`);
  // carSpeed(1000);
  // carSpeed("");

  const hiHello = (value: unknown) => {
    if (typeof value === "number") {
      console.log("hi");
    } else if (typeof value === "string") {
      console.log("Hello");
    }
  };

  // hiHello(12);
  // hiHello("12");

  // never type

  const thoroError = (sms: string): never => {
    throw new Error(sms);
  };

  thoroError("This is create error");
}
