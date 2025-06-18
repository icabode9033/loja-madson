const express = require('express');
const cors = require('cors');
const paymentRoutes = require('./routes/payment');
require('dotenv').config(); // Carrega .env

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', paymentRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
