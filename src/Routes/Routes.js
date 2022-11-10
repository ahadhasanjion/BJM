import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Layout/Main";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Reviews from "../Pages/ReviewPage/Reviews";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import Signup from "../Pages/Signup/Signup";



export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('https://bjm-server.vercel.app/servic')
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
            },
            {
                path:'/details/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://bjm-server.vercel.app/services/${params.id}`)
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/addservices',
                element:<AddService></AddService>,
                loader: () => fetch('https://bjm-server.vercel.app/services/')

            },
            {
                path:'/myreview',
                element:<MyReviews></MyReviews>
            },
            {
                path:'/addservice',
                element:<AddService></AddService>
            },
        ]
        
    }
])