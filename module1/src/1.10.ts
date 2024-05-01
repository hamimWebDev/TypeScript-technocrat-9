{
  // union types
  type FrontendDeveloper = "fakibazDeveloper" | "JuniorFrontedDeveloper";
  type BackendDeveloper = "fakibazDeveloper" | "JuniorBackendDeveloper";

  type Developer = FrontendDeveloper | BackendDeveloper;
  type FakiBuzDeveloper = FrontendDeveloper & BackendDeveloper;
  const newDeveloper: FrontendDeveloper = "JuniorFrontedDeveloper";
  const newDeveloper2: BackendDeveloper = "JuniorBackendDeveloper";
  const newDeveloper3: Developer = "JuniorBackendDeveloper";
  const newDeveloper4: FakiBuzDeveloper = "fakibazDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "Male" | "Female";
    bloodGroup: "O+" | "O-";
  };

  const user1: User = {
    name: "Hamim",
    email: "mdhamim@gmail.com",
    gender: "Male",
    bloodGroup: "O+",
  };
  const user2: User = {
    name: "Hamima",
    gender: "Female",
    bloodGroup: "O-",
  };
}
