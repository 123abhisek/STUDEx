
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
//   Grow,
//   Slide,
//   Fade,
//   Zoom,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import { useInView } from "react-intersection-observer";

// // COLORS
// const colors = {
//   primary: "#253858", // deep blue
//   gray: "#f0f2f5",
//   accent: "#2abbb0", // muted teal
//   accentDark: "#229a94",
//   white: "#fff",
//   bodyText: "#2f2f2f",
//   subtle: "#888",
// };

// function HandDrawnCheck({ color = colors.accent }) {
//   return (
//     <svg width="26" height="26" viewBox="0 0 26 26">
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
//     "You downplay your success. You say things like 'it wasn't that hard' or 'anyone could have done it.'",
//     "You dread being called on in class. Even when you know the answer, you're terrified of getting it wrong.",
//     "You procrastinate on big projects. The fear of the final product not being perfect is paralyzing.",
//     "You don't apply for things unless you meet 110% of the qualifications.",
//   ],
//   [
//     "You find it hard to accept a compliment. Your first instinct is to deflect it or point out a flaw.",
//     "You compare yourself constantly to your classmates and always feel like you're behind.",
//     "You avoid asking for help. You're worried it will expose you as incompetent.",
//     "You feel relief, not pride, after finishing a huge task. The main feeling is 'Phew, I didn't get caught.'",
//   ],
// ];

// const tools = [
//   {
//     title: "Evidence Log",
//     icon: <AssignmentIcon sx={{ fontSize: 36, color: colors.accentDark }} />,
//     description:
//       "A simple log to scientifically prove your achievements aren't just luck. Your brain's best defense against the 'I'm a fraud' feeling.",
//   },
//   {
//     title: "'Smart Question' Scripts",
//     icon: <MailOutlineIcon sx={{ fontSize: 36, color: colors.accentDark }} />,
//     description:
//       "Copy-and-paste scripts for emailing professors and speaking up in class without the fear of 'looking dumb.'",
//   },
//   {
//     title: "Failure Resume",
//     icon: <EmojiEventsIcon sx={{ fontSize: 36, color: colors.accentDark }} />,
//     description:
//       "A worksheet to reframe your mistakes as proof of resilience, not weakness.",
//   },
// ];

// const ChecklistItem = ({ text }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Slide in={inView} direction="up" timeout={800}>
//       <Box
//         ref={ref}
//         sx={{
//           display: "flex",
//           alignItems: "flex-start",
//           mb: 3,
//           transition: "transform 0.3s ease",
//           "&:hover": {
//             transform: "translateX(5px)",
//           },
//         }}
//       >
//         <Box sx={{ mr: 2, mt: "2px" }}>
//           <HandDrawnCheck />
//         </Box>
//         <Typography
//           sx={{
//             fontFamily: "Lora, Merriweather, serif",
//             color: colors.bodyText,
//             fontSize: "1.07rem",
//             lineHeight: 1.7,
//           }}
//         >
//           {text}
//         </Typography>
//       </Box>
//     </Slide>
//   );
// };

// export default function Home() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const checklistRef = useRef(null);

//   const [refHook, inViewHook] = useInView({ triggerOnce: true });
//   const [refChecklist, inViewChecklist] = useInView({ triggerOnce: true });
//   const [refDiagnosis, inViewDiagnosis] = useInView({ triggerOnce: true });
//   const [refTools, inViewTools] = useInView({ triggerOnce: true });
//   const [refCTA, inViewCTA] = useInView({ triggerOnce: true });

//   const handleScrollToChecklist = () => {
//     checklistRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <Box
//       sx={{ width: "100vw", backgroundColor: colors.white, minHeight: "100vh" }}
//     >
//       {/* Section 1: The Hook */}

//       <Box
//         ref={refHook} // Add this to track visibility
//         sx={{
//           width: "100%",
//           maxWidth: "100%",
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           position: "relative",
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           px: { xs: 0, md: 0 },
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(255,255,255,0.4)",
//             zIndex: 1, // Keep overlay at z-index 1
//           },
//         }}
//       >
//         <Fade in={inViewHook} timeout={800}>
//           <Container
//             maxWidth="md"
//             sx={{
//               textAlign: "center",
//               mt: { xs: 4, sm: 0 },
//               position: "relative", 
//               zIndex: 2,
//             }}
//           >
//             <Typography
//               variant="h2"
//               gutterBottom
//               sx={{
//                 fontFamily: "Montserrat, sans-serif",
//                 fontWeight: 800,
//                 fontSize: { xs: "2rem", sm: "2.7rem", md: "3.2rem" },
//                 color: colors.primary,
//                 lineHeight: 1.2,
//                 mb: 3,
//               }}
//             >
//               Ever get a good grade and think,&nbsp;
//               <Box
//                 component="span"
//                 sx={{
//                   color: colors.accent,
//                   fontFamily: "inherit",
//                   borderBottom: `3px solid ${colors.accent}`,
//                   display: "inline-block",
//                   pb: 0.2,
//                 }}
//               >
//                 "I just got lucky"?
//               </Box>
//             </Typography>

//             <Typography
//               variant="h6"
//               sx={{
//                 fontFamily: "Lora, serif",
//                 color: colors.bodyText,
//                 maxWidth: 600,
//                 mx: "auto",
//                 mb: 5,
//                 fontSize: { xs: "1.1rem", sm: "1.25rem" },
//               }}
//             >
//               That feeling isn't a personality flaw. It's a pattern. And it can
//               be broken.
//             </Typography>

//             <Zoom
//               in={inViewHook}
//               style={{ transitionDelay: inViewHook ? "300ms" : "0ms" }}
//             >
//               <Button
//                 variant="contained"
//                 size="large"
//                 onClick={handleScrollToChecklist}
//                 sx={{
//                   fontWeight: 700,
//                   borderRadius: "32px",
//                   px: 5,
//                   py: 1.5,
//                   background: colors.accent,
//                   fontSize: "1.15rem",
//                   "&:hover": {
//                     background: colors.accentDark,
//                     transform: "translateY(-3px)",
//                     boxShadow: `0 4px 12px ${colors.accent}40`,
//                   },
//                   transition: "all 0.3s ease",
//                   boxShadow: `0 2px 8px ${colors.accent}30`,
//                 }}
//               >
//                 FIND OUT IF THIS IS YOU
//               </Button>
//             </Zoom>
//           </Container>
//         </Fade>
//       </Box>

