import React, { useState } from 'react'

import ImageUpload from 'react-images-upload'
import Breadcrumb from '../../../Components/Comon/Breadcrumb.js'
import {AddProject} from '../../../Core/ApiCore/Project.js'

//Import toastr
import toastr from "toastr"
import "toastr/build/toastr.min.css"

const CreateProject = (props)=>{

  const [project , setProject] = useState({
    id:Math.floor(Math.random() * 100),
    "name":"string",
    "description":"string",
    "startDate":"",
    "endDate": "",
    "category":"string",
    "company":"string",
    "budget":100,
    "status":"completed"
  })

  const handleProject = (e)=>{setProject({...project , [e.target.id]:e.target.value})}

  const SubmitProject =(e)=>{
    e.preventDefault()
    AddProject(project)
     .then(res=>{
        props.history.push("/admin/projects")
        toastr.success("success" , res.msg )
     })
  }
    return (
        <React.Fragment>
            <Breadcrumb item="Projects" link="/admin/projects" title="Create Project" />

            <div className="row">
              <div className="col-lg-12 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h4 className="text-left text-muted fs-6 mb-4">Create Project </h4>
                    <form>
                      <div className="row">
                       <div className="col-lg-2">
                          <label htmlFor="name" className="form-label">Project Name</label>
                       </div>
                       <div className="col-lg-10 mb-3">
                          <input
                            type="text"
                            id="name"
                            // placeholder="Name ..."
                            className="form-control"
                            value={project.name}
                            onChange={handleProject}
                          />
                         </div>  
                      </div> 
                      <div className="row">
                        <div className="col-lg-2">
                          <label htmlFor="description" className="form-label">Project Description</label> 
                        </div>
                        <div className="col-lg-10 mb-3">
                          <textarea
                            type="text"
                            id="description"
                            // placeholder="Description ..."
                            className="form-control"
                            rows="4"
                            value={project.description}
                            onChange={handleProject}
                          ></textarea>
                        </div> 
                      </div>
                      <div className="row mb-3">
                        <div className="col-lg-2">
                          <label htmlFor="startDate" className="form-label">Project Date</label> 
                        </div>
                        <div className="col-lg-5 mb-3">
                          <input
                            type="date"
                            id="startDate"
                            className="form-control"
                            value={project.startDate}
                            onChange={handleProject}
                          />
                        </div> 
                        <div className="col-lg-5 mb-3">
                          <input
                            type="date"
                            id="endDate"
                            className="form-control"
                            value={project.endDate}
                            onChange={handleProject}
                          />
                        </div> 
                      </div>
                      <div className="row">
                       <div className="col-lg-2">
                          <label htmlFor="status" className="form-label">Project Status</label>
                       </div>
                       <div className="col-lg-10 mb-3">
                          <input
                            type="text"
                            id="status"
                            className="form-control"
                            value={project.status}
                            onChange={handleProject}
                          />   
                       </div>  
                      </div>
                      <div className="row">
                       <div className="col-lg-2">
                          <label htmlFor="category" className="form-label">Project Category</label>
                       </div>
                       <div className="col-lg-10 mb-3">
                          <input
                            type="text"
                            id="category"
                            // placeholder="Category ..."
                            className="form-control"
                            value={project.category}
                            onChange={handleProject}
                          />
                         </div>  
                      </div>
                      <div className="row">
                       <div className="col-lg-2">
                          <label htmlFor="budget" className="form-label">Project Budget</label>
                       </div>
                       <div className="col-lg-10 mb-3">
                          <input
                            type="number"
                            id="budget"
                            // placeholder="Budget ..."
                            className="form-control"
                            value={project.budget}
                            onChange={handleProject}
                          />
                         </div>  
                      </div>
                      <div className="row">
                       <div className="col-lg-2">
                          <label htmlFor="company" className="form-label">Project Company</label>
                       </div>
                       <div className="col-lg-10 mb-3">
                          <input
                            type="text"
                            id="company"
                            // placeholder="Company ..."
                            className="form-control"
                            value={project.company}
                            onChange={handleProject}
                          />
                         </div>  
                      </div>
                      <div className="row">
                       <div className="col-lg-2">
                          <label htmlFor="budget" className="form-label">Project images</label>
                       </div>
                       <div className="col-lg-10 mb-3">
                          <ImageUpload
                            withIcon={true}
                            withPreview={true}
                          />
                         </div>  
                      </div>   
                    </form>
                  </div>
                </div>
              </div>  
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <button onClick={SubmitProject} className="btn btn-primary w-100 fs-4" type="submit">Create Project</button>
                  </div>
                </div>
              </div>  
            </div>
        </React.Fragment>
    )
}

export default CreateProject
