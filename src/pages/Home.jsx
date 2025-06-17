// src/pages/Home.js
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";
import { EmojiObjects, Group, TrendingUp } from "@mui/icons-material";

const Home = () => {
  // Sample data - replace with actual content
  const featuredStories = [
    {
      id: "https://media.istockphoto.com/id/1482169960/photo/airport-travel-and-portrait-of-woman-with-passport-flight-ticket-or-information-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=DSYz4f6IOHKrx05aiNAMWrZgtcnC8KVp66K6gYRp-qs=",
      title: "From Dropout to Dean's List",
      category: "Academic",
      excerpt: "How I overcame academic probation...",
    },
    {
      id: "https://media.istockphoto.com/id/1988207742/photo/woman-university-student-and-books-in-portrait-outdoor-and-pride-for-learning-knowledge-or.webp?a=1&b=1&s=612x612&w=0&k=20&c=a-6hye_832TdIOsCQkByd22ivh04gk0r8sF8o2U3nH4=",
      title: "Finding My Passion After Failure",
      category: "Career",
      excerpt: "Failed my internship but found my true calling...",
    },
    {
      id: "https://media.istockphoto.com/id/2172873491/photo/university-student-and-man-in-portrait-outdoor-on-campus-with-book-for-education-learning-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=gAkHSTpK9q2L6mf_y24LNtxLFNrh5scF1VvdI7zEQn4=",
      title: "Breaking Through Depression",
      category: "Personal",
      excerpt: "My journey with mental health in college...",
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "STUDEx helped me realize I wasn't alone in my struggles",
      author: "Alex, Sophomore",
    },
    {
      id: 2,
      quote: "The toolkit gave me practical steps to overcome procrastination",
      author: "Jamie, Senior",
    },
    {
      id: 3,
      quote: "Sharing my story was therapeutic and helped others too",
      author: "Taylor, Alumni",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #008080 0%, #4da6a6 100%)",
          color: "white",
          py: 10,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h1" gutterBottom>
            Feeling Stuck? Your Path Forward Starts Here.
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Real stories. Practical tools. Supportive community.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/stories"
            sx={{
              mr: 2,
              fontSize: "1.1rem",
              py: 1.5,
              px: 4,
            }}
          >
            Explore Stories
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            component={Link}
            to="/toolkit"
            sx={{
              borderWidth: 2,
              fontSize: "1.1rem",
              py: 1.5,
              px: 4,
              "&:hover": {
                borderWidth: 2,
              },
            }}
          >
            Find Strategies
          </Button>
        </Container>
      </Box>

      {/* Value Proposition */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          How STUDEx Helps You Move Forward
        </Typography>
        {/* <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <EmojiObjects sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>Relatable Stories</Typography>
              <Typography>
                Discover how real students overcame challenges similar to yours. No platitudes - just authentic journeys.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <TrendingUp sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>Actionable Tools</Typography>
              <Typography>
                Get practical strategies and resources designed specifically for student challenges.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <Group sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>Supportive Community</Typography>
              <Typography>
                Connect with others who understand. Share experiences and grow together.
              </Typography>
            </Box>
          </Grid>
        </Grid> */}
        <Grid
          container
          spacing={4}
          sx={{ mt: 2 }}
          justifyContent="center"
          textAlign="center"
        >
          <Grid item xs={12} md={4}>
            <Box>
              <EmojiObjects
                sx={{ fontSize: 60, color: "primary.main", mb: 2 }}
              />
              <Typography variant="h5" gutterBottom>
                Relatable Stories
              </Typography>
              <Typography>
                Discover how real students overcame challenges similar to yours.
                No platitudes - just authentic journeys.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <TrendingUp sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Actionable Tools
              </Typography>
              <Typography>
                Get practical strategies and resources designed specifically for
                student challenges.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <Group sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Supportive Community
              </Typography>
              <Typography>
                Connect with others who understand. Share experiences and grow
                together.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Featured Stories */}
      <Box sx={{ bgcolor: "background.paper", py: 8 }}>
        <Container>
          <Typography variant="h2" align="center" gutterBottom>
            Recent Breakthrough Stories
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {featuredStories.map((story) => (
              <Grid item xs={12} md={4} key={story.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="160"
                    image={`${story.id}`}
                    alt={story.title}
                  />
                  <CardContent>
                    <Chip
                      label={story.category}
                      size="small"
                      color="primary"
                      sx={{ mb: 1.5 }}
                    />
                    <Typography variant="h6" gutterBottom>
                      {story.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {story.excerpt}
                    </Typography>
                    <Button
                      component={Link}
                      to={`/stories/${story.id}`}
                      color="primary"
                    >
                      Read Full Story
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box textAlign="center" sx={{ mt: 4 }}>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/stories"
              size="large"
            >
              View All Stories
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          What Students Are Saying
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ position: "relative", height: "100%" }}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: -20,
                      color: "secondary.main",
                      fontSize: 40,
                    }}
                  >
                    "
                  </Box>
                  <Typography
                    sx={{
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                      mt: 3,
                    }}
                  >
                    {testimonial.quote}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      mt: 2,
                      textAlign: "right",
                    }}
                  >
                    — {testimonial.author}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          background: "linear-gradient(to right, #FFD700, #ffdf33)",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            Ready to Share Your Journey?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Your story could be the light that guides someone else out of
            darkness.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/share"
            sx={{
              fontSize: "1.1rem",
              py: 1.5,
              px: 5,
            }}
          >
            Share Your Story
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
