import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation } from "react-router-dom";
import { blue } from '@mui/material/colors';

const listItemStyle = {
  color: blue, 
  letterSpacing: 0
};

interface MenuItemProps {
  icon: JSX.Element;
  to: string;
  title: string;
}

function MenuItem(props: MenuItemProps) {
  let location = useLocation();
  const active = location.pathname.startsWith(props.to);

  return (
    <ListItem selected={active} component={Link} to={props.to}>
      <ListItemIcon>
        {props.icon}
      </ListItemIcon>
      <ListItemText primary={props.title} primaryTypographyProps={listItemStyle} />
    </ListItem>
  );
}

interface MenuProps {
  mobileBreakPoint: boolean;
  open: boolean;
  drawerWidth: number;
  handleMenuClick: (e: React.MouseEvent<HTMLElement>) => void;
}

function Menu(props: MenuProps) {
  return (
    <Box
        component="nav"
        sx={{ width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="menu"
    >
      <Drawer
        variant={props.mobileBreakPoint ? "temporary" : "permanent"}
        open={props.open}
        onClose={props.handleMenuClick}
        ModalProps={{
          keepMounted: props.mobileBreakPoint, //true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: props.mobileBreakPoint ? 'block' : 'none', sm: props.mobileBreakPoint ? 'none' : 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
        }}
      >
        <img className='logo' src={process.env.PUBLIC_URL+"/imgs/Logo_de_la_Universidad_Siglo_21.svg"} alt="Siglo21 - Seminario de Practica" width="220" loading="lazy" />
        <List disablePadding>
          <MenuItem to="/productos" icon={<HomeIcon />} title="Productos"/>
        </List>
      </Drawer>
    </Box>
  );
}

export default Menu;