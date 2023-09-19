import React from "react";
import { NavLink } from "react-router-dom";

import './Snack.css'

const Snack = ( {snack} ) => {

    return (
        <div className="Snack">
            <h2>{snack.name}</h2>
            <div><NavLink exact to="/">Go Home!</NavLink></div>
            <img alt={'An image of ' + snack.name} src={snack.image}></img>
        </div>
    )

}

export default Snack;