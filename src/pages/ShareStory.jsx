// src/pages/ShareStory.js
import React, { useState } from 'react';
import { 
  Container, Box, Typography, TextField, Button, 
  FormControl, FormLabel, RadioGroup, FormControlLabel, 
  Radio, Alert, CircularProgress
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ShareStory = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    story: '',
    category: 'academic',
    takeaways: '',
    anonymous: false,
    contact: false
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        title: '',
        story: '',
        category: 'academic',
        takeaways: '',
        anonymous: false,
        contact: false
      });
    }, 1500);
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" gutterBottom>
          Share Your Journey
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Your story could light the way for another student
        </Typography>
      </Box>

      {success && (
        <Alert severity="success" sx={{ mb: 4 }}>
          Thank you for sharing your story! Our team will review your submission and 
          contact you if we have any questions.
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          There was an error submitting your story. Please try again.
        </Alert>
      )}

      <Box 
        component="form" 
        onSubmit={handleSubmit}
        sx={{ 
          backgroundColor: 'background.paper', 
          borderRadius: '16px',
          p: { xs: 3, md: 5 },
          boxShadow: 1
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ mb: 4, color: 'primary.main' }}>
          Tell Us About Your Experience
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Your Name (optional)"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              disabled={formData.anonymous}
            />
            
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            
            <FormControl component="fieldset" sx={{ mt: 2 }}>
              <FormLabel component="legend">Share Anonymously?</FormLabel>
              <RadioGroup row name="anonymous" value={formData.anonymous} onChange={handleChange}>
                <FormControlLabel value={false} control={<Radio />} label="No" />
                <FormControlLabel value={true} control={<Radio />} label="Yes" />
              </RadioGroup>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Story Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              margin="normal"
              required
              helperText="Catchy title that summarizes your journey"
            />
            
            <FormControl fullWidth sx={{ mt: 2, mb: 1 }}>
              <FormLabel>Category</FormLabel>
              <RadioGroup row name="category" value={formData.category} onChange={handleChange}>
                <FormControlLabel value="academic" control={<Radio />} label="Academic" />
                <FormControlLabel value="career" control={<Radio />} label="Career" />
                <FormControlLabel value="personal" control={<Radio />} label="Personal" />
              </RadioGroup>
            </FormControl>
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Story"
              name="story"
              value={formData.story}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={6}
              required
              helperText="Share your journey - challenges, turning point, and outcomes"
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Key Takeaways"
              name="takeaways"
              value={formData.takeaways}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={3}
              helperText="What lessons did you learn? What advice would you give others?"
            />
          </Grid>
          
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox 
                  name="contact" 
                  checked={formData.contact} 
                  onChange={handleChange} 
                />
              }
              label="I'm open to being contacted by other students for advice (your email won't be shared)"
            />
          </Grid>
          
          <Grid item xs={12}>
            <Box sx={{ 
              backgroundColor: 'primary.light', 
              borderRadius: '8px',
              p: 3,
              mt: 2
            }}>
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                Submission Guidelines
              </Typography>
              <Typography variant="body2">
                • Be authentic and honest about your experiences<br />
                • Focus on your journey rather than blaming others<br />
                • Include both challenges and how you overcame them<br />
                • Respect privacy - don't share others' personal information<br />
                • Stories should be appropriate for a student audience
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              endIcon={!submitting && <SendIcon />}
              disabled={submitting}
              sx={{ minWidth: 200 }}
            >
              {submitting ? <CircularProgress size={24} /> : 'Share Your Story'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ShareStory;