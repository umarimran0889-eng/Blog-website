import React from 'react'
import Footer from './Footer'
import NavbarBlog from './Navbar'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <NavbarBlog/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout
