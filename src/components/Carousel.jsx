import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../App.css"; // se precisar de estilos adicionais

export default function PromoCarousel() {
  return (
    <div className="carousel-wrapper">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={700}
        showArrows
      >
        <div>
          <img src="/images/promo1.jpg" alt="Promoção 1" />
          <p className="legend">Promoção especial de livros raros</p>
        </div>
        <div>
          <img src="/images/promo2.jpg" alt="Promoção 2" />
          <p className="legend">Vinis com até 50% de desconto</p>
        </div>
        <div>
          <img src="/images/promo3.jpg" alt="Promoção 3" />
          <p className="legend">Descubra as antiguidades do nosso acervo</p>
        </div>
      </Carousel>
    </div>
  );
}