//       {/* Section 2: The Symptom Checklist */}
//       <Box
//         ref={checklistRef}
//         sx={{
//           py: { xs: 6, md: 10 },
//           background: "#fcfcfc",
//           borderTop: `1px solid ${colors.gray}`,
//           borderBottom: `1px solid ${colors.gray}`,
//         }}
//       >
//         <Fade in={inViewChecklist} timeout={800}>
//           <Container maxWidth="md">
//             <Typography
//               variant="h4"
//               gutterBottom
//               sx={{
//                 fontFamily: "Montserrat, sans-serif",
//                 fontWeight: 700,
//                 color: colors.primary,
//                 textAlign: "center",
//                 mb: 5,
//                 fontSize: { xs: "1.5rem", md: "2.2rem" },
//               }}
//             >
//               Which of These Sound Familiar?
//             </Typography>

//             <Grid container spacing={4} ref={refChecklist}>
//               {checklistItems.map((col, colIndex) => (
//                 <Grid item xs={12} md={6} key={colIndex}>
//                   {col.map((item, itemIndex) => (
//                     <ChecklistItem
//                       key={`${colIndex}-${itemIndex}`}
//                       text={item}
//                     />
//                   ))}
//                 </Grid>
//               ))}
//             </Grid>
//           </Container>
//         </Fade>
//       </Box>

