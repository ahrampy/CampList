import React from 'react';

const BookmarksTab = (props) => {
  const { bookmarks } = props;
  if (!bookmarks) return null;
  return (
    <div>
      Hi!
    </div>
  )
}

export default BookmarksTab;