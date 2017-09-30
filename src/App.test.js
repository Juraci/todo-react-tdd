import React from 'react';
import App from './App';
import EnzymeSetup from '../configs/EnzymeSetup';
import { shallow, mount, render } from  'enzyme';

EnzymeSetup();

it('resnders Hello React', () => {
  const wrapper = mount(<App/>);
  expect(wrapper.find(".App-intro").text()).toEqual("Hello React");
});
