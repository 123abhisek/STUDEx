// src/components/Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Success Stories', path: '/stories' },
    { name: 'Toolkit', path: '/toolkit' },
    { name: 'Share Your Story', path: '/share' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1} sx={{ py: 1 }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 700, color: 'primary.main' }}>
            STUDEx
          </Typography>
          
          {isMobile ? (
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <div>
              {navItems.map((item) => (
                <Button 
                  key={item.name} 
                  component={Link} 
                  to={item.path}
                  sx={{ mx: 1, color: 'text.primary' }}
                >
                  {item.name}
                </Button>
              ))}
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ ml: 2, borderRadius: '50px' }}
                component={Link}
                to="/share"
              >
                Share Your Story
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ '& .MuiDrawer-paper': { width: 240 } }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem 
              button 
              key={item.name} 
              component={Link} 
              to={item.path}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;