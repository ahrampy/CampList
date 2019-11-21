import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
const mapKey = process.env.REACT_APP_MAP_API;

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
    
    // if (!this.props.sites.length) return null;
    const { sites } = this.props
    return (
      <Map
        google={this.props.google}
        zoom={6}
        style={{ width: "800px", height: "600px" }}
        initialCenter={{
          lat: 36.7783,
          lng: -119.4179
        }}
      >
        {sites.map(site => (
          <Marker
            key={site.id}
            onClick={this.onMarkerClick}
            name={site.name}
            position={{ lat: site.lat, lng: site.lng }}
          >
            {/* <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow> */}
          </Marker>
        ))}
        {/* <Marker
          onClick={this.onMarkerClick}
          name={"Marker"}
          position={{ lat: sites[20].lat, lng: sites[20].lng }}
        /> */}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: mapKey
})(MapComponent);
