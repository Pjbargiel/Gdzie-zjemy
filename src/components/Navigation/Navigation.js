import { NavLink } from "react-router-dom";
import React from "react";
import './navigation.scss';


const Navigation  = () => {

    return (
        <ul className='topbar-menu'>
            <li>
                <NavLink className="NavLink" exact to="/">Strona Główna</NavLink>
            </li>
            <li>
                <NavLink className="NavLink" exact to="/Restaurants">Restauracje</NavLink>
            </li>
            <li>
                <NavLink className="NavLink" exact to="/AboutUs">O nas</NavLink>
            </li>
            <li>
                <NavLink className="NavLink" exact to="/Contact">Kontakt</NavLink>
            </li>
        </ul>
    )
}

export default Navigation;