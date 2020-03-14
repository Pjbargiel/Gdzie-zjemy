import React, {Component} from "react";
import Navigation from "../components/Navigation/Navigation"
import Logo from "../components/Logo/Logo";
import RandomButton from "../components/Buttons/randomButton/RandomButton";
import Footer from "../components/Footer/Footer";
import '../styles/restaurants.scss';
import GoogleMaps from "../components/GoogleMap/GoogleMap";
import RestaurantsApp from "../components/Restaurant/Restaurant";
import ScrollComponent from "../components/ScrollBtn/ScrollBtn";



class Restaurants extends Component {
    render() {
        return (
            <div className="restaurants" id={"up"}>
                <header className="restaurants-header">
                    <Logo />
                    <Navigation />
                </header>
                <div className="restaurants-img">
                    <div className="restaurants-img-button"><RandomButton/></div>

                </div>
                <div className="restaurants-map">
                    <div className="restaurant-map-google">
                        <GoogleMaps />
                    </div>
                </div>
                <div>
                    <RestaurantsApp />
                </div>
                <div className="restaurants-footer">
                    <Footer />
                </div>
                <div className="restaurants-scrollBtn">
                    <ScrollComponent />
                </div>
            </div>
        );
    }

}

export default Restaurants;