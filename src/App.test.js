import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from  'enzyme';
import App from './App';

configure({ adapter: new Adapter() });

it('resnders Hello React', () => {
  const wrapper = mount(<App/>);
  expect(wrapper.find(".App-intro").text()).toEqual("Hello React");
});
