const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./routes');


app.get('/', (req, res) => {
  res.send('Hola express!');
});


app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});

routerApi(app);