greet = () => {
  console.log("Hello world");
};

greet();

logGreeting = (fn) => {
  fn();
};
logGreeting(greet);

greetMe = (greet) => {
  console.log(greet);
};
greetMe("Hello from the function expression");
