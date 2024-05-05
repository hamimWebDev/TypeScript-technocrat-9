{
  //static
  class counter {
    static count: number = 0;
    increment() {
      return (counter.count = counter.count + 1);
    }
    decrement() {
      return (counter.count = counter.count - 1);
    }
  }

  const plash = new counter();

  const mins = new counter();

  console.log(plash.increment());
  console.log(plash.increment());
  console.log(plash.increment());
  console.log(plash.increment());
  console.log(plash.increment());

  console.log(mins.decrement());
  console.log(mins.decrement());
  //
}