//       {/* Section 3: The Diagnosis & Reframe */}
//       <Box
//         sx={{
//           py: { xs: 7, md: 9 },
//           background: colors.gray,
//         }}
//       >
//         <Fade in={inViewDiagnosis} timeout={800}>
//           <Container maxWidth="sm">
//             <Paper
//               ref={refDiagnosis}
//               elevation={0}
//               sx={{
//                 p: { xs: 3, sm: 4 },
//                 background: colors.white,
//                 borderRadius: "16px",
//                 borderLeft: `5px solid ${colors.accent}`,
//                 textAlign: "center",
//                 boxShadow: "0 8px 20px rgba(37, 56, 88, 0.08)",
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                 "&:hover": {
//                   transform: "translateY(-5px)",
//                   boxShadow: "0 12px 24px rgba(37, 56, 88, 0.12)",
//                 },
//               }}
//             >
//               <Typography
//                 variant="h5"
//                 sx={{
//                   fontFamily: "Montserrat, sans-serif",
//                   fontWeight: 700,
//                   mb: 3,
//                   color: colors.primary,
//                   fontSize: { xs: "1.2rem", sm: "1.6rem" },
//                 }}
//               >
//                 If you nodded along, you're not a failure.
//                 <br />
//                 You're just experiencing Impostor Syndrome.
//               </Typography>

//               <Typography
//                 sx={{
//                   fontFamily: "Lora, serif",
//                   color: colors.bodyText,
//                   fontSize: { xs: "1rem", sm: "1.13rem" },
//                   opacity: 0.97,
//                 }}
//               >
//                 It's the overwhelming feeling that you're a fraud, despite all
//                 the evidence showing you're capable.
//                 <br />
//                 <Box
//                   component="span"
//                   fontWeight="600"
//                   color={colors.accentDark}
//                 >
//                   It's not a character flaw. It's a strategy problem.
//                 </Box>{" "}
//                 And because it's a problem with a pattern, it's a problem with a
//                 solution.
//               </Typography>
//             </Paper>
//           </Container>
//         </Fade>
//       </Box>

//       {/* Section 4: The Promise (Solution/Tools) */}
//       <Box sx={{ py: { xs: 7, md: 10 }, background: colors.white }}>
//         <Fade in={inViewTools} timeout={800}>
//           <Container maxWidth="md">
//             <Typography
//               variant="h4"
//               gutterBottom
//               sx={{
//                 fontFamily: "Montserrat, sans-serif",
//                 fontWeight: 700,
//                 color: colors.primary,
//                 textAlign: "center",
//                 mb: 2,
//                 fontSize: { xs: "1.3rem", md: "2rem" },
//               }}
//             >
//               You Can't "Think" Your Way Out of This. You Have to Act.
//             </Typography>

//             <Typography
//               variant="subtitle1"
//               sx={{
//                 textAlign: "center",
//                 mb: 6,
//                 color: colors.subtle,
//                 fontFamily: "Lora, serif",
//                 fontSize: { xs: "1rem", md: "1.19rem" },
//                 maxWidth: 700,
//                 mx: "auto",
//               }}
//             >
//               We don't do motivational quotes. We build practical tools to give
//               your brain the hard evidence it needs.
//             </Typography>

//             <Grid container spacing={4} ref={refTools}>
//               {tools.map((tool, index) => (
//                 <Grid item xs={12} sm={4} key={tool.title}>
//                   <Grow
//                     in={inViewTools}
//                     timeout={800}
//                     style={{
//                       transitionDelay: inViewTools ? `${index * 200}ms` : "0ms",
//                     }}
//                   >
//                     <Paper
//                       elevation={0}
//                       sx={{
//                         p: 3,
//                         height: "100%",
//                         borderRadius: "16px",
//                         textAlign: "center",
//                         border: "1px solid rgba(37, 56, 88, 0.08)",
//                         transition: "all 0.3s ease",
//                         "&:hover": {
//                           transform: "translateY(-8px)",
//                           boxShadow: "0 12px 24px rgba(37, 56, 88, 0.1)",
//                           borderColor: colors.accent + "40",
//                         },
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           width: 70,
//                           height: 70,
//                           borderRadius: "50%",
//                           background: colors.accent + "15",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           mx: "auto",
//                           mb: 3,
//                         }}
//                       >
//                         {tool.icon}
//                       </Box>

//                       <Typography
//                         variant="h6"
//                         sx={{
//                           fontFamily: "Montserrat, sans-serif",
//                           color: colors.primary,
//                           fontWeight: 700,
//                           mb: 2,
//                           fontSize: "1.12rem",
//                         }}
//                       >
//                         {tool.title}
//                       </Typography>

//                       <Typography
//                         sx={{
//                           fontFamily: "Lora, serif",
//                           color: colors.bodyText,
//                           fontSize: "1rem",
//                           opacity: 0.95,
//                         }}
//                       >
//                         {tool.description}
//                       </Typography>
//                     </Paper>
//                   </Grow>
//                 </Grid>
//               ))}
//             </Grid>

//             <Box textAlign="center" sx={{ mt: 6 }}>
//               <Zoom
//                 in={inViewTools}
//                 style={{ transitionDelay: inViewTools ? "600ms" : "0ms" }}
//               >
//                 <Button
//                   variant="contained"
//                   sx={{
//                     background: colors.accent,
//                     fontWeight: 700,
//                     px: 5,
//                     py: 1.5,
//                     borderRadius: "32px",
//                     fontSize: "1.11rem",
//                     "&:hover": {
//                       background: colors.accentDark,
//                       transform: "translateY(-3px)",
//                       boxShadow: `0 4px 12px ${colors.accent}40`,
//                     },
//                     transition: "all 0.3s ease",
//                     boxShadow: `0 2px 8px ${colors.accent}30`,
//                   }}
//                 >
//                   BROWSE ALL TOOLS
//                 </Button>
//               </Zoom>
//             </Box>
//           </Container>
//         </Fade>
//       </Box>

//       {/* Section 5: The Call to Action */}
//       <Box
//         sx={{
//           background: colors.accent,
//           py: { xs: 8, md: 10 },
//           borderTopLeftRadius: "40px",
//           borderTopRightRadius: "40px",
//         }}
//       >
//         <Fade in={inViewCTA} timeout={800}>
//           <Container maxWidth="sm" ref={refCTA}>
//             <Box sx={{ textAlign: "center", color: colors.white }}>
//               <Typography
//                 variant="h4"
//                 gutterBottom
//                 sx={{
//                   fontFamily: "Montserrat, sans-serif",
//                   fontWeight: 800,
//                   fontSize: { xs: "1.3rem", md: "2rem" },
//                   mb: 3,
//                 }}
//               >
//                 Stop Fighting Alone. Start Building Your Strategy.
//               </Typography>

//               <Typography
//                 variant="subtitle1"
//                 sx={{
//                   fontFamily: "Lora, serif",
//                   color: "#f4f9f9",
//                   mb: 4,
//                   opacity: 0.97,
//                   fontSize: { xs: "1rem", md: "1.2rem" },
//                 }}
//               >
//                 Get my free Impostor Syndrome First-Aid Kit.
//                 <br />
//                 It includes 3 simple tools you can use today to start gathering
//                 evidence and quieting that voice in your head.
//               </Typography>

//               <Box
//                 component="form"
//                 sx={{
//                   display: "flex",
//                   gap: 2,
//                   flexDirection: isMobile ? "column" : "row",
//                   justifyContent: "center",
//                   mt: 3,
//                 }}
//                 autoComplete="off"
//               >
//                 <TextField
//                   variant="outlined"
//                   placeholder="Enter your email address"
//                   type="email"
//                   required
//                   sx={{
//                     flex: 1,
//                     background: colors.white,
//                     borderRadius: "30px",
//                     "& .MuiOutlinedInput-root": {
//                       borderRadius: "30px",
//                       fontFamily: "Lora, serif",
//                     },
//                     minWidth: "220px",
//                   }}
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <EmailIcon sx={{ color: colors.accentDark }} />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />

//                 <Button
//                   type="submit"
//                   variant="contained"
//                   sx={{
//                     borderRadius: "30px",
//                     background: colors.primary,
//                     color: colors.white,
//                     fontWeight: 700,
//                     px: 4,
//                     py: 1.4,
//                     fontSize: "1rem",
//                     "&:hover": {
//                       background: "#1a202a",
//                       transform: "translateY(-2px)",
//                       boxShadow: `0 4px 8px rgba(37, 56, 88, 0.3)`,
//                     },
//                     transition: "all 0.3s ease",
//                     minWidth: "180px",
//                   }}
//                 >
//                   SEND ME THE KIT
//                 </Button>
//               </Box>
//             </Box>
//           </Container>
//         </Fade>
//       </Box>
//     </Box>
//   );
// }




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
//   Grow,
//   Slide,
//   Fade,
//   Zoom,
//   useMediaQuery,
//   useTheme,
//   Card,
//   CardContent,
//   Avatar,
// } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

// // COLORS
// const colors = {
//   primary: "#253858", // deep blue
//   gray: "#f0f2f5",
//   accent: "#2abbb0", // muted teal
//   accentDark: "#229a94",
//   white: "#fff",
//   bodyText: "#2f2f2f",
//   subtle: "#888",
// };

// function HandDrawnCheck({ color = colors.accent }) {
//   return (
//     <svg width="26" height="26" viewBox="0 0 26 26">
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
//     "You downplay your success. You say things like 'it wasn't that hard' or 'anyone could have done it.'",
//     "You dread being called on in class. Even when you know the answer, you're terrified of getting it wrong.",
//     "You procrastinate on big projects. The fear of the final product not being perfect is paralyzing.",
//     "You don't apply for things unless you meet 110% of the qualifications.",
//   ],
//   [
//     "You find it hard to accept a compliment. Your first instinct is to deflect it or point out a flaw.",
//     "You compare yourself constantly to your classmates and always feel like you're behind.",
//     "You avoid asking for help. You're worried it will expose you as incompetent.",
//     "You feel relief, not pride, after finishing a huge task. The main feeling is 'Phew, I didn't get caught.'",
//   ],
// ];

// const tools = [
//   {
//     title: "Evidence Log",
//     icon: <AssignmentIcon sx={{ fontSize: 36, color: colors.accentDark }} />,
//     description:
//       "A simple log to scientifically prove your achievements aren't just luck. Your brain's best defense against the 'I'm a fraud' feeling.",
//   },
//   {
//     title: "'Smart Question' Scripts",
//     icon: <MailOutlineIcon sx={{ fontSize: 36, color: colors.accentDark }} />,
//     description:
//       "Copy-and-paste scripts for emailing professors and speaking up in class without the fear of 'looking dumb.'",
//   },
//   {
//     title: "Failure Resume",
//     icon: <EmojiEventsIcon sx={{ fontSize: 36, color: colors.accentDark }} />,
//     description:
//       "A worksheet to reframe your mistakes as proof of resilience, not weakness.",
//   },
// ];

// const testimonials = [
//   {
//     name: "Sarah K.",
//     role: "Computer Science Student",
//     quote: "The evidence log completely changed how I view my accomplishments.",
//     avatar: "https://randomuser.me/api/portraits/women/32.jpg",
//   },
//   {
//     name: "Michael T.",
//     role: "Medical Student",
//     quote: "Finally stopped feeling like a fraud in my clinical rotations.",
//     avatar: "https://randomuser.me/api/portraits/men/22.jpg",
//   },
//   {
//     name: "Priya R.",
//     role: "Engineering Student",
//     quote: "The scripts gave me confidence to speak up in class discussions.",
//     avatar: "https://randomuser.me/api/portraits/women/65.jpg",
//   },
// ];

// const ChecklistItem = ({ text }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Slide in={inView} direction="up" timeout={800}>
//       <Box
//         ref={ref}
//         sx={{
//           display: "flex",
//           alignItems: "flex-start",
//           mb: 3,
//           transition: "transform 0.3s ease",
//           "&:hover": {
//             transform: "translateX(5px)",
//           },
//         }}
//       >
//         <Box sx={{ mr: 2, mt: "2px" }}>
//           <HandDrawnCheck />
//         </Box>
//         <Typography
//           sx={{
//             fontFamily: "Lora, Merriweather, serif",
//             color: colors.bodyText,
//             fontSize: "1.07rem",
//             lineHeight: 1.7,
//           }}
//         >
//           {text}
//         </Typography>
//       </Box>
//     </Slide>
//   );
// };

// export default function Home() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const checklistRef = useRef(null);

//   const [refHook, inViewHook] = useInView({ triggerOnce: true });
//   const [refChecklist, inViewChecklist] = useInView({ triggerOnce: true });
//   const [refDiagnosis, inViewDiagnosis] = useInView({ triggerOnce: true });
//   const [refTools, inViewTools] = useInView({ triggerOnce: true });
//   const [refTestimonials, inViewTestimonials] = useInView({ triggerOnce: true });
//   const [refCTA, inViewCTA] = useInView({ triggerOnce: true });

//   const handleScrollToChecklist = () => {
//     checklistRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <Box
//       sx={{ width: "100vw", backgroundColor: colors.white, minHeight: "100vh" }}
//     >
//       {/* Section 1: The Hook */}
//       <Box
//         ref={refHook}
//         sx={{
//           width: "100%",
//           maxWidth: "100%",
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           position: "relative",
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           px: { xs: 0, md: 0 },
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(240,242,245,0.95) 100%)",
//             zIndex: 1,
//           },
//         }}
//       >
//         <Fade in={inViewHook} timeout={800}>
//           <Container
//             maxWidth="md"
//             sx={{
//               textAlign: "center",
//               mt: { xs: 4, sm: 0 },
//               position: "relative",
//               zIndex: 2,
//               padding: 4,
//               borderRadius: 4,
//               backgroundColor: "rgba(255,255,255,0.7)",
//               backdropFilter: "blur(8px)",
//               boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
//             }}
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <Typography
//                 variant="h2"
//                 gutterBottom
//                 sx={{
//                   fontFamily: "Montserrat, sans-serif",
//                   fontWeight: 800,
//                   fontSize: { xs: "2rem", sm: "2.7rem", md: "3.2rem" },
//                   color: colors.primary,
//                   lineHeight: 1.2,
//                   mb: 3,
//                 }}
//               >
//                 Ever get a good grade and think,&nbsp;
//                 <Box
//                   component="span"
//                   sx={{
//                     color: colors.accent,
//                     fontFamily: "inherit",
//                     borderBottom: `3px solid ${colors.accent}`,
//                     display: "inline-block",
//                     pb: 0.2,
//                   }}
//                 >
//                   "I just got lucky"?
//                 </Box>
//               </Typography>

