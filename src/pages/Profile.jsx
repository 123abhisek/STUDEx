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
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import UploadIcon from '@mui/icons-material/Upload';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Abhishek Juvatkar',
    email: 'abhishek@student.com',
    bio: 'Student. Dreamer. Doer. Passionate about helping others grow through shared experiences.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  });

  const [editing, setEditing] = useState(false);
  const [tempUser, setTempUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempUser((prev) => ({ ...prev, [name]: value }));
  };

  const saveChanges = () => {
    setUser({ ...tempUser });
    setEditing(false);
  };

  const simulateAvatarUpload = () => {
    alert('Avatar upload feature coming soon!');
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        {/* Header */}
        <Box display="flex" alignItems="center" mb={4}>
          <Box position="relative">
            <Avatar
              src={user.avatar}
              alt={user.name}
              sx={{ width: 100, height: 100, mr: 3 }}
            />
            <IconButton
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
              size="small"
              onClick={simulateAvatarUpload}
            >
              <UploadIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box>
            <Typography variant="h4">{user.name}</Typography>
            <Typography color="text.secondary">{user.email}</Typography>
          </Box>
        </Box>

        {/* Edit Form */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              fullWidth
              name="name"
              value={editing ? tempUser.name : user.name}
              onChange={handleChange}
              InputProps={{ readOnly: !editing }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              name="email"
              value={editing ? tempUser.email : user.email}
              onChange={handleChange}
              InputProps={{ readOnly: !editing }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Bio"
              fullWidth
              multiline
              minRows={4}
              name="bio"
              value={editing ? tempUser.bio : user.bio}
              onChange={handleChange}
              InputProps={{ readOnly: !editing }}
            />
          </Grid>
        </Grid>

        {/* Actions */}
        <Box mt={4} textAlign="right">
          {editing ? (
            <>
              <Button variant="outlined" sx={{ mr: 2 }} onClick={() => setEditing(false)}>
                Cancel
              </Button>
              <Button variant="contained" onClick={saveChanges}>
                Save Changes
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              onClick={() => setEditing(true)}
            >
              Edit Profile
            </Button>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default Profile;
