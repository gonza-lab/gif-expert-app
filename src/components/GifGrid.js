import React /* , { useEffect, useState } */ from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
