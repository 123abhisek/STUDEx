import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Avatar,
  Paper,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VerifiedIcon from "@mui/icons-material/Verified";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

// Palette match main site
const colors = {
  primary: "#253858",
  accent: "#2abbb0",
  accentDark: "#229a94",
  accentBg: "#e8f5f4",
  surface: "#fff",
  gray: "#f7f9fa",
  border: "#e0e7ef",
};

const MotionPaper = motion(Paper);

const ValueCard = styled(MotionPaper)(({ theme }) => ({
  padding: theme.spacing(4, 3),
  borderRadius: "17px",
  background: colors.surface,
  boxShadow: theme.shadows[2],
  textAlign: "center",
  position: "relative",
  transition: "box-shadow 0.3s, transform 0.3s",
  "&:hover": {
    boxShadow: theme.shadows[6],
    transform: "scale(1.028) translateY(-4px)",
  },
}));

const SectionMotion = ({ children, delay = 0, ...rest }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay }}
    {...rest}
  >
    {children}
  </motion.div>
);

// ---- Content ----

const founderBioHeadline = "My Secret? For Most of My Life, I Felt Like an Impostor.";

// const founderBio = [
//   `Hello, I'm Dr. Sivananda (but please, call me Shiv). If you're reading this, you probably know the feeling. The quiet, nagging voice in your head that tells you you're not smart enough, that you don't belong, and that any day now, you'll be "found out."`,
//   `I know that voice well. It was my constant companion for years.

//   Growing up, I was the timid kid who constantly compared himself to others, always feeling like I came up short. When I got to college, that feeling got louder. My entire education had been in my native Telugu, and suddenly I was in an English-speaking world. I felt a step behind everyone, convinced that I was a fraud who had somehow slipped through the cracks.
//   `,
//   `There was no magic moment of inspiration. I didn't suddenly wake up confident. Instead, I made a decision. If I couldn't feel confident, I would build a case for it. I developed a system for myself based on pure hard work, disciplined study, and a stubborn refusal to quit. My strategy was simple: focus on the process, not the fear.

//   That simple shift was the breakthrough that changed everything.
//   `,
//   `That strategy is what allowed me to finish my bachelor's and master's degrees. It's what carried me through a two-decade career in technology, earning multiple advanced degrees (including an M.S. in Counselling & Psychotherapy and a Ph.D.) and even a "Future CIO" award along the way.

//   More importantly, that strategy is what got me through the tough times—getting laid off (more than once), navigating brutal office politics, and facing devastating personal loss. I learned that resilience isn't something you're born with; it's a muscle you build. Failure isn't a verdict; it's just data.
//   `,
//   `Now, as a Student Success Strategist, I’ve combined my personal journey with my professional training. I'm not here to give you empty pep talks. I'm here because I've been where you are. I know the feeling of a blank page, the fear of asking a "stupid" question, and the exhaustion of trying to be perfect.

//   My mission is to give you the tools and strategies that took me years of struggle to build for myself—so you can build your own case for competence, overcome the voice of doubt, and get the results you're truly capable of.

//   Let's get to work.
//   `,
// ];

// ---- Mission / Vision / Values ----

const mission = {
  title: "Our Mission",
  icon: <DirectionsRunIcon sx={{ fontSize: 48, color: colors.accent }} />,
  content:
    "We build simple, step-by-step tools that help students get through the tasks they fear. We replace self-doubt with a solid plan.",
};

const vision = {
  title: "Our Vision",
  icon: <StarOutlineIcon sx={{ fontSize: 48, color: colors.accent }} />,
  content:
    "A world where every student has the tools to prove their own competence to themselves, so they can take on the hard projects and build the future they deserve.",
};

const coreValues = [
  {
    title: "Action, Not Just Ideas",
    icon: <DirectionsRunIcon sx={{ fontSize: 42, color: colors.accentDark }} />,
    description:
      "We don't deal in empty inspiration. Every article, tool, and piece of advice is designed to help you take one small, real step forward today.",
  },
  {
    title: "Proof, Not Platitudes",
    icon: <VerifiedIcon sx={{ fontSize: 42, color: colors.accentDark }} />,
    description:
      "We use evidence-based strategies, not feel-good quotes. We'll help you build a logical case against the negative voice in your head.",
  },
  {
    title: "Progress, Not Perfection",
    icon: <EmojiEventsIcon sx={{ fontSize: 42, color: colors.accentDark }} />,
    description:
      '"Good enough and done" is better than "perfect and never started." We celebrate starting, shipping, and learning from the mess.',
  },
];

