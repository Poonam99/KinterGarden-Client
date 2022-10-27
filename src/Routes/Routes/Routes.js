import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import SignIn from "../../component/Login/Login/Login";
import SignUp from "../../component/Login/Signup/Signup";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/course')
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
        ]
    }
]);