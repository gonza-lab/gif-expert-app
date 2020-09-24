import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGid', () => {
  test('Debe mostrar el componente correctamente', () => {
    useFetchGifs.mockReturnValue({
      loading: true,
      images: [],
    });

    const wrapper = shallow(<GifGrid category="Jest" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar imagenes cuando se cargan los gifs', () => {
    const images = [
      {
        id: 'ABC',
        url: 'https://slash/caulquiercosa.jpg',
        title: 'cualquiercosa',
      },
      {
        id: 'ABCD',
        url: 'https://slash/caulquiercosa.jpg',
        title: 'cualquiercosa',
      },
    ];
    useFetchGifs.mockReturnValue({
      loading: false,
      images,
    });

    const wrapper = shallow(<GifGrid category="Jest" />);
    expect(wrapper.find('p').exists()).not.toBeTruthy();
    expect(wrapper.find('GifGridItem').length).toBe(images.length);
  });
});
