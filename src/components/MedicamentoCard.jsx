// src/components/MedicamentoCard.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import logoMedicamento from '../assets/Images/logo-medicamento.png';

export default function MedicamentoCard({ medicamento }) {
  const { nome, descricao, dose, frequencia, faixaEtaria, classe } = medicamento;

  return (
    <Card className={`medicamento-card ${classe}`}>
      <Card.Img variant="top" src={logoMedicamento} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>{descricao}</Card.Text>
        <ul>
          <li><strong>Dose:</strong> {dose}</li>
          <li><strong>Frequência:</strong> {frequencia}</li>
          <li><strong>Faixa Etária:</strong> {faixaEtaria}</li>
        </ul>
      </Card.Body>
    </Card>
  );
}
