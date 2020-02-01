import * as React from 'react';
// import { mount } from 'enzyme';
import { render } from '@testing-library/react';
import Home from './../index';

// describe('Pages', () => {
//   describe('Index', () => {
//     it('should render without throwing an error', function() {
//       const wrap = mount(<Home />);
//       expect(wrap.length).toBe(1);
//     });
//   });
// });

const props = {
  dogsProducts: [
    {
      product_id: 2,
      product_name: 'Wa Wah',
      product_type: 'Indian Pale Ale',
      product_price: 3,
      product_proof: 5.5,
      product_descr:
        'Notre IPA est une explosion de saveurs exotiques, fruits tropicaux très prenants au nez et en bouche !',
      product_img: 'wawah.png',
      product_bg: 'wawah_bg.png',
      bg_color: '#ff0066',
      title_color: '#f6d900',
      text_color: '#ffffff',
      featuring: 0,
      partner: null,
      product_stock: 500
    }
  ],
  featproducts: []
};

describe('Home', () => {
  const { getByText } = render(<Home {...props} />);

  expect(getByText('Nos bières')).tobeInTheDocument();
});
