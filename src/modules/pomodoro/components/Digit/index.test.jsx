import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { mount } from 'enzyme';
import Digit from './index';

configure({ adapter: new Adapter() });

describe('Digit', () => {
  it('renders correctly', () => {
    const wrapper = mount(<Digit value={'2'}/>);
    expect(wrapper.find('div').length).toEqual(2);
  });
});
