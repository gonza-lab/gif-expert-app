import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';
import React from 'react';
import '@testing-library/jest-dom';

describe('Pruebas en <AddCategory />', () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  /*  test('Debe cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    input.simulate('change', {
      target: { value: 'Jest' },
    });
  }); */

  test('handleSubmit - No debe postear la informacion con submit si no se introduce ningun valor', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('handleSubmit - Debe llamar a setCategories y limpiar el input', () => {
    const value = 'Jest';

    const input = wrapper.find('input');

    input.simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toBeCalledWith(expect.any(Function));
    expect(input.prop('value')).toBe('');
  });
});
