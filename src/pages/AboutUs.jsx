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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from "@mui/icons-material/Group";
import PublicIcon from "@mui/icons-material/Public";
import { styled } from "@mui/material/styles";

// Styled components for Material Design enhancements
const ValueCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: "100%",
  borderRadius: "16px",
  textAlign: "center",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": { 
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
  },
}));

const ImpactStat = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  "& h2": {
    textShadow: "0 2px 4px rgba(0,0,0,0.2)",
  },
}));

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

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
      icon: <EmojiEventsIcon sx={{ fontSize: 60, color: "primary.main" }} />,
      title: "Authenticity Over Perfection",
      description:
        "We believe real stories of struggle and imperfect progress are more valuable than polished success narratives. Raw honesty creates true connection.",
    },
    {
      icon: <GroupIcon sx={{ fontSize: 60, color: "primary.main" }} />,
      title: "Community Support",
      description:
        "Growth happens together. We foster a supportive environment where students lift each other up and share wisdom gained through experience.",
    },
    {
      icon: <PublicIcon sx={{ fontSize: 60, color: "primary.main" }} />,
      title: "Practical Empowerment",
      description:
        "We focus on actionable strategies rather than abstract advice. Our tools are designed to create tangible progress in students' lives.",
    },
  ];

  return (
    <Container maxWidth= "1rem" sx={{ py: isMobile ? 4 : 8, px: isMobile ? 2 : 4 }}>
      {/* Hero Section */}
      <Box textAlign="center" mb={isMobile ? 6 : 8}>
        <Typography 
          variant={isMobile ? "h3" : "h2"} 
          gutterBottom
          sx={{ 
            fontWeight: 700,
            color: "primary.dark",
            fontSize: isMobile ? "2rem" : "2.75rem"
          }}
        >
          Our Mission to Transform Student Struggles
        </Typography>
        <Typography 
          variant={isMobile ? "h6" : "h5"} 
          color="text.secondary"
          sx={{ 
            maxWidth: 800,
            mx: "auto",
            fontSize: isMobile ? "1.1rem" : "1.4rem"
          }}
        >
          Creating a world where every challenge becomes an opportunity for growth
        </Typography>
      </Box>

      {/* Our Story */}
      <Grid 
        container 
        spacing={isMobile ? 4 : 6} 
        alignItems="center" 
        sx={{ mb: isMobile ? 6 : 8 }}
        direction={isMobile ? "column-reverse" : "row"}
      >
        <Grid item xs={12} md={6}>
          <Typography 
            variant={isMobile ? "h4" : "h3"} 
            gutterBottom 
            sx={{ 
              color: "primary.main",
              fontWeight: 700,
              fontSize: isMobile ? "1.5rem" : "2rem"
            }}
          >
            Why STUDEx Exists
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? "0.95rem" : "1.1rem" }}>
            During my sophomore year, I hit rock bottom. Failing classes, losing motivation, and feeling completely directionless, I desperately searched for resources that understood what I was going through.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? "0.95rem" : "1.1rem" }}>
            All I found were generic advice articles and success stories that felt completely unattainable. What I needed was to hear from real students who had been where I was and found their way through.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: isMobile ? "0.95rem" : "1.1rem" }}>
            STUDEx was born from that frustration. We're creating the resource I wish I had — a platform where students share authentic stories of struggle and breakthrough, where practical tools meet genuine empathy, and where no one has to feel alone in their challenges.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
            <Avatar
              alt="Founder"
              src="https://randomuser.me/api/portraits/lego/2.jpg"
              sx={{ width: 64, height: 64, mr: 2, boxShadow: 3 }}
            />
            <Box>
              <Typography fontWeight={700} variant="h6">Abhishek</Typography>
              <Typography variant="body2" color="text.secondary">Founder, STUDEx</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: 6,
              height: isMobile ? 300 : 450,
              backgroundImage:
                "url(https://images.unsplash.com/photo-1558024920-b76d22c0f2a4?auto=format&fit=crop&w=800&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </Grid>

      {/* Our Core Values */}
      <Box sx={{ mb: isMobile ? 6 : 8 }}>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          align="center"
          gutterBottom
          sx={{ 
            color: "primary.main", 
            mb: 6,
            fontWeight: 700,
            fontSize: isMobile ? "1.5rem" : "2rem"
          }}
        >
          Our Core Values
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {values.map((val, index) => (
            <Grid item xs={12} sm={10} md={4} key={index}>
              <ValueCard elevation={3}>
                <Box sx={{ mb: 3 }}>{val.icon}</Box>
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: isMobile ? "1.25rem" : "1.5rem"
                  }}
                >
                  {val.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ fontSize: isMobile ? "0.95rem" : "1.1rem" }}
                >
                  {val.description}
                </Typography>
              </ValueCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Impact Stats */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #00695c 0%, #004d40 100%)",
          color: "white",
          borderRadius: "16px",
          p: isMobile ? 3 : 5,
          mb: isMobile ? 6 : 8,
          textAlign: "center",
          boxShadow: 4,
        }}
      >
        <Typography 
          variant={isMobile ? "h4" : "h3"} 
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Our Impact So Far
        </Typography>
        <Grid
          container
          spacing={3}
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
            <Grid item xs={6} sm={3} key={index}>
              <ImpactStat>
                <Typography 
                  variant={isMobile ? "h3" : "h2"} 
                  sx={{ fontWeight: 700, mb: 1 }}
                >
                  {stat.value}
                </Typography>
                <Typography 
                  variant={isMobile ? "body1" : "h6"}
                  sx={{ opacity: 0.9 }}
                >
                  {stat.label}
                </Typography>
              </ImpactStat>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* FAQ */}
      <Box sx={{ mb: isMobile ? 4 : 6 }}>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          align="center"
          gutterBottom
          sx={{ 
            color: "primary.main", 
            mb: 4,
            fontWeight: 700,
            fontSize: isMobile ? "1.5rem" : "2rem"
          }}
        >
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion 
            key={index} 
            sx={{ 
              mb: 2, 
              borderRadius: "8px !important",
              "&:before": { display: "none" }
            }}
            elevation={1}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600,
                  fontSize: isMobile ? "1rem" : "1.1rem"
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography 
                variant="body1"
                sx={{ fontSize: isMobile ? "0.95rem" : "1.1rem" }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Final CTA */}
      <Box
        sx={{
          backgroundColor: "secondary.light",
          borderRadius: "16px",
          p: isMobile ? 3 : 5,
          textAlign: "center",
          boxShadow: 2,
        }}
      >
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Join Our Movement
        </Typography>
        <Typography 
          variant={isMobile ? "body1" : "h6"} 
          sx={{ 
            mb: 3, 
            maxWidth: 700, 
            mx: "auto",
            fontSize: isMobile ? "1rem" : "1.2rem"
          }}
        >
          Whether you're sharing your story, using our resources, or spreading
          the word, you're helping transform student struggles into growth
          opportunities.
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size={isMobile ? "medium" : "large"}
            href="/stories"
            sx={{
              fontWeight: 600,
              py: isMobile ? 1 : 1.5,
              px: isMobile ? 3 : 5,
              minWidth: isMobile ? 160 : 200,
              fontSize: isMobile ? "0.9rem" : "1rem",
            }}
          >
            Read Stories
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size={isMobile ? "medium" : "large"}
            href="/share"
            sx={{
              fontWeight: 600,
              py: isMobile ? 1 : 1.5,
              px: isMobile ? 3 : 5,
              minWidth: isMobile ? 160 : 200,
              fontSize: isMobile ? "0.9rem" : "1rem",
              borderWidth: 2,
              "&:hover": { borderWidth: 2 },
            }}
          >
            Share Your Story
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutUs;