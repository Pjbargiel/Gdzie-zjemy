import { NavLink } from "react-router-dom";
import React, {Component} from "react";
import './footer.scss';
import Navigation from "../Navigation/Navigation";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <ul className='footer-menu'>
                    <li className="footer-menu-list">
                        <NavLink className="FooterNavLink" exact to="/">Strona Główna</NavLink>
                    </li>
                    <li>
                        <NavLink className="FooterNavLink" exact to="/Restaurants">Restauracje</NavLink>
                    </li>
                    <li>
                        <NavLink className="FooterNavLink" exact to="/AboutUs">O nas</NavLink>
                    </li>
                    <li>
                        <NavLink className="FooterNavLink" exact to="/Contact">Kontakt</NavLink>
                    </li>
                </ul>
                <div className="line" />
                <div className="copyrights">
                    © 2020 GdzieZjesc.com All Rights Reserved
                </div>
            </div>
        );
    }
}

export default Footer;