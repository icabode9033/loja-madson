import React, { useState, useEffect } from 'react';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    endereco: '',
    cep: '',
    pagamento: 'cartao',
  });

  const [preferenceId, setPreferenceId] = useState(null);
  const [showPaymentButton, setShowPaymentButton] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);

    fetch('http://localhost:5000/create_preference', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setPreferenceId(data.id);
        setShowPaymentButton(true);
        alert('Preferência criada! Aguarde o botão de pagamento.');
      })
      .catch((error) => {
        console.error('Erro ao criar preferência:', error);
        alert('Erro ao criar pagamento. Tente novamente.');
      });
  };

  useEffect(() => {
    if (preferenceId) {
      const script = document.createElement("script");
      script.src = "https://sdk.mercadopago.com/js/v2";
      script.setAttribute("data-preference-id", preferenceId);
      script.setAttribute("data-button-label", "Pagar com Mercado Pago");
      script.setAttribute("data-button-class", "mp-button");
      script.async = true;

      const checkoutDiv = document.getElementById("mp-checkout");
      if (checkoutDiv) {
        checkoutDiv.innerHTML = '';
        checkoutDiv.appendChild(script);
      }
    }
  }, [preferenceId]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Checkout - Loja Madson</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Nome Completo</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Endereço</label>
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">CEP</label>
          <input
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Forma de Pagamento</label>
          <select
            name="pagamento"
            value={formData.pagamento}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="cartao">Cartão de Crédito</option>
            <option value="pix">Pix</option>
            <option value="boleto">Boleto Bancário</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
        >
          Confirmar Pedido
        </button>
      </form>

      <div className="mt-8 bg-gray-100 p-4 rounded">
        <h3 className="font-bold text-lg mb-2">Resumo do Pedido</h3>
        <p>Produto: Camiseta Estampada Madson</p>
        <p>Preço: R$ 89,90</p>
        <p>Frete: Grátis</p>
        <p className="font-bold mt-2">Total: R$ 89,90</p>
      </div>

      {showPaymentButton && (
        <div className="mt-8" id="mp-checkout"></div>
      )}
    </div>
  );
};

export default CheckoutPage;
