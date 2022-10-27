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
import ErrorePage from "../../share/ErrorPage/ErrorePage";
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
                loader: () => fetch('https://assaienment-10-sarver.vercel.app/stories'),
                element: <Stories></Stories>
            },
            {
                path: '/storie/:id',
                loader: ({ params }) => fetch(`https://assaienment-10-sarver.vercel.app/storie/${params.id}`),
                element: <StorieDetails></StorieDetails>
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
                loader: ({ params }) => fetch(`https://assaienment-10-sarver.vercel.app/storie/${params.id}`),
                element: <PrivateRoute><TermsAndCondetion></TermsAndCondetion></PrivateRoute>
            }
        ]
    },
    {
        path: '*', element: <ErrorePage></ErrorePage>
    }
])