import './googleMaps.scss';
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    margin: '0 auto',
    width: '1200px',
    height: '400px'
};

export class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rest: [{lat: 52.413910, lng: 16.900820},
                {latitude: 52.410420, longitude: -16.911190},
                {latitude: 52.416640, longitude: 16.906890},
                {latitude: 52.411430, longitude: 16.899450},
                {latitude: 52.411430, longitude: 16.899450},
                ]
        }
    }

    displayMarkers = () => {
        return this.state.rest.map((rest, index) => {
            return <Marker key={index} id={index} position={{
                lat: rest.latitude,
                lng: rest.longitude
            }}
                           onClick={() => console.log("You clicked me!")} />
        })
    };


    render() {
        return (
            <div className="test">
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: 52.413910,
                        lng: 16.900820
                    }}
                >
                    {this.displayMarkers()}
                </Map>

            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAozhWS5HqAsD_uHlAgi6vaa1bXE9dqJhc'
})(MapContainer);
