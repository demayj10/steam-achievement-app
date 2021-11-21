import React, { FC } from 'react';
import {
  AppBar, IconButton, Toolbar, Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  navTitle: string;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { navTitle } = props;
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="info" onClick={() => handleGoHome()}>
          <HomeIcon />
        </IconButton>
        <Typography variant="h5">{navTitle}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
