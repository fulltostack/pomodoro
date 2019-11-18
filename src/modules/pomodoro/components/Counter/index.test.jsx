import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { mount } from 'enzyme';
import Counter from './index';

configure({ adapter: new Adapter() });

describe('Counter', () => {
  const props = {};
  let wrapper;

  beforeEach(() => {
    props.increment = jest.fn();
    props.decrement = jest.fn();
    props.value = 2;
    props.label = 'seconds';
    
    wrapper = mount(<Counter {...props} />);
  })

  it('renders correctly', () => {
    expect(wrapper.find('button').length).toEqual(2);
    expect(wrapper.find('p').text()).toEqual('seconds');
  });

  it('calls correct function to decrement', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(props.decrement).toHaveBeenCalledTimes(1);
  });

  it('calls correct function to increment', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(props.increment).toHaveBeenCalledTimes(1);
  });
});
