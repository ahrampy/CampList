import React from "react";
import { withRouter } from "react-router-dom";
import {
  Map,
  GoogleApiWrapper,
  InfoWindow,
  Marker,
  Polygon
} from "google-maps-react";
const styles = require("./GoogleMapStyles.json");
const mapKey = process.env.REACT_APP_MAP_API;

class IndexMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      currentPosition: {
        lat: 0,
        lng: 0
      },
      zoom: 7
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onClose = this.onClose.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentPosition &&
      prevProps.currentPosition.lat !== this.props.currentPosition.lat
    ) {
      this.setState({ zoom: 7 });
      setTimeout(() => this.setState({ zoom: 10 }), 1000);
    } else if (prevProps.sites !== this.props.sites) {
      console.log("hit");
      this.setState({ zoom: 7 });
    }
  }

  onMarkerClick(props, marker) {
    return this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onClose() {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  updatePosition(position) {
    this.setState({
      currentPosition: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    });
  }

  render() {
    const { sites, currentPosition } = this.props;
    const updatePosition = this.updatePosition;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        updatePosition(position);
      });
    }

    // const poly1 = [
    //   { lng: -122.561, lat: 40.739},
    //   { lng: -122.603, lat: 40.679},
    //   { lng: -122.646, lat: 40.645},
    //   { lng: -122.617, lat: 40.610},
    //   { lng: -122.555, lat: 40.581},
    //   { lng: -122.505, lat: 40.536},
    //   { lng: -122.463, lat: 40.57},
    //   { lng: -122.445, lat: 40.627},
    //   { lng: -122.444, lat: 40.680},
    //   { lng: -122.476, lat: 40.728},
    //   { lng: -122.526, lat: 40.77},
    //   { lng: -122.601, lat: 40.787},
    //   { lng: -122.561, lat: 40.739}
    // ];

    return (
      <Map
        google={this.props.google}
        zoom={this.state.zoom}
        style={{ height: "600px", width: "100%" }}
        styles={styles}
        center={currentPosition}
      >
        {/* <Polygon
          paths={poly1}
          strokeColor="#4d2600"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#4d2600"
          fillOpacity={0.35}
        /> */}
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
})(IndexMap);
export default withRouter(WrappedMap);
