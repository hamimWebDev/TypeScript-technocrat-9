{
  // generic interface
  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      relYear: number;
    };
    smartWatch: T;
  }

  const poorDev: Developer<{
    brand: string;
    model: string;
    relYear: number;
  }> = {
    name: "Hamim",
    computer: {
      brand: "HP",
      model: "hp16446s",
      relYear: 2023,
    },
    smartWatch: {
      brand: "Samsung",
      model: "RS3050",
      relYear: 2024,
    },
  };
  const ReachDev: Developer<{
    brand: string;
    model: string;
    relYear: number;
    trackedHeard: boolean;
    trackedSleep: boolean;
  }> = {
    name: "Asif",
    computer: {
      brand: "Apple",
      model: "pro3",
      relYear: 2024,
    },
    smartWatch: {
      brand: "Apple",
      model: "IW62",
      relYear: 2024,
      trackedHeard: true,
      trackedSleep: true,
    },
  };
}
