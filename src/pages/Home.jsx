// // src/pages/Home.js
// import React, { useRef } from "react";
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Button,
//   TextField,
//   InputAdornment,
//   Paper,
// } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

// // COLORS (can move to theme)
// const colors = {
//   primary: "#253858", // deep blue
//   gray: "#EEEEF7",
//   accent: "#2abbb0", // muted teal (action color)
//   accentDark: "#229a94",
//   white: "#fff",
//   bodyText: "#2f2f2f",
//   subtle: "#888",
// };

// function HandDrawnCheck({ color = colors.accent, sx = {} }) {
//   // Simple SVG for hand-drawn check
//   return (
//     <svg width="26" height="26" viewBox="0 0 26 26" style={sx}>
//       <circle
//         cx="13"
//         cy="13"
//         r="12"
//         stroke={color}
//         strokeWidth="2"
//         fill="none"
//       />
//       <polyline
//         points="8,14.5 12,18 18,10"
//         stroke={color}
//         strokeWidth="2.5"
//         fill="none"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// const checklistItems = [
//   [
//     "You downplay your success. You say things like 'it wasn’t that hard' or 'anyone could have done it.'",
//     "You dread being called on in class. Even when you know the answer, you’re terrified of getting it wrong.",
//     "You procrastinate on big projects. The fear of the final product not being perfect is paralyzing.",
//     "You don’t apply for things unless you meet 110% of the qualifications.",
//   ],
//   [
//     "You find it hard to accept a compliment. Your first instinct is to deflect it or point out a flaw.",
//     "You compare yourself constantly to your classmates and always feel like you’re behind.",
//     "You avoid asking for help. You’re worried it will expose you as incompetent.",
//     "You feel relief, not pride, after finishing a huge task. The main feeling is 'Phew, I didn’t get caught.'",
//   ],
// ];

// const tools = [
//   {
//     title: "Evidence Log",
//     icon: <AssignmentIcon sx={{ fontSize: 36, color: colors.accentDark }} />,
//     description:
//       "A simple log to scientifically prove your achievements aren’t just luck. Your brain’s best defense against the “I’m a fraud” feeling.",
//   },
//   {
//     title: "'Smart Question' Scripts",
//     icon: <MailOutlineIcon sx={{ fontSize: 36, color: colors.accentDark }} />,
//     description:
//       "Copy-and-paste scripts for emailing professors and speaking up in class without the fear of “looking dumb.”",
//   },
//   {
//     title: "Failure Resume",
//     icon: <EmojiEventsIcon sx={{ fontSize: 36, color: colors.accentDark }} />,
//     description:
//       "A worksheet to reframe your mistakes as proof of resilience, not weakness.",
//   },
// ];

// export default function Home() {
//   const checklistRef = useRef(null);
//   const handleScrollToChecklist = () => {
//     checklistRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <Box
//       sx={{
//         width: "100vw",
//         overflowX: "hidden",
//         backgroundColor: colors.white,
//         minHeight: "100vh",
//         mt: -1,
//       }}
//     >
//       <Box
//         sx={{
//           width: "100%",
//           maxWidth: "100%",
//           minHeight: "100vh",
//           boxSizing: "border-box",
//           display: "flex",
//           alignItems: "center",
//           position: "relative",
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           px: { xs: 0, md: 0 },
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(255,255,255,0.4)",
//             zIndex: 0,
//           },
//         }}
//       >
//         <Container
//           maxWidth={false}
//           sx={{
//             width: "100%",
//             maxWidth: "720px",
//             mx: "auto",
//             px: { xs: 2, sm: 4, md: 6 },
//             position: "relative",
//             zIndex: 1,
//             pt: 12,
//             pb: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: { xs: "flex-start", md: "center" },
//             textAlign: { xs: "left", md: "center" },
//           }}
//         >
//           <Typography
//             variant="h2"
//             gutterBottom
//             sx={{
//               fontFamily: "Montserrat, Lato, sans-serif",
//               fontWeight: 800,
//               fontSize: { xs: "2rem", sm: "2.7rem", md: "3.2rem" },
//               color: colors.primary,
//             }}
//           >
//             Ever get a good grade and think,&nbsp;
//             <Box
//               component="span"
//               sx={{
//                 color: colors.accent,
//                 fontFamily: "inherit",
//                 borderBottom: `3px solid ${colors.accent}`,
//                 display: "inline-block",
//                 pb: 0.2,
//               }}
//             >
//               "I just got lucky"?
//             </Box>
//           </Typography>
//           <Typography
//             variant="h6"
//             sx={{
//               fontFamily: "Lora, Merriweather, serif",
//               color: colors.bodyText,
//               maxWidth: 500,
//               mb: 5,
//             }}
//           >
//             That feeling isn&apos;t a personality flaw. It&apos;s a pattern. And
//             it can be broken.
//           </Typography>
//           <Button
//             variant="contained"
//             size="large"
//             onClick={handleScrollToChecklist}
//             sx={{
//               fontWeight: 700,
//               borderRadius: "32px",
//               px: 5,
//               py: 1.5,
//               background: colors.accent,
//               boxShadow: "none",
//               fontSize: "1.15rem",
//               "&:hover": {
//                 background: colors.accentDark,
//               },
//               letterSpacing: 1,
//             }}
//           >
//             FIND OUT IF THIS IS YOU
//           </Button>
//         </Container>
//       </Box>

