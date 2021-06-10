import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../assets/images/logo.png'
import { ProjectsData } from '../../Components/Comon/Data'

const Work = ()=>{

    const [works ,setWorks] = useState([])

    useEffect(()=>{
        setWorks(ProjectsData)
    },)

    return (
        <React.Fragment>
            <section className="pt-5" id="work">
                <div className="container pt-5">
                    <h2 className="work__title text-center mb-4">Works</h2>
                    <div className="line-mf mb-4"></div>
                    <div className="row">
                        {!isEmpty(works) && works.map((work , i)=> (
                        <div key={i} className="col-lg-4">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <img src={img1} alt="" className="avatar__sm rounded-circle me-4" />
                                        <div className="overflow-hidden">
                                            <h5 className="text-truncate font-size-15 first-color">{work.name}</h5>
                                            <p className="text-muted mb-4">Devloped By hddbrahim</p>
                                            <Link to={"/work/" + work.id} className="text-muted d-flex align-items-center"><span className="">View more</span> <i className='bx bx-right-arrow-alt mx-2'></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-between">
                                        <span className="badge bg-primary">{work.status}</span>
                                        <span><i className="bx bx-calendar me-1" />{work.endDate}</span>
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

export default Work

