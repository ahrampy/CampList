import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class EditSiteFormDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.match.params.siteId,
      description: this.props.site.description,
      name: this.props.site.name,
      date: this.props.site.date,
      photoFile: null,
      photoUrl: null,
      lat: this.props.site.lat, // for test
      lng: this.props.site.lng, // for test
      siteFeatures: {
        parking: this.props.site.parking,
        fishing: this.props.site.fishing,
        firePit: this.props.site.firePit,
        hiking: this.props.site.hiking,
        swimming: this.props.site.swimming,
      }
    }

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
      this.setState({ siteFeatures: newSiteFeatures })
    }
  }

  handleSubmit(e) {

    e.preventDefault();
    const site = Object.assign({}, this.state);
    this.props.editSite(site)
      .then(() => this.props.history.goBack())
  }

  render() {
    if (!this.props.site) return null

    let checkboxes = document.getElementsByClassName('feature-checkbox');

    for (let i = 0; i < checkboxes.length; i++) {

      if (checkboxes[i].value === "true") {
        checkboxes[i].checked = true;
      }
    }
  
    return (
      <div className="site-form-container">
        <h3>Edit your Campsite</h3>
        <div className="site-form-splitline"></div>
        <div className="site-form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="site-form-section-wrapper">
              <h2>Give your campsite a name.</h2>
              <input
                type="text"
                id="campname"
                onChange={this.handleInput('name')}
                value={this.state.name}
                placeholder="Type your camp name here..."
              />
            </div>
            <div className="site-form-section-wrapper">
              <h2>When did you camp there?</h2>
              <input
                type="date"
                id="date"
                onChange={this.handleInput('date')}
                value={this.state.date}
              />
            </div>
            <div className="site-form-section-wrapper">
              <h2>What's your campsite's location?</h2>
              <input
                type="text"
                onChange={this.handleInput('lat')}
                value={this.state.lat}
                placeholder="Latitude"
              />
              <input
                type="text"
                onChange={this.handleInput('lng')}
                value={this.state.lng}
                placeholder="Longitude"
              />
            </div>
            <div className="site-form-section-wrapper">
              <h2>What was your experience?</h2>
              <textarea
                id="description"
                value={this.state.description}
                onChange={this.handleInput('description')}
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
                    value={this.state.siteFeatures.fishing}
                    onChange={this.handleCheck('fishing')}
                  />
                  <span className="site-form-seatButton">Fishing</span>
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="swimming"
                    value={this.state.siteFeatures.swimming}
                    onChange={this.handleCheck('swimming')}
                  />
                  <span className="site-form-seatButton">Swimming</span>
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="hiking"
                    value={this.state.siteFeatures.hiking}
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
                    value={this.state.siteFeatures.parking}
                    onChange={this.handleCheck('parking')}
                  />
                  <span className="site-form-seatButton">Parking</span>
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="firePit"
                    value={this.state.siteFeatures.firePit}
                    onChange={this.handleCheck('firePit')}
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
    )
  }
}

export default withRouter(EditSiteFormDetail);