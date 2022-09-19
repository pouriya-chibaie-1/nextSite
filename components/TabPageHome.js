import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from "../styles/tab.module.scss"
import { Suspense } from 'react';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}  variant="scrollable"scrollButtons
  allowScrollButtonsMobile aria-label="basic tabs example" >

          <Tab sx={{fontFamily:"Vazir",fontSize:"12px"}} label="خدمات تفریحی" {...a11yProps(0)} />
          <Tab sx={{fontFamily:"Vazir",fontSize:"12px"}} label="خدمات ورزشی" {...a11yProps(1)} />
          <Tab sx={{fontFamily:"Vazir",fontSize:"12px"}} label="پارکینگ مجزا" {...a11yProps(2)} />
          <Tab sx={{fontFamily:"Vazir",fontSize:"12px"}} label="امتیاز گیری" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={styles.facility}>

          <div className={styles.facilityImage}><div className={styles.facilityImageOverlay}></div><img src={`/camera/billyard.jpg`} style={{ width: '100%', height: '100%' }} /></div>
          <div className={styles.facilityImage}><div className={styles.facilityImageOverlay}></div><img src={`/camera/footballdasti.jpg`} style={{ width: '100%', height: '100%' }} /></div>
          <div className={styles.facilityImage}><div className={styles.facilityImageOverlay}></div><img src={`/camera/gamenet.jpg`} style={{ width: '100%', height: '100%' }} /></div>
          <div className={styles.facilityImage}><div className={styles.facilityImageOverlay}></div><img src={`/camera/hockey.jpg`} style={{ width: '100%', height: '100%' }} /></div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
    </Box>
  );
}
