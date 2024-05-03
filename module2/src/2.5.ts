{
  // function generic
  const createArray = <T>(prams: T): T[] => {
    return [prams];
  };
  const res1 = createArray<boolean>(true);
  type user = { id: number; name: string };
  const res2 = createArray<user>({
    id: 12,
    name: "Hamim",
  });
  //   console.log(res1);
  //   console.log(res2);

  const createArrayTuple = <T, Q>(prams1: T, prams2: Q): [T, Q] => {
    return [prams1, prams2];
  };

  const res3 = createArrayTuple<string, { bornIn: number }>("BAngladesh", {
    bornIn: 1971,
  });

  const addToCourse = <T>(Student: T) => {
    const course = "Next Level web dev";
    return {
      ...Student,
      course,
    };
  };

  const student1 = addToCourse({
    name: "Hamim",
    age: 21,
    Typeof: "frontend Developer",
  });

  const student2 = addToCourse({
    name: "Hamim",
    age: 21,
    Typeof: "frontend Developer",
    watchBrant: "Apple",
  });

  console.log(student1);
  console.log(student2);

  //
}
