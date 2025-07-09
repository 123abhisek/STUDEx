// src/pages/Home.js
import React, { useEffect } from "react";
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
  Grow,
  Fade,
  Zoom,
  Slide,
  keyframes,
  Avatar,
  Divider,
  IconButton
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  EmojiObjects,
  Group,
  TrendingUp,
  School,
  Favorite,
  ChatBubble,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  ArrowForward
} from "@mui/icons-material";

// Color palette
const colors = {
  primary: "#3F51B5",
  secondary: "#00BCD4",
  accent: "#CDDC39",
  background: "#F5F5F5",
  surface: "#FFFFFF",
  typography: "#212121",
  subtext: "#757575",
  error: "#f44336",
  success: "#4caf50"
};

// Animation keyframes
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// const pulse = keyframes`
//   0% { transform: scale(1); }
//   50% { transform: scale(1.05); }
//   100% { transform: scale(1); }
// `;

// const gradientShift = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `;

const Home = () => {
  // Sample data
  const featuredStories = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "From Dropout to Dean's List",
      category: "Academic",
      excerpt: "How I overcame academic probation...",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: "2",
      image: "https://plus.unsplash.com/premium_photo-1745543851241-38ab13a5dd41?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Finding My Passion After Failure",
      category: "Career",
      excerpt: "Failed my internship but found my true calling...",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Breaking Through Depression",
      category: "Personal",
      excerpt: "My journey with mental health in college...",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg"
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "STUDEx helped me realize I wasn't alone in my struggles. The community support was invaluable during my toughest times.",
      author: "Alex, Sophomore",
      role: "Computer Science"
    },
    {
      id: 2,
      quote: "The toolkit gave me practical steps to overcome procrastination. I've improved my GPA by 1.5 points since joining!",
      author: "Jamie, Senior",
      role: "Psychology"
    },
    {
      id: 3,
      quote: "Sharing my story was therapeutic and helped others too. I've made genuine connections through this platform.",
      author: "Taylor, Alumni",
      role: "Business Administration"
    },
  ];

  const stats = [
    { value: "2K+", label: "Success Stories", icon: <Favorite /> },
    { value: "95%", label: "Reported Improvement", icon: <TrendingUp /> },
    { value: "300+", label: "Resources", icon: <School /> },
    { value: "10K+", label: "Community Members", icon: <Group /> }
  ];

  const features = [
    {
      title: "Personalized Roadmaps",
      description: "Create custom plans to overcome your specific challenges with our step-by-step guidance."
    },
    {
      title: "Progress Tracking",
      description: "Monitor your journey with visual progress indicators and milestone celebrations."
    },
    {
      title: "Peer Support Groups",
      description: "Join small groups of students facing similar challenges for mutual support."
    },
    {
      title: "Expert Q&A Sessions",
      description: "Get answers to your questions from academic advisors and mental health professionals."
    }
  ];

  // Scroll reveal effect
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".scroll-reveal");
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
      });
    }, { threshold: 0.1 });
    
    scrollElements.forEach(el => observer.observe(el));
    
    return () => scrollElements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <Box sx={{ overflow: 'hidden', backgroundColor: colors.background }}>
      {/* Hero Section */}
     <Box 
      sx={{
        background: `linear-gradient(135deg, ${colors.primary}, ${colors.primary}dd)`,
        color: 'white',
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.1) 20%)',
          backgroundSize: '30px 30px',
          opacity: 0.3,
          zIndex: 0,
        }
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6} sx={{ p: 4, position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 800,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              lineHeight: 1.2,
              mb: 2,
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}
          >
            Turn Your <Box component="span" sx={{ color: colors.secondary }}>Struggles</Box> Into Strength
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4, 
              opacity: 0.9,
              maxWidth: '600px',
              textShadow: '0 1px 3px rgba(0,0,0,0.2)'
            }}
          >
            Real student stories, practical tools, and a supportive community to help you navigate academic challenges
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/share"
              sx={{
                fontSize: "1.1rem",
                py: 1.5,
                px: 4,
                fontWeight: 700,
                backgroundColor: colors.accent,
                color: colors.typography,
                animation: `${float} 4s ease-in-out infinite`,
                '&:hover': {
                  backgroundColor: '#c0ca33',
                  transform: 'translateY(-3px)',
                  boxShadow: `0 6px 15px ${colors.accent}80`,
                },
                boxShadow: `0 4px 20px ${colors.accent}80`,
                transition: 'all 0.3s ease',
                borderRadius: '50px',
              }}
            >
              Share Your Story
            </Button>
            
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              component={Link}
              to="/stories"
              sx={{
                borderWidth: 2,
                fontSize: "1.1rem",
                py: 1.5,
                px: 4,
                fontWeight: 700,
                transition: 'all 0.3s ease',
                borderRadius: '50px',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderWidth: 2,
                  boxShadow: `0 4px 10px ${colors.secondary}80`,
                }
              }}
            >
              Explore Stories
            </Button>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            backgroundColor: 'rgba(255,255,255,0.15)',
            p: 2,
            borderRadius: '50px',
            width: 'fit-content',
            backdropFilter: 'blur(5px)'
          }}>
            <Box sx={{ 
              width: 50, 
              height: 50, 
              borderRadius: '50%', 
              backgroundColor: colors.accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: `${float} 4s ease-in-out infinite`,
              animationDelay: '0.5s'
            }}>
              <Typography sx={{ color: colors.typography, fontWeight: 800 }}>10K+</Typography>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Students already sharing their journeys
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6} sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          p: 4
        }}>
          <Box sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 500
          }}>
            {/* Decorative elements */}
            <Box sx={{
              position: 'absolute',
              top: -20,
              left: -20,
              width: 100,
              height: 100,
              borderRadius: '50%',
              backgroundColor: colors.accent + '40',
              zIndex: 0,
              animation: `${float} 6s ease-in-out infinite`
            }} />
            
            <Box sx={{
              position: 'absolute',
              bottom: -30,
              right: -30,
              width: 150,
              height: 150,
              borderRadius: '50%',
              backgroundColor: colors.secondary + '40',
              zIndex: 0,
              animation: `${float} 8s ease-in-out infinite`,
              animationDelay: '1s'
            }} />
            
            {/* Main card */}
            <Box sx={{
              backgroundColor: colors.surface,
              borderRadius: 4,
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              p: 3,
              position: 'relative',
              zIndex: 1,
              transform: 'rotate(-2deg)'
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3,
                transform: 'rotate(2deg)'
              }}>
                <Box sx={{ 
                  width: 50, 
                  height: 50, 
                  borderRadius: '50%', 
                  backgroundColor: colors.background,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2
                }}>
                  <Typography sx={{ color: colors.primary, fontWeight: 800 }}>AJ</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: colors.typography }}>
                    Alex Johnson
                  </Typography>
                  <Typography sx={{ fontSize: '0.9rem', color: colors.subtext }}>
                    Computer Science Student
                  </Typography>
                </Box>
              </Box>
              
              <Typography sx={{ 
                fontStyle: 'italic', 
                mb: 3,
                color: colors.typography,
                lineHeight: 1.6,
                transform: 'rotate(2deg)'
              }}>
                "STUDEx helped me realize I wasn't alone in my struggles. The community support was invaluable during my toughest times."
              </Typography>
              
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                transform: 'rotate(2deg)'
              }}>
                <Button 
                  variant="outlined" 
                  size="small"
                  sx={{
                    borderColor: colors.primary,
                    color: colors.primary,
                    fontWeight: 600,
                    borderRadius: '50px'
                  }}
                >
                  Read Full Story
                </Button>
                
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {['Academic', 'Mental Health'].map((tag, i) => (
                    <Box 
                      key={i}
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        backgroundColor: colors.primary + '10',
                        borderRadius: '50px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: colors.primary
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
            
            {/* Additional decorative card */}
            <Box sx={{
              position: 'absolute',
              bottom: -30,
              left: -30,
              backgroundColor: colors.surface,
              borderRadius: 3,
              boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
              p: 2,
              width: '60%',
              zIndex: 0,
              transform: 'rotate(3deg)'
            }}>
              <Typography sx={{ 
                fontWeight: 600, 
                color: colors.typography,
                fontSize: '0.9rem',
                mb: 1
              }}>
                Featured in Student Life Magazine
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Box 
                    key={star}
                    sx={{
                      width: 16,
                      height: 16,
                      backgroundColor: colors.accent,
                      borderRadius: '50%'
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>

      {/* Stats Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={3} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Grow in timeout={800} style={{ transitionDelay: `${index * 150}ms` }}>
                <Box sx={{ 
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: colors.surface,
                  color: colors.typography,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                  }
                }}>
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 70,
                    height: 70,
                    mb: 2,
                    backgroundColor: colors.primary + '10',
                    borderRadius: '50%',
                    color: colors.primary,
                    animation: `${float} 4s ease-in-out infinite`,
                    animationDelay: `${index * 0.5}s`
                  }}>
                    {React.cloneElement(stat.icon, { sx: { fontSize: 30 } })}
                  </Box>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: colors.primary }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: colors.subtext }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Value Proposition */}
      <Box sx={{ py: 8, backgroundColor: colors.surface }}>
        <Container>
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Chip 
              label="How it works" 
              color="primary" 
              sx={{ 
                mb: 2, 
                fontWeight: 700, 
                fontSize: '0.9rem',
                px: 2,
                py: 1
              }} 
            />
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 800,
                color: colors.typography,
                mb: 2
              }}
            >
              Your Path to Success
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', color: colors.subtext }}>
              STUDEx provides a comprehensive approach to overcoming academic challenges
            </Typography>
          </Box>
          
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                backgroundColor: colors.background, 
                borderRadius: 4, 
                p: 5,
                height: '100%',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: colors.primary }}>
                  How STUDEx Helps You Succeed
                </Typography>
                
                {features.map((feature, index) => (
                  <Box key={index} sx={{ mb: 3, display: 'flex', alignItems: 'flex-start' }}>
                    <Box sx={{
                      minWidth: 36,
                      height: 36,
                      borderRadius: '50%',
                      backgroundColor: colors.secondary,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                      mt: 0.5
                    }}>
                      <Typography sx={{ color: 'white', fontWeight: 700 }}>{index + 1}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                        {feature.title}
                      </Typography>
                      <Typography sx={{ color: colors.subtext }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                backgroundColor: colors.primary, 
                borderRadius: 4, 
                p: 5,
                height: '100%',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, position: 'relative' }}>
                  Why Students Choose Us
                </Typography>
                
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
                  <EmojiObjects sx={{ fontSize: 36, mr: 2, color: colors.accent }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                      Real Student Stories
                    </Typography>
                    <Typography sx={{ opacity: 0.9 }}>
                      Authentic experiences from peers who overcame similar challenges
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
                  <TrendingUp sx={{ fontSize: 36, mr: 2, color: colors.accent }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                      Evidence-Based Tools
                    </Typography>
                    <Typography sx={{ opacity: 0.9 }}>
                      Practical strategies backed by educational psychology
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
                  <Group sx={{ fontSize: 36, mr: 2, color: colors.accent }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                      Supportive Community
                    </Typography>
                    <Typography sx={{ opacity: 0.9 }}>
                      Connect with others who understand your journey
                    </Typography>
                  </Box>
                </Box>
                
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 4,
                    backgroundColor: colors.accent,
                    color: colors.typography,
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    borderRadius: '50px',
                    '&:hover': {
                      backgroundColor: '#c0ca33',
                    }
                  }}
                >
                  Join Our Community
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Stories */}
      <Container sx={{ py: 8 }}>
        <Box textAlign="center" sx={{ mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 800,
              color: colors.typography,
              mb: 2
            }}
          >
            Recent Breakthrough Stories
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', color: colors.subtext }}>
            Discover how students like you overcame challenges and achieved success
          </Typography>
        </Box>
        
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {featuredStories.map((story, index) => (
            <Grid item xs={12} md={4} key={story.id}>
              <Grow in timeout={800} style={{ transitionDelay: `${index * 200}ms` }}>
                <Card sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s ease',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="220"
                    image={story.image}
                    alt={story.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, backgroundColor: colors.surface }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar src={story.avatar} sx={{ width: 40, height: 40, mr: 2 }} />
                      <Chip
                        label={story.category}
                        size="small"
                        sx={{ 
                          fontWeight: 700,
                          backgroundColor: colors.primary + '10',
                          color: colors.primary
                        }}
                      />
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: colors.typography }}>
                      {story.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {story.excerpt}
                    </Typography>
                  </CardContent>
                  <Box sx={{ 
                    backgroundColor: colors.background, 
                    p: 2,
                    display: 'flex',
                    justifyContent: 'flex-end'
                  }}>
                    <Button
                      component={Link}
                      to={`/stories/${story.id}`}
                      variant="text"
                      endIcon={<ArrowForward />}
                      sx={{
                        fontWeight: 700,
                        color: colors.primary,
                        '&:hover': {
                          color: colors.secondary,
                        }
                      }}
                    >
                      Read Full Story
                    </Button>
                  </Box>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
        
        <Box textAlign="center" sx={{ mt: 6 }}>
          <Button
            variant="outlined"
            component={Link}
            to="/stories"
            size="large"
            sx={{
              fontWeight: 700,
              px: 5,
              py: 1.5,
              transition: 'all 0.3s ease',
              color: colors.primary,
              borderColor: colors.primary,
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: colors.primary,
                color: 'white',
                borderColor: colors.primary,
              }
            }}
          >
            View All Stories
          </Button>
        </Box>
      </Container>

      {/* Testimonials */}
      <Box sx={{ 
        backgroundColor: colors.background, 
        py: 8,
        borderTop: `1px solid ${colors.background}`,
        borderBottom: `1px solid ${colors.background}`
      }}>
        <Container>
          <Box textAlign="center" sx={{ mb: 6 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 800,
                color: colors.typography,
                mb: 2
              }}
            >
              What Students Are Saying
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', color: colors.subtext }}>
              Join thousands of students who have transformed their academic journey
            </Typography>
          </Box>
          
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={testimonial.id}>
                <div className="scroll-reveal" style={{ 
                  opacity: 1,
                  transform: 'translateY(30px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                  transitionDelay: `${index * 200}ms`
                }}>
                  <Card sx={{ 
                    height: '100%', 
                    bgcolor: colors.surface,
                    borderRadius: 3,
                    boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
                    transition: 'all 0.4s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                    }
                  }}>
                    <CardContent sx={{ 
                      position: 'relative', 
                      flexGrow: 1,
                      p: 4 
                    }}>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 20,
                          left: 20,
                          color: colors.primary + '10',
                          fontSize: 80,
                          lineHeight: 1,
                        }}
                      >
                        <ChatBubble fontSize="inherit" />
                      </Box>
                      <Typography
                        sx={{
                          fontStyle: "italic",
                          fontSize: "1.1rem",
                          mt: 3,
                          lineHeight: 1.6,
                          color: colors.typography,
                          position: 'relative',
                          zIndex: 1
                        }}
                      >
                        "{testimonial.quote}"
                      </Typography>
                    </CardContent>
                    <Box sx={{ 
                      p: 3, 
                      backgroundColor: colors.primary + '05',
                      borderTop: `1px solid ${colors.background}`
                    }}>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          color: colors.typography
                        }}
                      >
                        {testimonial.author}
                      </Typography>
                      <Typography
                        sx={{
                          color: colors.subtext,
                          fontSize: '0.9rem'
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Card>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Final CTA */}
      <Container sx={{ py: 8 }}>
        <Box sx={{ 
          backgroundColor: colors.primary, 
          borderRadius: 4, 
          p: { xs: 4, md: 8 },
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 15px 30px rgba(63, 81, 181, 0.3)',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.1)',
            zIndex: 0
          }
        }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 800,
              mb: 2,
              position: 'relative',
              zIndex: 1
            }}
          >
            Ready to Transform Your Journey?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4, 
              maxWidth: 700, 
              mx: 'auto',
              opacity: 0.9,
              position: 'relative',
              zIndex: 1
            }}
          >
            Join our community and start your path to academic success today
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, position: 'relative', zIndex: 1 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: colors.accent,
                color: colors.typography,
                fontWeight: 700,
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: '#c0ca33',
                }
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{
                fontWeight: 700,
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                borderWidth: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderWidth: 2
                }
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;