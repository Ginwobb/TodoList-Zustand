import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Login from '../components/Login'
import NotFound from '../components/NotFound'

const guestRouter = createBrowserRouter([
    {
        path:'/',
        element:(
        <>
        <Header/>
        <Outlet/>
        </>
        ),
        children:[
            {path:'',element:<Home/>},
            {path:'about',element:<About/>},
            {path:'login',element:<Login/>},
            {path:'*',element:<NotFound/>}
        ]
    }
])
const AppRouter = () => {
  return (
    <RouterProvider router={guestRouter}/>
  )
}

export default AppRouter