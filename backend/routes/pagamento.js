app.post('/create_payment', async (req, res) => {
    try {
      const payment_data = {
        transaction_amount: req.body.amount,
        description: req.body.description,
        payment_method_id: req.body.paymentMethod,
        payer: {
          email: req.body.email
        }
      };
  
      const payment = await mercadopago.payment.create(payment_data);
      res.json(payment.response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post('/webhook', async (req, res) => {
    console.log('Webhook recebido:', req.body);
    res.sendStatus(200);
  });