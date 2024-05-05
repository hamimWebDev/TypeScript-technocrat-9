{
  // Encapsulation
  // assess modifiers
  class bankAccount {
    constructor(
      public readonly id: number,
      public readonly name: string,
      protected balance: number
    ) {}

    addDeposit(amount: number) {
      this.balance = this.balance + amount;
    }
    getBlanc() {
      return this.balance;
    }
  }

  const poorAccount = new bankAccount(1, "Hamim", 200);
  const RichAccount = new bankAccount(3, "Asif", 2000000);

  poorAccount.addDeposit(2);

  const balancePoor = poorAccount.getBlanc();

  console.log(poorAccount);
  console.log(RichAccount);
  console.log(balancePoor);
  console.log(RichAccount.getBlanc());

  class StudentAccount extends bankAccount {
    test() {
      this.balance;
    }
  }

  //
}
