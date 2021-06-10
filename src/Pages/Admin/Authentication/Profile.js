import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import profileimg from '../../../assets/images/0.jpg'
import Breadcrumb from '../../../Components/Comon/Breadcrumb'
import { ProfileData } from '../../../Components/Comon/Data'

const Profile = ()=>{

    const [profile , setProfile] = useState({})

    useEffect(() => {
        setProfile(ProfileData)
    }, [])

    return (
        <React.Fragment>
            <Breadcrumb item="Dashboard" link="/admin" title="User Profile" />
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src={profileimg} alt="user profile" className="avatar__md rounded-circle" />
                                <h5 className="first-color my-3">{profile.name}</h5> 
                                <p className="text-muted ">{profile.profile}</p> 
                                <p className="text-muted my-2">{profile.address}</p>
                                <div className="home__social__icons d-flex ">
                                    {!isEmpty(profile.socialLink) && profile.socialLink.map((link , i)=>(
                                        <a key={i} href={link.Link} className="mx-2"> <i className={`bx bxl-${link.name}`}></i></a>
                                    ))}
                                </div>  
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className="col-lg-8">
                    <div className="card h-100">
                        <div className="card-body">
                            <form>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Full Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" value={profile.name} />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" value={profile.email} />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Phone</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" value={profile.phone} />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Address</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" value={profile.address} />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">About</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <textarea rows="5" type="text" class="form-control" value={profile.about} ></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-3"></div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="button" class="btn-sm btn-primary px-4 border-0 text-white" value="Save Changes" />
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Profile

