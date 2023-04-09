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
import Statitices from './Component/Statistics/Statistics';
import Blog from './Component/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobs.json'),
      },
      {
        path: '/Statistic',
        element: <Statitices></Statitices>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
