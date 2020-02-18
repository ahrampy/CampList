import React from "react";

const BookmarksTab = props => {
  const { photos } = props;
  if (!photos) return null;
  return (
    <div className="photo-list-container">
      {photos.map(photo => (
        <ul className="photo-list">
          <li className="photo-item">
            <img className="photo-image" src={photo.url} alt="" />
            <br />
            <br />
            <p>{photo.site}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default BookmarksTab;
