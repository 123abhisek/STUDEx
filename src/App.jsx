// // src/App.js

// // Import dependencies
// import React from "react";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { CssBaseline } from "@mui/material";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Import custom components
// import Header from "./components/Header.jsx";
// import Footer from "./components/Footer.jsx";
// import Home from "./pages/Home.jsx";
// import SuccessStories from "./pages/SuccessStories.jsx";
// import Toolkit from "./pages/Toolkit.jsx";
// import ShareStory from "./pages/ShareStory.jsx";
// import AboutUs from "./pages/AboutUs.jsx";
// import ContactUs from "./pages/ContactUs.jsx";
// import Community from "./pages/Community.jsx";
// import Notifications from "./pages/Notifications.jsx";
// import Profile from "./pages/Profile.jsx";
// import SocialFeed from "./pages/SocialFeed.jsx";
// import AuthPage from "./pages/AuthPage.jsx";

// // Create custom theme
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#008080",
//       light: "#4da6a6",
//       dark: "#005a5a",
//     },
//     secondary: {
//       main: "#FFD700",
//       light: "#ffdf33",
//       dark: "#b29700",
//     },
//     background: {
//       default: "#f8f9fa",
//       paper: "#ffffff",
//     },
//     text: {
//       primary: "#333333",
//       secondary: "#5a5a5a",
//     },
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h1: {
//       fontWeight: 700,
//       fontSize: "3.5rem",
//       lineHeight: 1.2,
//       "@media (max-width:600px)": {
//         fontSize: "2.5rem",
//       },
//     },
//     h2: {
//       fontWeight: 600,
//       fontSize: "2.5rem",
//       "@media (max-width:600px)": {
//         fontSize: "2rem",
//       },
//     },
//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: "50px",
//           padding: "10px 24px",
//           boxShadow: "0 4px 6px rgba(0, 128, 128, 0.1)",
//           transition: "all 0.3s ease",
//           "&:hover": {
//             transform: "translateY(-2px)",
//             boxShadow: "0 6px 8px rgba(0, 128, 128, 0.2)",
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: "16px",
//           boxShadow: "0 8px 16px rgba(0, 0, 0, 0.05)",
//           transition: "transform 0.3s ease, box-shadow 0.3s ease",
//           "&:hover": {
//             transform: "translateY(-5px)",
//             boxShadow: "0 12px 20px rgba(0, 128, 128, 0.15)",
//           },
//         },
//       },
//     },
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           "& .MuiOutlinedInput-root": {
//             borderRadius: "12px",
//           },
//         },
//       },
//     },
//   },
// });

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             minHeight: "100vh",
//           }}
//         >
//           <Header />
//           <main style={{ flex: 1, paddingTop: "20px" }}>
//             <Routes>
//               <Route index element={<Home />} />
//               <Route path="/login" element={<AuthPage />} />
//               {/* <Route path="/login" element={<AuthPage />} /> */}
//               <Route path="/stories" element={<SuccessStories />} />
//               <Route path="/toolkit" element={<Toolkit />} />
//               <Route path="/share" element={<ShareStory />} />
//               <Route path="/about" element={<AboutUs />} />
//               <Route path="/contact" element={<ContactUs />} />
//               <Route path="/community" element={<Community />} />
//               <Route path="/notifications" element={<Notifications />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/social-feed" element={<SocialFeed />} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;


import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import SuccessStories from "./pages/SuccessStories";
import Toolkit from "./pages/Toolkit";
import ShareStory from "./pages/ShareStory";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Community from "./pages/Community";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import SocialFeed from "./pages/SocialFeed";
import AuthPage from "./pages/AuthPage";
// import AdminLogin from "./pages/admin/AdminLogin";
// import AdminDashboard from "./pages/admin/AdminDashboard";

import { AuthProvider } from './context/AuthContext';


// Theme setup
const theme = createTheme({
  palette: {
    primary: {
      main: "#008080",
      light: "#4da6a6",
      dark: "#005a5a",
    },
    secondary: {
      main: "#FFD700",
      light: "#ffdf33",
      dark: "#b29700",
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#5a5a5a",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.2,
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          padding: "10px 24px",
          boxShadow: "0 4px 6px rgba(0, 128, 128, 0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 6px 8px rgba(0, 128, 128, 0.2)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.05)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 12px 20px rgba(0, 128, 128, 0.15)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
          },
        },
      },
    },
  },
});

// Layouts inside App.js
const MainLayout = ({ children }) => (
  <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <Header />
    <main style={{ flex: 1, paddingTop: "20px" }}>{children}</main>
    <Footer />
  </div>
);

const NoLayout = ({ children }) => (
  <main style={{ minHeight: "100vh" }}>{children}</main>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider >
      <Router>
        <Routes>
          {/* Routes without header/footer */}
          <Route
            path="/login"
            element={
              <NoLayout>
                <AuthPage />
              </NoLayout>
            }
          />
          {/* <Route
            path="/admin/login"
            element={
              <NoLayout>
                <AdminLogin />
              </NoLayout>
            }
          /> */}

          {/* Admin routes */}
          {/* <Route
            path="/admin/dashboard"
            element={
              <MainLayout>
                <AdminDashboard />
              </MainLayout>
            }
          /> */}

          {/* User-facing routes with Header & Footer */}
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/stories"
            element={
              <MainLayout>
                <SuccessStories />
              </MainLayout>
            }
          />
          <Route
            path="/toolkit"
            element={
              <MainLayout>
                <Toolkit />
              </MainLayout>
            }
          />
          <Route
            path="/share"
            element={
              <MainLayout>
                <ShareStory />
              </MainLayout>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <AboutUs />
              </MainLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <MainLayout>
                <ContactUs />
              </MainLayout>
            }
          />
          <Route
            path="/community"
            element={
              <MainLayout>
                <Community />
              </MainLayout>
            }
          />
          <Route
            path="/notifications"
            element={
              <MainLayout>
                <Notifications />
              </MainLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <MainLayout>
                <Profile />
              </MainLayout>
            }
          />
          <Route
            path="/social-feed"
            element={
              <MainLayout>
                <SocialFeed />
              </MainLayout>
            }
          />
        </Routes>
      </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
