import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'

import img from '../../assets/images/0.jpg'
import {  ProfileData } from '../../Components/Comon/Data'

const About=()=>{

    const [profile , setProfile] = useState({})

    useEffect(() => {
        setProfile(ProfileData)
    }, [])

    return (
        <React.Fragment>
        <section className="pt-5" id="about"> 
           <div className="container pt-4">
           <h2 className="work__title text-center py-4">About</h2>
            <div className="line-mf mb-4"></div>
            <div className="row">
                <div className="col-lg-12 ">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6 p-lg-5 p-sm-2">
                                <div className="about d-flex mb-4">
                                    <img src={img} alt="profile" className="about__img mb-4 avatar__lg me-4" />
                                    <div className="overflow-hidden">
                                      <ul>
                                        <li className="mb-2"><strong>Name</strong>:{profile.name}</li>
                                        <li className="mb-2"><strong>Profile</strong>: {profile.profile}</li>
                                        <li className="mb-2"><strong>Email</strong>: {profile.email}</li>
                                        <li className="mb-2"><strong>Phone</strong>: {profile.phone}</li>
                                      </ul>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <h5 className="first-color mb-1">Skills :</h5>
                                    <div className="line-left mb-4"></div>
                                    {!isEmpty(profile.skills) && profile.skills.map((skill , i)=>(
                                        <div key={i}>
                                        <span>{skill.name}</span> <span className="pull-right float-end">{skill.porcentage}{" "}%</span>
                                        <div className="progress mt-2 mb-3">
                                            <div className="progress-bar" role="progressbar" style={{width: `${skill.porcentage}%`}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        </div>
                                    ))}
                                </div>  
                                </div>
                                <div className="col-lg-6 p-lg-5 p-sm-2">
                                  <div className="about">
                                    <h5 className="title-left  first-color">
                                        About me
                                    </h5>
                                    <div className="line-left mb-4"></div>
                                     <p>{profile.about}</p>   
                                  </div>
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

export default About
