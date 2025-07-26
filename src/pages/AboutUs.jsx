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
  Divider
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from "@mui/icons-material/Group";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/material/styles";

// Accent colors and background
const colors = {
  primary: "#253858", // deep blue
  accent: "#2abbb0", // muted teal
  accentBg: "#e8f5f4",
  surface: "#fff",
  gray: "#f7f9fa",
  border: "#e0e7ef"
};

// Material value card
const ValueCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4, 3),
  height: "100%",
  borderRadius: "15px",
  textAlign: "center",
  background: colors.surface,
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: theme.shadows[2],
  "&:hover": {
    transform: "translateY(-4px) scale(1.025)",
    boxShadow: theme.shadows[6],
  },
}));

const ImpactStat = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  "& h2": {
    textShadow: "0 2px 4px rgba(0,0,0,0.13)",
    fontWeight: 900,
  },
}));

export default function AboutUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const faqs = [
    {
      question: "How did STUDEx start?",
      answer:
        "STUDEx was founded after Shiv struggled with self-doubt, impostor syndrome, and culture shock at college. He later built the system and mindset that became the foundation of this platform.",
    },
    {
      question: "Who shares stories here?",
      answer:
        "Real students and alumni—anyone who has been through academic self-doubt and wants to contribute to a more honest, practical, supportive culture.",
    },
    {
      question: "Is STUDEx free?",
      answer:
        "Yes. This mission is about access and empowerment for as many students as possible—no cost, no gatekeeping.",
    },
    {
      question: "How can I support?",
      answer:
        "Share your story, spread the word, or simply reach out. Allies—educators, professionals, or students—are always welcome.",
    },
  ];

  const values = [
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 56, color: colors.accent }} />,
      title: "Authenticity Over Perfection",
      description:
        "Real stories of struggle and growth matter more than polished narratives. We value honesty and vulnerability.",
    },
    {
      icon: <GroupIcon sx={{ fontSize: 56, color: colors.accent }} />,
      title: "Community Support",
      description:
        "Progress happens together. This is a space where students learn, encourage, and lift each other up.",
    },
    {
      icon: <PublicIcon sx={{ fontSize: 56, color: colors.accent }} />,
      title: "Practical Empowerment",
      description:
        "We provide actionable strategies and tools—not fluff—that build real progress and confidence.",
    },
  ];

  
  return (
    <Box sx={{ background: colors.gray, minHeight: "100vh" }}>
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 3 } }}>
        {/* Hero — About the Founder */}
        <Box
          sx={{
            background: colors.accentBg,
            px: { xs: 2, sm: 5 },
            py: { xs: 5, md: 7 },
            borderRadius: "18px",
            boxShadow: { xs: 1, md: 3 },
            mb: { xs: 5, md: 8 }
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4} textAlign="center">
              <Avatar
                src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg" // Replace with real founder photo if available
                alt="Dr. Sivananda (Shiv)"
                sx={{
                  width: 110,
                  height: 110,
                  border: `4px solid ${colors.accent}`,
                  mx: "auto",
                  boxShadow: "0 5px 32px rgba(42, 187, 176, 0.12)"
                }}
              />
              <Typography fontWeight={700} mt={2} color={colors.primary} variant="h6">
                Dr. Sivananda (Shiv)
              </Typography>
              <Typography
                fontSize="0.95rem"
                color="text.secondary"
                sx={{ mt: 0.5, fontStyle: "italic" }}
              >
                Student Success Strategist · Technologist · Counselor
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography
                variant="h4"
                fontWeight={800}
                color={colors.primary}
                sx={{ mb: 1, fontSize: { xs: "1.35rem", md: "2rem" } }}
              >
                My Secret? For Most of My Life, I Felt Like an Impostor.
              </Typography>
              <Typography variant="body1" sx={{ color: colors.primary, mb: 3, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                Hello, I'm Dr. Sivananda (but please, call me Shiv). If you're reading this, you probably know the feeling—the quiet, nagging voice in your head that tells you you're not smart enough, that you don't belong, and that any day now, you'll be "found out."
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5, fontSize: { xs: "0.98rem", md: "1.05rem" } }}>
                I know that voice well. It was my constant companion for years. As a timid student, I always compared myself to others and came up short. College made that voice even louder. Having studied only in my native Telugu, I suddenly found myself in an English-speaking world where I felt like a fraud who'd slipped through the cracks.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5, fontSize: { xs: "0.97rem", md: "1.05rem" } }}>
                There was no magic moment of inspiration. Instead, I made a decision: if I couldn't <b>feel</b> confident, I'd <b>build</b> a case for it. Through discipline and perseverance, I built a process and system that helped me through setbacks, layoffs, culture shock, and even grief. I learned that resilience isn't a gift—it's a muscle.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1, fontSize: { xs: "0.97rem", md: "1.05rem" } }}>
                After two decades in the tech world, a PhD, and years of counseling, my passion is now equipping students to build their own strategies—no pep talks, just practical tools that work in the real world.
              </Typography>
              <Typography variant="body1" sx={{ color: colors.primary, mt: 2 }}>
                <b>My mission is simple:</b> to help you build your own evidence of competence, overcome the voice of doubt, and get the results you're truly capable of. Let's get to work.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Platform's Mission */}
        <Box textAlign="center" mb={isMobile ? 6 : 8}>
          <Typography
            variant={isMobile ? "h3" : "h2"}
            gutterBottom
            sx={{
              fontWeight: 800,
              color: colors.primary,
              fontSize: isMobile ? "2rem" : "2.4rem",
              mb: "0.35em",
            }}
          >
            Our Mission: Transforming Student Self-Doubt into Growth
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            color="text.secondary"
            sx={{
              maxWidth: 760,
              mx: "auto",
              fontSize: isMobile ? "1.07rem" : "1.26rem",
            }}
          >
            We exist so students no longer have to face self-doubt, culture shock, or impostor feelings alone. Every tool, story, and resource here was designed for you to feel understood, supported, and equipped.
          </Typography>
        </Box>

        {/* Core Values - Cards */}
        <Box sx={{ mb: isMobile ? 6 : 8 }}>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            align="center"
            gutterBottom
            sx={{
              color: colors.primary,
              mb: 6,
              fontWeight: 700,
              fontSize: isMobile ? "1.5rem" : "2rem",
            }}
          >
            Our Core Values
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {values.map((val, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
                <ValueCard elevation={3}>
                  <Box sx={{ mb: 2 }}>{val.icon}</Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 700, fontSize: isMobile ? "1.17rem" : "1.25rem", color: colors.primary }}
                  >
                    {val.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontSize: isMobile ? "0.98rem" : "1.07rem" }}
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
            background: "linear-gradient(110deg, #2abbb0 0%, #28ada4 100%)",
            color: "#fff",
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
            sx={{ fontWeight: 800, letterSpacing: "-1px" }}
          >
            Our Impact So Far
          </Typography>
          <Grid
            container
            spacing={3}
            sx={{ mt: 3 }}
            justifyContent="center"
            textAlign="center"
          >
            {[
              { value: "1,450+", label: "Stories Shared" },
              { value: "90%", label: "Feel Less Alone" },
              { value: "94%", label: "Found Practical Help" },
              { value: "18K+", label: "Monthly Visitors" },
            ].map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <ImpactStat>
                  <Typography
                    variant={isMobile ? "h3" : "h2"}
                    sx={{ fontWeight: 800, mb: 1, color: "#fff" }}
                  >
                    <StarIcon sx={{ mb: -0.7, fontSize: 32, color: "#ffeb3b" }} /> {stat.value}
                  </Typography>
                  <Typography
                    variant={isMobile ? "body1" : "h6"}
                    sx={{ opacity: 0.92, fontWeight: 500, color: "#ecf7f6" }}
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
              color: colors.primary,
              mb: 4,
              fontWeight: 700,
              fontSize: isMobile ? "1.4rem" : "1.7rem",
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
                boxShadow: "0 2px 14px 0 rgba(42,187,176, 0.07)",
                "&:before": { display: "none" },
              }}
              elevation={0}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: colors.accent }} />}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    color: colors.primary,
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  sx={{ fontSize: isMobile ? "0.95rem" : "1.08rem" }}
                  color="text.secondary"
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        <Divider sx={{ my: { xs: 3, md: 5 } }} />

        {/* Final CTA */}
        <Box
          sx={{
            background: colors.accentBg,
            borderRadius: "18px",
            p: { xs: 3.5, sm: 4.5 },
            textAlign: "center",
            boxShadow: 2,
            mx: "auto"
          }}
        >
          <Typography
            variant={isMobile ? "h5" : "h4"}
            gutterBottom
            sx={{ fontWeight: 700, color: colors.primary }}
          >
            Join Our Movement
          </Typography>
          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{
              mb: 3,
              maxWidth: 700,
              mx: "auto",
              fontSize: isMobile ? "1.02rem" : "1.13rem",
              color: colors.primary,
              opacity: 0.85,
            }}
          >
            Whether you share your story, use our resources, or simply support a friend—thank you for helping transform self-doubt into growth.
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              size={isMobile ? "medium" : "large"}
              href="/stories"
              sx={{
                fontWeight: 600,
                py: isMobile ? 1.1 : 1.4,
                px: isMobile ? 3.7 : 5.5,
                minWidth: isMobile ? 155 : 200,
                fontSize: isMobile ? "0.93rem" : "1.07rem",
                borderRadius: "32px",
                boxShadow: "0 2px 12px #2abbb033",
                letterSpacing: 0.2,
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
                py: isMobile ? 1.1 : 1.4,
                px: isMobile ? 3.7 : 5.5,
                minWidth: isMobile ? 155 : 200,
                fontSize: isMobile ? "0.93rem" : "1.07rem",
                borderWidth: 2,
                borderRadius: "32px",
                boxShadow: "none",
                letterSpacing: 0.18,
                background: "#fff",
                "&:hover": {
                  borderWidth: 2,
                  backgroundColor: colors.accentBg,
                },
              }}
            >
              Share Your Story
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}