//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontFamily: "Lora, serif",
//                   color: colors.bodyText,
//                   maxWidth: 600,
//                   mx: "auto",
//                   mb: 5,
//                   fontSize: { xs: "1.1rem", sm: "1.25rem" },
//                 }}
//               >
//                 That feeling isn't a personality flaw. It's a pattern. And it can
//                 be broken.
//               </Typography>

//               <Zoom
//                 in={inViewHook}
//                 style={{ transitionDelay: inViewHook ? "300ms" : "0ms" }}
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     variant="contained"
//                     size="large"
//                     onClick={handleScrollToChecklist}
//                     sx={{
//                       fontWeight: 700,
//                       borderRadius: "32px",
//                       px: 5,
//                       py: 1.5,
//                       background: colors.accent,
//                       fontSize: "1.15rem",
//                       "&:hover": {
//                         background: colors.accentDark,
//                         transform: "translateY(-3px)",
//                         boxShadow: `0 4px 12px ${colors.accent}40`,
//                       },
//                       transition: "all 0.3s ease",
//                       boxShadow: `0 2px 8px ${colors.accent}30`,
//                     }}
//                   >
//                     FIND OUT IF THIS IS YOU
//                   </Button>
//                 </motion.div>
//               </Zoom>
//             </motion.div>
//           </Container>
//         </Fade>
//       </Box>

//       {/* Section 2: The Symptom Checklist */}
//       <Box
//         ref={checklistRef}
//         sx={{
//           py: { xs: 6, md: 10 },
//           background: "#fcfcfc",
//           borderTop: `1px solid ${colors.gray}`,
//           borderBottom: `1px solid ${colors.gray}`,
//         }}
//       >
//         <Fade in={inViewChecklist} timeout={800}>
//           <Container maxWidth="md">
//             <Typography
//               variant="h4"
//               gutterBottom
//               sx={{
//                 fontFamily: "Montserrat, sans-serif",
//                 fontWeight: 700,
//                 color: colors.primary,
//                 textAlign: "center",
//                 mb: 5,
//                 fontSize: { xs: "1.5rem", md: "2.2rem" },
//               }}
//             >
//               Which of These Sound Familiar?
//             </Typography>

//             <Grid container spacing={4} ref={refChecklist}>
//               {checklistItems.map((col, colIndex) => (
//                 <Grid item xs={12} md={6} key={colIndex}>
//                   {col.map((item, itemIndex) => (
//                     <ChecklistItem
//                       key={`${colIndex}-${itemIndex}`}
//                       text={item}
//                     />
//                   ))}
//                 </Grid>
//               ))}
//             </Grid>
//           </Container>
//         </Fade>
//       </Box>

