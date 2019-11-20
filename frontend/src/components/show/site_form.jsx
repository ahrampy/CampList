import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class SiteForm extends Component {
  constructor(props) {
    super(props);
    this.coords = { lat: props.lat, lng: props.lng };
    this.state = {
      description: '',
      name: '',
      date: '',
      photoFile: null,
      photoUrl: null,
      lat: '', // for test
      lng: '', // for test
      siteFeatures: {
        parking: false,
        fishing: false,
        firePit: false,
        hiking: false,
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleInput(type) {
    return e => this.setState({
      [type]: e.target.value
    });
  };

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
      let newSiteFeatures = Object.assign({}, this.state.siteFeatures)
    
      newSiteFeatures[type] = !this.state.siteFeatures[type]
      this.setState({siteFeatures: newSiteFeatures})
    }
  }

  handleSubmit(e) {
    
    e.preventDefault();
    const site = Object.assign({}, this.state);
    this.props.createNewSite(site)
      .then(() => this.props.history.goBack())
  }

  render() {
    
    return (
      <div>
        <h3>Create a New Campsite</h3>
        <div className="site-form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <label>Camp Name:</label>
              <input 
                type="text"
                id="campname"
                onChange={this.handleInput('name')}
                value={this.state.name}
                placeholder="Camp Name"
              />
            
            <label>Latitude:</label>
              <input 
                type="text"
                onChange={this.handleInput('lat')}
                value={this.state.lat}
              />
            <label>Longitude:</label>
              <input 
                type="text"
                onChange={this.handleInput('lng')}
                value={this.state.lng}
              />
            <label>Date:</label>
              <input 
                type="date"
                onChange={this.handleInput('date')}
                value={this.state.date}
              />
            <label>Description:</label>
            <textarea
              className=""
              cols="30"
              rows="10"
              value={this.state.description}
              onChange={this.handleInput('description')}
            />
            <input 
              type="checkbox"
              name="fishing"
              onChange={this.handleCheck('fishing')}
            /> Fishing
            <input 
              type="checkbox"
              name="parking"
              onChange={this.handleCheck('parking')}
            /> Parking
            <input 
              type="checkbox"
              name="firePit"
              onChange={this.handleCheck('firePit')}
            /> Fire Pit
            <input 
              type="checkbox"
              name="hiking"
              onChange={this.handleCheck('hiking')}
            /> Hiking
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(SiteForm);