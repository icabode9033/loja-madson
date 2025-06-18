import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from '../components/Carousel';
import CatalogCard from '../components/CatalogCard';
import RelacionadoCard from '../components/RelacionadoCard';

import baseImage01 from '../assets/baseImage01.jpg';
import baseImage02 from '../assets/baseImage02.jpg';
import relacionadoImage01 from '../assets/relacionadoImage01.png';


import '../App.css';

export default function Medicamento() {
  return (
    <div className="home-container">
      <h1 className="title text-center my-4">Bem-vindo à página do Sebo Aurora</h1>

      <Carousel />

      {/* Seção Destaques */}
      <section className="section">
        <h2 className="text-center my-4">Destaques</h2>
        <Container>
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            <Col><CatalogCard /></Col>
            <Col><CatalogCard /></Col>
            <Col><CatalogCard /></Col>
          </Row>
        </Container>
      </section>

      {/* Seção Novidades */}
      <section className="section">
        <h2 className="text-center my-4">Novidades</h2>
        <Container>
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            <Col><CatalogCard /></Col>
            <Col><CatalogCard /></Col>
            <Col><CatalogCard /></Col>
          </Row>
        </Container>
      </section>

      {/* Seção Relacionado */}
      <section className="section">
        <h2 className="text-center my-4">Relacionado</h2>
        <Container>
          <Row xs={1} sm={2} md={3} lg={3} className="g-4">
            <Col>
              <RelacionadoCard
                title="Sebo Aurora"
                date="Nov 12"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                image={baseImage01}
                link="/about"
              />
            </Col>
            <Col>
              <RelacionadoCard
                title="Sebo Aurora"
                date="Nov 12"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                image={relacionadoImage01}
                link="/about"
              />
            </Col>  


            <Col>
              <RelacionadoCard
                title="Sebo Aurora"
                date="Nov 12"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                image={baseImage02}
                link="/about"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

