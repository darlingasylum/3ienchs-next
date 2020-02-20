import React from 'react';
import Layout from '../layouts/classicLayout';
import Agenda from '../src/pages/Agenda/index';
import './../less/style.less';

const AgendaPage = props => (
  <Layout>
    <Agenda></Agenda>
  </Layout>
);

export default AgendaPage;
