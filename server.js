const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const conectarDB = require('./conectarDB');

const app = express();
dotenv.config();
conectarDB();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/pedidos', require('./routes/pedidos'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
