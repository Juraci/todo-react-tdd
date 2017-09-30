import React from 'react';
import App from './App';
import EnzymeSetup from '../configs/EnzymeSetup';
import { mount } from  'enzyme';

EnzymeSetup();

it('renders the title', () => {
  const wrapper = mount(<App/>);
  expect(wrapper.find(".App-title").text()).toEqual("React Todos");
});

it('adding "Learn JSX" task', () => {
  const wrapper = mount(<App/>);
  expect(wrapper.find('.Todo-Item').length).toBe(0);
  wrapper.find('.todo-description').simulate('input', { target: { value: 'Learn JSX' } });
  wrapper.find('#add-task').simulate('click');
  expect(wrapper.find('.Todo-Item').length).toBe(1);
  expect(wrapper.find('.Todo-Item').first().text()).toEqual('Learn JSX');
});

it('marking a task as completed', () => {
  const wrapper = mount(<App/>);
  wrapper.find('.todo-description').simulate('input', { target: { value: 'Learn JSX' } });
  wrapper.find('#add-task').simulate('click');
  expect(wrapper.find('.Todo-Item').length).toBe(1);
  wrapper.find('.Todo-Item input').simulate('click');
  expect(wrapper.find('.Todo-Item').prop('state')).toEqual('completed');
});
