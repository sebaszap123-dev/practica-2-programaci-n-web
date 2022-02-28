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
  getAdress: function () {
    return `Calle: ${this.domicilio.calle}, colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp}, ${this.domicilio.municipio}`;
  },
};
console.log(persona.getAdress());
