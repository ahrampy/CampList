import React from 'react';
import FilterAttrsContainer from '../search/filter_attrs_container';
import MapContainer from '../map/map_container';

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
  }

  render() {
    if (!this.props.sites) return null;
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
            checkedAttrs={itemChecked}
          />
        </div>
      </div>
    );
  }
}

export default CampIndex;