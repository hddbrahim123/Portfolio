import React, { useEffect, useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'

import iconmenu from '../../assets/icons/icon-menu.svg'
import logo from '../../assets/images/logo3.png'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const Header = ()=>{
  const [show , setShow] = useState(false)
  const toggleMenu = () => setShow(!show)

  useEffect(() => {
    Aos.init({
      duration:2000
    })
  }, [])

    return (
      <header data-aos="fade-down" className="header shadow-sm">
        <nav className="nav">
            
            <div className="nav__brand">
              <Link to="/" ><img src={logo} alt="logo" /></Link>
            </div>
            <div className={show ? "nav__menu show" : "nav__menu"}>
                <ul className="nav__list">
                  <li className="nav__item ">
                    <Link to="/" className="nav__link">home</Link>
                  </li>
                  <li className="nav__item">
                    <LinkScroll  smooth={true}  duration={500} to="about" className="nav__link">About</LinkScroll>
                  </li>
                  <li className="nav__item">
                    <LinkScroll   smooth={true}  duration={500} to="services" className="nav__link">Services</LinkScroll>
                  </li>
                  <li className="nav__item">
                    <LinkScroll  smooth={true}  duration={500} to="work" className="nav__link">Work</LinkScroll>
                  </li>
                  <li className="nav__item">
                    <LinkScroll  smooth={true}  duration={500} to="contact" className="nav__link">Contact</LinkScroll>
                  </li>
                </ul>
            </div>
            <div className="nav__toggle" onClick={toggleMenu}>
             <img src={iconmenu} alt="icon-toggle" />
            </div>
        </nav>      
      </header>
    )
}

export default Header
