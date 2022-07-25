import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/authProvider';
import CartContext from '../../contexts/cartProvider';
import { StyledIconButon } from './buttons.styled';
import ViewListIcon from '@mui/icons-material/ViewList';

interface Props {
  role: string
}

export default function AccountMenu({ role }: Props) {

  const { auth, logout } = useContext(AuthContext);
  const { logoutCart } = useContext(CartContext)
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOrders = () => {
    navigate("/orders");
  }

  const handleLogout = () => {

    logout();
    logoutCart();
    navigate("/");
  }

  return (
    <>
      <Tooltip title="Conta">
        <StyledIconButon
          id={role}
          onClick={handleClick}
          sx={{ ml: 2 }}
          size='large'
          color='secondary'
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <AccountCircleIcon fontSize='inherit' />
        </StyledIconButon>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> {auth.user.firstName}
        </MenuItem>
        <Divider />
        {role === "user" && (
          <>
            <MenuItem onClick={handleOrders}>
              <ListItemIcon>
                <ViewListIcon fontSize="small" />
              </ListItemIcon>
              Meus Pedidos
            </MenuItem>
          </>
        )}
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Configurações
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
    </>
  );
}
