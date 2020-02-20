import React from 'react';
import Layout from '../layouts/classicLayout';
import Artwork from '../src/pages/Artwork/index';
import './../less/style.less';

const ArtworkPage = props => (
  <Layout>
    <Artwork></Artwork>
  </Layout>
);

export default ArtworkPage;
