import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h1> About Page </h1>
            <nav>
                <NavLink to="career" >Career</NavLink>
                <NavLink to="placement" >Placement</NavLink>
            </nav>
            <Outlet/>
                {/*Outlet is used to render the nested route component */}
        </div>
    )
}

export default About
