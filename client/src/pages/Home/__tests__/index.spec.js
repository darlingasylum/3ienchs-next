import * as React from 'react';
import { render } from '@testing-library/react';
import Home from './../index';

const defaultProps = {
  products: {
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
        product_stock: 500,
      },
    ],
    featProducts: [
      {
        product_id: 4,
        product_name: 'Tididid',
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
        product_stock: 500,
      },
    ],
  },
};

describe('Home', () => {
  describe('3ienchs products', () => {
    it('should display slider products', () => {
      const { getByText } = render(<Home {...defaultProps} />);

      expect(getByText('Nos bières')).toBeInTheDocument();
    });

    it("shouldn't display slider if there is no 3ienchs products", () => {
      const products = { ...defaultProps.products, dogsProducts: [] };
      const { queryByText } = render(<Home products={products} />);

      expect(queryByText('Nos bières')).not.toBeInTheDocument();
    });
  });

  describe('featuring products', () => {
    it('should display slider products', () => {
      const { getByText } = render(<Home {...defaultProps} />);

      expect(getByText('Featuring')).toBeInTheDocument();
    });

    it("shouldn't display slider if there is no featuring products", () => {
      const products = { ...defaultProps.products, featProducts: [] };

      const { queryByText } = render(<Home products={products} />);

      expect(queryByText('Featuring')).not.toBeInTheDocument();
    });
  });
});
