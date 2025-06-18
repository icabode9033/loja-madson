import React, { useEffect } from 'react';

const Pagamento = () => {
  useEffect(() => {
    const iniciarPagamento = async () => {
      try {
        // Envie os dados para criar a preferência no backend
        const formData = {
          title: "Camiseta Estampada Madson",
          quantity: 1,
          unit_price: 89.90,
        };

        const response = await fetch("http://localhost:5000/api/create_preference", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (!window.MercadoPago) {
          console.error("SDK do Mercado Pago não carregado.");
          return;
        }

        const mp = new window.MercadoPago("SEU_PUBLIC_KEY_AQUI", {
          locale: 'pt-BR'
        });

        const bricksBuilder = mp.bricks();

        bricksBuilder.create("wallet", "wallet_container", {
          initialization: {
            preferenceId: data.id,
          },
          customization: {
            texts: {
              valueProp: 'smart_option',
            }
          }
        });

      } catch (err) {
        console.error("Erro ao inicializar o pagamento:", err);
      }
    };

    iniciarPagamento();
  }, []);

  return (
    <div>
      <h2>Pagamento</h2>
      {/* O Brick será renderizado aqui */}
      <div id="wallet_container"></div>
    </div>
  );
};

export default Pagamento;