//       {/* Section 2: The Checklist */}
//       <Box
//         ref={checklistRef}
//         sx={{
//           py: { xs: 6, md: 10 },
//           background: "#fcfcfc",
//           borderTop: `1px solid ${colors.gray}`,
//           borderBottom: `1px solid ${colors.gray}`,
//         }}
//       >
//         <Container maxWidth="md">
//           <Typography
//             variant="h4"
//             gutterBottom
//             sx={{
//               fontFamily: "Montserrat, Lato, sans-serif",
//               fontWeight: 700,
//               color: colors.primary,
//               textAlign: "center",
//               mb: 5,
//               fontSize: { xs: "1.5rem", md: "2.2rem" },
//             }}
//           >
//             Which of These Sound Familiar?
//           </Typography>
//           <Grid container spacing={4}>
//             {checklistItems.map((col, idx) => (
//               <Grid item xs={12} md={6} key={idx}>
//                 <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
//                   {col.map((item, i) => (
//                     <li
//                       key={i}
//                       style={{
//                         display: "flex",
//                         alignItems: "flex-start",
//                         marginBottom: 22,
//                       }}
//                     >
//                       {/* Replace with a more hand-drawn look check if desired */}
//                       <Box sx={{ mr: 2, mt: "2px" }}>
//                         <HandDrawnCheck sx={{ verticalAlign: "middle" }} />
//                       </Box>
//                       <Typography
//                         component="span"
//                         sx={{
//                           fontFamily: "Lora, Merriweather, serif",
//                           color: colors.bodyText,
//                           fontSize: "1.07rem",
//                           lineHeight: 1.7,
//                         }}
//                       >
//                         {item}
//                       </Typography>
//                     </li>
//                   ))}
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Section 3: The Diagnosis & Reframe */}
//       <Box
//         sx={{
//           py: { xs: 7, md: 9 },
//           background: colors.gray,
//         }}
//       >
//         <Container maxWidth="sm">
//           <Paper
//             elevation={2}
//             sx={{
//               p: { xs: 4, sm: 5 },
//               background: "#f5f7fc",
//               borderRadius: "18px",
//               borderLeft: `6px solid ${colors.accent}`,
//               textAlign: "center",
//             }}
//           >
//             <Typography
//               variant="h5"
//               sx={{
//                 fontFamily: "Montserrat, Lato, sans-serif",
//                 fontWeight: 700,
//                 mb: 2,
//                 color: colors.primary,
//                 fontSize: { xs: "1.2rem", sm: "1.6rem" },
//               }}
//             >
//               If you nodded along, you&apos;re not a failure.
//               <br />
//               You&apos;re just experiencing Impostor Syndrome.
//             </Typography>
//             <Typography
//               sx={{
//                 fontFamily: "Lora, Merriweather, serif",
//                 color: colors.bodyText,
//                 fontSize: { xs: "1rem", sm: "1.13rem" },
//                 opacity: 0.97,
//               }}
//             >
//               It&apos;s the overwhelming feeling that you&apos;re a fraud,
//               despite all the evidence showing you&apos;re capable.
//               <br />
//               It&apos;s not a character flaw. It&apos;s a strategy problem. And
//               because it&apos;s a problem with a pattern, it&apos;s a problem
//               with a solution.
//             </Typography>
//           </Paper>
//         </Container>
//       </Box>

