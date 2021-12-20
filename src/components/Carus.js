import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../sass/style.css'


const items = [

      <div className='container'>
            <div className="row">
                  <div className="col-12 col-lg-8 car-1">
                        <p className='text-white'>"Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.
                              Ut enim ad minim veniam, quis
                              nostrud exercitation ullamco
                              laboris nisi ut aliquip ex
                              ea commodo consequat. Duis
                              aute irure dolor in reprehenderit
                              in voluptate velit esse cillum
                              dolore eu fugiat nulla pariatur”
                        </p>
                  </div>
                  <div className="col-12 col-lg-4 car-2"></div>
            </div>
      </div>,
      <div className='container'>
            <div className="row">
                  <div className="col-12 col-lg-8 car-1">
                        <p className='text-white'>"Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.
                              Ut enim ad minim veniam, quis
                              nostrud exercitation ullamco
                              laboris nisi ut aliquip ex
                              ea commodo consequat. Duis
                              aute irure dolor in reprehenderit
                              in voluptate velit esse cillum
                              dolore eu fugiat nulla pariatur”
                        </p>
                  </div>
                  <div className="col-12 col-lg-4 car-2"></div>
            </div>
      </div>,
      <div className='container'>
            <div className="row">
                  <div className="col-12 col-lg-8 car-1">
                        <p className='text-white'>"Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.
                              Ut enim ad minim veniam, quis
                              nostrud exercitation ullamco
                              laboris nisi ut aliquip ex
                              ea commodo consequat. Duis
                              aute irure dolor in reprehenderit
                              in voluptate velit esse cillum
                              dolore eu fugiat nulla pariatur”
                        </p>
                  </div>
                  <div className="col-12 col-lg-4 car-2"></div>
            </div>
      </div>
];
const responsive = {
      0: { items: 1 }
};

const Carus = () => {

      return (
            <>
                  <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsive}
                        infinite
                  // autoPlay
                  // animationDuration={5000}
                  />
            </>
      );
}

export default Carus;