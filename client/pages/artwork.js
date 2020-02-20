import React from 'react';
import ClassicLayout from '../layouts/ClassicLayout';
import Artwork from '../src/pages/Artwork/index';
import './../less/style.less';

const ArtworkPage = props => (
  <ClassicLayout>
    <Artwork></Artwork>
  </ClassicLayout>
);

export default ArtworkPage;
