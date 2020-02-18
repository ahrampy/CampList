import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import FooterNav from '../nav/footer_nav'

const mapKey = process.env.REACT_APP_MAP_API;
const styles = require("../maps/GoogleMapStyles.json");

class SiteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      name: "",
      date: "",
      photoFile: null,
      photoUrl: "",
      fields: {
        location: null,
        trailLocation: {
          lat: null,
          lng: null
        },
        parkingLocation: {
          lat: null,
          lng: null
        },
      },
      mapClicked: false,
      siteFeatures: {
        parking: false,
        fishing: false,
        firePit: false,
        hiking: false,
        Swimming: false
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleInput(type) {
    return e =>
      this.setState({
        [type]: e.target.value
      });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleCheck(type) {
    return e => {
      let newSiteFeatures = Object.assign({}, this.state.siteFeatures);
      newSiteFeatures[type] = !this.state.siteFeatures[type];
      this.setState({ siteFeatures: newSiteFeatures });
    };
  }

  handleOpenModal() {
    this.props.openModal('login');
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.authorId) {
      return this.handleOpenModal();
    } else if (!this.state.mapClicked){
      const map = document.getElementById("location-map");
      return map.scrollIntoView();
    }
    const input = {
      description: this.state.description,
      name: this.state.name,
      date: this.state.date,
      photoFile: this.state.photoFile,
      photoUrl: {author: this.props.authorId, url: this.state.photoUrl},
      siteFeatures: this.state.siteFeatures
    }
    const latLng = {
      lat: this.state.fields.location.lat().toString(),
      lng: this.state.fields.location.lng().toString()
    };
    let tlatLng;
    if (this.state.siteFeatures.hiking) {
      tlatLng = {
        tlat: this.state.fields.trailLocation.lat().toString(),
        tlng: this.state.fields.trailLocation.lng().toString()
      };
    }

    let platLng;
    if (this.state.siteFeatures.parking) {
      platLng = {
      plat: this.state.fields.parkingLocation.lat().toString(),
      plng: this.state.fields.parkingLocation.lng().toString()
      };
    }
    const site = Object.assign( {}, input, latLng, tlatLng, platLng );
    this.props.createNewSite(site).then(() => this.props.history.goBack());
  }

  async componentDidMount() {
    const { lat, lng } = await this.getCurrentLocation();
    this.setState(prev => ({
      fields: {
        ...prev.fields,
        location: {
          lat,
          lng
        }
      },
      currentLocation: {
        lat,
        lng
      }
    }));
  }

  getCurrentLocation() {
    if (navigator && navigator.geolocation) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          resolve({
            lat: coords.latitude,
            lng: coords.longitude
          });
        });
      });
    }
    return {
      lat: 0,
      lng: 0
    };
  }
  addMarker = (location, map) => {
    this.setState(prev => ({
      fields: {
        ...prev.fields,
        location
      }
    }));
    map.panTo(location);
    this.setState({mapClicked: true})
  };

  addTrailMarker = (trailLocation, map) => {
    this.setState(prev => ({
      fields: {
        ...prev.fields,
        trailLocation
      }
    }));
    map.panTo(trailLocation);
  };
  
  addParkingMarker = (parkingLocation, map) => {
    this.setState(prev => ({
      fields: {
        ...prev.fields,
        parkingLocation
      }
    }));
    map.panTo(parkingLocation);
  };

  render() {
    let currentPosition;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }

    let hikingMap = this.state.siteFeatures.hiking && this.state.mapClicked ? (
      <div className="site-form-map-container">
        <h2>Where was the trailhead?</h2>
        <Map
          google={this.props.google}
          zoom={12}
          style={{
            height: "400px",
            width: "100%",
            position: "relative"
          }}
          styles={styles}
          initialCenter={{
            lat: this.state.fields.location.lat(),
            lng: this.state.fields.location.lng()
          }}
          onClick={(t, map, c) => this.addTrailMarker(c.latLng, map)}
        >
          <Marker position={this.state.fields.location} icon={"/marker.png"} />
          <Marker
            position={this.state.fields.trailLocation}
            icon={"/trail_flag.png"}
          />
        </Map>
      </div>
    ) : null;

    let parkingMap = this.state.siteFeatures.parking && this.state.mapClicked ? (
      <div className="site-form-map-container">
        <h2>Where did you find parking?</h2>
        <Map
          google={this.props.google}
          zoom={12}
          style={{
            height: "400px",
            width: "100%",
            position: "relative"
          }}
          styles={styles}
          initialCenter={{
            lat: this.state.fields.location.lat(),
            lng: this.state.fields.location.lng()
          }}
          onClick={(t, map, c) => this.addParkingMarker(c.latLng, map)}
        >
          <Marker position={this.state.fields.location} icon={"/marker.png"} />
          <Marker
            position={this.state.fields.trailLocation}
            icon={"/trail_flag.png"}
          />
          <Marker
            position={this.state.fields.parkingLocation}
            icon={"/parking.png"}
          />
        </Map>
      </div>
    ) : null; 

    return (
      <div>
      <div className="site-form-container">
        <h3>Create a New Campsite</h3>
        <div className="site-form-splitline"></div>
        <div className="site-form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="site-form-section-wrapper">
              <h2>Give your campsite a name.</h2>
              <input
                type="text"
                id="campname"
                onChange={this.handleInput("name")}
                value={this.state.name}
                placeholder="Type a camp name here..."
                required
              />
            </div>
            <div className="site-form-section-wrapper">
              <h2>When did you camp there?</h2>
              <input
                type="date"
                id="date"
                onChange={this.handleInput("date")}
                value={this.state.date}
                required
              />
            </div>
              <div id="location-map" className="site-form-section-wrapper">
              <h2>Where did you camp?</h2>
              <div className="site-form-map-container">
                <Map
                  google={this.props.google}
                  zoom={7}
                  style={{
                    height: "400px",
                    width: "100%",
                    position: "relative"
                  }}
                  styles={styles}
                  initialCenter={currentPosition}
                  onClick={(t, map, c) => this.addMarker(c.latLng, map)}
                >
                  <Marker
                    position={this.state.fields.location}
                    icon={"/marker.png"}
                  />
                </Map>
              </div>
            </div>
            {/* <div className="site-form-section-wrapper">
              <h2>Add a picture for the campsite.</h2>
              <input
                type="text"
                id="pictures"
                value={this.state.photoUrl}
                onChange={this.handleInput("photoUrl")}
                placeholder="photo url"
                required
              />
            </div> */}
            <div className="site-form-section-wrapper">
              <h2>Tell us a little about your experience.</h2>
              <textarea
                id="description"
                value={this.state.description}
                onChange={this.handleInput("description")}
                placeholder="Type your camping experience here..."
                required
              />
            </div>
            <div className="site-form-section-wrapper">
              <h2>What activities are nearby?</h2>
              <div className="site-form-feature">
                <label>
                  <input
                    type="checkbox"
                    name="fishing"
                    onChange={this.handleCheck("fishing")}
                  />
                  <span className="site-form-seatButton">Fishing</span>
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="swimming"
                    onChange={this.handleCheck("swimming")}
                  />
                  <span className="site-form-seatButton">Swimming</span>
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="hiking"
                    onChange={this.handleCheck("hiking")}
                  />
                  <span className="site-form-seatButton">Hiking</span>
                </label>
              </div>
              {hikingMap}
            </div>
            <div>
            </div>
            <div className="site-form-section-wrapper">
              <h2>What features does the campsite have?</h2>
              <div className="site-form-feature">
                <label>
                  <input
                    type="checkbox"
                    name="parking"
                    onChange={this.handleCheck("parking")}
                  />
                  <span className="site-form-seatButton">Parking</span>
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="firePit"
                    onChange={this.handleCheck("firePit")}
                  />
                  <span className="site-form-seatButton">Fire Pit</span>
                </label>
              </div>
              {parkingMap}
            </div>
            <div className="site-form-submit">
              <input type="submit" value="Add Campsite" />
            </div>
          </form>
        </div>
      </div>
      <FooterNav />
      </div>
    );
  }
}


const WrappedForm = GoogleApiWrapper({
  apiKey: mapKey
})(SiteForm);
export default withRouter(WrappedForm);
