module.exports = {
  getUser: (req, res) => {
    const id = req.params.id;
    const user = {
      id: id,
      nombre: "pedro",
      apellido: "perez",
      correo: "test@test.com",
      telefono: 6141234567,
      direccion: {
        calle: "av siempre viva",
        numer: "123",
        colonia: "NA",
        ciudad: "springfield",
      },
    };
    res.json(user);
  },
};
