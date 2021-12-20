import React from 'react'
import '../sass/contakt.scss'

function Contactus() {
      return (
            <div className='contakt'>
                  <div className="contakt-head">
                        <div className="contakt-info">
                              <h1>Biz bilan aloqa</h1>
                              <p>Lorem ipsum dolor sit
                                    amet, consectetur
                                    adipiscing elit, sed
                                    do eiusmod tempor
                                    incididunt ut labore
                                    et dolore magna aliqua.
                                    Ut enim ad minim veniam,
                                    quis nostrud exercitation
                                    ullamco laboris nisi ut
                                    aliquip ex ea.
                              </p>
                        </div>
                  </div>
                  <div className="form-head">
                        <div className="contakt-form">
                              <form action="#">
                                    <div className="d-block d-md-flex justify-content-between">
                                          <div className="inp">
                                                <label htmlFor="ism">FIO</label>
                                                <input type="text" id='ism' className="form-control" />
                                          </div>
                                          <div className="inp">
                                                <label htmlFor="email">EMAIL</label>
                                                <input type="text" id='email' className="form-control" />
                                          </div>
                                    </div>
                                    <div className="mavzu">
                                          <label htmlFor="mavzu">MAVZU</label>
                                          <input type="text" id='mavzu' className="form-control" />
                                    </div>
                                    <div className="xabar">
                                          <label htmlFor="xabar">XABAR</label>
                                          <textarea id="xabar" cols="30" className="form-control" rows="10"></textarea>
                                    </div>
                                    <div className="cheket mt-5 d-flex align-items-center">
                                          <input type="checkbox" className='form-check-input m-0'  id='radio' />
                                          <label htmlFor="radio" className='form-check-label ml-5'>Accept <a href="#">terms & conditions</a></label>
                                    </div>
                                    <button className="btn btn-primary w-100 mt-5">Xabar yuborish</button>
                              </form>
                        </div>
                  </div>
            </div>
      )
}

export default Contactus
