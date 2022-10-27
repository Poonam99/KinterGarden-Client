import { createBrowserRouter } from "react-router-dom";


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
                element: <SignIn></SignIn>
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
                        element: <PrivateRoute><Course></Course></PrivateRoute>,
                        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
                    }
                ]
            },
            {
                path: '/course/:id/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
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