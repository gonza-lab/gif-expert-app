import React /* , { useEffect, useState } */ from 'react';
import { GifGridItem } from './GifGridItem';
import { getGif } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const { loading, images } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p className="animate__animated animate__flash">Cargando</p>}
      <div className="gifGrid">
        {images.map((img) => (
          <GifGridItem {...img} key={img.id} />
        ))}
      </div>
    </>
  );
};
