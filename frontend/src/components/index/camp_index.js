import React from 'react';
import FilterAttrsContainer from '../search/filter_attrs_container';
// import MapContainer from '../map/map_container';

class CampIndex extends React.Component {
  contructor(props) { 

    this.state = {
      itemChecked: [],
    };

    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(attr) {
    let { itemChecked } = this.state;
    let newItemCheck = []
    for (let i = 0; i < itemChecked.length; i++) {
      newItemCheck[i] = itemChecked[i];
    }
    newItemCheck.push(attr.id);
    this.setState({
      itemChecked: newItemCheck
    })
  }

  handleUncheck(attr) {
    let { itemChecked } = this.state;
    let newItemCheck = []
    for (let i = 0; i < itemChecked.length; i++) {
      newItemCheck[i] = itemChecked[i];
    }
    newItemCheck.splice(newItemCheck.indexOf(attr.id), 1)
    this.setState({
      itemChecked: newItemCheck
    })
  }

  render() {
    let { attrs } = this.props
    return(
      <div>
  
        <div className="search-holder">
          <FilterAttrsContainer
            attrs={attrs}
            onCheck={this.handleCheck}
            unCheck={this.handleUncheck}
          />
        </div>
        {/* <div className="map-holder">
          <MapContainer
            attrs={attrs}
          />
        </div> */}
      </div>
    );
  }
}

export default CampIndex;