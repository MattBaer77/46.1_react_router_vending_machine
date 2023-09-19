import React from "react";
import { NavLink } from "react-router-dom";

import './MachineNav.css'

const MachineNav = ({snacks}) => {

    return (
        <nav className="Navbar">

            <h1>Vending Machine!</h1>

            <div>{snacks.map(s => <NavLink exact to={s.link}>{s.name}</NavLink>)}</div>

            <img alt="Vending Machine" src="http://web.mit.edu/2.744/studentSubmissions/humanUseAnalysis/keval/vm.jpg"></img>


            {/* <NavLink exact to="/chips">Chips</NavLink>
            <NavLink exact to="/cold-snack">Cold Snack</NavLink>
            <NavLink exact to="/ranch">Ranch</NavLink> */}

        </nav>
    )

}

export default MachineNav;