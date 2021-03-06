import React from 'react';
import App from './App';
import EnzymeSetup from '../configs/EnzymeSetup';
import { mount } from  'enzyme';
import { TodoItem } from './components/todo';

EnzymeSetup();

const wait = (delay = 1000) => new Promise(resolve => {
  setTimeout(resolve, delay);
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

  expect(wrapper.find('.Todo-Item').length).toEqual(1);
});

it('prevents the creation of an empty task', () => {
  const wrapper = mount(<App/>);
  const input = wrapper.find('.todo-description');

  input.simulate('change', { target: { value: ''}});
  wrapper.find('input[type="submit"]').simulate('submit');

  expect(wrapper.find('.Todo-Item').length).toEqual(0);
  expect(wrapper.find('.error').text()).toEqual('Description is required');
});

it('allows for task completion', () => {
  const wrapper = mount(<App todos={[{ description: 'Learn JSX', isComplete: false, id: 1}]}/>);

  wrapper.find('.Todo-Item input[type="checkbox"]').first().simulate('click');

  expect(wrapper.find('.Todo-Item').prop('todo').isComplete).toEqual(true);
});

it('allows for task removal', () => {
  const wrapper = mount(<App todos={[{ description: 'Learn JSX', isComplete: false, id: 1}]}/>);

  wrapper.find('.remove-item').first().simulate('click');
  expect(wrapper.find('.Todo-Item').length).toEqual(0);
});

it('filters the completed tasks', () => {
  const wrapper = mount(<App todos={[{ description: 'Learn JSX', isComplete: false, id: 1}]}/>);

  wrapper.find('.filter-completed').first().simulate('click');
  expect(wrapper.find('.Todo-Item').length).toEqual(0);
});