// ---- The About Page ----

export default function AboutUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ background: colors.gray, minHeight: "100vh" }}>
      <Container
        maxWidth="md"
        sx={{ py: { xs: 3, md: 7 }, px: { xs: 1.5, sm: 2.5, md: 3 } }}
      >
        {/* ---- Founder Section ---- */}
        <SectionMotion>
          <Box
            sx={{
              background: colors.accentBg,
              px: { xs: 2, md: 5 },
              py: { xs: 4.7, md: 6 },
              borderRadius: "22px",
              boxShadow: { xs: 1, md: 3 },
              mb: { xs: 5, md: 8 },
            }}
          >
            <Grid
              container
              spacing={5}
              alignItems="center"
              flexDirection={isMobile ? "column-reverse" : "row"}
            >
              <Grid item xs={12} md={8}>
                <Typography
                  variant="h4"
                  component="h1"
                  fontWeight={800}
                  color={colors.primary}
                  sx={{
                    mb: 1.5,
                    fontSize: { xs: "1.30rem", sm: "2.1rem" },
                    letterSpacing: "-0.5px",
                  }}
                >
                  {founderBioHeadline}
                </Typography>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: colors.primary,
                      opacity: 0.97,
                      fontSize: { xs: "1.04rem", sm: "1.13rem" },
                      mb: 2,
                    }}
                  >
                    <b>Hello, I'm Dr. Sivananda (but please, call me Shiv).</b> If you're reading this, you probably know the feeling. The quiet, nagging voice in your head that tells you you're not smart enough, that you don't belong, and that any day now, you'll be "found out."
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1.3, fontSize: { xs: "1.02rem", sm: "1.10rem" } }}>
                    I know that voice well. It was my constant companion for years. Growing up, I was the timid kid who constantly compared himself to others, always feeling like I came up short.
                    When I got to college, that feeling got louder. My entire education had been in my native Telugu, and suddenly I was in an English-speaking world. I felt a step behind everyone, convinced that I was a fraud who had somehow slipped through the cracks.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1.4, fontSize: { xs: "1.01rem", sm: "1.09rem" } }}>
                    There was no magic moment of inspiration. I didn't suddenly wake up confident. Instead, I made a decision. If I couldn't <b>feel</b> confident, I would <b>build</b> a case for it. I developed a system for myself based on pure hard work, disciplined study, and a stubborn refusal to quit. My strategy was simple: focus on the process, not the fear.<br /><br />
                    That simple shift was the breakthrough that changed everything.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1.3, fontSize: { xs: "1.01rem", sm: "1.09rem" } }}>
                    That strategy is what allowed me to finish my bachelor's and master's degrees. It's what carried me through a two-decade career in technology, earning multiple advanced degrees (including an M.S. in Counselling & Psychotherapy and a Ph.D.) and even a "Future CIO" award along the way.
                    <br /><br />
                    More importantly, that strategy is what got me through the tough times—getting laid off (more than once), navigating brutal office politics, and facing devastating personal loss. I learned that resilience isn't something you're born with; it's a muscle you build. Failure isn't a verdict; it's just data.
                  </Typography>
                  <Typography variant="body1" sx={{ color: colors.primary, opacity: 0.98, mb: 1.7 }}>
                    Now, as a Student Success Strategist, I’ve combined my personal journey with my professional training. I'm not here to give you empty pep talks. I'm here because I've been where you are. I know the feeling of a blank page, the fear of asking a "stupid" question, and the exhaustion of trying to be perfect.
                  </Typography>
                  <Typography variant="body1" color={colors.primary} sx={{ mt: 2, fontWeight: 500 }}>
                    <b>My mission is to give you the tools and strategies that took me years of struggle to build for myself—so you can build your own case for competence, overcome the voice of doubt, and get the results you're truly capable of.<br />Let's get to work.</b>
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={4} textAlign="center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.88, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, type: "spring" }}
                >
                  <Avatar
                    src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg" // Replace with real headshot
                    alt="Dr. Sivananda (Shiv)"
                    variant="circular"
                    sx={{
                      width: 120,
                      height: 120,
                      border: `4px solid ${colors.accent}`,
                      mx: "auto",
                      boxShadow: "0 5px 32px rgba(42, 187, 176, 0.17)",
                    }}
                  />
                  <Typography fontWeight={700} mt={2} color={colors.primary} variant="h6">
                    Dr. Sivananda (Shiv)
                  </Typography>
                  <Typography
                    fontSize="0.95rem"
                    color="text.secondary"
                    sx={{ mt: 0.5, fontStyle: "italic", opacity: 0.85 }}
                  >
                    Student Success Strategist &nbsp;|&nbsp; Technologist &nbsp;|&nbsp; Counselor
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </SectionMotion>

        {/* ---- MISSION & VISION ---- */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ mb: { xs: 6, md: 8 } }}
        >
          {[mission, vision].map((item, idx) => (
            <Grid item xs={12} md={6} key={item.title} sx={{ display: "flex" }}>
              <SectionMotion delay={0.09 + idx * 0.10} style={{ flex: 1 }}>
                <ValueCard elevation={2}>
                  <Box sx={{ mb: 1 }}>{item.icon}</Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: colors.primary,
                      letterSpacing: "-1px",
                      fontSize: isMobile ? "1.2rem" : "1.32rem",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontSize: isMobile ? "0.98rem" : "1.11rem" }}
                  >
                    {item.content}
                  </Typography>
                </ValueCard>
              </SectionMotion>
            </Grid>
          ))}
        </Grid>

        {/* ---- Values ---- */}
        <SectionMotion>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            align="center"
            gutterBottom
            sx={{
              color: colors.primary,
              mb: 4,
              fontWeight: 800,
              fontSize: isMobile ? "1.37rem" : "1.7rem",
              letterSpacing: "-0.5px",
            }}
          >
            Our Core Values
          </Typography>
        </SectionMotion>
        <Grid container spacing={4} justifyContent="center" sx={{ mb: { xs: 6, md: 10 } }}>
          {coreValues.map((val, index) => (
            <Grid item xs={12} sm={4} key={val.title} sx={{ display: "flex" }}>
              <SectionMotion delay={0.14 + index * 0.12} style={{ flex: 1 }}>
                <ValueCard elevation={3}>
                  <Box sx={{ mb: 1.5 }}>{val.icon}</Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: isMobile ? "1.04rem" : "1.13rem",
                      color: colors.primary,
                      letterSpacing: "-.7px",
                    }}
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
              </SectionMotion>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: { xs: 3, md: 5 } }} />

        {/* ---- CTA ---- */}
        <SectionMotion>
          <Box
            sx={{
              background: colors.accentBg,
              borderRadius: "18px",
              p: { xs: 3.5, sm: 4.5 },
              textAlign: "center",
              boxShadow: 2,
              mx: "auto",
              mb: { xs: 4, md: 6 },
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
                mb: 2,
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
              <motion.a whileHover={{ scale: 1.06 }} href="/stories" style={{ textDecoration: "none" }}>
                <Box
                  component="button"
                  sx={{
                    background: colors.accent,
                    color: "#fff",
                    fontWeight: 700,
                    border: "none",
                    borderRadius: "32px",
                    minWidth: isMobile ? 135 : 180,
                    px: isMobile ? 3.7 : 5.5,
                    py: isMobile ? 1.1 : 1.4,
                    fontSize: isMobile ? "0.93rem" : "1.07rem",
                    boxShadow: "0 2px 12px #2abbb033",
                    letterSpacing: 0.2,
                    cursor: "pointer",
                    transition: ".21s all",
                    "&:hover": { backgroundColor: colors.accentDark },
                  }}
                >
                  Read Stories
                </Box>
              </motion.a>
              <motion.a whileHover={{ scale: 1.06 }} href="/share" style={{ textDecoration: "none" }}>
                <Box
                  component="button"
                  sx={{
                    background: "#fff",
                    color: colors.primary,
                    fontWeight: 700,
                    border: `2px solid ${colors.accent}`,
                    borderRadius: "32px",
                    minWidth: isMobile ? 135 : 180,
                    px: isMobile ? 3.7 : 5.5,
                    py: isMobile ? 1.1 : 1.4,
                    fontSize: isMobile ? "0.93rem" : "1.07rem",
                    letterSpacing: 0.18,
                    cursor: "pointer",
                    transition: ".21s all",
                    "&:hover": {
                      backgroundColor: colors.accentBg,
                      borderColor: colors.accentDark,
                    },
                  }}
                >
                  Share Your Story
                </Box>
              </motion.a>
            </Box>
          </Box>
        </SectionMotion>
      </Container>
    </Box>
  );
}
