import { ProjectsData } from "../../Components/Comon/Data"

export const AddProject = (project)=>{
    ProjectsData.push(project)
    return Promise.resolve({
        msg:"Project Created SuccessFully",
        project:project
    })

}

export const getProjects = ()=>{
    return Promise.resolve(ProjectsData)
}

export const getProject = (id)=>{
    let project = ProjectsData.find(item=>item.id === id)
    return Promise.resolve(project)
}

