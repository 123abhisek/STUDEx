// src/pages/ShareStory.js

import React, { useState } from "react";
import {
  Container, Box, Typography, TextField, Button,
  FormControl, FormLabel, RadioGroup, FormControlLabel,
  Radio, Alert, CircularProgress, Grid, Checkbox
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

const colors = {
  primary: "#253858",
  accent: "#2abbb0",
  accentBg: "#e8f5f4",
  surface: "#fff",
  gray: "#f7f9fa",
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0, transition: { duration: 0.60, delay }
  }),
};

const staggerFields = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function ShareStory() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    story: "",
    category: "academic",
    takeaways: "",
    anonymous: false,
    contact: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : (name === "anonymous" ? value === "true" : value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    setSuccess(false);
    // Simulate an API call:
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        title: "",
        story: "",
        category: "academic",
        takeaways: "",
        anonymous: false,
        contact: false,
      });
    }, 1500);
  };

  return (
    <Box sx={{ background: colors.gray, minHeight: "100vh", width: "100vw", overflowX: "hidden" }}>
      <Container
        maxWidth="md"
        disableGutters
        sx={{
          py: { xs: 5, md: 8 },
          // Padding for sides, especially important on mobile
          px: { xs: 1, sm: 2, md: 3 },
        }}
      >
        {/* HERO */}
        <motion.div
          initial="hidden" animate="visible" variants={fadeUp}
        >
          <Box
            sx={{
              background: colors.accentBg,
              borderRadius: "18px",
              px: { xs: 2, md: 5 },
              py: { xs: 5, md: 7 },
              boxShadow: 2,
              textAlign: "center",
              mb: { xs: 6, md: 8 },
              width: "100%",
              maxWidth: "100%",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 1.2,
                color: colors.primary,
                fontSize: { xs: "2rem", sm: "2.3rem", md: "2.7rem" }
              }}
            >
              Share Your Journey
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 2.5, fontSize: { xs: "1.10rem", md: "1.29rem" } }}
            >
              Your story could light the way for another student.
            </Typography>
            <Typography
              variant="body1"
              color={colors.primary}
              maxWidth={600}
              sx={{
                mx: "auto",
                opacity: 0.89,
                fontSize: { xs: "1rem", sm: "1.1rem" }
              }}
            >
              Be open, real—and help transform student culture by showing others they’re not alone.
            </Typography>
          </Box>
        </motion.div>

        {/* SUCCESS/ERROR MSG */}
        <motion.div
          initial={{ opacity: 0 }} animate={success || error ? { opacity: 1 } : { opacity: 0 }}
        >
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
        </motion.div>

        {/* FORM */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <Box
            component={motion.form}
            onSubmit={handleSubmit}
            sx={{
              backgroundColor: colors.surface,
              borderRadius: "16px",
              p: { xs: 1.5, sm: 2.5, md: 4 },
              boxShadow: 3,
              width: "100%",
              maxWidth: "100%",
              position: "relative",
              overflow: "hidden"
            }}
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: colors.primary,
                fontWeight: 800,
                textAlign: "center",
                fontSize: { xs: "1.25rem", md: "1.6rem" }
              }}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
            >
              Tell Us About Your Experience
            </Typography>

            {/* Responsive form grid */}
            <Grid
              container
              spacing={2}
              component={motion.div}
              variants={staggerFields}
              initial="hidden"
              animate="visible"
            >
              {/* LEFT COL */}
              <Grid item xs={12} md={6}>
                <motion.div variants={fadeUp}>
                  <TextField
                    fullWidth
                    label="Your Name (optional)"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    disabled={formData.anonymous === true || formData.anonymous === "true"}
                  />
                </motion.div>
                <motion.div variants={fadeUp}>
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
                </motion.div>
                <motion.div variants={fadeUp}>
                  <FormControl component="fieldset" sx={{ mt: 2 }}>
                    <FormLabel component="legend" sx={{ color: colors.primary, fontWeight: 600 }}>
                      Share Anonymously?
                    </FormLabel>
                    <RadioGroup
                      row
                      name="anonymous"
                      value={String(formData.anonymous)}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="false" control={<Radio color="primary" />} label="No" />
                      <FormControlLabel value="true" control={<Radio color="primary" />} label="Yes" />
                    </RadioGroup>
                  </FormControl>
                </motion.div>
              </Grid>
              {/* RIGHT COL */}
              <Grid item xs={12} md={6}>
                <motion.div variants={fadeUp}>
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
                </motion.div>
                <motion.div variants={fadeUp}>
                  <FormControl fullWidth sx={{ mt: 2, mb: 1 }}>
                    <FormLabel sx={{ color: colors.primary, fontWeight: 600 }}>Category</FormLabel>
                    <RadioGroup
                      row
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="academic" control={<Radio color="primary" />} label="Academic" />
                      <FormControlLabel value="career" control={<Radio color="primary" />} label="Career" />
                      <FormControlLabel value="personal" control={<Radio color="primary" />} label="Personal" />
                    </RadioGroup>
                  </FormControl>
                </motion.div>
              </Grid>
              {/* STORY */}
              <Grid item xs={12}>
                <motion.div variants={fadeUp}>
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
                    helperText="Share your journey—challenges, the turning point, and outcomes"
                  />
                </motion.div>
              </Grid>
              {/* TAKEAWAYS */}
              <Grid item xs={12}>
                <motion.div variants={fadeUp}>
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
                </motion.div>
              </Grid>
              {/* CONTACT PERMISSION */}
              <Grid item xs={12}>
                <motion.div variants={fadeUp}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="contact"
                        checked={formData.contact}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <Typography variant="body2" color={colors.primary} fontWeight={500}>
                        I’m open to being contacted by other students for advice (your email won’t be shared)
                      </Typography>
                    }
                  />
                </motion.div>
              </Grid>
              {/* SUBMISSION GUIDELINES */}
              <Grid item xs={12}>
                <motion.div variants={fadeUp}>
                  <Box
                    sx={{
                      background: colors.accentBg,
                      borderRadius: "8px",
                      p: 3,
                      mt: 1,
                      mb: 2.5,
                      border: `1.5px solid ${colors.accent}`
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 700, color: colors.primary, mb: 1 }}>
                      Submission Guidelines
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      • Be authentic and honest about your experiences<br />
                      • Focus on your journey rather than blaming others<br />
                      • Include both challenges and how you overcame them<br />
                      • Respect privacy—don’t share others’ personal information<br />
                      • Stories should be appropriate for a student audience
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
              {/* SUBMIT BUTTON */}
              <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
                <motion.div variants={fadeUp} whileHover={{ scale: 1.04 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={!submitting && <SendIcon />}
                    disabled={submitting}
                    sx={{
                      minWidth: 200,
                      fontWeight: 700,
                      fontSize: "1.13rem",
                      borderRadius: "32px",
                      boxShadow: "0 2px 16px #2abbb044",
                      background: colors.accent,
                      color: "#fff",
                      letterSpacing: 0.1,
                      "&:hover": {
                        background: colors.primary,
                        color: "#fff",
                        boxShadow: "0 5px 28px #2abbb044",
                      },
                      transition: "all 0.26s",
                    }}
                  >
                    {submitting ? <CircularProgress size={24} color="inherit" /> : "Share Your Story"}
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
