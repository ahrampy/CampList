import React from "react";
import { withRouter } from "react-router-dom";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
const styles = require("./GoogleMapStyles.json");
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
    // this.handleRoute = this.handleRoute.bind(this)
  }

  onMarkerClick = (props, marker, e) => {
    return (
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      })
    )
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    
    const { sites } = this.props

    return (
      <Map
        google={this.props.google}
        zoom={6}
        style={{ maxHeight: "600px", maxWidth: "600px" }}
        styles={styles}
        initialCenter={{
          lat: 36.7783,
          lng: -119.4179
        }}
      >
        {/* <Data></Data> */}
        {sites.map((site, i) => (
          <Marker
            key={i}
            id={site._id}
            onClick={this.onMarkerClick}
            name={site.name}
            position={{ lat: site.lat, lng: site.lng }}
            siteUrl={`#/campsites/${site._id}`}
            icon={"/marker.png"}
          ></Marker>
        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div className="map-info-window">
            <a href={`${this.state.selectedPlace.siteUrl}`}>
              {this.state.selectedPlace.name}
            </a>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

const WrappedMap = GoogleApiWrapper({
  apiKey: mapKey
})(MapComponent);
export default withRouter(WrappedMap);