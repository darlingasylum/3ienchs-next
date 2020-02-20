import React from 'react';
import ClassicLayout from '../layouts/ClassicLayout';
import Products from './../src/pages/Products/index';
import './../less/style.less';

const ProductsPage = props => (
  <ClassicLayout>
    <Products></Products>
  </ClassicLayout>
);

export default ProductsPage;
