import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
// import Donate from '../App.js';

describe('donate component', () => {
  xit('should have a greeting', () => {
    expect(render(<Donation />).text()).toContain('Donate to help the bees!');
  });

  xit('should have a hyperlink', () => {
    expect(render(<Donation />).text()).toContain('http://bumblebeeconservation.org/');
  });
});
