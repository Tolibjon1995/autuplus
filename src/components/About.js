import React from 'react'
import '../sass/about.scss'
import Carousel from './AboutCarus'

function About() {
      return (
            <main className='about'>
                  <section className='about-us'>
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt
                              ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam
                        </p>
                  </section>
                  <section className="about-cart">
                        <div className="container">
                              <div className="row">
                                    <div className="col-12 col-lg-6 col-xl-4">
                                          <div className="card">
                                                <div className="d-flex">
                                                      <img src="./img/car 5.png" alt="" />
                                                      <p>The best price that you really expect</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-12 col-lg-6 col-xl-4">
                                          <div className="card">
                                                <div className="d-flex">
                                                      <img src="./img/Operator 4.png" alt="" />
                                                      <p>The best price that you really expect</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-12 col-lg-6 col-xl-4">
                                          <div className="card">
                                                <div className="d-flex">
                                                      <img src="./img/Star 4.png" alt="" />
                                                      <p>The best price that you really expect</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
                  <section className="about-info">
                        <div className="container">
                              <div className="row">
                                    <div className="col-12 col-lg-6">
                                          <img src="./img/Auto.png" alt="" />
                                    </div>
                                    <div className="col-12 col-lg-6 text-center text-lg-start">
                                          <h5>ABOUT US</h5>
                                          <h1>Kardiler is the best place to get your dream car</h1>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore
                                                et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi
                                                ut aliquip ex ea commodo  Lorem ipsum dolor sit
                                                amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo
                                          </p>
                                    </div>
                                    <div className="col">
                                          <div className="karus-container">
                                                <div className="karusel">
                                                      <Carousel />
                                                </div>
                                          </div>
                                    </div>
                              </div>

                        </div>

                  </section>
                  <div className="sektion6">
                        <div className="container">
                              <div className="row">
                                    <div className="col text-center">
                                          <h5 className='kok'>KARDILER</h5>
                                          <h1>Why choose us</h1>
                                          <p>Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit,
                                                sed do eiusmod tempor
                                                incididunt ut labore et
                                                dolore magna aliqua.
                                          </p>
                                    </div>

                              </div>
                              <div className="row">
                                    <div className="col-12 col-md-6 col-xl-4 text-center text-md-start">
                                          <div className="card">
                                                <img src="./img/car 5.png" alt="" />
                                                <h4>The best price that you really expect</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur
                                                      adipiscing elit, sed do eiusmod tempor
                                                      incididunt ut labore et dolore magna
                                                      aliqua. Ut enim ad minim veniam, quis
                                                      nostrud exercitation ullamco laboris
                                                      nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                          </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-4 text-center text-md-start">
                                          <div className="card">
                                                <img src="./img/Operator 4.png" alt="" />
                                                <h4>Support ready 24/7 to serve you</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur
                                                      adipiscing elit, sed do eiusmod tempor
                                                      incididunt ut labore et dolore magna
                                                      aliqua. Ut enim ad minim veniam, quis
                                                      nostrud exercitation ullamco laboris
                                                      nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                          </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-4 text-center text-md-start">
                                          <div className="card">
                                                <img src="./img/Star 4.png" alt="" />
                                                <h4>Top brand in the world</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur
                                                      adipiscing elit, sed do eiusmod tempor
                                                      incididunt ut labore et dolore magna
                                                      aliqua. Ut enim ad minim veniam, quis
                                                      nostrud exercitation ullamco laboris
                                                      nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <section className="about-info2">
                        <div className="container">
                              <div className="row">
                                    <div className="col-12 col-lg-6 text-center text-lg-start">
                                          <h5>HISTORY</h5>
                                          <h1>We provide best product for you</h1>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore
                                                et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi
                                                ut aliquip ex ea commodo  Lorem ipsum dolor sit
                                                amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo
                                          </p>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                          <img src="./img/emple.png" alt="" />
                                    </div>

                              </div>
                        </div>
                  </section>
            </main>
      )
}

export default About
