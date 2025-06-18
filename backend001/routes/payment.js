
require('dotenv').config(); // se ainda não tiver

// Rota para processar pagamento com BRICKS
router.post('/processar-pago', async (req, res) => {
  try {
    const paymentData = {
      transaction_amount: Number(req.body.transaction_amount),
      token: req.body.token,
      description: req.body.description,
      installments: Number(req.body.installments),
      payment_method_id: req.body.payment_method_id,
      issuer_id: req.body.issuer_id,
      payer: {
        email: req.body.payer.email,
        identification: {
          type: req.body.payer.identification.type,
          number: req.body.payer.identification.number,
        },
      },
    };

    const payment = await mercadopago.payment.create({ body: paymentData });

    res.status(200).json(payment.body);
  } catch (error) {
    console.error('Erro ao processar pagamento com Brick:', error);
    res.status(500).json({ error: 'Erro ao processar pagamento' });
  }
});
