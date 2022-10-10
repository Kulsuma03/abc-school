import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import ClassRoutine from "./components/ClassRoutine/ClassRoutine";
import Academics from "./components/Academics/Academics";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/routine',
                element: <ClassRoutine></ClassRoutine>
            },
            {
                path: '/academics',
                loader: () => fetch('school.json'),
                element: <Academics></Academics>,
                
                
            }
        ]
    }
])