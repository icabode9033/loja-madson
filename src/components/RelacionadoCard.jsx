// src/components/RelacionadoCard.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function RelacionadoCard({ title, date, text, image, link }) {
  return (
    <Card
      className="shadow-sm border-0 relacionado-card"
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        backgroundColor: '#fff',
      }}
    >
      <Card.Img
        variant="top"
        src={image}
        style={{
          height: '200px',
          objectFit: 'cover',
        }}
      />
      <Card.Body className="px-4 pb-4 pt-3">
        <h5 style={{ fontWeight: '600' }}>{title}</h5>
        <p className="text-muted mb-1" style={{ fontSize: '0.9rem' }}>{date}</p>
        <p style={{ fontSize: '0.95rem', color: '#555' }}>{text}</p>
        <Link to={link}>
          <div
            className="btn btn-primary"
            style={{
              borderRadius: '10px',
              padding: '10px 16px',
              fontWeight: '500',
              fontSize: '0.95rem'
            }}
          >
            Saiba mais
          </div>
        </Link>
      </Card.Body>
    </Card>
  );
}
