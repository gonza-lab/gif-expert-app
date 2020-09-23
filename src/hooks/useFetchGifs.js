import { useState, useEffect } from 'react';
import { getGif } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [data, setData] = useState({
    loading: true,
    images: [],
  });

  useEffect(() => {
    getGif(category).then((gifs) =>
      setData({
        loading: false,
        images: gifs,
      })
    );
  }, []);

  return data;
};
