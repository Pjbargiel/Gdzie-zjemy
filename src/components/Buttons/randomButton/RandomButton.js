import { NavLink } from "react-router-dom";
import React, {Component} from "react";
import './randomButton.scss';


class RandomButton extends Component {
    render() {
        return (
            <a href="/Restaurants">
                <button className="randomButton">
                    <NavLink className="randomButton-NavLink" exact to="/Restaurants">
                        <div className="randomButton-text">Wylosuj Restauracje</div>
                    </NavLink>
                </button>
            </a>
        );
    }
}

export default RandomButton;