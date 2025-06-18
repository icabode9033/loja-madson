import React from 'react';
import { useLocation } from 'react-router-dom';

const PendingPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 text-center bg-yellow-50 rounded shadow">
      <h1 className="text-2xl font-bold text-yellow-700">Pagamento Pendente</h1>
      <p className="mt-4">Estamos processando sua compra. Você receberá um e-mail em breve.</p>
      <p><strong>ID do pagamento:</strong> {query.get('payment_id')}</p>
      <p><strong>Status:</strong> {query.get('status')}</p>
    </div>
  );
};

export default PendingPage;
