import React, { useState } from 'react';
import {
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  Divider,
  Chip,
  useTheme,
  Fade
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import EventIcon from '@mui/icons-material/Event';
import StarIcon from '@mui/icons-material/Star';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Abhishek Juvatkar',
    email: 'abhishek@student.com',
    bio: 'Computer Science student passionate about UI/UX design and frontend development. Currently exploring React and Material Design to create beautiful user interfaces.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    location: 'Mumbai, India',
    occupation: 'Student & Frontend Developer',
    website: 'abhishek-portfolio.com',
    joinDate: 'January 2023',
    skills: ['React', 'Material UI', 'JavaScript', 'CSS', 'UI Design']
  });

  const [editing, setEditing] = useState(false);
  const [tempUser, setTempUser] = useState({ ...user });

  const theme = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempUser((prev) => ({ ...prev, [name]: value }));
  };

  const saveChanges = () => {
    setUser({ ...tempUser });
    setEditing(false);
  };

  const cancelChanges = () => {
    setTempUser({ ...user });
    setEditing(false);
  };

  const simulateAvatarUpload = () => {
    alert('Avatar upload feature coming soon!');
  };

  return (
    <Container 
      maxWidth={false} 
      disableGutters 
      sx={{ 
        py: 0, 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%)',
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '100vh',
          p: 3
        }}
      >
        <Fade in={true} timeout={800}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: { xs: 2, sm: 4 }, 
              borderRadius: 3,
              width: '100%',
              maxWidth: 900,
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
              background: '#ffffff',
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid rgba(0, 0, 0, 0.05)',
            }}
          >
            {/* Header Section */}
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                alignItems: 'center', 
                mb: 4,
                gap: 3,
                position: 'relative',
                zIndex: 1,
                mt: 3
              }}
            >
              <Box position="relative" sx={{ alignSelf: { xs: 'center', sm: 'flex-start' } }}>
                <Avatar
                  src={user.avatar}
                  alt={user.name}
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    border: `3px solid ${theme.palette.background.paper}`,
                    boxShadow: theme.shadows[2],
                    backgroundColor: theme.palette.background.paper,
                  }}
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    right: 0,
                    bgcolor: theme.palette.primary.main,
                    color: 'white',
                    '&:hover': { 
                      bgcolor: theme.palette.primary.dark,
                      transform: 'scale(1.1)'
                    },
                    transition: 'all 0.3s ease',
                    boxShadow: 2,
                  }}
                  size="medium"
                  onClick={simulateAvatarUpload}
                >
                  <CloudUploadIcon fontSize="small" />
                </IconButton>
              </Box>
              
              <Box 
                sx={{ 
                  textAlign: { xs: 'center', sm: 'left' },
                  flexGrow: 1,
                  color: theme.palette.text.primary
                }}
              >
                <Typography 
                  variant="h4" 
                  component="h1" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 0.5,
                    color: theme.palette.text.primary
                  }}
                >
                  {user.name}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                  <WorkIcon fontSize="small" sx={{ color: theme.palette.text.secondary }} />
                  <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary }}>
                    {user.occupation}
                  </Typography>
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  mb: 2, 
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', sm: 'flex-start' }
                }}>
                  <LocationOnIcon fontSize="small" sx={{ color: theme.palette.text.secondary }} />
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mr: 2 }}>
                    {user.location}
                  </Typography>
                  <EventIcon fontSize="small" sx={{ color: theme.palette.text.secondary }} />
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                    Joined {user.joinDate}
                  </Typography>
                </Box>
                
                <Button
                  variant={editing ? "contained" : "outlined"}
                  color={editing ? "success" : "primary"}
                  startIcon={editing ? <SaveIcon /> : <EditIcon />}
                  onClick={editing ? saveChanges : () => setEditing(true)}
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    fontWeight: 600,
                    boxShadow: editing ? theme.shadows[1] : 'none',
                    '&:hover': {
                      boxShadow: theme.shadows[2],
                    }
                  }}
                >
                  {editing ? "Save Profile" : "Edit Profile"}
                </Button>
              </Box>
            </Box>
            
            <Divider sx={{ my: 3, bgcolor: 'divider' }} />
            
            {/* Main Content */}
            <Grid container spacing={4}>
              {/* Left Column - Personal Info */}
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ 
                    mb: 2, 
                    display: 'flex', 
                    alignItems: 'center', 
                    color: theme.palette.text.primary,
                    fontWeight: 600
                  }}>
                    <InfoIcon sx={{ mr: 1, color: theme.palette.primary.main }} /> About Me
                  </Typography>
                  <TextField
                    fullWidth
                    name="bio"
                    value={editing ? tempUser.bio : user.bio}
                    onChange={handleChange}
                    InputProps={{ 
                      readOnly: !editing,
                      multiline: true,
                      minRows: 4,
                    }}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: editing ? '#fafafa' : 'transparent',
                      },
                      '& textarea': {
                        resize: 'vertical',
                      }
                    }}
                  />
                </Box>
                
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ 
                    mb: 2, 
                    display: 'flex', 
                    alignItems: 'center', 
                    color: theme.palette.text.primary,
                    fontWeight: 600
                  }}>
                    <PersonIcon sx={{ mr: 1, color: theme.palette.primary.main }} /> Personal Information
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    <TextField
                      label="Full Name"
                      fullWidth
                      name="name"
                      value={editing ? tempUser.name : user.name}
                      onChange={handleChange}
                      InputProps={{ 
                        readOnly: !editing,
                        startAdornment: <PersonIcon color="action" sx={{ mr: 1 }} />
                      }}
                      variant="outlined"
                      sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          backgroundColor: editing ? '#fafafa' : 'transparent',
                        }
                      }}
                    />
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <TextField
                      label="Email"
                      fullWidth
                      name="email"
                      value={editing ? tempUser.email : user.email}
                      onChange={handleChange}
                      InputProps={{ 
                        readOnly: !editing,
                        startAdornment: <EmailIcon color="action" sx={{ mr: 1 }} />
                      }}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          backgroundColor: editing ? '#fafafa' : 'transparent',
                        }
                      }}
                    />
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <TextField
                      label="Website"
                      fullWidth
                      name="website"
                      value={editing ? tempUser.website : user.website}
                      onChange={handleChange}
                      InputProps={{ 
                        readOnly: !editing,
                        startAdornment: <LinkIcon color="action" sx={{ mr: 1 }} />
                      }}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          backgroundColor: editing ? '#fafafa' : 'transparent',
                        }
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
              
              {/* Right Column - Skills and Stats */}
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ 
                    mb: 2, 
                    display: 'flex', 
                    alignItems: 'center', 
                    color: theme.palette.text.primary,
                    fontWeight: 600
                  }}>
                    <StarIcon sx={{ mr: 1, color: theme.palette.primary.main }} /> Skills & Expertise
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {user.skills.map((skill, index) => (
                      <Chip 
                        key={index} 
                        label={skill} 
                        color="primary" 
                        variant="outlined"
                        sx={{ 
                          borderRadius: 1,
                          fontWeight: 500,
                          px: 1,
                          py: 1,
                          borderColor: theme.palette.primary.light,
                          backgroundColor: theme.palette.primary.lighter,
                          color: theme.palette.primary.dark,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ 
                    mb: 2, 
                    display: 'flex', 
                    alignItems: 'center', 
                    color: theme.palette.text.primary,
                    fontWeight: 600
                  }}>
                    <WorkIcon sx={{ mr: 1, color: theme.palette.primary.main }} /> Profile Stats
                  </Typography>
                  <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                    <Grid item xs={4}>
                      <Paper elevation={0} sx={{ 
                        p: 2, 
                        borderRadius: 2, 
                        bgcolor: theme.palette.background.default,
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        height: '100%'
                      }}>
                        <Typography variant="h5" fontWeight={700} color="primary">
                          42
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Projects
                        </Typography>
                      </Paper>
                    </Grid>
                    
                    <Grid item xs={4}>
                      <Paper elevation={0} sx={{ 
                        p: 2, 
                        borderRadius: 2, 
                        bgcolor: theme.palette.background.default,
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        height: '100%'
                      }}>
                        <Typography variant="h5" fontWeight={700} color="primary">
                          128
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Connections
                        </Typography>
                      </Paper>
                    </Grid>
                    
                    <Grid item xs={4}>
                      <Paper elevation={0} sx={{ 
                        p: 2, 
                        borderRadius: 2, 
                        bgcolor: theme.palette.background.default,
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        height: '100%'
                      }}>
                        <Typography variant="h5" fontWeight={700} color="primary">
                          5
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Years
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </Box>
                
                <Box>
                  <Typography variant="h6" sx={{ 
                    mb: 2, 
                    display: 'flex', 
                    alignItems: 'center', 
                    color: theme.palette.text.primary,
                    fontWeight: 600
                  }}>
                    <EmailIcon sx={{ mr: 1, color: theme.palette.primary.main }} /> Contact Information
                  </Typography>
                  <Paper elevation={0} sx={{ 
                    p: 3, 
                    borderRadius: 2, 
                    bgcolor: theme.palette.background.default,
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <EmailIcon color="primary" sx={{ mr: 2 }} />
                      <Box>
                        <Typography variant="body2" color="text.secondary">Email</Typography>
                        <Typography variant="body1">{user.email}</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <LinkIcon color="primary" sx={{ mr: 2 }} />
                      <Box>
                        <Typography variant="body2" color="text.secondary">Website</Typography>
                        <Typography variant="body1">{user.website}</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                      <Box>
                        <Typography variant="body2" color="text.secondary">Location</Typography>
                        <Typography variant="body1">{user.location}</Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
            
            {/* Action Buttons */}
            {editing && (
              <Box 
                mt={4} 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'flex-end',
                  gap: 2
                }}
              >
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<CancelIcon />}
                  onClick={cancelChanges}
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: 'error.light',
                    }
                  }}
                >
                  Discard Changes
                </Button>
                
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<SaveIcon />}
                  onClick={saveChanges}
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    fontWeight: 600,
                    boxShadow: theme.shadows[1],
                    '&:hover': {
                      boxShadow: theme.shadows[2],
                    }
                  }}
                >
                  Save Changes
                </Button>
              </Box>
            )}
          </Paper>
        </Fade>
      </Box>
    </Container>
  );
};

export default Profile;