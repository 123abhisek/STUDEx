// src/components/Footer.js
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
// import { useEffect } from "react";
import {
  // Box,
  // Container,
  // Grid,
  // Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grow,
  Fade,
  Zoom,
  Slide,
  // keyframes,
  Avatar,
  Divider,
  // IconButton
} from "@mui/material";
// import { Link } from "react-router-dom";
import {
  EmojiObjects,
  Group,
  TrendingUp,
  School,
  Favorite,
  ChatBubble,
  // Facebook,
  // Twitter,
  // Instagram,
  // LinkedIn,
  ArrowForward
} from "@mui/icons-material";


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

// const pulse = keyframes`
//   0% { transform: scale(1); }
//   50% { transform: scale(1.05); }
//   100% { transform: scale(1); }
// `;

const Footer = () => {
  return (
    <Box sx={{ 
        backgroundColor: colors.typography, 
        color: 'white',
        py: 6
      }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
                STUDEx
              </Typography>
              <Typography sx={{ mb: 2, opacity: 0.8 }}>
                Empowering students to overcome challenges and achieve academic success through community support and practical resources.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                <IconButton sx={{ color: 'white', opacity: 0.7, '&:hover': { opacity: 1 } }}>
                  <Facebook />
                </IconButton>
                <IconButton sx={{ color: 'white', opacity: 0.7, '&:hover': { opacity: 1 } }}>
                  <Twitter />
                </IconButton>
                <IconButton sx={{ color: 'white', opacity: 0.7, '&:hover': { opacity: 1 } }}>
                  <Instagram />
                </IconButton>
                <IconButton sx={{ color: 'white', opacity: 0.7, '&:hover': { opacity: 1 } }}>
                  <LinkedIn />
                </IconButton>
              </Box>
            </Grid>
            
            <Grid item xs={6} md={2}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Resources
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link to="/toolkit" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Toolkit</Link>
                <Link to="/guides" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Guides</Link>
                <Link to="/webinars" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Webinars</Link>
                <Link to="/blog" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Blog</Link>
              </Box>
            </Grid>
            
            <Grid item xs={6} md={2}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Community
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link to="/stories" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Stories</Link>
                <Link to="/forums" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Forums</Link>
                <Link to="/events" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Events</Link>
                <Link to="/groups" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Support Groups</Link>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Subscribe to Our Newsletter
              </Typography>
              <Typography sx={{ mb: 2, opacity: 0.8 }}>
                Get the latest resources, stories, and tips to help you succeed
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <input 
                  placeholder="Your email address" 
                  style={{ 
                    flexGrow: 1, 
                    padding: '12px 16px', 
                    borderRadius: '50px', 
                    border: 'none',
                    outline: 'none'
                  }} 
                />
                <Button 
                  variant="contained" 
                  sx={{ 
                    backgroundColor: colors.secondary,
                    color: colors.typography,
                    fontWeight: 700,
                    borderRadius: '50px',
                    px: 3,
                    '&:hover': {
                      backgroundColor: '#00acc1'
                    }
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
          
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 4 }} />
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <Typography sx={{ opacity: 0.7, fontSize: '0.9rem' }}>
              © 2025 STUDEx. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, mt: { xs: 2, md: 0 } }}>
              <Link to="/privacy" style={{ color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</Link>
              <Link to="/terms" style={{ color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</Link>
              <Link to="/contact" style={{ color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '0.9rem' }}>Contact Us</Link>
            </Box>
          </Box>
        </Container>
      </Box>
  );
};

export default Footer;