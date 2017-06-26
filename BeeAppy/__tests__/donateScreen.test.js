import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Donation from '../src/screens/Donation';
import renderer from 'react-test-renderer';

describe('donate component', () => {
  it('should have a greeting', () => {
    expect(render(<Donation />).text()).toContain('Donate to help the bees!');
  });

  it('should have a hyperlink', () => {
    expect(render(<Donation />).text()).toContain('http://bumblebeeconservation.org/');
  });
});
