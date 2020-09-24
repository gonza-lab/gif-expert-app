import GifExpertApp from '../GifExpertApp';
import React from 'react';
import { shallow } from 'enzyme';

describe('Pruebas en GifExpertApp', () => {
  let wrapper = shallow(<GifExpertApp />);

  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar una lista de categorias', () => {
    const props = {
      defaultCategories: ['One Punch', 'Dragon Ball'],
    };

    const wrapper = shallow(<GifExpertApp {...props} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(
      props.defaultCategories.length
    );
  });
});
