const express = require('express');
const { productos } = require('../../data/data');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(productos);
});

router.post('/', (req, res) => {
  const { title, price, thumbnail } = req.body;
  if (!title || !price || !thumbnail) {
    return res.status(400).json({ error: "Formato del cuerpo incorrecto "})
  }
  const nuevoProducto = {
    id: producto.length + 1,
    title,
    price,
    thumbnail
  };
  productos.push(nuevoProducto);
  res.json(nuevoProducto);
})

module.exports = router;