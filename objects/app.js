let persona = {
  nombre: "Miguel",
  apellidos: "Frausto",
  getName: function () {
    return `${this.nombre} ${this.apellidos}`;
  },
};
console.log(persona.getName());