//       {/* Section 3: The Diagnosis & Reframe */}
//       <Box
//         sx={{
//           py: { xs: 7, md: 9 },
//           background: colors.gray,
//         }}
//       >
//         <Fade in={inViewDiagnosis} timeout={800}>
//           <Container maxWidth="sm">
//             <Paper
//               ref={refDiagnosis}
//               elevation={3}
//               sx={{
//                 p: { xs: 3, sm: 4 },
//                 background: colors.white,
//                 borderRadius: "16px",
//                 textAlign: "center",
//                 transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
//                 "&:hover": {
//                   transform: "translateY(-8px)",
//                   boxShadow: "0 16px 32px rgba(37, 56, 88, 0.15)",
//                 },
//               }}
//             >
//               <Box
//                 sx={{
//                   width: 60,
//                   height: 60,
//                   borderRadius: "50%",
//                   background: `${colors.accent}20`,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   mx: "auto",
//                   mb: 3,
//                 }}
//               >
//                 <CheckCircleOutlineIcon
//                   sx={{ fontSize: 32, color: colors.accentDark }}
//                 />
//               </Box>
//               <Typography
//                 variant="h5"
//                 sx={{
//                   fontFamily: "Montserrat, sans-serif",
//                   fontWeight: 700,
//                   mb: 3,
//                   color: colors.primary,
//                   fontSize: { xs: "1.2rem", sm: "1.6rem" },
//                 }}
//               >
//                 If you nodded along, you're not a failure.
//                 <br />
//                 You're just experiencing Impostor Syndrome.
//               </Typography>

//               <Typography
//                 sx={{
//                   fontFamily: "Lora, serif",
//                   color: colors.bodyText,
//                   fontSize: { xs: "1rem", sm: "1.13rem" },
//                   opacity: 0.97,
//                 }}
//               >
//                 It's the overwhelming feeling that you're a fraud, despite all
//                 the evidence showing you're capable.
//                 <br />
//                 <Box
//                   component="span"
//                   fontWeight="600"
//                   color={colors.accentDark}
//                 >
//                   It's not a character flaw. It's a strategy problem.
//                 </Box>{" "}
//                 And because it's a problem with a pattern, it's a problem with a
//                 solution.
//               </Typography>
//             </Paper>
//           </Container>
//         </Fade>
//       </Box>

//       {/* Section 4: The Promise (Solution/Tools) */}
//       <Box sx={{ py: { xs: 7, md: 10 }, background: colors.white }}>
//         <Fade in={inViewTools} timeout={800}>
//           <Container maxWidth="md">
//             <Typography
//               variant="h4"
//               gutterBottom
//               sx={{
//                 fontFamily: "Montserrat, sans-serif",
//                 fontWeight: 700,
//                 color: colors.primary,
//                 textAlign: "center",
//                 mb: 2,
//                 fontSize: { xs: "1.3rem", md: "2rem" },
//               }}
//             >
//               You Can't "Think" Your Way Out of This. You Have to Act.
//             </Typography>

//             <Typography
//               variant="subtitle1"
//               sx={{
//                 textAlign: "center",
//                 mb: 6,
//                 color: colors.subtle,
//                 fontFamily: "Lora, serif",
//                 fontSize: { xs: "1rem", md: "1.19rem" },
//                 maxWidth: 700,
//                 mx: "auto",
//               }}
//             >
//               We don't do motivational quotes. We build practical tools to give
//               your brain the hard evidence it needs.
//             </Typography>

//             <Grid container spacing={4} ref={refTools}>
//               {tools.map((tool, index) => (
//                 <Grid item xs={12} sm={4} key={tool.title}>
//                   <Grow
//                     in={inViewTools}
//                     timeout={800}
//                     style={{
//                       transitionDelay: inViewTools ? `${index * 200}ms` : "0ms",
//                     }}
//                   >
//                     <motion.div
//                       whileHover={{ y: -10 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       <Card
//                         elevation={3}
//                         sx={{
//                           height: "100%",
//                           borderRadius: "16px",
//                           transition: "all 0.3s ease",
//                           "&:hover": {
//                             boxShadow: "0 20px 40px rgba(37, 56, 88, 0.15)",
//                           },
//                         }}
//                       >
//                         <CardContent sx={{ p: 3, textAlign: "center" }}>
//                           <Box
//                             sx={{
//                               width: 70,
//                               height: 70,
//                               borderRadius: "50%",
//                               background: colors.accent + "15",
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "center",
//                               mx: "auto",
//                               mb: 3,
//                             }}
//                           >
//                             {tool.icon}
//                           </Box>

//                           <Typography
//                             variant="h6"
//                             sx={{
//                               fontFamily: "Montserrat, sans-serif",
//                               color: colors.primary,
//                               fontWeight: 700,
//                               mb: 2,
//                               fontSize: "1.12rem",
//                             }}
//                           >
//                             {tool.title}
//                           </Typography>

//                           <Typography
//                             sx={{
//                               fontFamily: "Lora, serif",
//                               color: colors.bodyText,
//                               fontSize: "1rem",
//                               opacity: 0.95,
//                             }}
//                           >
//                             {tool.description}
//                           </Typography>
//                         </CardContent>
//                       </Card>
//                     </motion.div>
//                   </Grow>
//                 </Grid>
//               ))}
//             </Grid>

//             <Box textAlign="center" sx={{ mt: 6 }}>
//               <Zoom
//                 in={inViewTools}
//                 style={{ transitionDelay: inViewTools ? "600ms" : "0ms" }}
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     variant="contained"
//                     sx={{
//                       background: colors.accent,
//                       fontWeight: 700,
//                       px: 5,
//                       py: 1.5,
//                       borderRadius: "32px",
//                       fontSize: "1.11rem",
//                       "&:hover": {
//                         background: colors.accentDark,
//                         transform: "translateY(-3px)",
//                         boxShadow: `0 4px 12px ${colors.accent}40`,
//                       },
//                       transition: "all 0.3s ease",
//                       boxShadow: `0 2px 8px ${colors.accent}30`,
//                     }}
//                   >
//                     BROWSE ALL TOOLS
//                   </Button>
//                 </motion.div>
//               </Zoom>
//             </Box>
//           </Container>
//         </Fade>
//       </Box>

//       {/* Section 5: Testimonials */}
//       <Box sx={{ py: { xs: 7, md: 10 }, background: colors.gray }}>
//         <Fade in={inViewTestimonials} timeout={800}>
//           <Container maxWidth="md" ref={refTestimonials}>
//             <Typography
//               variant="h4"
//               gutterBottom
//               sx={{
//                 fontFamily: "Montserrat, sans-serif",
//                 fontWeight: 700,
//                 color: colors.primary,
//                 textAlign: "center",
//                 mb: 6,
//                 fontSize: { xs: "1.3rem", md: "2rem" },
//               }}
//             >
//               Students Who Found Their Confidence
//             </Typography>

