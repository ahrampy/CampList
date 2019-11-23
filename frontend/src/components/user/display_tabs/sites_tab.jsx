import React from 'react';
import { Link } from 'react-router-dom';

const SitesTab = (props) => {
  const { campsites } = props;
  if (!campsites) return null;
  
  return (
    <div>
      {campsites.map((site, i) => (
        <div key={`site-${i}`}>
          <div>
            <div>
              <Link to={`/campsites/${site._id}`}>{site.name}</Link>
            </div>
            <div>
              {site.date}
            </div>
          </div>
          <div>
            {site.description}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SitesTab;