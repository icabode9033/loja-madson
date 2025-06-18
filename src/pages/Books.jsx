import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import livro1 from '../images/livro1.png';
import livro2 from '../images/livro2.png';
import livro3 from '../images/livro3.png';
import livro4 from '../images/livro4.png';

const livros = [
  {
    id: '1',
    title: 'The Adventures of Sherlock Holmes',
    author: 'Doyle, Arthur Conan',
    language: 'en',
    image: livro1,
    link: '#',
  },
  {
    id: '2',
    title: 'The Memoirs of Sherlock Holmes',
    author: 'Doyle, Arthur Conan',
    language: 'en',
    image: livro2,
    link: '#',
  },
  {
    id: '3',
    title: 'The Return of Sherlock Holmes',
    author: 'Doyle, Arthur Conan',
    language: 'en',
    image: livro3,
    link: '#',
  },
  {
    id: '4',
    title: 'Adventures of Sherlock Holmes: Illustrated',
    author: 'Doyle, Arthur Conan',
    language: 'en',
    image: livro4,
    link: '#',
  }
];

const Books = () => {
  return (
    <Container className="mt-5">
      <h2 className="mb-4">Livros — Sherlock Holmes (Gutenberg)</h2>
      <Row>
        {livros.map((livro) => (
          <Col key={livro.id} md={3} className="text-center mb-4">
            <Image src={livro.image} alt={livro.title} fluid style={{ height: '320px', objectFit: 'cover' }} />
            <h5 className="mt-3">{livro.title}</h5>
            <p><strong>Autor(es):</strong> {livro.author}</p>
            <p><strong>Idioma(s):</strong> {livro.language}</p>
            <a href={livro.link} target="_blank" rel="noopener noreferrer">
              📖 Ler livro
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Books;
