import React from 'react';
import ClassicLayout from '../layouts/ClassicLayout';
import Agenda from '../src/pages/Agenda/index';
import './../less/style.less';

const AgendaPage = props => (
  <ClassicLayout>
    <Agenda></Agenda>
  </ClassicLayout>
);

export default AgendaPage;
