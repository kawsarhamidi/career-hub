import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Root from './Component/Layout/Root';
import Blog from './Component/Blog/Blog';
import Applied from './Component/Applied/Applied';
import Details from './Component/Delails/Details';
import Statistics from './Component/Statistics/Statistics';
import ErrorPage from './Component/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/jobs.json'),
      },
      {
        path: '/jobDetails/:id',
        element: <Details></Details>,
        loader: () => fetch("/jobs.json")
      },
      {
        path: '/statistic',
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/applied',
        element: <Applied></Applied>
      },
      {
        path: '/*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
