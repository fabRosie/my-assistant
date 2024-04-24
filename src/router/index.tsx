import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './view/Home';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])
const MyRouter = () => {
  return (
    <RouterProvider router={routers}/>
  )
}

export default MyRouter
