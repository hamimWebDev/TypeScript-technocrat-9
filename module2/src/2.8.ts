{
  // promise

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("Fail to load data");
      }
    });
  };

  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    return data;
  };

  showData();

  //   load server Data

  //   const getData = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await res.json();
  //     return data;
  //   };

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  };
  getData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });

  //
}
