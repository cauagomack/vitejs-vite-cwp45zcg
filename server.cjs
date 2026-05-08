const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const dados = [];

app.get("/", (req, res) => {
  res.json({
    message: "Backend AgroTrama funcionando",
  });
});

app.post("/api/status", (req, res) => {
  dados.push(req.body);

  res.json({
    success: true,
    dados: req.body,
  });
});

app.get("/api/status", (req, res) => {
  res.json(dados);
});

app.listen(8000, () => {
  console.log("Servidor rodando na porta 8000");
});