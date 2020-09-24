import GifExpertApp from '../GifExpertApp';
import React from 'react';
import { shallow } from 'enzyme';

describe('Pruebas en GifExpertApp', () => {
  let wrapper = shallow(<GifExpertApp />);

  test('should ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
