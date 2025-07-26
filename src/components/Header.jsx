// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   useMediaQuery,
//   useTheme,
//   Box,
//   Container,
//   Divider,
//   Badge,
//   Avatar,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// // Color palette
// const colors = {
//   primary: "#3F51B5",
//   secondary: "#00BCD4",
//   accent: "#CDDC39",
//   background: "#F5F5F5",
//   surface: "#FFFFFF",
//   typography: "#212121",
//   subtext: "#757575",
//   error: "#f44336",
//   success: "#4caf50",
// };

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [scrolled, setScrolled] = useState(false);

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const location = useLocation();
//   const navigate = useNavigate();

// const { isLoggedIn, login, logout } = useAuth();

// const user = isLoggedIn
//   ? {
//       name: "Abhishek Juvatkar",
//       avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//       notifications: 3,
//     }
//   : null;

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Success Stories", path: "/stories" },
//     { name: "Toolkit", path: "/toolkit" },
//     { name: "Community", path: "/community" },
//     { name: "Social Feed", path: "/social-feed" },
//     { name: "About Us", path: "/about" },
//   ];

//   const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
//   const handleProfileMenuOpen = (e) => setAnchorEl(e.currentTarget);
//   const handleMenuClose = () => setAnchorEl(null);

//   const handleLogin = () => {
//     login(); // Only use this if login is triggered here
//     navigate("/login");
//   };

//   const handleLogout = () => {
//     logout();
//     handleMenuClose();
//     navigate("/");
//   };

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         elevation={scrolled ? 4 : 0}
//         sx={{
//           width: "100vw",
//           left: 0,
//           top: 0,
//           boxShadow: "none",
//           background: "none", // Transparent main background
//           py: 1,
//           borderBottom: scrolled ? `1px solid ${colors.background}` : "none",

//           // Pseudo-element for full-bleed blurred background image
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100vw",
//             height: "100%",
//             zIndex: 0,
//             // backgroundImage:
//             // "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             filter: "blur(12px)", // <-- Blurs background image
//             opacity: 1,
//             pointerEvents: "none", // Keeps nav interactive
//             backgroundColor: "#F0F0F0", // Optional: adds a light tint
//             transition: "opacity 0.3s ease-in-out",
//           },

//           // Overlay for frosted glass effect, above blurred image
//           "&::after": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100vw",
//             height: "100%",
//             zIndex: 1,
//             background: "rgba(255,255,255,0.65)", // Semi-transparent, feel free to tweak alpha
//             backdropFilter: "blur(8px)", // Further strengthens the frosted look
//             pointerEvents: "none",
//           },
//         }}
//       >
//         <Container
//           maxWidth="lg"
//           sx={{
//             position: "relative",
//             zIndex: 2, // Ensures nav items are above overlays/background
//           }}
//         >
//           <Toolbar disableGutters sx={{ minHeight: 0, height: 0, padding: 0 }}>
//             <Typography
//               variant="h5"
//               component={Link}
//               to="/"
//               sx={{
//                 flexGrow: isMobile ? 1 : 0,
//                 fontWeight: 800,
//                 color: colors.primary,
//                 textDecoration: "none",
//                 mr: 4,
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               <Box
//                 component="span"
//                 sx={{
//                   width: 12,
//                   height: 12,
//                   backgroundColor: colors.accent,
//                   borderRadius: "50%",
//                   display: "inline-block",
//                   mr: 1,
//                 }}
//               />
//               STUDEx
//             </Typography>

//             {!isMobile && (
//               <Box sx={{ display: "flex", flexGrow: 1 }}>
//                 {navItems.map((item) => (
//                   <Button
//                     key={item.name}
//                     component={Link}
//                     to={item.path}
//                     sx={{
//                       mx: 0.5,
//                       px: 2.5,
//                       py: 1.2,
//                       borderRadius: 18, // slightly rounder like home buttons
//                       fontWeight: location.pathname === item.path ? 700 : 500,
//                       color:
//                         location.pathname === item.path
//                           ? colors.primary
//                           : colors.typography,
//                       backgroundColor:
//                         location.pathname === item.path
//                           ? "rgba(255,255,255,0.91)"
//                           : "transparent",
//                       boxShadow:
//                         location.pathname === item.path
//                           ? `0 4px 16px ${colors.primary}10`
//                           : "none",
//                       textTransform: "none",
//                       transition:
//                         "background 0.22s, color 0.22s, box-shadow 0.25s, transform 0.15s, border 0.19s",

//                       "&:hover": {
//                         backgroundColor: "rgba(205,220,57,0.21)", // subtle accent tint (matches home accent style)
//                         color: colors.primary,
//                         boxShadow: `0 6px 32px ${colors.primary}09`, // soft shadow
//                         transform: "translateY(-2px) scale(1.045)", // slight pop effect
//                         border: `1.5px solid ${colors.accent}`,
//                         backdropFilter: "blur(1.5px)", // soft focus
//                       },
//                       "&:active": {
//                         boxShadow: `0 1px 4px ${colors.primary}22`,
//                         transform: "scale(0.97)",
//                       },
//                     }}
//                   >
//                     {item.name}
//                   </Button>
//                 ))}
//               </Box>
//             )}

