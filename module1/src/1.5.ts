{
  // 9.Reference Type --> object

  const user: object = {
    fistName: "Md Hamim",
    middleName: "Howlader",
    lastName: "Asif",
  };
  const user2: {
    company: string;
    fixCompany: "Programming Hero";
    fastName: string;
    middleName?: string;
    lastName: string;
    readonly isMarried: boolean;
  } = {
    company: "Programming Bangladesh",
    fixCompany: "Programming Hero",
    fastName: "Md Hamim",
    //   middleName: "Howlader",
    lastName: "Asif",
    isMarried: false,
  };

  // user2.isMarried = true; // error
  user2.middleName = "Howlader"; // No error
}
