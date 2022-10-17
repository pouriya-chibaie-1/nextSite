import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from "../styles/tab.module.scss"
import Image from 'next/image';
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
  allowScrollButtonsMobile aria-label="basic tabs example" sx={{"& .MuiTabs-flexContainer":{ justifyContent:"center"
  }}} >

          <Tab sx={{fontFamily:"Vazir",fontSize:"12px",}} label="خدمات تفریحی" {...a11yProps(0)} />
          <Tab sx={{fontFamily:"Vazir",fontSize:"12px"}} label="خدمات ورزشی" {...a11yProps(1)} />
          <Tab sx={{fontFamily:"Vazir",fontSize:"12px"}} label="پارکینگ مجزا" {...a11yProps(2)} />
          <Tab sx={{fontFamily:"Vazir",fontSize:"12px"}} label="امتیاز گیری" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={styles.facility}>

          <div className={styles.facilityImage}><div className={styles.facilityImageOverlay}></div><Image src={`/camera/billyard.jpg`} fill /></div>
          <div className={styles.facilityImage}><div className={styles.facilityImageOverlay}></div><Image src={`/camera/footballdasti.jpg`} fill /></div>
          <div className={styles.facilityImage}><div className={styles.facilityImageOverlay}></div><Image src={`/camera/gamenet.jpg`} fill /></div>
          <div className={styles.facilityImage}><div className={styles.facilityImageOverlay}></div><Image src={`/camera/hockey.jpg`} fill /></div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </Box>
  );
}
