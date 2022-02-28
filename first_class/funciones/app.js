let greet = () => {
  console.log("Hello world");
};

greet();

let logGreeting = (miParametro) => miParametro();
logGreeting(greet);

let greetMe = (greet) => {
  console.log(greet);
};
greetMe("Hello from the function expression");

// interpolación de string "clasica"
let logGreeting1 = (miNombre, miColor) => {
  console.log(
    "Hola " + miNombre + " buenos días! Tu color favorito es el " + miColor
  );
};
logGreeting1("Miguel", "azul");
