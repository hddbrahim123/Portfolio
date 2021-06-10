import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"


import img from "../../../assets/images/App.png"
import Breadcrumb from '../../../Components/Comon/Breadcrumb'
import { getProjects } from '../../../Core/ApiCore/Project'

const Projects = ()=>{
    const [projects , setProjects] = useState()
    useEffect(() => {

        getProjects()
            .then(res=>setProjects(res))

    }, [])
    return (
        <React.Fragment>
            <Breadcrumb item="Dashboard" link="/admin" title="Projects" />

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
                    <Th>Projects</Th>
                    <Th scope="col" data-priority="1">Due Date</Th>
                    <Th scope="col" data-priority="3">Status</Th>
                    <Th scope="col" data-priority="1">Category</Th>
                    <Th scope="col" data-priority="6">Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {!isEmpty(projects) && projects.map((project,i)=>(
                    <Tr key={i}>
                        <Th><img src={img} alt={project.name} className="avatar__sm"/></Th>
                        <Td>{project.name}</Td>
                        <Td>{project.startDate}</Td>
                        <Td>{project.status}</Td>
                        <Td>{project.category}</Td>                    
                        <Td>
                            <div className="d-flex gap-3">
                            <Link to={"/admin/project/"+ project.id} className="text-success fw-bold">
                            <i className='bx bx-show'></i>
                            </Link>
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

export default Projects
