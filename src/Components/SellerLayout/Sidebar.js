import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = ()=>{

  let isOpen = useSelector(state => state.Layout.leftMenu)

  const [dropdown , setDropdown] = useState(false)
  const [service , setService] = useState(false)

  const toggleDropdown = () => setDropdown(!dropdown)

  const toggleServicesDropdown = () => setService(!service)

  

    return (
        <React.Fragment>
         <div className={isOpen ? "sidebar show__sidebar " : "sidebar shadow-sm"}>
           <nav className="sidebar__container">
              <div className="sidebar__list">
                <div className="sidebar__items">
                  <h2 className="sidebar__subtitle">home</h2>

                  <Link to="/admin" className="sidebar__links">
                    <i className='bx bx-home sidebar__icon' ></i>
                    <span className="sidebar__name">dashboard</span>
                  </Link>
                </div>

                <div className="sidebar__items">
                  <h2 className="sidebar__subtitle">Projects</h2>

                  <div className="sidebar__dropdown">
                    <Link to="#" className="sidebar__links" onClick={toggleDropdown}>
                        <i className='bx bx-home sidebar__icon' ></i>
                        <span className="sidebar__name">Projects</span>
                        <i className='bx bx-chevron-down sidebar__icon sidebar__dropdown__icon'></i>
                    </Link>
                    <div className={ dropdown ? "sidebar__dropdown__collapse show__dropdown" : "sidebar__dropdown__collapse" }>
                        <div className="sidebar__dropdown__content">
                            <Link to="/admin/projects/create" className="sidebar__dropdown__links">Add Projects</Link>
                            <Link to="/admin/projects" className="sidebar__dropdown__links">Display Projects</Link>
                        </div>
                    </div>
                  </div>
                  <div className="sidebar__dropdown">
                    <Link to="#" className="sidebar__links" onClick={toggleServicesDropdown}>
                        <i className='bx bx-home sidebar__icon' ></i>
                        <span className="sidebar__name">Services</span>
                        <i className='bx bx-chevron-down sidebar__icon sidebar__dropdown__icon'></i>
                    </Link>
                    <div className={ service ? "sidebar__dropdown__collapse show__dropdown" : "sidebar__dropdown__collapse" }>
                        <div className="sidebar__dropdown__content">
                            <Link to="/admin/services/create" className="sidebar__dropdown__links">Add service</Link>
                            <Link to="/admin/services" className="sidebar__dropdown__links">list services</Link>
                        </div>
                    </div>
                  </div>
                </div>                
             </div>
           </nav> 
         </div>
        </React.Fragment>
    )
}

export default Sidebar
