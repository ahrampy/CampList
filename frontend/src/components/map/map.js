import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

class MapComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    };
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={6}
        style={mapStyles}
        initialCenter={{
          lat: 36.7783,
          lng: -119.4179
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Marker"}
          // position={{ lat: this.props.sites[0].lat, lng: this.props.sites[0].lng }}
        />
        {/* {this.props.sites.map(site => (
          <div key={site.id} className='map-site-marker'>
            <Marker
              onClick={this.onMarkerClick}
              name={site.title}
              position={{lat: site.lat, lng: site.lng}}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </div>
        ))} */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBk7CBd8ZQcP0bHBHwiPgQcpcOU1oGVVbo"
})(MapComponent);
