import { NavLink } from "react-router-dom";
import React, {Component} from "react";
import './logo.scss';

class Logo extends Component {
    render() {
        return (
            <>
                <img className="logo" src={"./logotyp.png"} alt="Logo" />
            </>

        );
    }
}

export default Logo;