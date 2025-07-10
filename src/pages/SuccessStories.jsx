// src/pages/SuccessStories.js
import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Pagination,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const ITEMS_PER_PAGE = 6;

const SuccessStories = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      setIsLoading(true);
      setError(null);
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));
        const mockStories = [
          {
            id: "1",
            imageUrl:
              "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "From Academic Probation to Honors",
            category: "academic",
            excerpt: "How I turned my failing grades into a 3.8 GPA",
            tags: ["resilience", "study habits"],
            fullStoryUrl: "/stories/1",
          },
          {
            id: "2",
            imageUrl:
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Finding My Career Path After Failure",
            category: "career",
            excerpt: "Rejected from 50 internships but landed my dream job",
            tags: ["perseverance", "career"],
            fullStoryUrl: "/stories/2",
          },
          {
            id: "3",
            imageUrl:
              "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Overcoming Social Anxiety in College",
            category: "personal",
            excerpt: "My journey from isolation to student leadership",
            tags: ["mental health", "confidence"],
            fullStoryUrl: "/stories/3",
          },
          {
            id: "4",
            imageUrl:
              "https://images.unsplash.com/photo-1603527413520-73e05f787ee3?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Balancing Work and Studies",
            category: "academic",
            excerpt: "How I maintained grades while working 30 hours/week",
            tags: ["time management", "balance"],
            fullStoryUrl: "/stories/4",
          },
          {
            id: "5",
            imageUrl:
              "https://images.unsplash.com/photo-1647964366344-bc680baf64e2?q=80&w=826&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "From Burnout to Balance",
            category: "personal",
            excerpt: "Rediscovering my passion after complete exhaustion",
            tags: ["self-care", "mindfulness"],
            fullStoryUrl: "/stories/5",
          },
          {
            id: "6",
            imageUrl:
              "https://images.unsplash.com/photo-1722648325285-058946b4487b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Switching Majors Successfully",
            category: "academic",
            excerpt: "How I found my true calling after 2 years of engineering",
            tags: ["decision-making", "purpose"],
            fullStoryUrl: "/stories/6",
          },
        ];
        setStories(mockStories);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStories();
  }, []);

  useEffect(() => setPage(1), [filter]);

  const filteredStories =
    filter === "all" ? stories : stories.filter((s) => s.category === filter);
  const pageCount = Math.ceil(filteredStories.length / ITEMS_PER_PAGE);
  const paginatedStories = filteredStories.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <Container
      maxWidth="1rem"
      sx={{
        py: isMobile ? 3 : 4,
        px: isMobile ? 1.5 : 3,
      }}
    >
      <Typography
        variant={isMobile ? "h4" : "h3"}
        align="center"
        fontWeight={700}
        gutterBottom
        sx={{
          fontSize: isMobile ? "1.75rem" : "2.5rem",
          mt: isMobile ? 1 : 0,
          px: isMobile ? 1 : 0,
        }}
      >
        Student Success Stories
      </Typography>

      <Typography
        variant={isMobile ? "subtitle1" : "h6"}
        align="center"
        color="text.secondary"
        sx={{
          mb: 4,
          fontSize: isMobile ? "0.95rem" : "1.1rem",
          px: isMobile ? 1 : 0,
        }}
      >
        Read how students overcame academic, personal, and career challenges
      </Typography>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems={isMobile ? "flex-start" : "center"}
        mb={4}
        flexDirection={isMobile ? "column" : "row"}
        gap={2}
        sx={{
          backgroundColor: "background.paper",
          p: 2,
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <FilterListIcon color="primary" />
          <Typography variant="subtitle1" fontWeight={500}>
            Filter by Category
          </Typography>
        </Box>
        <FormControl
          size="small"
          sx={{
            minWidth: 160,
            mt: isMobile ? 1 : 0,
            alignSelf: isMobile ? "stretch" : "auto",
          }}
        >
          <InputLabel>Category</InputLabel>
          <Select
            value={filter}
            label="Category"
            onChange={(e) => setFilter(e.target.value)}
            sx={{ bgcolor: "background.paper" }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="academic">Academic</MenuItem>
            <MenuItem value="career">Career</MenuItem>
            <MenuItem value="personal">Personal</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {isLoading ? (
        <Box display="flex" justifyContent="center" py={6}>
          <CircularProgress size={isMobile ? 40 : 60} />
        </Box>
      ) : error ? (
        <Typography color="error" align="center" sx={{ py: 4 }}>
          Failed to load stories. Please try again later.
        </Typography>
      ) : (
        <>
          <Grid container spacing={isMobile ? 2 : 3}>
            {paginatedStories.map((story) => (
              <Grid
                item
                key={story.id}
                xs={12}
                sm={6}
                md={4}
                sx={{ display: "flex" }}
                justifyContent="center"
                alignItems="stretch"
                mb={4}
                width={
                  isMobile
                    ? "100%"
                    : isTablet
                    ? "calc(50% - 16px)"
                    : "calc(33.333% - 16px)"
                }
                maxWidth={
                  isMobile
                    ? "100%"
                    : isTablet
                    ? "calc(50% - 16px)"
                    : "calc(33.333% - 16px)"
                }
                minWidth={
                  isMobile
                    ? "100%"
                    : isTablet
                    ? "calc(50% - 16px)"
                    : "calc(33.333% - 16px)"
                }
                height="100%"
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "0.3s",
                    fullWidth: true,
                    "&:hover": {
                      transform: isMobile ? "none" : "translateY(-5px)",
                      boxShadow: isMobile ? 3 : 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height={isMobile ? 160 : 180}
                    image={story.imageUrl}
                    alt={story.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: isMobile ? 2 : 3 }}>
                    <Chip
                      label={story.category}
                      size="small"
                      color="secondary"
                      sx={{
                        mb: 1,
                        fontWeight: 600,
                        fontSize: isMobile ? "0.75rem" : "0.875rem",
                      }}
                    />
                    <Typography
                      variant={isMobile ? "subtitle1" : "h6"}
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        fontSize: isMobile ? "1rem" : "1.125rem",
                      }}
                    >
                      {story.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                      sx={{
                        fontSize: isMobile ? "0.875rem" : "0.95rem",
                        mb: 2,
                      }}
                    >
                      {story.excerpt}
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1} mt="auto">
                      {story.tags.map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag}
                          size="small"
                          color="primary"
                          sx={{
                            fontSize: isMobile ? "0.7rem" : "0.8rem",
                            height: isMobile ? 24 : 28,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <Box textAlign="center" pb={2} px={isMobile ? 1 : 2}>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      onClick={() =>
                        (window.location.href = story.fullStoryUrl)
                      }
                      size={isMobile ? "small" : "medium"}
                      sx={{ mx: "auto", maxWidth: isMobile ? "100%" : "90%" }}
                    >
                      Read Full Story
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {pageCount > 1 && !isLoading && (
            <Box display="flex" justifyContent="center" mt={5}>
              <Pagination
                count={pageCount}
                page={page}
                onChange={(e, val) => setPage(val)}
                color="primary"
                shape="rounded"
                size={isMobile ? "small" : "medium"}
                siblingCount={isMobile ? 0 : 1}
                sx={{
                  "& .MuiPaginationItem-root": {
                    fontSize: isMobile ? "0.75rem" : "0.875rem",
                  },
                }}
              />
            </Box>
          )}
        </>
      )}

      <Box
        textAlign="center"
        mt={7}
        mb={isMobile ? 3 : 0}
        px={isMobile ? 1 : 0}
        sx={{
          backgroundColor: "background.paper",
          p: 4,
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          gutterBottom
          sx={{ fontSize: isMobile ? "1.25rem" : "1.5rem" }}
        >
          Want to share your story?
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size={isMobile ? "medium" : "large"}
          href="/share"
          sx={{
            mt: 2,
            fontSize: isMobile ? "0.9rem" : "1rem",
            px: isMobile ? 3 : 4,
            py: isMobile ? 1 : 1.5,
            minWidth: 200,
          }}
        >
          Share Your Journey
        </Button>
      </Box>
    </Container>
  );
};

export default SuccessStories;