//             <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//               {!isMobile &&
//                 (isLoggedIn ? (
//                   <>
//                     <IconButton
//                       color="inherit"
//                       component={Link}
//                       to="/notifications"
//                     >
//                       <Badge badgeContent={user.notifications} color="error">
//                         <NotificationsIcon sx={{ color: colors.typography }} />
//                       </Badge>
//                     </IconButton>

//                     <Button
//                       variant="contained"
//                       sx={{
//                         backgroundColor: colors.accent,
//                         color: colors.typography,
//                         fontWeight: 700,
//                         borderRadius: "50px",
//                         px: 3,
//                         transition:
//                           "background 0.21s, box-shadow 0.25s, transform 0.14s",
//                         boxShadow: `0 2px 8px ${colors.accent}55`,
//                         "&:hover": {
//                           backgroundColor: "#e5ec7b",
//                           color: colors.primary, // for high contrast
//                           boxShadow: `0 7px 30px ${colors.accent}55`,
//                           transform: "translateY(-3px) scale(1.05)",
//                         },
//                       }}
//                       component={Link}
//                       to="/share"
//                     >
//                       Share Your Story
//                     </Button>

//                     <IconButton onClick={handleProfileMenuOpen}>
//                       <Avatar
//                         src={user.avatar}
//                         sx={{
//                           width: 36,
//                           height: 36,
//                           border: `2px solid ${colors.primary}`,
//                         }}
//                       />
//                     </IconButton>
//                   </>
//                 ) : (
//                   <Button
//                     variant="outlined"
//                     onClick={handleLogin}
//                     sx={{
//                       fontWeight: 600,
//                       color: colors.primary,
//                       borderColor: colors.primary,
//                       "&:hover": {
//                         backgroundColor: colors.primary,
//                         color: "#fff",
//                       },
//                     }}
//                   >
//                     Login
//                   </Button>
//                 ))}

//               {isMobile && (
//                 <IconButton
//                   color="inherit"
//                   onClick={handleDrawerToggle}
//                   sx={{ ml: "auto" }}
//                 >
//                   <MenuIcon sx={{ color: colors.typography }} />
//                 </IconButton>
//               )}
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>

//       <Toolbar />

//       {/* Profile Menu */}
//       {isLoggedIn && (
//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleMenuClose}
//           anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//           transformOrigin={{ vertical: "top", horizontal: "right" }}
//           sx={{
//             mt: 1,
//             "& .MuiPaper-root": {
//               borderRadius: "12px",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//               minWidth: 200,
//             },
//           }}
//         >
//           <Box sx={{ p: 2, borderBottom: `1px solid ${colors.background}` }}>
//             <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
//               {user.name}
//             </Typography>
//             <Typography variant="body2" sx={{ color: colors.subtext }}>
//               Student Member
//             </Typography>
//           </Box>
//           <MenuItem onClick={handleMenuClose} component={Link} to="/profile">
//             My Profile
//           </MenuItem>
//           <MenuItem onClick={handleMenuClose}>My Stories</MenuItem>
//           <MenuItem onClick={handleMenuClose}>Saved Resources</MenuItem>
//           <Divider />
//           <MenuItem onClick={handleMenuClose}>Account Settings</MenuItem>
//           <MenuItem onClick={handleLogout} sx={{ color: colors.error }}>
//             Logout
//           </MenuItem>
//         </Menu>
//       )}
//     </>
//   );
// };

// export default Header;
// src/components/Header.js

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Badge,
  Avatar,
  Container,
  Divider,
  Box,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

// Color palette matching Home page
const colors = {
  primary: "#253858",
  accent: "#2abbb0",
  accentDark: "#229a94",
  background: "#F5F5F5",
  surface: "#FFFFFF",
  typography: "#212121",
  subtext: "#757575",
  white: "#fff",
  error: "#f44336",
};

