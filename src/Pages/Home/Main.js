import React, { useEffect, useRef, useState } from 'react'
import {init} from 'ityped'
import profile from '../../assets/images/profile.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { SubProfile } from '../../Components/Comon/Data'
import { isEmpty } from 'lodash'

const Main = ()=>{
    const textRef = useRef()
    const [subProfile ,setSubProfile] = useState({})
    useEffect(() => {
        Aos.init({
            duration:2000
        })
        init(textRef.current,{
            showCursor:false,
            strings:['Web Devloper','Front End Devloper' , 'React Js Developer']
        })     
        
        setSubProfile(SubProfile)
    }, [])
    return (
        <section id="home" data-aos="fade-down" className="home">
            <div className="container-lg">
              <div className="bg-gray"></div>  
             <div className="row min-h align-items-center align-content-center">
              
              <div data-aos="fade-left" className="col-lg-5">
               <div className="home_img">
                 <img src={profile} alt="img" className=" mw-100" />
               </div> 
              </div>
              <div data-aos="fade-right" className="col-lg-7 order-lg-first"> 
               <p className="text-muted home__sub__title">Hello I'm </p>
                <h2 className="home__title">{subProfile.name}</h2>
                <p className="home__sub__title">Freelance, <span ref={textRef} ></span></p>
                
                <div className="contact">
                    <button className="btn  px-4 mr-2 mb-4 border-0" type="submit">Contact Me</button>
                </div>

                <div className="home__social__icons d-flex flex-column">
                    {!isEmpty(subProfile.socialLink) && subProfile.socialLink.map((link , i)=>(
                        <a key={i} href={link.Link}> <i className={`bx bxl-${link.name}`}></i></a>
                    ))}
                </div> 
              </div>
             </div>
            </div>
        </section>
    )
}

export default Main