//             <Grid container spacing={4}>
//               {testimonials.map((testimonial, index) => (
//                 <Grid item xs={12} md={4} key={index}>
//                   <Grow
//                     in={inViewTestimonials}
//                     timeout={800}
//                     style={{
//                       transitionDelay: inViewTestimonials
//                         ? `${index * 200}ms`
//                         : "0ms",
//                     }}
//                   >
//                     <Card
//                       elevation={0}
//                       sx={{
//                         height: "100%",
//                         borderRadius: "16px",
//                         background: colors.white,
//                         transition: "all 0.3s ease",
//                         "&:hover": {
//                           transform: "translateY(-8px)",
//                           boxShadow: "0 16px 32px rgba(0,0,0,0.1)",
//                         },
//                       }}
//                     >
//                       <CardContent sx={{ p: 3 }}>
//                         <Box
//                           sx={{
//                             display: "flex",
//                             alignItems: "center",
//                             mb: 3,
//                           }}
//                         >
//                           <Avatar
//                             src={testimonial.avatar}
//                             sx={{ width: 56, height: 56, mr: 2 }}
//                           />
//                           <Box>
//                             <Typography
//                               variant="subtitle1"
//                               fontWeight={600}
//                               color={colors.primary}
//                             >
//                               {testimonial.name}
//                             </Typography>
//                             <Typography variant="body2" color={colors.subtle}>
//                               {testimonial.role}
//                             </Typography>
//                           </Box>
//                         </Box>
//                         <Typography
//                           sx={{
//                             fontFamily: "Lora, serif",
//                             color: colors.bodyText,
//                             fontSize: "1rem",
//                             fontStyle: "italic",
//                             position: "relative",
//                             pl: 3,
//                             "&:before": {
//                               content: '"“"',
//                               position: "absolute",
//                               left: 0,
//                               top: 0,
//                               fontSize: "3rem",
//                               color: colors.accent,
//                               lineHeight: 1,
//                             },
//                           }}
//                         >
//                           {testimonial.quote}
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </Grow>
//                 </Grid>
//               ))}
//             </Grid>
//           </Container>
//         </Fade>
//       </Box>

//       {/* Section 6: The Call to Action */}
//       <Box
//         sx={{
//           background: colors.accent,
//           py: { xs: 8, md: 10 },
//           borderTopLeftRadius: "40px",
//           borderTopRightRadius: "40px",
//           position: "relative",
//           overflow: "hidden",
//           "&:before": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 55%)",
//             pointerEvents: "none",
//           },
//         }}
//       >
//         <Fade in={inViewCTA} timeout={800}>
//           <Container maxWidth="sm" ref={refCTA}>
//             <Box sx={{ textAlign: "center", color: colors.white, position: "relative", zIndex: 1 }}>
//               <Typography
//                 variant="h4"
//                 gutterBottom
//                 sx={{
//                   fontFamily: "Montserrat, sans-serif",
//                   fontWeight: 800,
//                   fontSize: { xs: "1.3rem", md: "2rem" },
//                   mb: 3,
//                 }}
//               >
//                 Stop Fighting Alone. Start Building Your Strategy.
//               </Typography>

//               <Typography
//                 variant="subtitle1"
//                 sx={{
//                   fontFamily: "Lora, serif",
//                   color: "#f4f9f9",
//                   mb: 4,
//                   opacity: 0.97,
//                   fontSize: { xs: "1rem", md: "1.2rem" },
//                 }}
//               >
//                 Get my free Impostor Syndrome First-Aid Kit.
//                 <br />
//                 It includes 3 simple tools you can use today to start gathering
//                 evidence and quieting that voice in your head.
//               </Typography>

