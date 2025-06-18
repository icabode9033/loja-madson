const express = require('express');
const cors = require('cors');
const mercadopago = require('mercadopago');

// Configurar o Mercado Pago com sua access token (sandbox ou produção)
mercadopago.configure({
  access_token: 'SEU_ACCESS_TOKEN_AQUI', // substitua pelo seu token do Mercado Pago
});

const app = express();
app.use(cors());
app.use(express.json());

// Rota que cria a preferência
app.post('/create_preference', async (req, res) => {
  try {
    const preference = {
      items: [
        {
          title: 'Camiseta Estampada Madson',
          unit_price: 89.9,
          quantity: 1,
        },
      ],
      back_urls: {
        success: 'http://localhost:3000/sucesso',
        failure: 'http://localhost:3000/erro',
        pending: 'http://localhost:3000/pendente',
      },
      auto_return: 'approved',
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ id: response.body.id });
  } catch (error) {
    console.error('Erro ao criar preferência:', error);
    res.status(500).json({ error: 'Erro ao criar preferência' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
