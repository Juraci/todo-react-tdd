import React from 'react';
import App from './App';
import EnzymeSetup from '../configs/EnzymeSetup';
import { mount } from  'enzyme';

EnzymeSetup();

const wait = (delay = 1000) => new Promise(resolve => {
  setTimeout(resolve, delay);
});

it('renders the title', () => {
  const wrapper = mount(<App/>);
  expect(wrapper.find(".App-title").text()).toEqual("React Todos");
});

it('starts with no taks', () => {
  const wrapper = mount(<App/>);
  expect(wrapper.find('.Todo-Item').length).toBe(0);
});

it('allows for task creation', () => {
  const wrapper = mount(<App/>);
  const input = wrapper.find('.todo-description');
  input.simulate('change', { target: { value: 'Learn JSX'}});
  wrapper.find('input[type="submit"]').simulate('submit');
  return wait().then(() => {
    console.log(`>>>> ${wrapper.state('todos').length}`);
    console.log(`>>>> ${wrapper.find('.Todo-List').html()}`);
    expect(wrapper.state('todos').length).toBe(1);
    //expect(wrapper.find('.Todo-List .Todo-Item').length).toEqual(1);
  });
});

it('allows for task completion', () => {
  const wrapper = mount(<App/>);
  wrapper.find('.todo-description').simulate('input', { target: { value: 'Learn JSX' } });
  wrapper.find('input[type="submit"]').simulate('submit');
  expect(wrapper.find('.Todo-Item').length).toBe(1);
  wrapper.find('.Todo-Item input[type="checkbox"]').simulate('click');
  expect(wrapper.find('.Todo-Item').prop('isComplete')).toBe(true);
});
