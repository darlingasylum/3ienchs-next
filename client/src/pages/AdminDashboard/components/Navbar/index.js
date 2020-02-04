import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

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

export default function Navbar({ items }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label={items.getBeers.item} {...a11yProps(0)} />
          <Tab label={items.addBeer.item} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Bières
      </TabPanel>
      <TabPanel value={value} index={1}>
        Ajouter une bière
      </TabPanel>
    </div>
  );
}
