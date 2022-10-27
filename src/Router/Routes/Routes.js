import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import TermsAndCondetion from "../../Others/TermsAndCondetion/TermsAndCondetion";
import Blog from "../../pages/Blog/Blog";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Registar from "../../pages/Registar/Registar";
import StorieDetails from "../../pages/Storidetails/StorieDetails";
import Stories from "../../pages/Stories/Stories";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
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
                loader: ({ params }) => fetch(`http://localhost:5000/storie/${params.id}`),
                element: <PrivateRoute><StorieDetails></StorieDetails></PrivateRoute>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registar',
                element: <Registar></Registar>
            },
            {
                path: 'terms/:id',
                element: <TermsAndCondetion></TermsAndCondetion>
            }
        ]
    }
])