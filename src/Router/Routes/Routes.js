import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
// import Courses from "../../pages/Courses/Courses";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";
import StorieDetails from "../../pages/Storidetails/StorieDetails";
import Stories from "../../pages/Stories/Stories";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/stories',
                loader: () => fetch('http://localhost:5000/stories'),
                element: <Stories></Stories>
            },
            {
                path: '/storie/:id',
                element: <StorieDetails></StorieDetails>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])