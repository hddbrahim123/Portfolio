import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Contact = ()=>{


    useEffect(()=>{
    },)

    return (
        <React.Fragment>
            <section className="pt-5" id="contact">
                <div className="container py-5">
                    <h2 className="work__title text-center mb-4">Contact</h2>
                    <div className="line-mf mb-4"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card p-5">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <h5 className="mb-4">Location :</h5>
                                            <div className="d-flex flex-column">
                                                <span className="text-muted "><i className='bx bx-location-plus px-2'></i>Hay Aoulad Fadoul Rue D No 12,Tanger </span>
                                                <span className="text-muted "><i className="bx bx-phone px-2"></i>(+212 6 21826414) </span>
                                                <span className="text-muted "><i className='bx bx-mail-send px-2'></i>hddbrahim123@gmail.com </span>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <form>
                                            <div class="row">
                                                <div class="col-md-12 mb-3">
                                                    <div class="form-group">
                                                    <input
                                                     type="text"
                                                     class="form-control"
                                                     id="name"
                                                     placeholder="Your Name"
                                                     />
                                                     </div>
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <div class="form-group">
                                                    <input
                                                     type="email"
                                                     class="form-control"
                                                     id="email"
                                                     placeholder="Your Email"

                                                     />
                                                     </div>
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <div class="form-group">
                                                    <input
                                                     type="text"
                                                     class="form-control"
                                                     id="subject"
                                                     placeholder="Subject"
                                                    />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                    <textarea
                                                     class="form-control"
                                                     rows="5"
                                                     placeholder="Message"
                                                    ></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 mt-4">
                                                    <button type="submit" class="btn-sm text-white  bg-primary">Send Message</button>
                                                </div>
                                            </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Contact