//               <Box
//                 component="form"
//                 sx={{
//                   display: "flex",
//                   gap: 2,
//                   flexDirection: isMobile ? "column" : "row",
//                   justifyContent: "center",
//                   mt: 3,
//                 }}
//                 autoComplete="off"
//               >
//                 <motion.div
//                   whileHover={{ y: -3 }}
//                   style={{ flex: 1, minWidth: "220px" }}
//                 >
//                   <TextField
//                     variant="outlined"
//                     placeholder="Enter your email address"
//                     type="email"
//                     required
//                     fullWidth
//                     sx={{
//                       background: colors.white,
//                       borderRadius: "30px",
//                       "& .MuiOutlinedInput-root": {
//                         borderRadius: "30px",
//                         fontFamily: "Lora, serif",
//                       },
//                     }}
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <EmailIcon sx={{ color: colors.accentDark }} />
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     sx={{
//                       borderRadius: "30px",
//                       background: colors.primary,
//                       color: colors.white,
//                       fontWeight: 700,
//                       px: 4,
//                       py: 1.4,
//                       fontSize: "1rem",
//                       "&:hover": {
//                         background: "#1a202a",
//                         transform: "translateY(-2px)",
//                         boxShadow: `0 4px 8px rgba(37, 56, 88, 0.3)`,
//                       },
//                       transition: "all 0.3s ease",
//                       minWidth: "180px",
//                     }}
//                   >
//                     SEND ME THE KIT
//                   </Button>
//                 </motion.div>
//               </Box>
//             </Box>
//           </Container>
//         </Fade>
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
  Card,
  Avatar,
  useTheme,
  useMediaQuery,
  Paper,
  GlobalStyles,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { motion } from "framer-motion";

const colors = {
  bg: "#F7F8FC",
  accent: "#18B6F6",
  accentDark: "#19609C",
  text: "#21334F",
  white: "#fff",
  subtle: "#A6B2C6",
  card: "#FAFAFF",
};

// --- SECTION 1: THE HOOK ---
const heroHeadline = `Ever get a good grade and think, "I just got lucky"?`;
const heroSub = `That feeling isn't a personality flaw. It's a pattern. And it can be broken.`;
const heroButton = `FIND OUT IF THIS IS YOU`;

// --- SECTION 2: THE SYMPTOM CHECKLIST ---
const checklistHeadline = `Which of These Sound Familiar?`;
const checklistCol1 = [
  `You downplay your success. You say things like "it wasn't that hard" or "anyone could have done it."`,
  `You dread being called on in class. Even when you know the answer, you're terrified of getting it wrong.`,
  `You procrastinate on big projects. The fear of the final product not being perfect is paralyzing.`,
  `You don't apply for things unless you meet 110% of the qualifications.`,
];
const checklistCol2 = [
  `You find it hard to accept a compliment. Your first instinct is to deflect it or point out a flaw.`,
  `You compare yourself constantly to your classmates and always feel like you're behind.`,
  `You avoid asking for help. You're worried it will expose you as incompetent.`,
  `You feel relief, not pride, after finishing a huge task. The main feeling is "Phew, I didn't get caught."`,
];

// --- SECTION 3: THE DIAGNOSIS & REFRAME ---
const diagnosisHeadline = `If you nodded along, you're not a failure. You're just experiencing Impostor Syndrome.`;
const diagnosisBody =
  `It's the overwhelming feeling that you're a fraud, despite all the evidence showing you're capable. It's not a character flaw. It's a strategy problem. And because it's a problem with a pattern, it's a problem with a solution.`;

// --- SECTION 4: THE PROMISE / SOLUTION ---
const toolsHeadline = `You Can't "Think" Your Way Out of This. You Have to Act.`;
const toolsSubheadline =
  `We don't do motivational quotes. We build practical tools to give your brain the hard evidence it needs.`;

const tools = [
  {
    name: "The Evidence Log",
    icon: <AssignmentIcon sx={{ fontSize: 36, color: colors.accentDark }} />,
    desc: `A simple log to scientifically prove your achievements aren't just luck. Your brain's best defense against the "I'm a fraud" feeling.`,
  },
  {
    name: "'Smart Question' Scripts",
    icon: <MailOutlineIcon sx={{ fontSize: 36, color: colors.accentDark }} />,
    desc: `Copy-and-paste scripts for emailing professors and speaking up in class without the fear of "looking dumb."`,
  },
  {
    name: "The Failure Resume",
    icon: <EmojiEventsIcon sx={{ fontSize: 36, color: colors.accentDark }} />,
    desc: `A powerful worksheet to reframe your mistakes as assets and proof of your resilience, not signs of weakness.`,
  },
];

const toolsBrowseButton = "BROWSE ALL TOOLS";

// --- SECTION 5: THE CALL TO ACTION ---
const ctaHeadline = "Stop Fighting Alone. Start Building Your Strategy.";
const ctaOffer =
  `Get my free Impostor Syndrome First-Aid Kit. It includes 3 simple tools you can use today to start gathering evidence and quieting that voice in your head.`;
const ctaInputPlaceholder = "Enter your email address";
const ctaButton = "SEND TOOLKIT";

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // For smooth scrolling to Section 2 (Checklist)
  const checklistSectionRef = useRef(null);
  const scrollToChecklist = () => {
    checklistSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <GlobalStyles styles={{ body: { overflowX: "hidden" } }} />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          background: colors.bg,
          overflowX: "hidden",
        }}
      >
        {/* SECTION 1: THE HOOK */}
        <Box
          sx={{
            position: "relative",
            pb: 8,
            pt: { xs: 10, md: 14 },
            backgroundImage: `linear-gradient(110deg, ${colors.accent} 40%, ${colors.accentDark} 100%)`,
            // Could also use a subtle background image in the future!
          }}
        >
          <Container maxWidth="md" sx={{ px: { xs: 2, sm: 4, md: 0 } }}>
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: colors.white,
                  mb: 2,
                  fontSize: { xs: "2rem", md: "3.5rem" },
                  letterSpacing: "-1.5px",
                  textAlign: "center",
                }}
              >
                {heroHeadline}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: colors.white,
                  opacity: 0.9,
                  fontWeight: 500,
                  fontSize: { xs: "1.07rem", md: "1.24rem" },
                  mb: 4,
                  textAlign: "center",
                }}
              >
                {heroSub}
              </Typography>
              <Box textAlign="center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  <Button
                    variant="contained"
                    sx={{
                      background: colors.white,
                      color: colors.accentDark,
                      fontWeight: 700,
                      px: 5,
                      py: 1.6,
                      borderRadius: 10,
                      letterSpacing: "0.5px",
                      boxShadow: `0 3px 18px 0 ${colors.accentDark}22`,
                      fontSize: "1.14rem",
                      "&:hover": { background: colors.bg },
                    }}
                    onClick={scrollToChecklist}
                  >
                    {heroButton}
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Container>
          {/* Only show emoji on md+ */}
          {!isMobile && (
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                bottom: -28,
                left: "50%",
                transform: "translateX(-50%)",
                opacity: 0.10,
                fontSize: 200,
                color: colors.white,
                pointerEvents: "none",
                zIndex: 0,
                maxWidth: "100vw",
                overflow: "hidden",
              }}
            >
              🎓
            </motion.div>
          )}
        </Box>

        {/* SECTION 2: THE SYMPTOM CHECKLIST */}
        <Container
          maxWidth="md"
          sx={{ py: 7, px: { xs: 2, sm: 3, md: 0 } }}
          ref={checklistSectionRef}
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              sx={{
                color: colors.text,
                textAlign: "center",
                fontWeight: 700,
                mb: 3,
              }}
            >
              {checklistHeadline}
            </Typography>
            <Grid container spacing={4}>
              {/* Column 1 */}
              <Grid item xs={12} sm={6}>
                {checklistCol1.map((item, idx) => (
                  <motion.div key={idx} variants={fadeUp}>
                    <Card
                      elevation={0}
                      sx={{
                        background: colors.card,
                        borderRadius: 4,
                        p: 2.5,
                        mb: 2,
                        display: "flex",
                        alignItems: "flex-start",
                        boxShadow: `0 2px 14px 0 ${colors.accentDark}10`,
                        "&:hover": {
                          background: colors.accent + "10",
                          transform: "translateY(-2px) scale(1.03)",
                          transition: "all 0.28s ease",
                        },
                      }}
                    >
                      <Box sx={{ mr: 2, pt: "2.5px" }}>
                        {/* Simple outlined checkbox SVG */}
                        <svg width="26" height="26" viewBox="0 0 24 24">
                          <rect
                            x="2.5"
                            y="2.5"
                            width="19"
                            height="19"
                            rx="4"
                            fill="none"
                            stroke={colors.accentDark}
                            strokeWidth="2"
                          />
                        </svg>
                      </Box>
                      <Typography sx={{ fontSize: "1.06rem", color: colors.text, fontWeight: 500 }}>
                        {item}
                      </Typography>
                    </Card>
                  </motion.div>
                ))}
              </Grid>
              {/* Column 2 */}
              <Grid item xs={12} sm={6}>
                {checklistCol2.map((item, idx) => (
                  <motion.div key={idx} variants={fadeUp}>
                    <Card
                      elevation={0}
                      sx={{
                        background: colors.card,
                        borderRadius: 4,
                        p: 2.5,
                        mb: 2,
                        display: "flex",
                        alignItems: "flex-start",
                        boxShadow: `0 2px 14px 0 ${colors.accentDark}10`,
                        "&:hover": {
                          background: colors.accent + "10",
                          transform: "translateY(-2px) scale(1.03)",
                          transition: "all 0.28s ease",
                        },
                      }}
                    >
                      <Box sx={{ mr: 2, pt: "2.5px" }}>
                        <svg width="26" height="26" viewBox="0 0 24 24">
                          <rect
                            x="2.5"
                            y="2.5"
                            width="19"
                            height="19"
                            rx="4"
                            fill="none"
                            stroke={colors.accentDark}
                            strokeWidth="2"
                          />
                        </svg>
                      </Box>
                      <Typography sx={{ fontSize: "1.06rem", color: colors.text, fontWeight: 500 }}>
                        {item}
                      </Typography>
                    </Card>
                  </motion.div>
                ))}
              </Grid>
            </Grid>
          </motion.div>
        </Container>

        {/* SECTION 3: THE DIAGNOSIS/REFRAME */}
        <Container
          maxWidth="sm"
          sx={{ my: 5, px: { xs: 2, sm: 3, md: 0 } }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Paper
              elevation={6}
              component={motion.div}
              whileHover={{ scale: 1.03, boxShadow: `0 12px 38px ${colors.accentDark}18` }}
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: 5,
                textAlign: "center",
                background: colors.white,
                mb: 2,
              }}
            >
              <Typography variant="h5" sx={{ color: colors.accentDark, fontWeight: 700, mb: 2 }}>
                {diagnosisHeadline}
              </Typography>
              <Typography sx={{ color: colors.text, fontSize: "1.1rem" }}>
                {diagnosisBody}
              </Typography>
            </Paper>
          </motion.div>
        </Container>

        {/* SECTION 4: THE PROMISE / TOOLS */}
        <Container
          maxWidth="md"
          sx={{ pb: 8, pt: 4, px: { xs: 2, sm: 3, md: 0 } }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: colors.text, textAlign: "center", mb: 2 }}
          >
            {toolsHeadline}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: colors.subtle,
              fontSize: { xs: "1rem", md: "1.15rem" },
              mb: 6,
              maxWidth: 480,
              mx: "auto",
            }}
          >
            {toolsSubheadline}
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {tools.map((tool, idx) => (
              <Grid item xs={12} sm={4} key={tool.name}>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.14 * idx, type: "spring", bounce: 0.35 }}
                  whileHover={{ y: -8, scale: 1.06 }}
                >
                  <Card
                    elevation={3}
                    sx={{
                      height: "100%",
                      p: 3,
                      textAlign: "center",
                      borderRadius: 4,
                      background: colors.card,
                      boxShadow: `0 6px 32px ${colors.accent}18`,
                    }}
                  >
                    <Box
                      sx={{
                        width: 66,
                        height: 66,
                        mx: "auto",
                        mb: 2,
                        background: colors.accent + "18",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {tool.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ mb: 1, color: colors.text, fontWeight: 700, letterSpacing: "-1px" }}
                    >
                      {tool.name}
                    </Typography>
                    <Typography sx={{ color: colors.text, fontSize: "1rem", opacity: 0.92 }}>
                      {tool.desc}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          <Box textAlign="center" mt={6}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Button
                variant="contained"
                href="/toolkit"
                sx={{
                  background: colors.accent,
                  fontWeight: 700,
                  px: 5,
                  py: 1.5,
                  borderRadius: "32px",
                  fontSize: "1.11rem",
                  color: "#fff",
                  "&:hover": {
                    background: colors.accentDark,
                    transform: "translateY(-3px)",
                    boxShadow: `0 4px 12px ${colors.accent}40`,
                  },
                  transition: "all 0.3s ease",
                  boxShadow: `0 2px 8px ${colors.accent}30`,
                }}
              >
                {toolsBrowseButton}
              </Button>
            </motion.div>
          </Box>
        </Container>

        {/* SECTION 5: THE CALL TO ACTION */}
        <Box
          sx={{
            background: `linear-gradient(99deg, ${colors.accentDark}, ${colors.accent})`,
            pt: 7,
            pb: 9,
            borderTopLeftRadius: { xs: "24px", md: "80px" },
            borderTopRightRadius: { xs: "24px", md: "80px" },
            mt: { xs: 0, md: -7 },
            position: "relative",
          }}
        >
          <Container maxWidth="sm" sx={{ px: { xs: 2, sm: 3, md: 0 } }}>
            <Box sx={{ textAlign: "center", color: "white" }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  fontSize: { xs: "1.35rem", md: "2rem" },
                }}
              >
                {ctaHeadline}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "1rem", md: "1.19rem" },
                  color: "#e3f3fc",
                  mb: 4,
                }}
              >
                {ctaOffer}
              </Typography>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Box
                  component="form"
                  sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: 2,
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: 480,
                    mx: "auto",
                  }}
                  autoComplete="off"
                >
                  <TextField
                    type="email"
                    required
                    placeholder={ctaInputPlaceholder}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon sx={{ color: colors.accentDark }} />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    sx={{
                      minWidth: 350,
                      background: "#fff",
                      borderRadius: "30px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "30px",
                        fontSize: "1rem",
                      },
                    }}
                  />
                  <motion.div whileHover={{ scale: 1.07 }}>
                    <Button
                      type="submit"
                      sx={{
                        borderRadius: "30px",
                        fontWeight: 700,
                        fontSize: "1.11rem",
                        background: colors.white,
                        color: colors.accentDark,
                        px: 4,
                        py: 1.2,
                        minWidth: 190,
                        boxShadow: `0 4px 18px ${colors.accent}44`,
                        "&:hover": {
                          backgroundColor: colors.accent,
                          color: "#fff",
                          boxShadow: `0 6px 24px ${colors.accentDark}33`,
                        },
                        transition: "all 0.33s",
                      }}
                    >
                      {ctaButton}
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
