{
  // getter && setter

  class bankAccount {
    constructor(
      public readonly id: number,
      public readonly name: string,
      protected balance: number
    ) {}
    // setter
    
    // addDeposit(amount: number) {
    //   this.balance = this.balance + amount;
    // }

    set Deposit(amount: number) {
      this.balance = this.balance + amount;
    }

    // getter

    // getBlanc() {
    //   return this.balance;
    // }

    get Balance() {
      return this.balance;
    }
  }

  const poorAccount = new bankAccount(1, "Hamim", 200);
  const RichAccount = new bankAccount(3, "Asif", 2000000);

  poorAccount.Deposit = 200;

  //   const balancePoor = poorAccount.getBlanc();
  const balancePoor = poorAccount.Balance;

  console.log(poorAccount);
  console.log(RichAccount);
  console.log(balancePoor);
  //   console.log(RichAccount.getBlanc());

  //
}
