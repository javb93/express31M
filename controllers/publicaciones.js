module.exports = {
  getPublicaciones: (req, res) => {
    const placeholder = [
      {
        vendedor_id: 1,
        inmueble_id: 132,
        img_src: "rutadeimagen",
        descripcion: "Este inmueble esta en venta, compralo",
        fecha_publicacion: "2024-10-10",
        titulo: "Este es un titulo",
      },
      {
        vendedor_id: 2,
        inmueble_id: 132,
        img_src: "rutadeimagen",
        descripcion: "Este inmueble esta en venta, compralo",
        fecha_publicacion: "2024-10-10",
        titulo: "Este es un titulo",
      },
      {
        vendedor_id: 3,
        inmueble_id: 132,
        img_src: "rutadeimagen",
        descripcion: "Este inmueble esta en venta, compralo",
        fecha_publicacion: "2024-10-10",
        titulo: "Este es un titulo",
      },
    ];
    res.json(placeholder);
  },
  getPublicacion: (req, res) => {
    const pubID = req.params.id;
    const placeholder = {
      vendedor_id: 1,
      inmueble_id: pubID,
      img_src: "rutadeimagen",
      descripcion: "Este inmueble esta en venta, compralo",
      fecha_publicacion: "2024-10-10",
      titulo: "Este es un titulo",
    };

    res.json(placeholder);
  },
  postPublicacion: (req, res) => {
    try {
      const { vendedor_id, img_src, descripcion, titulo } = req.body;
      console.log(vendedor_id, img_src, descripcion, titulo);
      res.status(201).json({ message: "Publicacion guardada" });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Error al guardar la publicacion" });
    }
  },
  area: 7,
};
