import React from 'react';
import FilterAttrsContainer from '../search/filter_attrs_container';
import MapContainer from '../map/map_container';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

class CampIndex extends React.Component {
  constructor(props) { 
    super(props);

    this.state = {
      itemChecked: [],
    };

    this.handleCheck = this.handleCheck.bind(this);
    this.handleUncheck = this.handleUncheck.bind(this);
  }

  handleCheck(attr) {
    
    let newItemCheck = []
    if (!this.state.itemChecked) {
      this.setState({ itemsChecked: [attr.name] })
    } else {
      for (let i = 0; i < this.state.itemChecked.length; i++) {
        newItemCheck[i] = this.state.itemChecked[i];
      }
      newItemCheck.push(attr.name);
      this.setState({
        itemChecked: newItemCheck
      })
    }
  }

  handleUncheck(attr) {
    let { itemChecked } = this.state;
    let newItemCheck = []
    for (let i = 0; i < itemChecked.length; i++) {
      newItemCheck[i] = itemChecked[i];
    }
    newItemCheck.splice(newItemCheck.indexOf(attr.name), 1)
    this.setState({
      itemChecked: newItemCheck
    })
  }

  componentDidMount() {
    this.props.fetchSites()
    this.props.fetchUsers()
  }

  render() {
    if (!this.props.sites) return null;
    debugger
    let { attrs, sites } = this.props;
    let { itemChecked } = this.state;
    return(
      <div className="index-holder">
  
        <div className="search-holder">
          <FilterAttrsContainer
            attrs={attrs}
            onCheck={this.handleCheck}
            unCheck={this.handleUncheck}
          />
        </div>
        <div className="map-holder">
          <MapContainer
            sites={sites}
            googleMapURL={`googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBk7CBd8ZQcP0bHBHwiPgQcpcOU1oGVVbo&v=3.exp&libraries=geometry,drawing,places",`}
            checkedAttrs={itemChecked}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `200px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    );
  }
}

export default CampIndex;