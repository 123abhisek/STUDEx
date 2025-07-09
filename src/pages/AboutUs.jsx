// src/pages/AboutUs.js
import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Avatar,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from "@mui/icons-material/Group";
import PublicIcon from "@mui/icons-material/Public";

const AboutUs = () => {
  const faqs = [
    {
      question: "How did STUDEx start?",
      answer:
        "STUDEx was founded in 2023 after our founder struggled with academic burnout and direction during college. Unable to find relatable resources, they created this platform to help others.",
    },
    {
      question: "Who shares stories on STUDEx?",
      answer:
        "Our stories come from real students and recent graduates who have faced and overcome challenges. All stories are verified before publication.",
    },
    {
      question: "Is STUDEx free to use?",
      answer:
        "Yes! STUDEx is completely free for students. We believe support should be accessible to everyone.",
    },
    {
      question: "How can I support STUDEx?",
      answer:
        "You can support us by sharing your story, telling others about STUDEx, or contacting us about partnership opportunities.",
    },
  ];

  const values = [
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 50, color: "primary.main" }} />,
      title: "Authenticity Over Perfection",
      description:
        "We believe real stories of struggle and imperfect progress are more valuable than polished success narratives. Raw honesty creates true connection.",
    },
    {
      icon: <GroupIcon sx={{ fontSize: 50, color: "primary.main" }} />,
      title: "Community Support",
      description:
        "Growth happens together. We foster a supportive environment where students lift each other up and share wisdom gained through experience.",
    },
    {
      icon: <PublicIcon sx={{ fontSize: 50, color: "primary.main" }} />,
      title: "Practical Empowerment",
      description:
        "We focus on actionable strategies rather than abstract advice. Our tools are designed to create tangible progress in students' lives.",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" gutterBottom>
          Our Mission to Transform Student Struggles
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Creating a world where every challenge becomes an opportunity for growth
        </Typography>
      </Box>

      {/* Our Story */}
      <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom sx={{ color: "primary.main" }}>
            Why STUDEx Exists
          </Typography>
          <Typography variant="body1" paragraph>
            During my sophomore year, I hit rock bottom. Failing classes, losing motivation, and feeling completely directionless, I desperately searched for resources that understood what I was going through.
          </Typography>
          <Typography variant="body1" paragraph>
            All I found were generic advice articles and success stories that felt completely unattainable. What I needed was to hear from real students who had been where I was and found their way through.
          </Typography>
          <Typography variant="body1" paragraph>
            STUDEx was born from that frustration. We're creating the resource I wish I had — a platform where students share authentic stories of struggle and breakthrough, where practical tools meet genuine empathy, and where no one has to feel alone in their challenges.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
            <Avatar
              alt="Founder"
              src="https://randomuser.me/api/portraits/lego/2.jpg"
              sx={{ width: 56, height: 56, mr: 2 }}
            />
            <Box>
              <Typography fontWeight={600}>Abhishek</Typography>
              <Typography variant="body2">Founder, STUDEx</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: 3,
              height: 400,
              backgroundImage:
                "url(https://images.unsplash.com/photo-1558024920-b76d22c0f2a4?auto=format&fit=crop&w=800&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </Grid>

      {/* Our Core Values */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ color: "primary.main", mb: 6 }}
        >
          Our Core Values
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {values.map((val, index) => (
            <Grid item xs={12} sm={8} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: "16px",
                  textAlign: "center",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
                }}
              >
                <Box sx={{ mb: 3 }}>{val.icon}</Box>
                <Typography variant="h5" gutterBottom>
                  {val.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {val.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Impact Stats */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #008080 0%, #005a5a 100%)",
          color: "white",
          borderRadius: "16px",
          p: 5,
          mb: 8,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Our Impact So Far
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ mt: 4 }}
          justifyContent="center"
          textAlign="center"
        >
          {[
            { value: "1,200+", label: "Stories Shared" },
            { value: "85%", label: "Feel Less Alone" },
            { value: "92%", label: "Found Practical Help" },
            { value: "10k+", label: "Monthly Visitors" },
          ].map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Typography variant="h2" sx={{ fontWeight: 700 }}>
                {stat.value}
              </Typography>
              <Typography variant="h6">{stat.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* FAQ */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ color: "primary.main", mb: 4 }}
        >
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Final CTA */}
      <Box
        sx={{
          backgroundColor: "secondary.light",
          borderRadius: "16px",
          p: 5,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Join Our Movement
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, maxWidth: 700, mx: "auto" }}>
          Whether you're sharing your story, using our resources, or spreading
          the word, you're helping transform student struggles into growth
          opportunities.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/stories"
          sx={{
            fontSize: "1.1rem",
            py: 1.5,
            px: 5,
            mr: 2,
          }}
        >
          Read Stories
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          href="/share"
          sx={{
            fontSize: "1.1rem",
            py: 1.5,
            px: 5,
            borderWidth: 2,
            "&:hover": { borderWidth: 2 },
          }}
        >
          Share Your Story
        </Button>
      </Box>
    </Container>
  );
};

export default AboutUs;
