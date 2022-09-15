const express = require('express');
const productosRouters = require('../../productos/productos.routers');


const router = express.Router();

router.use('/api/productos', productosRouters);


module.exports = router;