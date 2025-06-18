import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import biancaEstande from '../images/feminina.jpg'; // ajuste o caminho conforme necessário

export default function Feminino() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-5">Masculino</h1>
      <Row className="align-items-center justify-content-center">
        <Col lg={6} className="mt-3">
          <Image fluid alt="bianca-estande" src={biancaEstande} className="rounded shadow" />
        </Col>
        <Col lg={6} className="p-4 mt-3">
          <div className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            <h4 className="mb-3 fw-semibold">Combos de roupas básicas é na Madson!</h4>
            <p>
              Os combos de roupas da Madson são uma ótima forma de você comprar peças básicas essenciais para o
              guarda-roupa com descontos especiais. Temos opções para adultos e crianças, ideais para renovar seu
              visual ou presentear quem você ama.
            </p>

            <h5 className="mt-4 fw-semibold">Kits de peças de roupa básicas: ideais para o dia a dia</h5>
            <p>
              As peças básicas da Madson podem ser usadas tanto em ocasiões mais despojadas quanto em eventos mais
              formais, dependendo da combinação. Os combos de t-shirts são vantajosos porque você pode escolher
              diferentes cores com desconto.
            </p>

            <h5 className="mt-4 fw-semibold">Kits de calças jeans de diferentes modelagens</h5>
            <p>
              Temos kits de calças jeans que combinam com camisas polo, blusas, regatas e mais. Os combos incluem
              modelagens e lavagens variadas, ideais para qualquer estação.
            </p>

            <h5 className="mt-4 fw-semibold">Combos infantis: conforto e estilo para os meninos</h5>
            <p>
              Nossos combos infantis masculinos são feitos com materiais confortáveis como algodão, ideais para meninos
              entre 6 e 14 anos. Perfeitos para brincar e se movimentar com estilo e conforto.
            </p>

            <h5 className="mt-4 fw-semibold">Como comprar os combos de roupas da Madson?</h5>
            <p>
              Escolha as peças desejadas dentro da promoção e adicione ao carrinho. O desconto será aplicado
              automaticamente ao montar o combo completo. Atenção: nem todas as peças são elegíveis, apenas as desta
              página.
            </p>

            <h5 className="mt-4 fw-semibold">Vantagens dos combos de roupas Madson</h5>
            <p>
              Comprar mais pagando menos, com peças de qualidade, duráveis e confortáveis. Todos os produtos passam por
              controle de qualidade rigoroso.
            </p>

            <h5 className="mt-4 fw-semibold">Presenteie com estilo</h5>
            <p>
              Use os combos como presente e demonstre carinho! Escolha as cores e modelos favoritos da pessoa e acerte
              em cheio.
            </p>

            <p className="mt-4 fw-bold">
              E aí, já escolheu o combo certo? Confira também as novidades que acabaram de chegar na Madson!
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
