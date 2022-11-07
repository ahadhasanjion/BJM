import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Layout/Main";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import Signup from "../Pages/Signup/Signup";



export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/aboutus',
                element:<AboutUs></AboutUs>

            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            }
        ]
        
    }
])