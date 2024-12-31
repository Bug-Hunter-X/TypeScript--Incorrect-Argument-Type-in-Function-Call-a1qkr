function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

user.forEach(name => {
    console.log(greeter(name));
}); //Correct usage