import React from 'react';
import Layout from '../layouts/classicLayout';
import Products from './../src/pages/Products/index';
import './../less/style.less';

const ProductsPage = props => (
  <Layout>
    <Products></Products>
  </Layout>
);

export default ProductsPage;
