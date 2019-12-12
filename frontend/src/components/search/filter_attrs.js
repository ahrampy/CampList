import React from 'react';

class FilterAttrs extends React.Component {
  contructor(props) {

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
                {attr.name === 'firePit' ? 'Campfire' : `${attr.name}`}             
              </div>
            </label>
          </div>
        )}    
      </div>       
    );
  }

  render() {
    
    return(
      <div className="filter-sidebar">
        <div className="filter-category">
          <h3></h3>
        </div>
        {this.listChecks()}
      </div>
    );
  }
}

export default FilterAttrs;