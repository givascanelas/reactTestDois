import React from "react";
import './home.css'

import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'

function Home() {

  return (
    <Carousel>

      <Carousel.Item>
        <img style={{ height: '90vh' }}
          className="d-block w-100"
          src={img1}
          alt="amizade"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img style={{ height: '90vh' }}
          className="d-block w-100"
          src={img2}
          alt="sera"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img style={{ height: '90vh' }}
          className="d-block w-100"
          src={img3}
          alt="traicao"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
  
export default Home