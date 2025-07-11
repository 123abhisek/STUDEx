// src/pages/Community.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Button,
  Chip,
  Paper,
} from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';

const Community = () => {
  const contributors = [
    {
      name: 'Aisha Rao',
      role: 'Mental Health Advocate',
      avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
      tags: ['support', 'resilience'],
    },
    {
      name: 'Vikram Mehta',
      role: 'Academic Coach',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      tags: ['study tips', 'productivity'],
    },
    {
      name: 'Priya Sharma',
      role: 'Career Mentor',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      tags: ['internships', 'jobs'],
    },
  ];

  return (
    <Container maxWidth= "1rem" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box textAlign="center" sx={{ mb: 8 }}>
        <ForumIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        <Typography variant="h2" component="h1" gutterBottom>
          Join the STUDEx Community
        </Typography>
        <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
          Connect with students who’ve been where you are. Ask questions, share
          insights, and grow together.
        </Typography>
      </Box>

      {/* Discussion Invitation */}
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, mb: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h4" gutterBottom>
              Real Conversations, Real Impact
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Whether you're navigating burnout, choosing a major, or just need
              motivation — our forum is full of students like you who understand.
              Jump into a discussion or start your own.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
              href="/forum"
            >
              Explore Discussions
            </Button>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                height: 250,
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1616587222418-b801c186ec04?auto=format&fit=crop&w=800&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 3,
              }}
            />
          </Grid>
        </Grid>
      </Paper>

      {/* Featured Contributors */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: 'primary.main' }}>
          Community Mentors
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" mb={4}>
          These students & mentors regularly guide others in our forum
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {contributors.map((user, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ borderRadius: 3, height: '100%', transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
                <CardHeader
                  avatar={<Avatar src={user.avatar} sx={{ width: 56, height: 56 }} />}
                  title={user.name}
                  subheader={user.role}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {user.tags.map((tag, i) => (
                      <Chip key={i} label={tag} variant="outlined" color="secondary" />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Final Call to Action */}
      <Box
        sx={{
          p: 5,
          backgroundColor: 'primary.light',
          borderRadius: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Let’s Build This Together
        </Typography>
        <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto" mb={3}>
          STUDEx is more than a site — it’s a student movement. Join our forums,
          share your wisdom, and grow with peers who care.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="/community"
          sx={{ px: 5, py: 1.5, borderRadius: '50px', fontSize: '1.1rem' }}
        >
          Join the Community
        </Button>
      </Box>
    </Container>
  );
};

export default Community;
