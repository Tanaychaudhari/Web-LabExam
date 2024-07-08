import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Components/Home';
import Read from './Components/Read';
import Create from './Components/Create';
import Update from './Components/Update';

const customRouter = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/home",
            element: <Home/>,
        },

        {
            path: "/read",
            element: <Read/>,
        },

        {
            path: "/create",
            element: <Create/>,
        },

        {
            path: "/update",
            element: <Update/>,
        },


    ],
},
]);

export default customRouter;
