import React from 'react';

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="animate__animated animate__fadeInRightBig">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
