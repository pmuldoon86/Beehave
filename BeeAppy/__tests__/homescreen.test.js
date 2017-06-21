import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Home from '../src/Home';
import renderer from 'react-test-renderer';

describe('Home component', function() {
  it('renders a home page', () => {
    const homepage = renderer.create(<Home/>).toJSON();
    expect(homepage).toMatchSnapshot();
  });

  it('should render', function() {
    expect(render(<Home/ >).text()).toEqual('Hi');
  });
});
