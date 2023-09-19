import React from "react";
import { NavLink } from "react-router-dom";


const MachineNav = () => {

    return (
        <nav className="Navbar">

            <h1>Vending Machine!</h1>

            <NavLink exact to="/chips">Chips</NavLink>
            <NavLink exact to="/cold-snack">Cold Snack</NavLink>
            <NavLink exact to="/ranch">Ranch</NavLink>

        </nav>
    )

}

export default MachineNav;