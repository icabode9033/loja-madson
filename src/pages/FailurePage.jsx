import React from 'react';
import { useLocation } from 'react-router-dom';

const FailurePage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 text-center bg-red-50 rounded shadow">
      <h1 className="text-2xl font-bold text-red-700">Pagamento Falhou</h1>
      <p className="mt-4">Algo deu errado. Por favor, tente novamente.</p>
      <p><strong>ID do pagamento:</strong> {query.get('payment_id')}</p>
      <p><strong>Status:</strong> {query.get('status')}</p>
    </div>
  );
};

export default FailurePage;
