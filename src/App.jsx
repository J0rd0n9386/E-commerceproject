import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import Products from './Pages/Products.jsx'
import { Outlet } from 'react-router-dom'
import Header from './component/Header.jsx'
import Footer from  './component/Footer.jsx'


function Layout() {
  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Header />
      <main style={{flex: 1}}>
        
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}


function App() {
  const router = createBrowserRouter([
    {
    path: "/",     //agr ye lgaa diya to direct jaa skte ho
    element: <Layout />,
    children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "AboutUs",
      element: <AboutUs />,
    },
    {
      path: "ContactUs",
      element: <ContactUs />,
    },
    {
      path: "Products",
      element: <Products />,
    },
  ]
  }
  ]);

  return (
    <>
    
     <RouterProvider router={router} />
    </>
  )
}

export default App
