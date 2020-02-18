import React from "react";
import { Link } from "react-router-dom";

const SitesTab = props => {
  const { campsites } = props;
  if (!campsites) return null;

  return (
    <div>
      {campsites.map((site, i) => (
        <div className="review" key={`site-${i}`}>
          <div className="review-header">
            <div className="camp-name">
              <Link to={`/campsites/${site._id}`}>{site.name}</Link>
            </div>
            <div className="review-rating">(created on: {site.date})</div>
          </div>
          <div className="review-body">Description: {site.description}</div>
        </div>
      ))}
    </div>
  );
};

export default SitesTab;
