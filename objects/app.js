let persona = {
  nombre: "Miguel",
  apellidos: "Frausto",
  getName: function () {
    return `${this.nombre} ${this.apellidos}`;
  },
  domicilio: {
    calle: "Madero #144",
    colonia: "Centro",
    cp: 28000,
    municipio: "Colima",
  },
};
console.log(persona.domicilio);
