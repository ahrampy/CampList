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
    
    if (!this.props.sites) return null;
    // const site = { lat: parseFloat(this.props.sites[0].lat), lng: parseFloat(this.props.sites[0].lng) };
    return (

      <Map
        google={this.props.google}
        zoom={6}
        style={{ width: "100%", height: "100%" }}
        initialCenter={{
          lat: 36.7783,
          lng: -119.4179
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Marker"}
          // position={site}
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

  apiKey: mapKey
})(MapComponent);
