import React from 'react';
import FilterAttrs from '../search/filter_attrs';
// import MapContainer from '../map/map_container';

class CampIndex extends React.Component {
  contructor(props) { 

    //eslint-disable-next-line
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
    return(
      <div>
        <div className="search-holder">
          <FilterAttrs 
            attrs={this.props.attrs}
            onCheck={this.handleCheck}
            unCheck={this.handleUncheck}

          />
        </div>
        {/* <div className="map-holder">
          <MapContainer />
        </div> */}
      </div>
    );
  }
}

export default CampIndex;