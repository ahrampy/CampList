import React from 'react';
import FilterAttrsContainer from '../search/filter_attrs_container';
import MapContainer from '../maps/index_map_container';
import CampListContainer from './camp_list_container';
import Footer from '../nav/footer_nav';

class CampIndex extends React.Component {
  constructor(props) { 
    super(props);

    this.state = {
      itemChecked: []
    };

    this.handleCheck = this.handleCheck.bind(this);
    this.handleUncheck = this.handleUncheck.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleHover = this.handleHover.bind(this);
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

  handleDropDown(event) { 
    if (!event.target.matches('.dropbtn') && !event.target.matches('.checkbox-custom') && !event.target.matches('.checkbox') && !event.target.matches('.logo')) {
      let dropdowns = document.querySelector(".dropdown-content");
      if (dropdowns.classList.contains('show')) {
        dropdowns.classList.remove('show');
      }
    } 
  }

  handleHover(site) {
    this.setState({
      location: {lat: site.lat, lng: site.lng}
    })
  }

  componentDidMount() {
    this.props.fetchSites()
    this.props.fetchUsers()
    this.props.fetchReviews()
    window.scrollTo(0,0)
  }

  handleRedirect() {
    this.props.history.push('/campsites/new')
  }

  render() {
    if (!this.props.sites.length) return null;
    
    let { attrs, sites } = this.props;
    let { itemChecked, location } = this.state;
    
    return(
      <div onClick={(e) => this.handleDropDown(e)}>
        <div className="index-title-holder">
          <h1>Welcome to CampList</h1>
          <br/>
          <p>Search, discover, and share your favorite camping spots</p>
        </div>
        <div className="index-holder">
          <div className="search-holder">
            <div className="index-add-site">
              <button onClick={this.handleRedirect}>Add a Spot</button>
            </div>
            <FilterAttrsContainer
              attrs={attrs}
              onCheck={this.handleCheck}
              unCheck={this.handleUncheck}            
            />
            <CampListContainer
              sites={sites}
              checkedAttrs={itemChecked}
              hover={this.handleHover}
            />
          </div>
          
          <div className="map-holder">
            <MapContainer
              sites={sites}
              checkedAttrs={itemChecked}
              location={location}
            />
          </div>
        </div>
        <div className="footer-holder">
          <Footer />
        </div>
      </div>

    );
  }
}

export default CampIndex;