import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { mount } from 'enzyme';
import Label from './index';

configure({ adapter: new Adapter() });

describe('Label', () => {
  it('renders Label when pomodoroState is SESSION_IN_PROGRESS correctly', () => {
    const wrapper = mount(<Label timerState='TIMER_HOLD' pomodoroState='SESSION_IN_PROGRESS' />);
    expect(wrapper.text()).toEqual('session');
  });

  it('renders Label when pomodoroState is not SESSION_IN_PROGRESS correctly', () => {
    const wrapper = mount(<Label timerState='TIMER_HOLD' pomodoroState='BREAK_IN_PROGRESS' />);
    expect(wrapper.text()).toEqual('break');
  });
});
