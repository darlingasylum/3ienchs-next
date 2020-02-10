import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Navbar from './components/Navbar';
import Template from './components/Template';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return value === index && <Box p={3}>{children}</Box>;
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function AdminDashboard({ products }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const items = {
    beers: {
      getBeers: { item: 'mes bières', component: '' },
      addBeer: { item: 'ajouter une bière', component: '' }
    }
  };

  return (
    <div>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label='Bières' {...a11yProps(0)} />
          <Tab label='Agenda' {...a11yProps(1)} />
          <Tab label='Artistes' {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {/* <Navbar items={items.beers}></Navbar> */}
        <Template content={products}></Template>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Agenda{' '}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Artistes{' '}
      </TabPanel>
    </div>
  );
}
