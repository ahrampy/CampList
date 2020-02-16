import React from 'react';

class FilterAttrs extends React.Component {
  constructor(props) {
    super(props);
  }

  onCheck(attr, e) {
    if (e.target.checked) {
      this.props.onCheck(attr)
    } else {
      this.props.unCheck(attr)
    }
  }

  listChecks() {
    let { attrs } = this.props
    return (
      <div className="attr-list">
        {attrs.map((attr, i) => 
          <div key={i} className="attr-item">
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                className="checkbox" 
                value={attr}
                onChange={e => this.onCheck(attr, e)}
              />
              <span className="checkbox-custom"></span>
              <div className="checkbox-name">
                {
                  attr.name === "firePit" ? <img src="fire_icon.png"/> 
                  : <img src={`${attr.name.toLowerCase()}.png`} />
                }
              </div>
            </label>
          </div>
        )}    
      </div>       
    );
  }

  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  render() { 
    return(
      <div className="filter-sidebar"> 
        <button onClick= {() => this.myFunction()} className="dropbtn">Filters</button>
        <div id="myDropdown" className="dropdown-content">
          {this.listChecks()}
        </div>    
      </div>
    );
  }
}

export default FilterAttrs;