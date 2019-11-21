import React from 'react';
import { Link } from 'react-router-dom';

const SitesTab = (props) => {
  const { campsites } = props;
  if (!campsites) return null;
  debugger
  return (
    <div>
      {campsites.map(site => (
        <div>
          <Link to={`/campsites/${site._id}`}>{site.name}</Link>
        </div>
      ))}
    </div>
    
    
    
  )
}

export default SitesTab;