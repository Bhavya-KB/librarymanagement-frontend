import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { Box, Typography, Button, Container, Grid ,Paper} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupIcon from "@mui/icons-material/Group";
import ComputerIcon from "@mui/icons-material/Computer";
import { useNavigate } from 'react-router-dom';

function AdminHome() {

   const navigate = useNavigate();
  return (
    <>
     <AdminHeader/>

      <Box
        sx={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?cs=srgb&dl=pexels-technobulka-2908984.jpg&fm=jpg')", // bookshelf bg
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          py: { xs: 8, md: 12 },
          px: { xs: 3, md: 8 },
          position: "relative",
        }}
      >
        {/* Dark overlay for better text visibility */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.53)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Left Section - Text */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Book is Knowledge
              </Typography>
              <Typography
                 variant="h4"
                sx={{
                //   fontWeight: "bold",
                  mb: 1,
                  color: "#fff",
                  textShadow: "2px 2px 5px rgba(0,0,0,0.6)",
                }}
              >
                KNOWLEDGE IS POWER
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, maxWidth: 500 }}>
                The library is more than just a place filled with books — it is the heart of knowledge, discovery, and learning. It provides access to a vast collection of resources including books, journals, e-books, research papers, and multimedia materials.
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#fff",
                    color: "#fff",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  Explore Top Books
                </Button>
               
               
                <Button         
          color="primary"
         variant="outlined"
                  sx={{
                    borderColor: "#fff",
                    color: "#fff",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                  }}

                  onClick={() => navigate("/adduser")}
                
                >
                  Add Users Details
                </Button>
              </Box>
            </Grid>

            {/* Right Section - Image */}
            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src="https://www.shutterstock.com/shutterstock/videos/3571048725/thumb/1.jpg?ip=x480"
                alt="Open Book"
                sx={{
                  width: "100%",
                  maxWidth: 450,
                  borderRadius: 3,
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.5)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

       {/* ---------------- Library Services Section ---------------- */}
      <Box
        sx={{
          py: 10,
          backgroundColor: "#f9f5ff",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#5e1111ff",
            }}
          >
            LIBRARY SERVICES
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 700,
              mx: "auto",
              mb: 6,
              color: "#555",
            }}
          >
            Our library offers a wide range of services designed to make
            learning and research easier, more efficient, and more engaging for
            every member.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {/* Service 1 */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: "50%",
                  height: 160,
                  width: 180,
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    "linear-gradient(145deg, #9b2828ff 30%, #a15353ff 90%)",
                  color: "white",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <MenuBookIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h8">Digital Book Access</Typography>
              </Paper>
            </Grid>

            {/* Service 2 */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: "50%",
                    height: 160,
                  width: 180,
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    "linear-gradient(145deg,  #9b2828ff 30%, #a15353ff 90%)",
                  color: "white",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <GroupIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h8">Student Membership</Typography>
              </Paper>
            </Grid>

            {/* Service 3 */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: "50%",
                  height: 160,
                  width: 180,
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    "linear-gradient(145deg,  #9b2828ff 30%, #a36262ff 90%)",
                  color: "white",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <SchoolIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h8">Research Assistance</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: "50%",
                  height: 160,
                  width: 180,
                  mx: "auto",
                  
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    "linear-gradient(145deg,  #9b2828ff 30%, #a36262ff 90%)",
                  color: "white",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <ComputerIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h8">E-Learning Support </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

    {/* ===== Featured Books Section ===== */}
<Box
  sx={{
    backgroundColor: "#faf8f5",
    py: 8,
    px: { xs: 3, md: 8 },
  }}
>
  <Typography
    variant="h4"
    sx={{
      textAlign: "center",
      fontWeight: "bold",
      mb: 6,
      color: "#5e1111ff",
    }}
  >
    Featured Books
  </Typography>

  <Grid container spacing={4} justifyContent="center">
    {/* Book 1 */}
    <Grid item xs={12} sm={6} md={4}>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
          p: 3,
          
          transition: "transform 0.3s",
          "&:hover": { transform: "translateY(-8px)" },
        }}
      >
        <Box
          component="img"
          src="https://images-fe.ssl-images-amazon.com/images/I/716l34WGkXL._AC_UL210_SR210,210_.jpg"
          alt="The Secret Life of Mitty"
          sx={{
            width: "70%",
            height:"180px",
            borderRadius: "8px",
            mb: 2,
            mx: "auto",
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          The Secret Life of Mitty
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          by James Thurber
        </Typography>
        <Typography sx={{ color: "#ff9800" }}>⭐⭐⭐⭐☆</Typography>
      </Box>
    </Grid>

    {/* Book 2 */}
    <Grid item xs={12} sm={6} md={4}>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
          p: 3,
          transition: "transform 0.3s",
          "&:hover": { transform: "translateY(-8px)" },
        }}
      >
        <Box
          component="img"
          src="https://sdi3.chrislands.com/sdi/978/14/81/4/9781481447188.jpg"
          alt="Pegasus: The End of Olympus"
          sx={{
            width: "60%",
            height:"180px",
            borderRadius: "8px",
            mb: 2,
            mx: "auto",
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Pegasus: The End of Olympus
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          by Kate O’Hearn
        </Typography>
        <Typography sx={{ color: "#ff9800" }}>⭐⭐⭐⭐⭐</Typography>
      </Box>
    </Grid>

    {/* Book 3 */}
    <Grid item xs={12} sm={6} md={4}>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
          p: 3,
          transition: "transform 0.3s",
          "&:hover": { transform: "translateY(-8px)" },
        }}
      >
        <Box
          component="img"
          src="https://images-eu.ssl-images-amazon.com/images/I/81gEVkpy-uL._AC_UL210_SR210,210_.jpg"
          alt="Magic"
          sx={{
            width: "110%",
            height:"180px",
            borderRadius: "8px",
            mb: 2,
            mx: "auto",
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Magic
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          by Danielle Steel
        </Typography>
        <Typography sx={{ color: "#ff9800" }}>⭐⭐⭐⭐☆</Typography>
      </Box>
    </Grid>
  </Grid>
</Box>
    
    </>
    
  )
}

export default AdminHome