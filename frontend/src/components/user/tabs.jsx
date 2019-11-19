import React from 'react';
import Headers from './headers';

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(num) {
    this.setState({ activeTab: num})
  }

  render() {
    const displayTab = this.props.tabSections[this.state.activeTab];
    return(
      <div className="tabs">
        <Headers 
          activeTab={this.state.activeTab}
          onTabChosen={this.handleClick}
          tabs={this.props.tabSections}
        />
        <div className="tab-content">
          <ul>
            {displayTab.content.map(item => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Tabs;