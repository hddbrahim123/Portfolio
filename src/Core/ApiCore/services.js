import { ServicesData } from "../../Components/Comon/Data"


export const AddService = (service)=>{
    ServicesData.push(service)
    return Promise.resolve({
        msg:"Project Created SuccessFully",
        project:service
    })
}

export const getServices = ()=>{
    return Promise.resolve(ServicesData)
}



