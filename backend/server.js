require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mercadopago = require('mercadopago');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});