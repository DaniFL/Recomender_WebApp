const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001; // Puerto del servidor

app.use(cors()); // Habilita CORS para peticiones del frontend
app.use(bodyParser.json()); // Permite parsear el body de las peticiones en formato JSON

app.get("/", (req, res) => {
  res.send("¡Hola desde el backend!");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
