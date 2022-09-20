import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from '../styles/login.module.scss'
import dynamic from 'next/dynamic';
import Header from '../components/Header';
// import AuthLogin from "../components/Login"
// import AuthRegister from "../components/Register"
const AuthLogin = dynamic(()=> import('../components/Login'),{ssr:false})
const AuthRegister = dynamic(()=> import('../components/Register'),{ssr:false})
function  TabPanel(props) {
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

  return (<>
    <div className={styles.container}>
  <Header/>
<div className={styles.card}>

    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"sx={{"& .MuiButtonBase-root":{width:"50%"}}}>
          <Tab  sx={{fontFamily:"Vazir"}} label="ورود" {...a11yProps(0)} />
          <Tab  sx={{fontFamily:"Vazir"}} label="ثبت نام" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
       <AuthLogin/>
    

      </TabPanel>
      <TabPanel value={value} index={1} >
       <AuthRegister/>
      </TabPanel>
      
    </Box>
</div>

    </div>
    </>

  );
}