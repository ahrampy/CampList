import React from "react";

class Headers extends React.Component {
  render() {
    let { activeTab, tabs, onTabChosen } = this.props;
    const headers = tabs.map((tab, index) => {
      const title = tab.title;
      const klass = index === activeTab ? "active" : "";

      return (
        <li key={index} className={klass} onClick={() => onTabChosen(index)}>
          {title}{" "}
        </li>
      );
    });

    return (
      <ul className="tab-header">
        <li>Hi {this.props.username}!</li>
        {headers}
      </ul>
    );
  }
}

export default Headers;
