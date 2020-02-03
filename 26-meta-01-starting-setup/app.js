// library land
const uid = Symbol("uid");
console.log(uid);

const user = {
  [uid]: "p1",
  id: "p1",
  name: "Umesh",
  age: 100,
  [Symbol.toStringTag]: "Umesh Raj"
};

// api land
user.id = "p8";
console.log(user);
console.log(Symbol("uid") === Symbol("uid"));

user[uid] = "p9";
console.log(user.toString());
