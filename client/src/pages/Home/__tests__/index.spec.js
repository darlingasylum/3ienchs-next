import * as React from 'react';
import { mount } from 'enzyme';
// import { render } from '@testing-library/react';
import Home from './../index';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function() {
      const wrap = mount(<Home />);
      expect(wrap.length).toBe(1);
    });
  });
});

// describe('Home', () => {
//   const { getByText } = render(<Home />);

//   expect(getByText('Welcome')).tobeInTheDocument();
// });
