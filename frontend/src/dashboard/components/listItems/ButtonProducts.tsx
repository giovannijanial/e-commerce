import { ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export default function ListButtonProduct() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ListItemButton
        id="list-button-product"
        aria-controls={open ? 'list-button-product-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ListItemIcon>
          <AppRegistrationIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItemButton>
      <Menu
        id="list-button-product-menu"
        aria-labelledby="list-button-product"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>New Product</MenuItem>
        <MenuItem onClick={handleClose}>All Products</MenuItem>
        <MenuItem onClick={handleClose}>All Categories</MenuItem>
      </Menu>
    </div>
  );
}