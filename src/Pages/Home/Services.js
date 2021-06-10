import React, { useEffect, useState } from 'react'

import webDesign from '../../assets/images/webDesign.png'
import { ServicesData } from '../../Components/Comon/Data'
import { isEmpty } from 'lodash'

const Services = ()=>{

    const [services , setServices] = useState([])

    useEffect(() => {
        setServices(ServicesData)
    }, [])

    return (
        <React.Fragment>
            <section className="pt-5" id="services">
                <div className="container py-5">
                    <h2 className="services__title text-center mb-4">Services</h2>
                    <div className="line-mf mb-4"></div>
                    <div className="row">
                        {!isEmpty(services) && services.map((service , i)=>(
                            <div key={i} className="col-lg-4">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <span className="d-flex align-align-items-center justify-content-center my-4"><img src={webDesign} alt="web" className="avatar__sm p-2 img-fluid" /></span>
                                        <div className="services__content my-2">
                                            <h4 className="text-center first-color  mb-4">{service.name}</h4>
                                            <p className="s-description text-center">
                                            {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Services

