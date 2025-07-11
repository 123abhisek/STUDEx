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
  Alert,
  useTheme
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';

import {useAuth} from '../context/AuthContext'; // Assuming you have an AuthContext for managing auth state


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const theme = useTheme();
  const navigate = useNavigate();

  const { login } = useAuth(); // Assuming you have a login function in your AuthContext

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password || (!isLogin && (!name || !confirmPassword))) {
      setError('Please fill in all required fields');
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (isLogin) {
      // Simulate a login validation
      if (email === 'abhi@gmail.com' && password === '1234') {
        console.log('Login success:', { email });
        login(); // Call login function from AuthContext
        localStorage.setItem('isLoggedIn', 'true'); // Store login state
        navigate('/', { login: true }); // Redirect to home
      } else {
        setError('Invalid email or password');
      }
    } else {
      console.log('Signup submitted:', { name, email, password });
      alert('Signup successful! Please sign in.');
      setIsLogin(true);
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
  };

  return (
    <Container
      maxWidth="1rem"
      disableGutters

      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
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
          {/* Left side */}
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
              src="https://previews.123rf.com/images/123rfexclusive/123rfexclusive2210/123rfexclusive221015873/194050985-3d-two-factor-authentication-concept.jpg"
              alt="Auth"
              sx={{
                width: '100%',
                maxWidth: 300,
                mx: 'auto',
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
              }}
            />
          </Box>

          {/* Right side - form */}
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
            <Typography variant="h4" fontWeight={700} mb={1}>
              {isLogin ? 'Sign In' : 'Create Account'}
            </Typography>
            <Typography variant="body1" mb={3} color="textSecondary">
              {isLogin
                ? 'Enter your credentials to continue'
                : 'Fill in your details to get started'}
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <TextField
                  fullWidth
                  label="Full Name"
                  margin="normal"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  required
                />
              )}

              {isLogin && (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                  <FormControlLabel control={<Checkbox />} label="Remember me" />
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Box>
              )}

              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                sx={{ mt: 3, py: 1.5, borderRadius: 2, fontWeight: 700 }}
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>

              <Divider sx={{ my: 3 }}>OR</Divider>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    onClick={handleGoogleLogin}
                  >
                    Google
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<FacebookIcon sx={{ color: '#1877F2' }} />}
                    onClick={handleFacebookLogin}
                  >
                    Facebook
                  </Button>
                </Grid>
              </Grid>

              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Typography variant="body2" display="inline">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                </Typography>{' '}
                <Link
                  component="button"
                  onClick={() => setIsLogin(!isLogin)}
                  fontWeight={600}
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
        </Paper>
      </Fade>
    </Container>
  );
};

export default AuthPage;
