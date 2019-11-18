import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      potentials: [],
      text: ''
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  // populates a list of potential values from the available items
  handleOnChange(e) {
    const value = e.target.value;
    let potentials = [];
    if (value) { 
      let reg = new RegExp(`^${value}`, 'i');
      potentials = this.items.sort().filter(v => reg.test(v))
      return this.setState({ potentials, text: value })
    }
  }

  // sets the state of the text field to the value
  // trigger possible search event?
  handleOnClick(value) {
    this.setState({ 
      text: value,
      potentials: []
    })
  }

  // renders the list of potentials as well
  // contains an onClick even listener
  renderPotentials() {
    const { potentials } = this.state;
    if (potentials.length === 0) {
      return null;
    } 
    return (
      <ul className="suggested-list">         
        {potentials.map(potential => 
          <li className="suggested-list-item" 
            onClick={() => this.handleOnClick(potential)}>
              {potential}
          </li>
        )} 
      </ul>
    );
  }

  render() {
    return (
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          onChange={this.handleOnChange}
        />
        {this.renderPotentials()}
        <button className="search-submit" type="submit"/>
      </div>
    );
  }
}

export default SearchBar;