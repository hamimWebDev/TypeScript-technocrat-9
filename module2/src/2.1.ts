{
  // type assertion
  let anything: any;
  anything = "Next level wed development";
  anything = true;
  anything = 12;

  anything as string;

  const kgToGram = (value: string | number): number | string | undefined => {
    if (typeof value === "number") {
      const convertedValue = value * 1000;
      return convertedValue;
    } else if (typeof value === "string") {
      const [result, kg] = value.split(" ");
      const convertedValue = parseFloat(result) * 1000;
      return convertedValue;
    }
  };

  const result1 = kgToGram(1000) as number;

  const result2 = kgToGram("1000") as string;

  console.log(result1, result2);
}
