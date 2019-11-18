import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { mount } from 'enzyme';
import BottomActionBar from './index';

configure({ adapter: new Adapter() });

describe('BottomActionBar', () => {
  const props = {};
  let wrapper;

  beforeEach(() => {
    props.onStart = jest.fn();
    props.onClear = jest.fn();
    props.onStop = jest.fn();
    
    wrapper = mount(<BottomActionBar {...props} />);
  });


  it('renders correctly', () => {
    expect(wrapper.find('button').length).toEqual(3);
  });

  it('calls correct function to start timer', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(props.onStart).toHaveBeenCalledTimes(1);
  });

  it('calls correct function to clear timer', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(props.onStop).toHaveBeenCalledTimes(1);
  });

  it('calls correct function to stop timer', () => {
    wrapper.find('button').at(2).simulate('click');
    expect(props.onClear).toHaveBeenCalledTimes(1);
  });
});
