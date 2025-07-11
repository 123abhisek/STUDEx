// src/pages/Toolkit.js
import React from 'react';
import { 
  Container, Box, Typography, Grid, Card, CardContent, 
  Button, List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ChecklistIcon from '@mui/icons-material/Checklist';
import DownloadIcon from '@mui/icons-material/Download';

const Toolkit = () => {
  const resources = [
    {
      id: 1,
      title: 'Mindset Shift Guide',
      type: 'guide',
      description: 'Practical steps to transform your thinking patterns',
      download: '/downloads/mindset-guide.pdf'
    },
    {
      id: 2,
      title: 'Goal Setting Workbook',
      type: 'worksheet',
      description: 'Interactive PDF to define and track your goals',
      download: '/downloads/goal-workbook.pdf'
    },
    {
      id: 3,
      title: 'Procrastination Toolkit',
      type: 'guide',
      description: 'Strategies to overcome procrastination habits',
      download: '/downloads/procrastination-toolkit.pdf'
    },
    {
      id: 4,
      title: 'Anxiety Management Workshop',
      type: 'video',
      description: '45-min recorded workshop with exercises',
      download: '/videos/anxiety-workshop.mp4'
    },
  ];

  return (
    <Container maxWidth= "1rem" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" gutterBottom>
          Practical Tools for Progress
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Actionable resources to help you move forward
        </Typography>
      </Box>

      {/* Featured Resources */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {resources.map((resource) => (
          <Grid item xs={12} sm={6} md={3} key={resource.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 2,
                  color: resource.type === 'video' ? 'secondary.main' : 'primary.main'
                }}>
                  {resource.type === 'video' ? (
                    <VideoLibraryIcon fontSize="large" />
                  ) : resource.type === 'worksheet' ? (
                    <ChecklistIcon fontSize="large" />
                  ) : (
                    <DescriptionIcon fontSize="large" />
                  )}
                  <Typography variant="subtitle1" sx={{ ml: 1, fontWeight: 600 }}>
                    {resource.type === 'video' ? 'VIDEO' : 
                     resource.type === 'worksheet' ? 'WORKSHEET' : 'GUIDE'}
                  </Typography>
                </Box>
                <Typography variant="h6" gutterBottom>
                  {resource.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {resource.description}
                </Typography>
                <Button 
                  variant="outlined" 
                  startIcon={<DownloadIcon />}
                  fullWidth
                  href={resource.download}
                  sx={{ mt: 'auto' }}
                >
                  Download
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Additional Resources */}
      <Box sx={{ backgroundColor: 'background.paper', borderRadius: '16px', p: 5, mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          More Ways to Make Progress
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
              Step-by-Step Guides
            </Typography>
            <List>
              {[
                'Overcoming Imposter Syndrome',
                'Building Effective Study Habits',
                'Navigating Career Uncertainty',
                'Creating a Personal Growth Plan'
              ].map((text, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Box sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      backgroundColor: 'primary.main' 
                    }} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
              Interactive Tools
            </Typography>
            <List>
              {[
                'Motivation Tracker',
                'Weekly Planning Template',
                'Decision-Making Framework',
                'Self-Reflection Journal Prompts'
              ].map((text, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Box sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      backgroundColor: 'primary.main' 
                    }} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>

      {/* Community Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #008080 0%, #005a5a 100%)',
        borderRadius: '16px',
        p: 5,
        color: 'white',
        textAlign: 'center'
      }}>
        <Typography variant="h3" gutterBottom>
          Join Our Support Community
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, maxWidth: 700, mx: 'auto' }}>
          Connect with other students, share strategies, and get support in our private forum
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          size="large"
          sx={{ 
            fontSize: '1.1rem',
            py: 1.5,
            px: 5,
          }}
          href="/community"
        >
          Join the Community
        </Button>
      </Box>
    </Container>
  );
};

export default Toolkit;