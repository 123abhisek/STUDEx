// src/pages/SuccessStories.js
import React, { useState } from 'react';
import { 
  Container, Box, Typography, Grid, Card, CardContent, CardMedia, 
  Button, Chip, Select, MenuItem, InputLabel, FormControl, Pagination
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const SuccessStories = () => {
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  
  // Sample stories data - replace with API data
  const stories = [
    { id: "https://images.unsplash.com/flagged/photo-1558153267-7e0ae5162b18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZyb20lMjBBY2FkZW1pYyUyMFByb2JhdGlvbiUyMHRvJTIwSG9ub3JzfGVufDB8fDB8fHww", title: 'From Academic Probation to Honors', category: 'academic', 
      excerpt: 'How I turned my failing grades into a 3.8 GPA', tags: ['resilience', 'study habits'] },
    { id: "https://media.istockphoto.com/id/1067296784/photo/difficult-decision-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=FgcOzRQoZE9QFyYEoja3av0wpR2GpyEPNNVnUlYQsfU=", title: 'Finding My Career Path After Failure', category: 'career', 
      excerpt: 'Rejected from 50 internships but landed my dream job', tags: ['perseverance', 'career'] },
    { id: "https://media.istockphoto.com/id/1475870526/photo/laptop-night-and-tired-with-a-student-woman-learning-or-studying-in-her-home-for-a-university.webp?a=1&b=1&s=612x612&w=0&k=20&c=PDLpM92hIA1h6QHMPAZ-IiwSNJnnCebO1Cx-B39lLjc=", title: 'Overcoming Social Anxiety in College', category: 'personal', 
      excerpt: 'My journey from isolation to student leadership', tags: ['mental health', 'confidence'] },
    { id: "https://images.unsplash.com/photo-1585924015977-32fd3839c21f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJhbGFuY2luZyUyMFdvcmslMjBhbmQlMjBTdHVkaWVzfGVufDB8fDB8fHww", title: 'Balancing Work and Studies', category: 'academic', 
      excerpt: 'How I maintained grades while working 30 hours/week', tags: ['time management', 'balance'] },
    { id: "https://images.unsplash.com/photo-1585237846553-1d4dc1289d5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RnJvbSUyMEJ1cm5vdXQlMjB0byUyMEJhbGFuY2V8ZW58MHx8MHx8fDA%3D", title: 'From Burnout to Balance', category: 'personal', 
      excerpt: 'Rediscovering my passion after complete exhaustion', tags: ['self-care', 'mindfulness'] },
    { id: "https://images.unsplash.com/photo-1659080907097-6153cd4ff69d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3dpdGNoaW5nJTIwTWFqb3JzJTIwU3VjY2Vzc2Z1bGx5fGVufDB8fDB8fHww", title: 'Switching Majors Successfully', category: 'academic', 
      excerpt: 'How I found my true calling after 2 years of engineering', tags: ['decision-making', 'purpose'] },
  ];

  // Filter stories based on selection
  const filteredStories = filter === 'all' 
    ? stories 
    : stories.filter(story => story.category === filter);

  // Pagination logic
  const itemsPerPage = 4;
  const pageCount = Math.ceil(filteredStories.length / itemsPerPage);
  const paginatedStories = filteredStories.slice(
    (page - 1) * itemsPerPage, 
    page * itemsPerPage
  );

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" gutterBottom>
          Real Student Breakthroughs
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Discover how others overcame challenges like yours
        </Typography>
      </Box>

      {/* Filter Section */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 4,
        p: 3,
        backgroundColor: 'background.paper',
        borderRadius: '12px',
        boxShadow: 1
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FilterListIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6">Filter Stories:</Typography>
        </Box>
        
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            label="Category"
          >
            <MenuItem value="all">All Categories</MenuItem>
            <MenuItem value="academic">Academic</MenuItem>
            <MenuItem value="career">Career</MenuItem>
            <MenuItem value="personal">Personal Growth</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Stories Grid */}
      <Grid container spacing={4}>
        {paginatedStories.map((story) => (
          <Grid item xs={12} sm={6} key={story.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={`${story.id}`}
                alt={story.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', gap: 1, mb: 1.5 }}>
                  <Chip 
                    label={story.category.charAt(0).toUpperCase() + story.category.slice(1)} 
                    size="small" 
                    color="primary"
                  />
                  {story.tags.map((tag, index) => (
                    <Chip 
                      key={index}
                      label={tag} 
                      size="small" 
                      variant="outlined"
                      sx={{ 
                        borderColor: (theme) => theme.palette.secondary.light,
                        color: (theme) => theme.palette.secondary.dark
                      }}
                    />
                  ))}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {story.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {story.excerpt}
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary"
                  fullWidth
                  sx={{ mt: 'auto' }}
                >
                  Read Full Journey
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      {pageCount > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Pagination 
            count={pageCount} 
            page={page} 
            onChange={(e, value) => setPage(value)}
            color="primary"
            shape="rounded"
          />
        </Box>
      )}

      {/* Call to Action */}
      <Box sx={{ 
        backgroundColor: 'primary.light', 
        borderRadius: '16px',
        p: 5,
        mt: 8,
        textAlign: 'center'
      }}>
        <Typography variant="h4" gutterBottom>
          Your Story Can Inspire Others
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Share your journey to help students facing similar challenges
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          size="large"
          href="/share"
          sx={{ 
            fontSize: '1.1rem',
            py: 1.5,
            px: 5,
          }}
        >
          Share Your Experience
        </Button>
      </Box>
    </Container>
  );
};

export default SuccessStories;