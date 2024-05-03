{
  // generic constraints extends
  const addToCourse = <T extends { id: number; name: string; email: string }>(
    Student: T
  ) => {
    const course = "Next Level web dev";
    return {
      ...Student,
      course,
    };
  };

  const student1 = addToCourse({
    id: 222,
    name: "Hamim",
    email: "a@gmail.com",
    age: 21,
    Typeof: "frontend Developer",
  });

  const student2 = addToCourse({
    id: 333,
    email: "a@gmail.com",
    name: "Hamim",
    age: 21,
    Typeof: "frontend Developer",
    watchBrant: "Apple",
  });

  //   const student3 = addToCourse({ emni: "Desse" });

  console.log(student1);
  console.log(student2);

  //
}
