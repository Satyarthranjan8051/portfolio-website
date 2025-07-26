import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";


import Projects from "../Pages/Projects";
import ResumePage from "../Pages/Resume";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/projects',
    element: <Projects/>,
  },
  {
    path: '/resume',
    element: <ResumePage/>,
  },
  {
    path: '/contact',
    element: <Contact/>,
  },
]);

const AllRoutes = ()=>{
  return (
    // passing the router Object
    <RouterProvider router = {router} />
  )
};
export default AllRoutes;