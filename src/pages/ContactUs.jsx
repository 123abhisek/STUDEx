import React from 'react';
import { 
  Container, Box, Typography, Grid, TextField, Button, 
  Accordion, AccordionSummary, AccordionDetails 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const ContactUs = () => {
  const faqs = [
    { 
      question: 'How do I submit a story?', 
      answer: 'Visit our "Share Your Story" page and fill out the submission form. We review all submissions within 3-5 business days.' 
    },
    { 
      question: 'Is my story anonymous?', 
      answer: 'You can choose to submit anonymously. We respect your privacy and will never share your information without consent.' 
    },
    { 
      question: 'How long until my story is published?', 
      answer: 'After submission, our team reviews each story. If approved, it typically takes 1-2 weeks before publication.' 
    },
    { 
      question: 'Can I edit my story after submission?', 
      answer: 'Yes, contact us with your submission ID and requested changes.' 
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <ContactMailIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h2" gutterBottom>
          We&apos;re Here to Help
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Reach out with questions, feedback, or just to say hello!
        </Typography>
      </Box>

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Contact Form
          </Typography>
          <form>
            <TextField
              fullWidth
              label="Your Name"
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              variant="outlined"
              type="email"
              required
            />
            <TextField
              fullWidth
              label="Subject"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Message"
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
              required
            />
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              sx={{ mt: 3 }}
            >
              Send Message
            </Button>
          </form>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Frequently Asked Questions
          </Typography>
          
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={600}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}

          <Box mt={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Direct Email
            </Typography>
            <Typography>
              <a href="mailto:support@studex.com" style={{ color: '#008080', textDecoration: 'none' }}>
                support@studex.com
              </a>
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Response Time
            </Typography>
            <Typography>
              We typically respond to all inquiries within 24-48 hours.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;