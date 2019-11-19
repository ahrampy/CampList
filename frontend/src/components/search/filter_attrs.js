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
        {attrs.map(attr => 
          <div className="attr-item">
            <label>
              <input 
                type="checkbox" 
                className="attr-check" 
                value={attr}
                onChange={e => this.onCheck(attr, e)}
              />
              {attr.name}
            </label>  
          </div>
        )}    
      </div>       
    );
  }

  render() {
    
    return(
      <div className="filter-sidebar">
        <span>Filter Campsites:</span>
        {this.listChecks()}
      </div>
    );
  }
}

export default FilterAttrs;