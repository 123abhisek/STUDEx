import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Box,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  useMediaQuery,
  useTheme,
  Avatar,
} from "@mui/material";
import {
  Instagram,
  LinkedIn,
  Twitter,
  Share,
  ArrowForward,
  FilterList,
  Favorite,
  MoreVert,
} from "@mui/icons-material";

// Fixed image URLs that actually work
const socialPosts = [
  {
    id: 1,
    platform: "Instagram",
    title: "Campus Fest Highlights 🎉",
    excerpt: "Check out the amazing moments from our annual campus festival!",
    link: "https://www.instagram.com/p/xyz123",
    image: "https://images.unsplash.com/photo-1656137631992-efcfe6b23ce9?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 245,
  },
  {
    id: 2,
    platform: "LinkedIn",
    title: "Student Hired at Google!",
    excerpt:
      "Our computer science graduate just landed a job at Google as a software engineer.",
    link: "https://www.linkedin.com/posts/abc456",
    image: "https://images.unsplash.com/photo-1566678573479-808bb646e165?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 512,
  },
  {
    id: 3,
    platform: "Twitter",
    title: "New Scholarship Announced 🎓",
    excerpt:
      "We are excited to announce a new scholarship program for STEM students.",
    link: "https://twitter.com/studex/status/7890",
    image: "https://images.unsplash.com/photo-1686030323326-63991462052e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 189,
  },
  {
    id: 4,
    platform: "Instagram",
    title: "Student Art Exhibition",
    excerpt:
      "Our talented students showcase their incredible artwork in the annual exhibition.",
    link: "https://www.instagram.com/p/art123",
    image: "https://images.unsplash.com/photo-1713729039092-4501eaa666e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 321,
  },
  {
    id: 5,
    platform: "LinkedIn",
    title: "Alumni Networking Event",
    excerpt:
      "Join our networking event to connect with successful alumni from various industries.",
    link: "https://www.linkedin.com/posts/networking123",
    image: "https://images.unsplash.com/photo-1660795352911-80ea0c3a9fd6?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 432,
  },
  {
    id: 6,
    platform: "Twitter",
    title: "New Research Publication",
    excerpt:
      "Our faculty published groundbreaking research in the field of quantum computing.",
    link: "https://twitter.com/studex/status/research123",
    image: "https://images.unsplash.com/photo-1732304719443-c3c04003bf25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3De",
    likes: 287,
  },
];

const getPlatformColor = (platform) => {
  switch (platform.toLowerCase()) {
    case "instagram":
      return "#E1306C";
    case "linkedin":
      return "#0A66C2";
    case "twitter":
      return "#1DA1F2";
    default:
      return "#6200EA";
  }
};

const getPlatformIcon = (platform) => {
  switch (platform.toLowerCase()) {
    case "instagram":
      return <Instagram fontSize="small" />;
    case "linkedin":
      return <LinkedIn fontSize="small" />;
    case "twitter":
      return <Twitter fontSize="small" />;
    default:
      return null;
  }
};

const SocialFeed = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [filterBy, setFilterBy] = useState("all");

  const filteredPosts =
    filterBy === "all"
      ? socialPosts
      : socialPosts.filter(
          (post) => post.platform.toLowerCase() === filterBy.toLowerCase()
        );

  const handleShare = (post) => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.excerpt,
          url: post.link,
        })
        .catch(console.error);
    } else {
      navigator.clipboard.writeText(post.link);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <Container maxWidth= "1rem" sx={{ py: 8 }}>
      {/* Header */}
      <Box textAlign="center" mb={4}>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          fontWeight={700}
          gutterBottom
          sx={{
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2,
          }}
        >
          Social Media Highlights
        </Typography>

        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{
            maxWidth: 700,
            mx: "auto",
            mb: 3,
          }}
        >
          Latest updates from our community
        </Typography>

        {/* Filter */}
        <FormControl variant="outlined" size="small" sx={{ minWidth: 200 }}>
          <InputLabel>Filter by platform</InputLabel>
          <Select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            label="Filter by platform"
            startAdornment={
              <FilterList sx={{ mr: 1, color: theme.palette.primary.main }} />
            }
          >
            <MenuItem value="all">All Platforms</MenuItem>
            <MenuItem value="instagram">Instagram</MenuItem>
            <MenuItem value="linkedin">LinkedIn</MenuItem>
            <MenuItem value="twitter">Twitter</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Social Posts Grid */}
      <Grid container spacing={3} sx={{ alignItems: "stretch" , justifyContent: "center" , mb: 4 }}>
        {filteredPosts.map((post) => (
          <Grid
            item
            key={post.id}
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex" }}
            justifyContent="center"
            alignItems="stretch"
            mb={4}
            width={ isMobile ? "100%" : isTablet ? "calc(50% - 16px)" : "calc(33.333% - 16px)"  }
            maxWidth={ isMobile ? "100%" : isTablet ? "calc(50% - 16px)" : "calc(33.333% - 16px)" }
            minWidth={ isMobile ? "100%" : isTablet ? "calc(50% - 16px)" : "calc(33.333% - 16px)" }
            height="100%"
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                height: "100%",
                width: "100%",
                borderRadius: "12px",
                boxShadow: "0 8px 16px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
                },
              }}
            >
              {/* Platform Header */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                  py: 1.5,
                  bgcolor: getPlatformColor(post.platform) + "08",
                  borderBottom: `1px solid ${getPlatformColor(
                    post.platform
                  )}20`,
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: getPlatformColor(post.platform) + "20",
                    color: getPlatformColor(post.platform),
                    width: 32,
                    height: 32,
                    mr: 1.5,
                  }}
                >
                  {getPlatformIcon(post.platform)}
                </Avatar>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  sx={{ color: getPlatformColor(post.platform) }}
                >
                  {post.platform}
                </Typography>
                <Box flexGrow={1} />
                <IconButton
                  size="small"
                  onClick={() => handleShare(post)}
                  sx={{ color: "text.secondary" }}
                >
                  <Share fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ color: "text.secondary" }}>
                  <MoreVert fontSize="small" />
                </IconButton>
              </Box>

              {/* Image */}
              <CardMedia
                component="img"
                image={post.image}
                alt={post.title}
                sx={{
                  height: 200,
                  objectFit: "cover",
                }}
              />

              {/* Content */}
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  p: 2,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  gutterBottom
                  sx={{ lineHeight: 1.3, minHeight: "3em" }}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    flexGrow: 1,
                    mb: 2,
                    minHeight: "4.5em",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {post.excerpt}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: "auto" }}>
                  <Chip
                    icon={<Favorite fontSize="small" />}
                    label={post.likes}
                    size="small"
                    variant="outlined"
                    sx={{
                      borderRadius: "8px",
                      borderColor: "divider",
                      color: "text.secondary",
                      "& .MuiChip-icon": {
                        color: "error.main",
                      },
                    }}
                  />
                </Box>
              </CardContent>

              {/* Button */}
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  size="medium"
                  color="primary"
                  variant="contained"
                  fullWidth
                  onClick={() => window.open(post.link, "_blank")}
                  endIcon={<ArrowForward />}
                  sx={{
                    borderRadius: "8px",
                    py: 1,
                    fontWeight: 600,
                    boxShadow: "none",
                    "&:hover": {
                      boxShadow: (theme) =>
                        `0 4px 8px ${theme.palette.primary.main}40`,
                    },
                  }}
                >
                  View Post
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SocialFeed;
