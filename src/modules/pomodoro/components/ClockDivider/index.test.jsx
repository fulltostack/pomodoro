import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { mount } from 'enzyme';
import Divider from './index';

configure({ adapter: new Adapter() });

describe('Divider', () => {
     it('renders correctly', () => {
    const wrapper = mount(<Divider/>);
    expect(wrapper.find('span').length).toEqual(3);
  });
});
