import React from 'react'
import { BsYoutube, BsTwitter, BsFacebook, } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";

function Foters() {
      return (
            <div className='footer'>
                  <div className="call">
                        <div className="tel">
                              <h1>Have a question?</h1>
                              <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.
                              </p>
                              <button className="btn btn-dark">
                                    <div className="d-flex text-white">
                                          KO’PROQ...
                                          <img src="./img/arrowright.png" alt="arrow" />
                                    </div>
                              </button>
                              <button className="btn btn-light">
                                    <div className="d-flex">
                                          <img src="./img/phoneicon.png" alt="arrow" />
                                          224 000 22 11 33
                                    </div>
                              </button>
                        </div>
                  </div>
                  <footer>
                        <div className="container">
                              <div className="row">
                                    <div className="col-12 col-md-6 col-lg-3 text-center text-md-start mt-5 ">
                                          <img src="./img/Frame.png" alt="logo" />
                                          <p className='text-white'>Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna aliqua
                                          </p>
                                          <h5 className='text-white'>FOLLOW US</h5>
                                          <div className="social">
                                                <a href='#' className="ram">
                                                      <BsYoutube />
                                                </a>
                                                <a href='#' className="ram">
                                                      <BsTwitter />
                                                </a>
                                                <a href='#' className="ram">
                                                      <BsFacebook />
                                                </a>
                                                <a href='#' className="ram">
                                                      <MdOutlineAlternateEmail />
                                                </a>
                                          </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3 text-center text-md-start mt-5 offset-lg-2">
                                          <h5 className='text-white ml-5'>QUICK LINKS</h5>
                                          <ul>
                                                <li>
                                                      <a href="#">About us</a>
                                                </li>
                                                <li>
                                                      <a href="#">Contact us</a>
                                                </li>
                                                <li>
                                                      <a href="#">Products</a>
                                                </li>
                                                <li>
                                                      <a href="#">Login</a>
                                                </li>
                                                <li>
                                                      <a href="#">Sign Up</a>
                                                </li>
                                          </ul>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3 text-center text-md-start mt-5 offset-lg-1">
                                          <h5 className="text-white">
                                          SUBSCRIBE
                                          </h5>
                                          <p className="text-white">
                                          Lorem ipsum dolor sit amet,
                                           consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut
                                          </p>
                                          <form action="#">
                                                <div className="d-flex bg-primary">
                                                <input type="text" className='form-control ' placeholder='Enter your email here'/>
                                                <button type='button' className='btn btn-primary'>SEND</button>
                                                </div>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </footer>
            </div>
      )
}

export default Foters
