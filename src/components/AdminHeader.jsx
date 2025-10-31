import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavigate } from 'react-router-dom';

function AdminHeader() {

    const navigate = useNavigate();
  return (
   <AppBar position="static" sx={{ backgroundColor: '#88332ace' }}>
      <Toolbar>

        {/* Left side - Logo and Library Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <MenuBookIcon sx={{ fontSize: 32 }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Library Management
          </Typography>
        </Box>

        {/* Right side - Navigation buttons */}
        <Box>
          <Button onClick={() => navigate("/adminaddbook")} color="inherit">Add Books</Button>
          <Button onClick={() => navigate("/adduser")} color="inherit">Add Users</Button>
          <Button onClick={() => navigate("/adminview")} color="inherit">View Users</Button>
          <Button onClick={() => navigate("/")} color="error" variant="contained" sx={{ ml: 1 }}>
            Logout
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default AdminHeader