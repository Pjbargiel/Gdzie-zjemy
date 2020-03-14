import { NavLink } from "react-router-dom";
import React, {Component} from "react";
import './searchButton.scss';

class SearchButton extends Component {
    render() {
        return (
            <a href="/Restaurants">
                <button className="searchButton">
                    <NavLink className="searchButton-NavLink" exact to="/Restaurants">
                        <div className="searchButton-text">Przeglądaj Restauracje</div>
                    </NavLink>
                </button>
            </a>
        );
    }
}

export default SearchButton;