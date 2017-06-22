import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';


describe('#App', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
  });
  it('renders HomeScreen', () => {
    const homescreen = renderer.create(
      <App />
    ).toJSON();
    expect(homescreen).toMatchSnapshot();
  });
});
