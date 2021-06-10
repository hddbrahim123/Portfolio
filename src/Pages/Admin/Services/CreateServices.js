import React, { useState } from 'react'

import ImageUpload from 'react-images-upload'
import Breadcrumb from '../../../Components/Comon/Breadcrumb.js'
import { AddService } from '../../../Core/ApiCore/services.js'


//Import toastr
import toastr from "toastr"
import "toastr/build/toastr.min.css"

const CreateServices = (props)=>{

  const [service , setService] = useState({
    id:Math.floor(Math.random() * 100),
    "name":"string",
    "description":"string",
  })

  const handleService = (e)=>{setService({...service , [e.target.id]:e.target.value})}

  const SubmitService =(e)=>{
    e.preventDefault()
    AddService(service)
     .then(res=>{
        props.history.push("/admin/services")
        toastr.success("success" , res.msg )
     })
  }
    return (
        <React.Fragment>
            <Breadcrumb item="Services" link="/admin/services" title="Create Service" />

            <div className="row">
              <div className="col-lg-12 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h4 className="text-left text-muted fs-6 mb-4">Create service </h4>
                    <form>
                      <div className="row">
                       <div className="col-lg-2">
                          <label htmlFor="name" className="form-label">Service Name</label>
                       </div>
                       <div className="col-lg-10 mb-3">
                          <input
                            type="text"
                            id="name"
                            // placeholder="Name ..."
                            className="form-control"
                            value={service.name}
                            onChange={handleService}
                          />
                         </div>  
                      </div> 
                      <div className="row">
                        <div className="col-lg-2">
                          <label htmlFor="description" className="form-label">Service Description</label> 
                        </div>
                        <div className="col-lg-10 mb-3">
                          <textarea
                            type="text"
                            id="description"
                            className="form-control"
                            rows="4"
                            value={service.description}
                            onChange={handleService}
                          ></textarea>
                        </div> 
                      </div>

                      <div className="row">
                       <div className="col-lg-2">
                          <label htmlFor="budget" className="form-label">Services images</label>
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
                    <button onClick={SubmitService} className="btn btn-primary w-100 fs-4" type="submit">Create service</button>
                  </div>
                </div>
              </div>  
            </div>
        </React.Fragment>
    )
}

export default CreateServices
