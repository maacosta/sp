import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import { Menu, MenuItem, Tooltip } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { loginDto } from '../../types/auth';

interface HeaderProps {
  mobileBreakPoint: boolean;
  drawerWidth: number;
  children?: React.ReactNode;
  handleMenuClick: (e: React.MouseEvent<HTMLElement>) => void;
}

function Header(props: HeaderProps) {
  let navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [data, setData] = React.useState<loginDto|null>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseSession = (event: React.MouseEvent<HTMLElement>) => {
    //dispatch(action.clearLoginData());
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" 
        sx={{
          width: { sm: `calc(100% - ${props.drawerWidth}px)` },
          ml: { sm: `${props.drawerWidth}px` },
        }}>
        <Toolbar>
          {props.mobileBreakPoint && 
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={props.handleMenuClick}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <img width="36" className='logo-s' src={process.env.PUBLIC_URL+"/imgs/brand/Logo-jst-blanco-vertical.png"} alt="SP" loading="lazy" />
            </>
          }
          <Typography variant="h6" component="div">
            SP
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {data != null &&
            <>
              <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <Typography variant="body2" >
                  {data?.name}
                </Typography>
              </Box>
              <Box>
                <Tooltip title={data?.name}>
                  <IconButton onClick={handleOpenUserMenu}
                    size="large"
                    edge="end"
                    aria-label="datos de la cuenta"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                sx={{ mt: '48px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseSession}>
                  <LogoutIcon /><Typography textAlign="center">Salir</Typography>
                </MenuItem>
              </Menu>
            </>
          }
          {data == null &&
            <>
              <Box component={Link} to="/signin" sx={{textDecoration:'none',color:'#FFF'}}>
                <Typography variant="body2" >
                  Ingresar
                </Typography>
              </Box>
              <Box component={Link} to="/signin" sx={{color:'#FFF'}}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="ingresar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <LoginIcon />
                </IconButton>
              </Box>
            </>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;