{
  // mapped type
  const arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6];

  const arrayOfString: string[] = arrayOfNumbers.map((number) =>
    number.toString()
  );
  console.log(arrayOfNumbers);
  console.log(arrayOfString);

  type AreaNumber = {
    height: number;
    wight: number;
  };

  type AreaString = {
    [key in keyof AreaNumber]: string;
  };

  type Hight = AreaNumber["height"];
  type AreaString2<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString2<{ hight: string; wight: number }> = {
    hight: "100",
    wight: 12,
  };

  //
}