const navItems = [
  { name: "Home", path: "/" },
  { name: "Success Stories", path: "/stories" },
  { name: "Toolkit", path: "/toolkit" },
  { name: "Community", path: "/community" },
  { name: "Social Feed", path: "/social-feed" },
  { name: "About Us", path: "/about" },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  // Simulated user object for demo/testing
  const user = isLoggedIn
    ? {
        name: "Abhishek Juvatkar",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        notifications: 3,
      }
    : null;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Scroll event for background blur/elevation
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // NAVIGATION ACTIONS
  const handleDrawerToggle = () => setMobileOpen((open) => !open);
  const handleProfileMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogin = () => {
    navigate("/login");
    if (mobileOpen) setMobileOpen(false);
  };
  const handleLogout = () => {
    logout();
    handleMenuClose();
    navigate("/");
    if (mobileOpen) setMobileOpen(false);
  };
  const handleProfileNavigation = (path) => {
    navigate(path);
    handleMenuClose();
    if (mobileOpen) setMobileOpen(false);
  };

  // MOBILE DRAWER CONTENT
  const drawer = (
    <Box
      onClick={() => setMobileOpen(false)}
      sx={{ textAlign: "center", width: 240, pt: 1 }}
    >
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontWeight: 700,
          color: colors.primary,
          letterSpacing: "-0.5px",
        }}
      >
        STUDEx
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                textAlign: "center",
                color:
                  location.pathname === item.path
                    ? colors.accent
                    : colors.typography,
                fontWeight: location.pathname === item.path ? 700 : 500,
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}

        {isLoggedIn ? (
          <>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/notifications"
                sx={{ textAlign: "center" }}
              >
                <ListItemText primary="Notifications" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/share"
                sx={{ textAlign: "center" }}
              >
                <ListItemText primary="Share Your Story" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleProfileNavigation("/profile")}
                sx={{ textAlign: "center" }}
              >
                <ListItemText primary="My Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleLogout}
                sx={{ textAlign: "center", color: colors.error }}
              >
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogin} sx={{ textAlign: "center" }}>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 3 : 0}
        sx={{
          width: "100vw",
          left: 0,
          top: 0,
          background: "none",
          py: 1,
          boxShadow: scrolled ? `0 2px 12px rgba(42,187,176,0.12)` : "none",
          borderBottom: scrolled ? `1px solid ${colors.background}` : "none",
          transition: "all 0.23s",
          zIndex: theme.zIndex.drawer + 2,

          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100%",
            zIndex: 0,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(7px)",
            opacity: scrolled ? 0.95 : 0.7,
            backgroundColor: colors.background,
            transition: "opacity 0.3s",
          },

          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100%",
            zIndex: 1,
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(6px)",
            transition: "background 0.3s",
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2, // Ensure content is above overlays
          }}
        >
          <Toolbar disableGutters sx={{ minHeight: 0, py: 1 }}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Typography
                variant="h5"
                component={Link}
                to="/"
                sx={{
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
            </motion.div>

            {!isMobile && (
              <Box sx={{ display: "flex", flexGrow: 1 }}>
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      component={Link}
                      to={item.path}
                      sx={{
                        mx: 0.5,
                        px: 2.5,
                        py: 1.2,
                        borderRadius: 18,
                        fontWeight:
                          location.pathname === item.path ? 700 : 500,
                        color:
                          location.pathname === item.path
                            ? colors.primary
                            : colors.typography,
                        backgroundColor:
                          location.pathname === item.path
                            ? "rgba(255,255,255,0.91)"
                            : "transparent",
                        boxShadow:
                          location.pathname === item.path
                            ? `0 4px 16px ${colors.accent}09`
                            : "none",
                        textTransform: "none",
                        transition: "all 0.23s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          backgroundColor: "rgba(42, 187, 176, 0.16)",
                          color: colors.primary,
                          boxShadow: `0 6px 28px ${colors.accent}09`,
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            )}

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {!isMobile &&
                (isLoggedIn ? (
                  <>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <IconButton
                        color="inherit"
                        component={Link}
                        to="/notifications"
                      >
                        <Badge
                          badgeContent={user?.notifications || 0}
                          color="error"
                        >
                          <NotificationsIcon
                            sx={{ color: colors.typography }}
                          />
                        </Badge>
                      </IconButton>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: colors.accent,
                          color: colors.typography,
                          fontWeight: 700,
                          borderRadius: "50px",
                          px: 3,
                          transition: "all 0.3s",
                          boxShadow: `0 2px 8px ${colors.accent}44`,
                          "&:hover": {
                            backgroundColor: colors.accentDark,
                            boxShadow: `0 8px 30px ${colors.accent}77`,
                            transform: "translateY(-3px)",
                          },
                        }}
                        component={Link}
                        to="/share"
                      >
                        Share Your Story
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <IconButton onClick={handleProfileMenuOpen}>
                        <Avatar
                          src={user?.avatar}
                          sx={{
                            width: 36,
                            height: 36,
                            border: `2px solid ${colors.primary}`,
                          }}
                        />
                      </IconButton>
                    </motion.div>
                  </>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outlined"
                      onClick={handleLogin}
                      sx={{
                        fontWeight: 600,
                        color: colors.primary,
                        borderColor: colors.primary,
                        "&:hover": {
                          backgroundColor: colors.primary,
                          color: colors.white,
                        },
                      }}
                    >
                      Login
                    </Button>
                  </motion.div>
                ))}

              {isMobile && (
                <motion.div whileHover={{ scale: 1.1 }}>
                  <IconButton
                    color="inherit"
                    onClick={handleDrawerToggle}
                    sx={{ ml: "auto" }}
                  >
                    <MenuIcon sx={{ color: colors.typography }} />
                  </IconButton>
                </motion.div>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar /> {/* Spacer for fixed AppBar */}

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          zIndex: theme.zIndex.drawer + 20,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            backgroundColor: colors.background,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Profile Menu for desktop */}
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
          <MenuItem onClick={() => handleProfileNavigation("/profile")}>
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
