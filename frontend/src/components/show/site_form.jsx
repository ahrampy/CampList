import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

export default class SiteForm extends Component {
  constructor(props) {
    super(props);
    this.coords = { lat: props.lat, lng: props.lng };
    this.state = {
      description: '',
      name: '',
      date: '',
      photoFile: null,
      photoUrl: null
    };

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

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('bench[description]', this.state.description);
    formData.append('bench[seating]', this.state.seating);
    // add our coordinates
    formData.append('bench[lat]', this.coords['lat']);
    formData.append('bench[lng]', this.coords['lng']);

    if (this.state.photoFile) {
      formData.append('bench[photo]', this.state.photoFile);
    }
    // This will fail because we do not have a AWS bucket set up for this project
    // presently. 
    this.props.createBench(formData);
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
