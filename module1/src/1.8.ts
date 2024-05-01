{
  // Ts destructuring

  // Object destructuring
  const user = {
    id: 356,
    Name: {
      fastName: "Hamim",
      middleName: "Howlader",
      lastName: "Asif",
    },
    contactNo: "01714544654",
    address: "Barishal",
  };

  const {
    contactNo,
    Name: { middleName },
  } = user;

  // Array destructuring
  const myFriends = [
    "Hamnim",
    "Asif",
    "Ontu",
    "shihab",
    "nabin",
    "Ontor",
    "Zihad",
  ];

  const [, , bestFriend, ...rest] = myFriends;
}
