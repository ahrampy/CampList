import React from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
const styles = require("./GoogleMapStyles.json");
const mapKey = process.env.REACT_APP_MAP_API;

class ShowMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedTag: {},
      currentPosition: { lat: null, lng: null }
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onClose = this.onClose.bind(this);
    // this.checkLoction = this.checkLoction.bind(this)
    // this.calcRoute = this.calcRoute.bind(this)
  }

  onMarkerClick = (props, marker, e) => {
    return this.setState({
      selectedTag: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  // componentDidMount() {
  //     this.checkLoction()
  // }

  // checkLoction = () => {
  //     let that = this
  //     if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //         function(position) {
  //         that.setState({currentPosition:{
  //             lat: position.coords.latitude,
  //             lng: position.coords.longitude}
  //         })
  //         }
  //     );
  //     }
  // };

  //   calcRoute() {
  //         const directionsService = new window.google.maps.DirectionsService();
  //         const directionsRenderer = new window.google.maps.DirectionsRenderer();

  //         let directionsLat;
  //         let directionsLng;
  //             if (this.props.site.parking) {
  //                 directionsLat = this.props.site.plat;
  //                 directionsLng = this.props.site.plng;
  //             } else {
  //                 directionsLat = this.props.site.lat;
  //                 directionsLng = this.props.site.lng;
  //             }
  //         const start = new window.google.maps.LatLng(this.state.currentPosition);
  //         const end = new window.google.maps.LatLng(directionsLat, directionsLng);
  //         const request = {
  //             origin: start,
  //             destination: end,
  //             travelMode: 'DRIVING'
  //         };
  //         directionsService.route(request, function(result, status) {
  //             if (status == 'OK') {
  //                 directionsRenderer.setDirections(result);
  //             }
  //         });
  //     }

  
  render() {
    const { _id, name, lat, lng, tlat, tlng, plat, plng } = this.props.site;

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={{ height: "400px", width: "100%" }}
          styles={styles}
          initialCenter={{
            lat: lat,
            lng: lng
          }}
        >
          <Marker
            key={_id}
            onClick={this.onMarkerClick}
            name={name}
            position={{ lat: lat, lng: lng }}
            icon={"/marker.png"}
            type={"Campsite"}
          ></Marker>
          <Marker
            key={_id + "1"}
            onClick={this.onMarkerClick}
            name={name}
            position={{ lat: tlat, lng: tlng }}
            icon={"/trail_flag.png"}
            type={"Trailhead"}
          ></Marker>
          <Marker
            key={_id + "2"}
            onClick={this.onMarkerClick}
            name={name}
            position={{ lat: plat, lng: plng }}
            icon={"/parking.png"}
            type={"Parking"}
          ></Marker>
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div className="map-info-window">
              <h4>{this.state.selectedTag.type}</h4>
              {/* <button onClick={this.calcRoute()}>Directions</button> */}
              {/* <h4>

              <form
                action="http://maps.google.com/maps"
                method="get"
              >
                <input
                  type="hidden"
                  name="saddr"
                  value={
                    new window.google.maps.LatLng(
                      this.state.currentPosition.lat,
                      this.state.currentPosition.lat
                    )
                  }
                />
                <input
                  type="hidden"
                  name="daddr"
                  value={
                    new window.google.maps.LatLng(directionsLat, directionsLng)
                  }
                />
                <input
                  className="get-directions-btn"
                  type="submit"
                  value="Get Directions"
                />
              </form>
            </h4> */}
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: mapKey
})(ShowMap);
