{
  //Ts spread operator && Rest operator   

  // learn spread operator
  const bros1: string[] = ["Mir", "Firoz", "Mizan"];
  const bros2: string[] = ["Miraz", "Hiroz", "Sizan"];

  bros1.push(...bros2);

  const mentors1 = {
    typeScript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };
  const mentors2 = {
    prisma: "Firoz",
    nextJs: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorsList = {
    ...mentors1,
    ...mentors2,
  };

  // learn Rest operator

  const allFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };
  allFriends("Hamim", "Asif", "Antu", "Asik", "Shihab");
}
