import React from 'react';
import Headers from './headers';
import { Link } from 'react-router-dom';
import ReviewsTab from './display_tabs/reviews_tab'
import BookmarksTab from './display_tabs/bookmarks_tab';
import SitesTab from './display_tabs/sites_tab';

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

  handleEmptyTab() {
    const displayTab = this.props.tabSections[this.state.activeTab];
    if (displayTab.content.length < 1) {
      return(
        <ul>
          <li>Get started today!</li>
          <li><Link to="/campsites">Explore campsites...</Link></li>
          <li><Link to="/campsites/new">Or establish your own!</Link></li>
        </ul>
      )
    }
  }

  handleTabContent(displayTab) {
    if (displayTab.title === "Reviews") {
      return (<ReviewsTab reviews={displayTab.content} />);
    } else if (displayTab.title === "Bookmarks") {
      return (<BookmarksTab bookmarks={displayTab.content} />);
    } else {
      return (<SitesTab campsites={displayTab.content} />);
    }
  }

  render() {
    let displayTab = this.props.tabSections[this.state.activeTab];
    if (displayTab.content.length < 0) return null
    return(
      <div className="tabs">
        <Headers 
          activeTab={this.state.activeTab}
          onTabChosen={this.handleClick}
          tabs={this.props.tabSections}
        />
        <div className="tab-content">
          {this.handleEmptyTab()}
          {this.handleTabContent(displayTab)}
        </div>
      </div>
    );
  }
}

export default Tabs;