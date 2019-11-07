import * as React from 'react';
import { mount } from 'enzyme';
import Home from './../index';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function() {
      const wrap = mount(<Home />);
      expect(wrap).to.have.lengthOf(1);
    });
  });
});
