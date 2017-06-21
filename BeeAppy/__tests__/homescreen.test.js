import React from 'react';
import Home from '../src/Home';

import renderer from 'react-test-renderer';

it('renders a home page', () => {
  const homepage = renderer.create(<Home/>).toJSON();
  expect(homepage).toMatchSnapshot();
});
