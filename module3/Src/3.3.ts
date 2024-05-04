{
  //in & typeof guards

  //   typeof --> type guards

  const add = (
    param1: number | string,
    param2: number | string
  ): number | string => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return `${param1} And ${param2}`;
    }
  };

  const add1 = add(2, 3);
  const add2 = add("2", 3);
  //   console.log(add1);
  //   console.log(add2);

  // in guard

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`my name is ${user.name} and my role is${user.role}`);
    } else {
      console.log(`My name is ${user.name} and I am normal user.`);
    }
  };

  const user1: NormalUser = {
    name: "Asif",
  };

  const user2: AdminUser = {
    name: "Hamim",
    role: "admin",
  };

  getUser(user1);
  getUser(user2);
  //
}
