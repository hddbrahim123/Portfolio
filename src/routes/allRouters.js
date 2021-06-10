import { Redirect } from "react-router"

//Home Page
import Home from "../Pages/Home"
import HomeProjectDetails from "../Pages/Home/ProjectDetails"

//imports Seller Pages
import Dashboard from "../Pages/Admin"
import AdminLogin from "../Pages/Admin/Authentication/AdminLogin"
import Projects from "../Pages/Admin/Projects"
import CreateProject from "../Pages/Admin/Projects/CreateProject"
import ProjectDetails from "../Pages/Admin/Projects/ProjectDetails"
import Profile from "../Pages/Admin/Authentication/Profile"
import CreateServices from "../Pages/Admin/Services/CreateServices"
import Services from "../Pages/Admin/Services"

const sellerRoutes = [
  { path:'/admin/dashboard' , component: Dashboard },

  { path:'/admin/projects' , component: Projects },
  { path:'/admin/projects/create' , component: CreateProject },
  { path:'/admin/project/:id' , component: ProjectDetails },

  { path:'/admin/services/create' , component: CreateServices },
  { path:'/admin/services' , component: Services },



  { path:'/admin/profile' , component: Profile },

  { path: "/admin", exact: true, component: () => <Redirect to="/admin/dashboard" /> },

]
const authSeller = [
  { path:'/admin/login' , component: AdminLogin },

]

const homeRoute = [
  { path:'/' , component: Home },
  { path:'/work/:id' , component: HomeProjectDetails },
]

export { sellerRoutes , authSeller , homeRoute }