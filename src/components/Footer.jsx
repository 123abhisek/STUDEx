// src/components/Footer.js
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: 'primary.main', 
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
              STUDEx
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Empowering students to transform setbacks into stepping stones.
            </Typography>
            <Box>
              <IconButton aria-label="Facebook" sx={{ color: 'white' }}>
                <Facebook />
              </IconButton>
              <IconButton aria-label="Twitter" sx={{ color: 'white' }}>
                <Twitter />
              </IconButton>
              <IconButton aria-label="Instagram" sx={{ color: 'white' }}>
                <Instagram />
              </IconButton>
              <IconButton aria-label="LinkedIn" sx={{ color: 'white' }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom>Explore</Typography>
            <Link href="/" color="inherit" underline="hover" display="block">Home</Link>
            <Link href="/stories" color="inherit" underline="hover" display="block">Stories</Link>
            <Link href="/toolkit" color="inherit" underline="hover" display="block">Toolkit</Link>
            <Link href="/about" color="inherit" underline="hover" display="block">About</Link>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom>Connect</Typography>
            <Link href="/share" color="inherit" underline="hover" display="block">Share Story</Link>
            <Link href="/contact" color="inherit" underline="hover" display="block">Contact</Link>
            <Link href="/faq" color="inherit" underline="hover" display="block">FAQ</Link>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Join Our Community</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Subscribe to receive inspiring stories and practical tips
            </Typography>
            <Box component="form" sx={{ display: 'flex' }}>
              <input 
                type="email" 
                placeholder="Your email" 
                style={{
                  flexGrow: 1,
                  padding: '10px 15px',
                  border: 'none',
                  borderRadius: '4px 0 0 4px',
                  fontSize: '0.9rem'
                }}
              />
              <button 
                type="submit"
                style={{
                  background: '#FFD700',
                  color: '#005a5a',
                  border: 'none',
                  padding: '10px 20px',
                  fontWeight: 'bold',
                  borderRadius: '0 4px 4px 0',
                  cursor: 'pointer'
                }}
              >
                Join
              </button>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 4, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} STUDEx. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Designed By Abhishek R J
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;