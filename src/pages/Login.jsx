import React, { useState } from 'react'
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
  Link,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from 'react-router-dom';
import commonAPI from '../service/commonAPI';
import BASEURL from '../service/serverURL';

function Login() {

      const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password!");
      return;
    }

    try {
      const response = await commonAPI("GET", `${BASEURL}/users`);
      const users = response.data;

      const loggedUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (loggedUser) {
        if (loggedUser.role === "admin") {
          navigate("/adminhome");
        } else {
          navigate("/userhome");
        }
      } else {
        alert("Invalid email or password!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };


  return (


<>
  <Box
      sx={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/94/6e/c5/946ec553a81d1c5675ede79af7aa974a.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Glass Card */}
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: 380,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.11)",
          borderRadius: "16px",
          color: "white",
          boxShadow: "0 8px 32px rgba(31,38,135,0.37)",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Log In
        </Typography>

        {/* <Typography
          variant="body2"
          sx={{ textAlign: "right", mb: 2, cursor: "pointer" }}
        >
          Log In / Sign Up
        </Typography> */}

        {/* Email */}
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{
            style: { color: "white", borderColor: "white" },
          }}

           value={email}
          onChange={(e) => setEmail(e.target.value)}
    
         
        />

        {/* Password */}
        <TextField
          fullWidth
          type="password"
          label="Password"
          variant="outlined"
          margin="normal"
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{
            style: { color: "white", borderColor: "white" },
          }}

          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Typography
          variant="body2"
          sx={{ textAlign: "right", mt: 1, mb: 2, cursor: "pointer" }}
        >
          Forgot Password?
        </Typography>

        <Button
          variant="contained"
          color="primary"
          fullWidth
        //   sx={{ borderRadius: "8px", fontWeight: "bold" }}
         sx={{
                                    backgroundColor: '#7a2a06',fontWeight:"bold", borderRadius: "8px",
                                    
                                }}

                                  onClick={handleLogin}

        >
          Log In
        </Button>

        <Box
          sx={{
            mt: 3,
            mb: 1,
            borderTop: "1px solid rgba(255,255,255,0.3)",
            textAlign: "center",
            pt: 2,
          }}
        >
          <Typography variant="body2" sx={{ mb: 1 }}>
            OR
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <IconButton color="inherit">
              <GoogleIcon />
            </IconButton>
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        {/* <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
          Don’t have an account?{" "}
          <Link href="#" underline="hover" color="inherit">
            Sign up
          </Link>
        </Typography> */}
      </Paper>
    </Box>

</>

   
  )
}

export default Login