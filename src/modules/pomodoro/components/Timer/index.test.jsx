import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { mount } from 'enzyme';
import Timer from './index';

configure({ adapter: new Adapter() });

describe('Timer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Timer seconds={1800} />);
  })

  it('renders correctly', () => {
    expect(wrapper.find('Digit').length).toEqual(4);
  });

  it('calls first digit correctly', () => {
    expect(wrapper.find('Digit').at(0).text()).toEqual("3");
  });

  it('calls second digit correctly', () => {
    expect(wrapper.find('Digit').at(1).text()).toEqual("0");
  });

  it('calls third digit correctly', () => {
    expect(wrapper.find('Digit').at(2).text()).toEqual("0");
  });

  it('calls fourth digit correctly', () => {
    expect(wrapper.find('Digit').at(3).text()).toEqual("0");
  });
});
