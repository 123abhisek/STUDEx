import React, { useState, useEffect } from "react";
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
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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
  success: "#4caf50",
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useAuth();

  const user = isLoggedIn
    ? {
        name: "Abhishek Juvatkar",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        notifications: 3,
      }
    : null;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Success Stories", path: "/stories" },
    { name: "Toolkit", path: "/toolkit" },
    { name: "Community", path: "/community" },
    { name: "Social Feed", path: "/social-feed" },
    { name: "About Us", path: "/about" },
  ];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleProfileMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogin = () => {
    login(); // Only use this if login is triggered here
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled ? colors.surface : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          boxShadow: "none",
          transition: "all 0.3s ease",
          py: 1,
          borderBottom: scrolled ? `1px solid ${colors.background}` : "none",
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
                textDecoration: "none",
                mr: 4,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 12,
                  height: 12,
                  backgroundColor: colors.accent,
                  borderRadius: "50%",
                  display: "inline-block",
                  mr: 1,
                }}
              />
              STUDEx
            </Typography>

            {!isMobile && (
              <Box sx={{ display: "flex", flexGrow: 1 }}>
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
                      color:
                        location.pathname === item.path
                          ? colors.primary
                          : colors.typography,
                      backgroundColor:
                        location.pathname === item.path
                          ? colors.surface
                          : "transparent",
                      boxShadow:
                        location.pathname === item.path
                          ? `0 2px 6px ${colors.primary}30`
                          : "none",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: colors.surface,
                        boxShadow: `0 2px 8px ${colors.primary}20`,
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {!isMobile &&
                (isLoggedIn ? (
                  <>
                    <IconButton
                      color="inherit"
                      component={Link}
                      to="/notifications"
                    >
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
                        borderRadius: "50px",
                        px: 3,
                        "&:hover": {
                          backgroundColor: "#c0ca33",
                          transform: "translateY(-2px)",
                          boxShadow: `0 4px 8px ${colors.accent}80`,
                        },
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
                          border: `2px solid ${colors.primary}`,
                        }}
                      />
                    </IconButton>
                  </>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={handleLogin}
                    sx={{
                      fontWeight: 600,
                      color: colors.primary,
                      borderColor: colors.primary,
                      "&:hover": {
                        backgroundColor: colors.primary,
                        color: "#fff",
                      },
                    }}
                  >
                    Login
                  </Button>
                ))}

              {isMobile && (
                <IconButton
                  color="inherit"
                  onClick={handleDrawerToggle}
                  sx={{ ml: "auto" }}
                >
                  <MenuIcon sx={{ color: colors.typography }} />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar />

      {/* Profile Menu */}
      {isLoggedIn && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          sx={{
            mt: 1,
            "& .MuiPaper-root": {
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              minWidth: 200,
            },
          }}
        >
          <Box sx={{ p: 2, borderBottom: `1px solid ${colors.background}` }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {user.name}
            </Typography>
            <Typography variant="body2" sx={{ color: colors.subtext }}>
              Student Member
            </Typography>
          </Box>
          <MenuItem onClick={handleMenuClose} component={Link} to="/profile">
            My Profile
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>My Stories</MenuItem>
          <MenuItem onClick={handleMenuClose}>Saved Resources</MenuItem>
          <Divider />
          <MenuItem onClick={handleMenuClose}>Account Settings</MenuItem>
          <MenuItem onClick={handleLogout} sx={{ color: colors.error }}>
            Logout
          </MenuItem>
        </Menu>
      )}
    </>
  );
};

export default Header;
