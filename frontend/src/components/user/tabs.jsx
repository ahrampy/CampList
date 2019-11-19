import React from 'react';

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
      <div>
        <Headers 
          activeTab={this.state.activeTab}
          onTabChosen={this.handleClick}
          tabs={this.props.tabSections}
        />
        <div className="tab-content">
          {displayTab.content}
        </div>
      </div>
    );
  }
}

export default Tabs;