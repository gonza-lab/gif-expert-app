import { GifGridItem } from '../../components/GifGridItem';
import React from 'react';
import { shallow } from 'enzyme';

describe('Pruebas en GifGridItem', () => {
  const props = {
    title: 'Hola mundo desde Jest',
    url: 'https://localhost/jest.jpg',
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GifGridItem {...props} />);
  });

  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe ubicar el title correctamente', () => {
    expect(wrapper.find('p').text().trim()).toBe(props.title);
  });

  test('Debe ubicar la url correctamente', () => {
    expect(wrapper.find('img').prop('src')).toBe(props.url);
    expect(wrapper.find('img').prop('alt')).toBe(props.title);
  });

  test('El componentde debe tener la clase correcta', () => {
    expect(
      wrapper.find('div').prop('className').includes('animate__fadeInRightBig')
    ).toBeTruthy();
  });
});
