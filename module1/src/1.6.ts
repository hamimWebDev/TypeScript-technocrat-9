{
  // learning TS Function

  // Normal Function
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  add(2, 2);

  // Arrow Function
  const addNumber = (num1: number, num2: number): number => num1 + num2;

  addNumber(4, 4);

  // object in function
  const poorUser = {
    name: "Hamim",
    balance: 0,
    addBalance(balance: number): number {
      return this.balance + balance;
    },
  };

  const arrayNum: number[] = [1, 4, 10];

  const newArrayNum: number[] = arrayNum.map(
    (num: number): number => num * num
  );
}
