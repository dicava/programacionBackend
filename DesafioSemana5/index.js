const express = require('express');
const apiRouters = require('./routers/app.routers');

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(express.static(__dirname = "/public"));

app.use('/api', apiRouters);


const connectedServer = app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on('error', (error) => {
    console.error('Error: ', error);
});




app.get('/api/productos', (req, res) => {
    const productos = req.params;
    res.json({ resultado: (productos)});

});

app.get('/api/productos/:id', (req, res) => {
    const productos = req.params;
    res.json({ resultado: (productos)});

});



app.post('/api/productos', (req, res) => {
    res.send("Ok =>"+ req.method);
});

app.put('/api/productos/:id', (req, res) => {
    res.send("Ok =>"+ req.method);
});
app.delete('//api/productos/:id', (req, res) => {
    res.send("Ok =>"+ req.method);
});






const server = app.listen(PORT, () => {
    console.log(`Servidor activo y escuchando en el puerto ${PORT}`);
});

server.on('error', (error) => {
    console.log(error.message);
});
