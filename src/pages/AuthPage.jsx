import React, { useState } from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  TextField, 
  Button, 
  FormControlLabel, 
  Checkbox, 
  Grid, 
  Link, 
  Divider, 
  Paper,
  Fade,
  useTheme
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EmailIcon from '@mui/icons-material/Email'; // Added missing import
// import { motion } from 'framer-motion';
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login submitted:', { email, password });
    } else {
      console.log('Signup submitted:', { name, email, password, confirmPassword });
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // Implement Google OAuth here
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
    // Implement Facebook OAuth here
  };

  return (
    <Container 
      maxWidth={false} 
      disableGutters 
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <Fade in timeout={800}>
        <Paper 
          elevation={10} 
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%',
            maxWidth: 900,
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Left Side - Branding */}
          <Box 
            sx={{
              flex: 1,
              background: 'linear-gradient(to right bottom, #5c6bc0, #3949ab)',
              color: 'white',
              p: 5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Box> {/* Removed motion.div */}
              <Typography variant="h3" fontWeight={700} mb={2}>
                Welcome {isLogin ? 'Back' : 'Abroad'}
              </Typography>
              <Typography variant="h6" mb={4} sx={{ opacity: 0.9 }}>
                {isLogin 
                  ? 'Sign in to continue your journey' 
                  : 'Join our community to get started'}
              </Typography>
              <Box 
                component="img"
                src="https://cdn.dribbble.com/users/1590795/screenshots/14628728/media/8c0c4a0b4f8b4d45e0d9b1f7b5c5b5f1.png?compress=1&resize=600x450"
                alt="Authentication"
                sx={{
                  width: '100%',
                  maxWidth: 300,
                  mx: 'auto',
                  filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
                }}
              />
            </Box>
          </Box>
          
          {/* Right Side - Form */}
          <Box 
            sx={{
              flex: 1,
              backgroundColor: theme.palette.background.paper,
              p: 5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box> {/* Removed motion.div */}
              <Typography variant="h4" fontWeight={700} mb={1} color="textPrimary">
                {isLogin ? 'Sign In' : 'Create Account'}
              </Typography>
              <Typography variant="body1" mb={4} color="textSecondary">
                {isLogin 
                  ? 'Enter your credentials to continue' 
                  : 'Fill in your details to get started'}
              </Typography>
              
              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <TextField
                    fullWidth
                    label="Full Name"
                    margin="normal"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputProps={{
                      startAdornment: <AccountCircleIcon sx={{ color: theme.palette.text.secondary, mr: 1 }} />
                    }}
                    required
                  />
                )}
                
                <TextField
                  fullWidth
                  type="email"
                  label="Email Address"
                  margin="normal"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    startAdornment: <EmailIcon sx={{ color: theme.palette.text.secondary, mr: 1 }} />
                  }}
                  required
                />
                
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    startAdornment: <LockIcon sx={{ color: theme.palette.text.secondary, mr: 1 }} />
                  }}
                  required
                />
                
                {!isLogin && (
                  <TextField
                    fullWidth
                    type="password"
                    label="Confirm Password"
                    margin="normal"
                    variant="outlined"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    InputProps={{
                      startAdornment: <LockIcon sx={{ color: theme.palette.text.secondary, mr: 1 }} />
                    }}
                    required
                  />
                )}
                
                {isLogin && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                    <FormControlLabel
                      control={<Checkbox color="primary" />}
                      label="Remember me"
                    />
                    <Link href="#" variant="body2" sx={{ textDecoration: 'none' }}>
                      Forgot password?
                    </Link>
                  </Box>
                )}
                
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  sx={{
                    mt: 3,
                    mb: 2,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 700,
                    boxShadow: '0 4px 14px rgba(92, 107, 192, 0.4)',
                    '&:hover': {
                      boxShadow: '0 6px 18px rgba(92, 107, 192, 0.6)',
                    }
                  }}
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </Button>
                
                <Divider sx={{ my: 3 }}>OR</Divider>
                
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="inherit"
                      size="large"
                      startIcon={<GoogleIcon />}
                      onClick={handleGoogleLogin}
                      sx={{
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 600,
                        borderColor: theme.palette.divider,
                        color: theme.palette.text.primary,
                        '&:hover': {
                          backgroundColor: theme.palette.action.hover,
                          borderColor: theme.palette.divider,
                        }
                      }}
                    >
                      Google
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="inherit"
                      size="large"
                      startIcon={<FacebookIcon sx={{ color: '#1877F2' }} />}
                      onClick={handleFacebookLogin}
                      sx={{
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 600,
                        borderColor: theme.palette.divider,
                        color: theme.palette.text.primary,
                        '&:hover': {
                          backgroundColor: theme.palette.action.hover,
                          borderColor: theme.palette.divider,
                        }
                      }}
                    >
                      Facebook
                    </Button>
                  </Grid>
                </Grid>
                
                <Box sx={{ textAlign: 'center', mt: 3 }}>
                  <Typography variant="body2" display="inline" color="textSecondary">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                  </Typography>{' '}
                  <Link 
                    href="#" 
                    variant="body2" 
                    fontWeight={600}
                    onClick={() => setIsLogin(!isLogin)}
                    sx={{ 
                      textDecoration: 'none',
                      color: theme.palette.primary.main,
                      '&:hover': {
                        textDecoration: 'underline',
                      }
                    }}
                  >
                    {isLogin ? 'Sign Up' : 'Sign In'}
                  </Link>
                </Box>
              </form>
            </Box>
          </Box>
        </Paper>
      </Fade>
    </Container>
  );
};

export default AuthPage;