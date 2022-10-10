import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles'
import {  useRouter } from 'next/router';
 
const drawerWidth = 240;
const navItems = [{name:"خانه",location:"/"},{name:"درباره ما",location:"/about"}, {name:"تماس با ما",location:"/contact"},, {name:"ورود / ثبت نام",location:"/login"}];

function Header(props) {
  const router= useRouter()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' ,fontFamily:"Vazir"}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        EKaseb.ir
      </Typography>
      <Divider />
      <List sx={{fontFamily:"Vazir"}}>
        {navItems.map((item) => (
          <ListItem key={`${item.name}`} disablePadding>
            <ListItemButton sx={{ textAlign: 'center'}} onClick={()=>{router.push(item.location)}} >
              <ListItemText primary={item.name} sx={{"& .MuiTypography-root":{fontFamily:"Vazir"}}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' ,fontFamily:"Vazir"}}>
      <AppBar component="nav" sx={ {"& .MuiButtonBase-root":{fontFamily:"Vazir"},"& .MuiBox-root":{direction:"rtl"}}}>
        <Toolbar>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />

          </IconButton>
         EKaseb.ir
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item ,index) => (
              <Button key={`${item.name} ${index}`} sx={{ color: '#fff' }} onClick={()=>router.push(item.location)}>
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
       
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
