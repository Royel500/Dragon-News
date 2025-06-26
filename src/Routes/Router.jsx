import { createBrowserRouter } from "react-router";
import HomeLayout from "../LayOut/HomeLayout";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import Error from "../Components/Error/Error";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import Authebtication from "../LayOut/HomeLayout/Authebtication";

import CardDetails from "../Components/CardDetails";
import PrivateRoute from "../Provider/PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/' ,
        element: <HomeLayout></HomeLayout> ,
        children:[
            {
                index:true ,
                element:<Home></Home>
            },
            {
                path:'category/:id' ,
                element: <Category></Category>,
                loader: () => fetch('/news.json'),
            },
        ]
    },
    {
      path: '/auth' ,
      element: <Authebtication></Authebtication> ,
      errorElement:<Error></Error>,
    children:[
        {
            path:'auth/login' ,
            element: <LogIn></LogIn>
        },
        {
            path:'auth/register' ,
            element: <Register></Register>
        }
    ]
    },
    {
        path:'/news-details/:id' ,
        element: <PrivateRoute>
             <CardDetails></CardDetails>
             </PrivateRoute>,
        loader: () => fetch('/news.json'),
    },
    {
        path:'/*' ,
        element: <Error></Error>
    }
]);


export default router ;