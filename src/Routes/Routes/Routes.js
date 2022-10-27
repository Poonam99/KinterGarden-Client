import { createBrowserRouter } from "react-router-dom";
import Login from "../../component/Login/Login/Login";
import SignUp from "../../component/Login/Signup/Signup";
import CourseMain from "../../Layout/Coursemain";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blogs/Blogs";
import Checkout from "../../Pages/Checkout/Checkout";
import Course from "../../Pages/Course/Course";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/course`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/',
                element: <CourseMain></CourseMain>,
                children: [
                    {
                        path: '/course',
                        element: <Courses></Courses>,
                        loader: () => fetch(`http://localhost:5000/course`)
                    },
                    {
                        path: '/course/:id',
                        element: <PrivateRoutes><Course></Course></PrivateRoutes>,
                        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
                    }
                ]
            },
            {
                path: '/course/:id/checkout',
                element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            }
        ]
    }
])