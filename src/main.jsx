import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Statistics from './components/Root/Statistics/Statistics.jsx';
import GadgetDetails from './components/GadgetDetails/GadgetDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'gadget/:productId',
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch('/gadget.json')
      },
      {
        path: '/dashboard',
        element : <Dashboard></Dashboard>
      },
      {
        path: '/statistics',
        element : <Statistics></Statistics>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
