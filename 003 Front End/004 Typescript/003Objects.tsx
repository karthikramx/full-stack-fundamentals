// Objects in Typescript

interface UserObject {
  name: string;
  age: number;
  isAdmin: boolean;
}

let MyObject: UserObject = {
  name: "karthik",
  age: 31,
  isAdmin: true,
};

// this will end up in an error as you didnt include a property
let MyObject2: UserObject = {
  name: "alice",
  age: 25,
};

let MyObject3: UserObject = {
  name: "bob",
  age: 28,
  isAdmin: false,
  memberships: [], // error: additional property not in UserObject interface
};