//       {/* Section 4: The Promise (Solution/Tools) */}
//       <Box sx={{ py: { xs: 7, md: 10 }, background: "#fff" }}>
//         <Container maxWidth="md">
//           <Typography
//             variant="h4"
//             gutterBottom
//             sx={{
//               fontFamily: "Montserrat, Lato, sans-serif",
//               fontWeight: 700,
//               color: colors.primary,
//               textAlign: "center",
//               mb: 2,
//               fontSize: { xs: "1.3rem", md: "2rem" },
//             }}
//           >
//             You Can&apos;t &quot;Think&quot; Your Way Out of This. You Have to
//             Act.
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             sx={{
//               textAlign: "center",
//               mb: 6,
//               color: colors.subtle,
//               fontFamily: "Lora, Merriweather, serif",
//               fontSize: { xs: "1rem", md: "1.19rem" },
//             }}
//           >
//             We don&apos;t do motivational quotes. We build practical tools to
//             give your brain the hard evidence it needs.
//           </Typography>
//           <Grid container spacing={5}>
//             {tools.map((tool) => (
//               <Grid  item xs={12} sm={4} key={tool.title} sx={{ display: "flex" , width: "100%" }}>
//                 <Box
//                   sx={{
//                     p: 3,
//                     background: colors.gray,
//                     borderRadius: "16px",
//                     textAlign: "center",
//                     height: "100%",
//                     boxShadow: "0 3px 20px 0 rgba(30,30,50,0.07)",
//                   }}
//                 >
//                   {tool.icon}
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       fontFamily: "Montserrat, Lato, sans-serif",
//                       color: colors.primary,
//                       fontWeight: 700,
//                       mt: 2,
//                       mb: 1,
//                       fontSize: "1.12rem",
//                     }}
//                   >
//                     {tool.title}
//                   </Typography>
//                   <Typography
//                     sx={{
//                       fontFamily: "Lora, Merriweather, serif",
//                       color: colors.bodyText,
//                       fontSize: "1rem",
//                       opacity: 0.95,
//                     }}
//                   >
//                     {tool.description}
//                   </Typography>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//           <Box textAlign="center" sx={{ mt: 6 }}>
//             <Button
//               component="a"
//               href="/toolkit"
//               variant="contained"
//               sx={{
//                 background: colors.accent,
//                 fontWeight: 700,
//                 letterSpacing: 1,
//                 px: 5,
//                 py: 1.5,
//                 borderRadius: "32px",
//                 fontSize: "1.11rem",
//                 "&:hover": {
//                   background: colors.accentDark,
//                 },
//                 boxShadow: "none",
//               }}
//             >
//               BROWSE ALL TOOLS
//             </Button>
//           </Box>
//         </Container>
//       </Box>

//       {/* Section 5: The Call to Action (Email Capture) */}
//       <Box
//         sx={{
//           background: colors.accent,
//           py: { xs: 8, md: 10 },
//           borderTopLeftRadius: "40px",
//           borderTopRightRadius: "40px",
//         }}
//       >
//         <Container maxWidth="sm">
//           <Box sx={{ textAlign: "center", color: "#fff" }}>
//             <Typography
//               variant="h4"
//               gutterBottom
//               sx={{
//                 fontFamily: "Montserrat, Lato, sans-serif",
//                 fontWeight: 800,
//                 fontSize: { xs: "1.3rem", md: "2rem" },
//               }}
//             >
//               Stop Fighting Alone. Start Building Your Strategy.
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               sx={{
//                 fontFamily: "Lora, Merriweather, serif",
//                 color: "#f4f9f9",
//                 mb: 4,
//                 opacity: 0.97,
//                 fontSize: { xs: "1rem", md: "1.2rem" },
//               }}
//             >
//               Get my free Impostor Syndrome First-Aid Kit.
//               <br />
//               It includes 3 simple tools you can use today to start gathering
//               evidence and quieting that voice in your head.
//             </Typography>
//             <Box
//               component="form"
//               sx={{
//                 display: "flex",
//                 gap: 2,
//                 flexDirection: { xs: "column", sm: "row" },
//                 justifyContent: "center",
//                 mt: 3,
//               }}
//               autoComplete="off"
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 // handle form submit
//               }}
//             >
//               <TextField
//                 variant="outlined"
//                 placeholder="Enter your email address"
//                 type="email"
//                 required
//                 sx={{
//                   flex: 1,
//                   background: "#fff",
//                   borderRadius: "30px",
//                   "& .MuiOutlinedInput-root": {
//                     borderRadius: "30px",
//                     fontFamily: "Lora, Merriweather, serif",
//                   },
//                   boxShadow: "none",
//                   minWidth: "220px",
//                 }}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <EmailIcon sx={{ color: colors.accentDark }} />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//               <Button
//                 type="submit"
//                 variant="contained"
//                 sx={{
//                   borderRadius: "30px",
//                   background: "#222a32",
//                   color: "#fff",
//                   fontWeight: 700,
//                   px: 4,
//                   py: 1.4,
//                   letterSpacing: 1,
//                   fontSize: "1rem",
//                   "&:hover": {
//                     background: "#1a202a",
//                   },
//                   minWidth: "180px",
//                 }}
//               >
//                 SEND ME THE KIT
//               </Button>
//             </Box>
//           </Box>
//         </Container>
//       </Box>
//     </Box>
//   );
// }

// src/pages/Home.js
import React, { useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Paper,
  Grow,
  Slide,
  Fade,
  Zoom,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useInView } from "react-intersection-observer";

// COLORS
const colors = {
  primary: "#253858", // deep blue
  gray: "#f0f2f5",
  accent: "#2abbb0", // muted teal
  accentDark: "#229a94",
  white: "#fff",
  bodyText: "#2f2f2f",
  subtle: "#888",
};

function HandDrawnCheck({ color = colors.accent }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26">
      <circle
        cx="13"
        cy="13"
        r="12"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <polyline
        points="8,14.5 12,18 18,10"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const checklistItems = [
  [
    "You downplay your success. You say things like 'it wasn't that hard' or 'anyone could have done it.'",
    "You dread being called on in class. Even when you know the answer, you're terrified of getting it wrong.",
    "You procrastinate on big projects. The fear of the final product not being perfect is paralyzing.",
    "You don't apply for things unless you meet 110% of the qualifications.",
  ],
  [
    "You find it hard to accept a compliment. Your first instinct is to deflect it or point out a flaw.",
    "You compare yourself constantly to your classmates and always feel like you're behind.",
    "You avoid asking for help. You're worried it will expose you as incompetent.",
    "You feel relief, not pride, after finishing a huge task. The main feeling is 'Phew, I didn't get caught.'",
  ],
];

const tools = [
  {
    title: "Evidence Log",
    icon: <AssignmentIcon sx={{ fontSize: 36, color: colors.accentDark }} />,
    description:
      "A simple log to scientifically prove your achievements aren't just luck. Your brain's best defense against the 'I'm a fraud' feeling.",
  },
  {
    title: "'Smart Question' Scripts",
    icon: <MailOutlineIcon sx={{ fontSize: 36, color: colors.accentDark }} />,
    description:
      "Copy-and-paste scripts for emailing professors and speaking up in class without the fear of 'looking dumb.'",
  },
  {
    title: "Failure Resume",
    icon: <EmojiEventsIcon sx={{ fontSize: 36, color: colors.accentDark }} />,
    description:
      "A worksheet to reframe your mistakes as proof of resilience, not weakness.",
  },
];

const ChecklistItem = ({ text }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Slide in={inView} direction="up" timeout={800}>
      <Box
        ref={ref}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          mb: 3,
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "translateX(5px)",
          },
        }}
      >
        <Box sx={{ mr: 2, mt: "2px" }}>
          <HandDrawnCheck />
        </Box>
        <Typography
          sx={{
            fontFamily: "Lora, Merriweather, serif",
            color: colors.bodyText,
            fontSize: "1.07rem",
            lineHeight: 1.7,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Slide>
  );
};

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const checklistRef = useRef(null);

  const [refHook, inViewHook] = useInView({ triggerOnce: true });
  const [refChecklist, inViewChecklist] = useInView({ triggerOnce: true });
  const [refDiagnosis, inViewDiagnosis] = useInView({ triggerOnce: true });
  const [refTools, inViewTools] = useInView({ triggerOnce: true });
  const [refCTA, inViewCTA] = useInView({ triggerOnce: true });

  const handleScrollToChecklist = () => {
    checklistRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{ width: "100vw", backgroundColor: colors.white, minHeight: "100vh" }}
    >
      {/* Section 1: The Hook */}
      {/* <Box
        ref={refHook}
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.85), rgba(240, 242, 245, 0.9))",
          backgroundSize: "cover",
          backgroundPosition: "center",
          px: { xs: 2, sm: 4 },
          py: { xs: 8, sm: 0 },
        }}
      > */}

      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          minHeight: "100vh",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          position: "relative",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          px: { xs: 0, md: 0 },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255,255,255,0.4)",
            zIndex: 0,
          },
        }}
      >
        <Fade in={inViewHook} timeout={800}>
          <Container
            maxWidth="md"
            sx={{
              textAlign: "center",
              mt: { xs: 4, sm: 0 },
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: { xs: "2rem", sm: "2.7rem", md: "3.2rem" },
                color: colors.primary,
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Ever get a good grade and think,&nbsp;
              <Box
                component="span"
                sx={{
                  color: colors.accent,
                  fontFamily: "inherit",
                  borderBottom: `3px solid ${colors.accent}`,
                  display: "inline-block",
                  pb: 0.2,
                }}
              >
                "I just got lucky"?
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontFamily: "Lora, serif",
                color: colors.bodyText,
                maxWidth: 600,
                mx: "auto",
                mb: 5,
                fontSize: { xs: "1.1rem", sm: "1.25rem" },
              }}
            >
              That feeling isn't a personality flaw. It's a pattern. And it can
              be broken.
            </Typography>

            <Zoom
              in={inViewHook}
              style={{ transitionDelay: inViewHook ? "300ms" : "0ms" }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={handleScrollToChecklist}
                sx={{
                  fontWeight: 700,
                  borderRadius: "32px",
                  px: 5,
                  py: 1.5,
                  background: colors.accent,
                  fontSize: "1.15rem",
                  "&:hover": {
                    background: colors.accentDark,
                    transform: "translateY(-3px)",
                    boxShadow: `0 4px 12px ${colors.accent}40`,
                  },
                  transition: "all 0.3s ease",
                  boxShadow: `0 2px 8px ${colors.accent}30`,
                }}
              >
                FIND OUT IF THIS IS YOU
              </Button>
            </Zoom>
          </Container>
        </Fade>
      </Box>

      {/* Section 2: The Symptom Checklist */}
      <Box
        ref={checklistRef}
        sx={{
          py: { xs: 6, md: 10 },
          background: "#fcfcfc",
          borderTop: `1px solid ${colors.gray}`,
          borderBottom: `1px solid ${colors.gray}`,
        }}
      >
        <Fade in={inViewChecklist} timeout={800}>
          <Container maxWidth="md">
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                color: colors.primary,
                textAlign: "center",
                mb: 5,
                fontSize: { xs: "1.5rem", md: "2.2rem" },
              }}
            >
              Which of These Sound Familiar?
            </Typography>

            <Grid container spacing={4} ref={refChecklist}>
              {checklistItems.map((col, colIndex) => (
                <Grid item xs={12} md={6} key={colIndex}>
                  {col.map((item, itemIndex) => (
                    <ChecklistItem
                      key={`${colIndex}-${itemIndex}`}
                      text={item}
                    />
                  ))}
                </Grid>
              ))}
            </Grid>
          </Container>
        </Fade>
      </Box>

      {/* Section 3: The Diagnosis & Reframe */}
      <Box
        sx={{
          py: { xs: 7, md: 9 },
          background: colors.gray,
        }}
      >
        <Fade in={inViewDiagnosis} timeout={800}>
          <Container maxWidth="sm">
            <Paper
              ref={refDiagnosis}
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                background: colors.white,
                borderRadius: "16px",
                borderLeft: `5px solid ${colors.accent}`,
                textAlign: "center",
                boxShadow: "0 8px 20px rgba(37, 56, 88, 0.08)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 24px rgba(37, 56, 88, 0.12)",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  mb: 3,
                  color: colors.primary,
                  fontSize: { xs: "1.2rem", sm: "1.6rem" },
                }}
              >
                If you nodded along, you're not a failure.
                <br />
                You're just experiencing Impostor Syndrome.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Lora, serif",
                  color: colors.bodyText,
                  fontSize: { xs: "1rem", sm: "1.13rem" },
                  opacity: 0.97,
                }}
              >
                It's the overwhelming feeling that you're a fraud, despite all
                the evidence showing you're capable.
                <br />
                <Box
                  component="span"
                  fontWeight="600"
                  color={colors.accentDark}
                >
                  It's not a character flaw. It's a strategy problem.
                </Box>{" "}
                And because it's a problem with a pattern, it's a problem with a
                solution.
              </Typography>
            </Paper>
          </Container>
        </Fade>
      </Box>

      {/* Section 4: The Promise (Solution/Tools) */}
      <Box sx={{ py: { xs: 7, md: 10 }, background: colors.white }}>
        <Fade in={inViewTools} timeout={800}>
          <Container maxWidth="md">
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                color: colors.primary,
                textAlign: "center",
                mb: 2,
                fontSize: { xs: "1.3rem", md: "2rem" },
              }}
            >
              You Can't "Think" Your Way Out of This. You Have to Act.
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                mb: 6,
                color: colors.subtle,
                fontFamily: "Lora, serif",
                fontSize: { xs: "1rem", md: "1.19rem" },
                maxWidth: 700,
                mx: "auto",
              }}
            >
              We don't do motivational quotes. We build practical tools to give
              your brain the hard evidence it needs.
            </Typography>

            <Grid container spacing={4} ref={refTools}>
              {tools.map((tool, index) => (
                <Grid item xs={12} sm={4} key={tool.title}>
                  <Grow
                    in={inViewTools}
                    timeout={800}
                    style={{
                      transitionDelay: inViewTools ? `${index * 200}ms` : "0ms",
                    }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        height: "100%",
                        borderRadius: "16px",
                        textAlign: "center",
                        border: "1px solid rgba(37, 56, 88, 0.08)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 12px 24px rgba(37, 56, 88, 0.1)",
                          borderColor: colors.accent + "40",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          borderRadius: "50%",
                          background: colors.accent + "15",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 3,
                        }}
                      >
                        {tool.icon}
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          color: colors.primary,
                          fontWeight: 700,
                          mb: 2,
                          fontSize: "1.12rem",
                        }}
                      >
                        {tool.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "Lora, serif",
                          color: colors.bodyText,
                          fontSize: "1rem",
                          opacity: 0.95,
                        }}
                      >
                        {tool.description}
                      </Typography>
                    </Paper>
                  </Grow>
                </Grid>
              ))}
            </Grid>

            <Box textAlign="center" sx={{ mt: 6 }}>
              <Zoom
                in={inViewTools}
                style={{ transitionDelay: inViewTools ? "600ms" : "0ms" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background: colors.accent,
                    fontWeight: 700,
                    px: 5,
                    py: 1.5,
                    borderRadius: "32px",
                    fontSize: "1.11rem",
                    "&:hover": {
                      background: colors.accentDark,
                      transform: "translateY(-3px)",
                      boxShadow: `0 4px 12px ${colors.accent}40`,
                    },
                    transition: "all 0.3s ease",
                    boxShadow: `0 2px 8px ${colors.accent}30`,
                  }}
                >
                  BROWSE ALL TOOLS
                </Button>
              </Zoom>
            </Box>
          </Container>
        </Fade>
      </Box>

      {/* Section 5: The Call to Action */}
      <Box
        sx={{
          background: colors.accent,
          py: { xs: 8, md: 10 },
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
        }}
      >
        <Fade in={inViewCTA} timeout={800}>
          <Container maxWidth="sm" ref={refCTA}>
            <Box sx={{ textAlign: "center", color: colors.white }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: "1.3rem", md: "2rem" },
                  mb: 3,
                }}
              >
                Stop Fighting Alone. Start Building Your Strategy.
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Lora, serif",
                  color: "#f4f9f9",
                  mb: 4,
                  opacity: 0.97,
                  fontSize: { xs: "1rem", md: "1.2rem" },
                }}
              >
                Get my free Impostor Syndrome First-Aid Kit.
                <br />
                It includes 3 simple tools you can use today to start gathering
                evidence and quieting that voice in your head.
              </Typography>

              <Box
                component="form"
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: isMobile ? "column" : "row",
                  justifyContent: "center",
                  mt: 3,
                }}
                autoComplete="off"
              >
                <TextField
                  variant="outlined"
                  placeholder="Enter your email address"
                  type="email"
                  required
                  sx={{
                    flex: 1,
                    background: colors.white,
                    borderRadius: "30px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "30px",
                      fontFamily: "Lora, serif",
                    },
                    minWidth: "220px",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: colors.accentDark }} />
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    borderRadius: "30px",
                    background: colors.primary,
                    color: colors.white,
                    fontWeight: 700,
                    px: 4,
                    py: 1.4,
                    fontSize: "1rem",
                    "&:hover": {
                      background: "#1a202a",
                      transform: "translateY(-2px)",
                      boxShadow: `0 4px 8px rgba(37, 56, 88, 0.3)`,
                    },
                    transition: "all 0.3s ease",
                    minWidth: "180px",
                  }}
                >
                  SEND ME THE KIT
                </Button>
              </Box>
            </Box>
          </Container>
        </Fade>
      </Box>
    </Box>
  );
}
