import React from 'react';

const SitesTab = (props) => {
  const { campsites } = props;
  if (!campsites) return null;
  
  return (
    <div>
      Hi!
    </div>
  )
}

export default SitesTab;