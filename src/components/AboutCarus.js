

import React from 'react';


import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../sass/style.css'


const items = [

      <div className='kar-info'>
            <img src="./img/carusel/135-Recovered 1.png" alt="" />
      </div>,
      <div className='kar-info'>
            <img src="./img/carusel/photo_2021-12-07_16-11-52 5.png" alt="" />
      </div>,
      <div className='kar-info'>
            <img src=".//img/carusel/sanayi-boyasi 1.png" alt="" />
      </div>,
];
const responsive = {
      0: { items: 1 },
      562: { items: 1 },
      1024: { items: 1 },
      1920: { items: 1 },
};

const AboutCarus = () => {

      return (
            <>
                  <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsive}
                        infinite
                        keyboardNavigation
                        ArrowLeft
                  />
            </>
      );
}

export default AboutCarus;