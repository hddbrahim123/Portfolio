import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"


import img from "../../../assets/images/App.png"
import Breadcrumb from '../../../Components/Comon/Breadcrumb'
import { getServices, removeService } from '../../../Core/ApiCore/services'



const Services = (props)=>{
    const [services , setServices] = useState()
    useEffect(() => {
        getServices()
            .then(res=>setServices(res))
            
    }, [])

    return (
        <React.Fragment>
            <Breadcrumb item="Dashboard" link="/admin" title="services" />

          <div className="container-fluid">
            <div className="row">
            <div className="table-rep-plugin ">
            <div
                className="table-responsive mb-0"
                data-pattern="priority-columns"
            >
                <Table
                className="table custom__table  table-nowrap align-middle table-borderless"
                >
                <Thead>
                    <Tr>
                    <Th></Th>
                    <Th>Name</Th>
                    <Th scope="col" data-priority="1">Description</Th>
                    <Th scope="col" data-priority="6">Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {!isEmpty(services) && services.map((service,i)=>(
                    <Tr key={i}>
                        <Th><img src={img} alt={service.name} className="avatar__sm"/></Th>
                        <Td>{service.name}</Td>
                        <Td><p className="text-text-truncate">{service.description}</p></Td>                   
                        <Td>
                            <div className="d-flex gap-3">                            
                            <Link to="#" className="text-success fw-bold">
                            <i className='bx bx-edit'></i>
                            </Link>
                            <Link to="#" className="text-danger  fw-bold">
                            <i className='bx bx-trash'></i>
                            </Link>
                            </div>
                        </Td>
                    </Tr>
                    ))}
                    
                </Tbody>        
                </Table>
            </div>
            </div>
            </div>
          </div>  
        </React.Fragment>
    )
}

export default Services
