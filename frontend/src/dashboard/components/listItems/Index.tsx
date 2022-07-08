import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';;
import PeopleIcon from '@mui/icons-material/People';


export const DashListItems = (
  <React.Fragment>
    <NavLink to="/">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </NavLink>


    <NavLink to="/dash/products">
      <ListItemButton>
        <ListItemIcon>
          <AppRegistrationIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItemButton>
    </NavLink>

    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>

  </React.Fragment>
);
