import React, { useEffect, useState } from 'react'

import img1 from '../../../../assets/images/0.jpg'
import { getProject } from '../../../../Core/ApiCore/Project'

const ProjectDetails = (props)=>{

  const [project, setProject] = useState({})

  useEffect(()=>{
    let id = props.match.params.id
    getProject(parseInt(id))
      .then(res=>setProject(res))
  },[])

    return (
        <React.Fragment>
            <div className="row">
              <div className="col-lg-9 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                   <div className="d-flex">
                    <img src={img1} alt="" className="avatar__sm me-4" />
                    <div className="overflow-hidden">
                        <h5 className="text-truncate font-size-15">{project.name}</h5>
                        <p className="text-muted">Devloped By hddbrahim</p>
                    </div>
                   </div>
                   <div className="mb-4">
                     <h5 className="font-size-15 mt-4">Project Details :</h5>
                     <p className="text-muted">{project.description}</p>
                   </div>
                   <div className="row">
                      <div className="col-lg-6">
                        <div className="mt-4">
                            <h5 className="font-size-14">
                                <i className="bx bx-calendar me-1 text-primary" /> Start Date
                            </h5>
                            <p className="text-muted mb-0">{project.startDate}</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                      <div className="mt-4">
                        <h5 className="font-size-14">
                            <i className="bx bx-calendar me-1 text-primary" /> end Date
                        </h5>
                        <p className="text-muted mb-0">{project.endDate}</p>
                      </div>
                      </div>
                   </div>
                  </div>  
                </div>                
              </div>
              <div className="col-lg-3 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="font-size-15 mb-4">Project information :</h5>
                     <ul>
                      <li className="mb-2"><strong>Category</strong>: {project.category}</li>
                      <li className="mb-2"><strong>Client</strong>: {project.company}</li>
                      <li className="mb-2"><strong>Project date</strong>: {project.endDate}</li>
                      <li className="mb-2"><strong>Project URL</strong>: <a href="#">{project.url}</a></li>
                     </ul>
                  </div>  
                </div>
              </div>  
            </div>
        </React.Fragment>
    )
}

export default ProjectDetails
