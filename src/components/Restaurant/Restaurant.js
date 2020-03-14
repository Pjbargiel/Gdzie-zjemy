import React, {Component} from "react";
import './restaurant.scss';
import { restaurants } from "../../api/restaurantsApi";


class Restaurant extends Component {
    render() {

        const {restaurant} = this.props;
        const myStyles = {
            backgroundImage: restaurant.img,
        };
        return (
            <div className="restaurant">
                <div style={myStyles} className="restaurant-logo"/>
                <div className="restaurant-body">
                    <div className="restaurant-info">
                        <div className="restaurant-info-name">{restaurant.name}</div>
                        <div className="restaurant-info-type">{restaurant.type}</div>
                        <div className="restaurant-info-adress">{restaurant.adress}</div>
                        <div className="restaurant-info-phone">{restaurant.phone}</div>
                        <a href={restaurant.menu} target="_blank">
                        <button className="restaurant-info-menu">Menu</button>
                        </a>

                    </div>
                    <a href={restaurant.website} target="_blank" className="restaurant-website">
                        <button className="restaurant-website-button">Strona internetowa</button>
                    </a>
                </div>
            </div>
        );
    }
}

class RestaurantMap extends Component {
    render() {
        return (
            <div className="restaurant-container ">
                {restaurants.map(restaurant => <Restaurant key={restaurant.name} restaurant={restaurant}/>)}
                </div>
        );
    }
}

class RestaurantsApp extends Component {
    render() {

        return <RestaurantMap />;
    }
}

export default RestaurantsApp;