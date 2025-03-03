import React from 'react';
import Header from "./Header.jsx";
import {NavLink, Outlet} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Header title="Aplicacion de estudiantes"/>
            <nav style={{backgroundColor: "#ddd", padding: "1rem"}}>
                <NavLink to="/" style={{marginRight: "1rem", fontSize: "20px", color: "blue"}}>Home</NavLink>
                <NavLink to="/students"
                         style={{marginRight: "1rem", fontSize: "20px", color: "blue"}}>Estudiantes</NavLink>
                <NavLink to="/form" style={{fontSize: "20px", color: "blue"}}>Formulario</NavLink>
            </nav>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};
export default NavBar;