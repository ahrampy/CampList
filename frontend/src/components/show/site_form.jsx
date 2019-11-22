import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
const mapKey = process.env.REACT_APP_MAP_API;

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class SiteForm extends Component {
  constructor(props) {
    super(props);
    this.coords = { lat: props.lat, lng: props.lng };
    this.state = {
      description: "",
      name: "",
      date: "",
      photoFile: null,
      photoUrl: null,
      lat: "", // for test
      lng: "", // for test
      siteFeatures: {
        parking: false,
        fishing: false,
        firePit: false,
        hiking: false,
        Swimming: false,
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    const site = Object.assign({}, this.state);
    this.props.createNewSite(site).then(() => this.props.history.goBack());
  }

  // register() {
  //   window.google.maps.event.addListener(this.map, "click", event => {
  //     const coords = getCoordsObj(event.latLng);
  //     this.handleClick(coords);
  //   });
  // }

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

    return (
      <div className="site-form-container">
        <h3>Create a New Campsite</h3>
        <div className="site-form-splitline"></div>
        <div className="site-form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="site-form-section-wrapper">
              <h2>What is the name of your campsite?</h2>
              <input
                type="text"
                id="campname"
                onChange={this.handleInput("name")}
                value={this.state.name}
                placeholder="Type your camp name here..."
              />
            </div>
            <div className="site-form-section-wrapper">
              <h2>When did you camp there?</h2>
              <input
                type="date"
                id="date"
                onChange={this.handleInput("date")}
                value={this.state.date}
              />
            </div>
            <div className="site-form-section-wrapper">
              <h2>What's your campsite's location?</h2>
              <Map
                google={this.props.google}
                zoom={7}
                style={{
                  height: "400px",
                  width: "400px",
                  position: "relative"
                }}
                // styles={{ position: "relative" }}
                initialCenter={currentPosition}
              ></Map>
            </div>
            <div className="site-form-section-wrapper">
              <h2>What was your experience?</h2>
              <textarea
                id="description"
                value={this.state.description}
                onChange={this.handleInput("description")}
                placeholder="Type your camping experience here..."
              />
            </div>
            <div className="site-form-section-wrapper">
              <h2>What activities are accessible on or near your property?</h2>
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
                    onChange={this.handleCheck('swimming')}
                  />
                  <span className="site-form-seatButton">Swimming</span>
                </label>
                
                <label>
                  <input 
                    type="checkbox"
                    name="hiking"
                    onChange={this.handleCheck('hiking')}
                  />
                  <span className="site-form-seatButton">Hiking</span>
                </label>
              </div>
            </div>
            <div className="site-form-section-wrapper">
              <h2>What features are accessible on or near your property?</h2>
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
            </div>
            <div className="site-form-submit">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// const WrappedForm = GoogleApiWrapper({
//   apiKey: mapKey
// })(SiteForm);
export default withRouter(SiteForm);
