import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
  Container,
  Divider,
  Badge,
  Avatar,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, useLocation } from 'react-router-dom';

// Color palette
const colors = {
  primary: "#3F51B5",
  secondary: "#00BCD4",
  accent: "#CDDC39",
  background: "#F5F5F5",
  surface: "#FFFFFF",
  typography: "#212121",
  subtext: "#757575",
  error: "#f44336",
  success: "#4caf50"
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const user = {
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    notifications: 3
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Success Stories', path: '/stories' },
    { name: 'Toolkit', path: '/toolkit' },
    { name: 'Community', path: '/community' },
    { name: 'Social Feed', path: '/social-feed' },
    { name: 'About Us', path: '/about' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled ? colors.surface : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
          py: 1,
          borderBottom: scrolled ? `1px solid ${colors.background}` : 'none'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                flexGrow: isMobile ? 1 : 0,
                fontWeight: 800,
                color: colors.primary,
                textDecoration: 'none',
                mr: 4,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Box component="span" sx={{
                width: 12,
                height: 12,
                backgroundColor: colors.accent,
                borderRadius: '50%',
                display: 'inline-block',
                mr: 1
              }} />
              STUDEx
            </Typography>

            {!isMobile && (
              <Box sx={{ display: 'flex', flexGrow: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    component={Link}
                    to={item.path}
                    sx={{
                      mx: 0.5,
                      px: 2.5,
                      py: 1.2,
                      borderRadius: 10,
                      fontWeight: location.pathname === item.path ? 700 : 500,
                      color: location.pathname === item.path ? colors.primary : colors.typography,
                      backgroundColor: location.pathname === item.path ? colors.surface : 'transparent',
                      boxShadow: location.pathname === item.path ? `0 2px 6px ${colors.primary}30` : 'none',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: colors.surface,
                        boxShadow: `0 2px 8px ${colors.primary}20`
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {!isMobile && (
                <>
                  <IconButton color="inherit" component={Link} to="/notifications">
                    <Badge badgeContent={user.notifications} color="error">
                      <NotificationsIcon sx={{ color: colors.typography }} />
                    </Badge>
                  </IconButton>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: colors.accent,
                      color: colors.typography,
                      fontWeight: 700,
                      borderRadius: '50px',
                      px: 3,
                      '&:hover': {
                        backgroundColor: '#c0ca33',
                        transform: 'translateY(-2px)',
                        boxShadow: `0 4px 8px ${colors.accent}80`
                      }
                    }}
                    component={Link}
                    to="/share"
                  >
                    Share Your Story
                  </Button>

                  <IconButton onClick={handleProfileMenuOpen}>
                    <Avatar
                      src={user.avatar}
                      sx={{
                        width: 36,
                        height: 36,
                        border: `2px solid ${colors.primary}`
                      }}
                    />
                  </IconButton>
                </>
              )}

              {isMobile && (
                <IconButton color="inherit" onClick={handleDrawerToggle} sx={{ ml: 'auto' }}>
                  <MenuIcon sx={{ color: colors.typography }} />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar />

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            backgroundColor: colors.surface,
            boxShadow: `0 0 20px ${colors.primary}20`
          }
        }}
      >
        <Box
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <Box sx={{ p: 2, textAlign: 'center', backgroundColor: colors.primary, color: 'white' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              STUDEx
            </Typography>
          </Box>

          <Box sx={{ p: 2, display: 'flex', alignItems: 'center', borderBottom: `1px solid ${colors.background}` }}>
            <Avatar src={user.avatar} sx={{ width: 48, height: 48, mr: 2 }} />
            <Box>
              <Typography sx={{ fontWeight: 600 }}>{user.name}</Typography>
              <Typography variant="body2" sx={{ color: colors.subtext }}>Student Member</Typography>
            </Box>
          </Box>

          <List>
            {navItems.map((item) => (
              <ListItem disablePadding key={item.name}>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  sx={{
                    backgroundColor: location.pathname === item.path ? colors.primary + '10' : 'transparent',
                    borderLeft: location.pathname === item.path ? `4px solid ${colors.accent}` : 'none'
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontWeight: location.pathname === item.path ? 600 : 500,
                      color: colors.typography
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/share"
                sx={{
                  backgroundColor: colors.accent + '20',
                  mt: 1
                }}
              >
                <ListItemText
                  primary="Share Your Story"
                  primaryTypographyProps={{
                    fontWeight: 700,
                    color: colors.typography
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>

          <Divider sx={{ my: 1 }} />

          <List>
            {['Profile', 'Notifications', 'Settings', 'Logout'].map((text) => (
              <ListItem disablePadding key={text}>
                <ListItemButton>
                  <ListItemText primary={text} primaryTypographyProps={{ color: colors.typography }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{
          mt: 1,
          '& .MuiPaper-root': {
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            minWidth: 200
          }
        }}
      >
        <Box sx={{ p: 2, borderBottom: `1px solid ${colors.background}` }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{user.name}</Typography>
          <Typography variant="body2" sx={{ color: colors.subtext }}>Student Member</Typography>
        </Box>
        <MenuItem onClick={handleMenuClose} component={Link} to="/profile">My Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My Stories</MenuItem>
        <MenuItem onClick={handleMenuClose}>Saved Resources</MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>Account Settings</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ color: colors.error }}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Header;
