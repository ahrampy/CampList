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
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('site[description]', this.state.description);
  //   formData.append('site[name]', this.state.name);
  //   formData.append('site[date]', this.state.date);
  //   // add our coordinates
  //   formData.append('site[lat]', this.coords['lat']);
  //   formData.append('site[lng]', this.coords['lng']);

  //   if (this.state.photoFile) {
  //     formData.append('site[photo]', this.state.photoFile);
  //   }
  //   // This will fail because we do not have a AWS bucket set up for this project
  //   // presently. 
  //   this.props.createNewSite(formData);
  // }

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
            placeholder="Your review helps others learn about great local businesses. Please don’t review this business if you received a freebie for writing this review, or if you’re connected in any way to the owner or employees."
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default withRouter(SiteForm);