import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGif();
  }, []);

  const getGif = async () => {
    const res = await fetch(
      'https://api.giphy.com/v1/gifs/search?api_key=67tJhuB4W4ZAh3g6S7yTbetenmbmx0Rv&q=Boca&limit=10'
    );
    const { data } = await res.json();

    setImages(
      data.map((gif) => {
        const { id, title } = gif;
        return {
          id,
          title,
          url: gif.images.downsized_medium.url,
        };
      })
    );
  };

  return (
    <div>
      <h3>{category}</h3>
      {images.map((img) => (
        <GifGridItem {...img} key={img.id} />
      ))}
    </div>
  );
};
