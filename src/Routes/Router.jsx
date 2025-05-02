import { createBrowserRouter } from "react-router";
import HomeLayout from "../LayOut/HomeLayout";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import Error from "../Components/Error/Error";


const router = createBrowserRouter([
    {
        path:'/' ,
        element: <HomeLayout></HomeLayout> ,
        children:[
            {
                path:'' ,
                element:<Home></Home>
            },
            {
                path:'/category/:id' ,
                element: <Category></Category>,
                loader: () => fetch('/public/news.json'),
            },
        ]
    },
    {
        path:'/*' ,
        element: <Error></Error>
    }
]);


export default router ;