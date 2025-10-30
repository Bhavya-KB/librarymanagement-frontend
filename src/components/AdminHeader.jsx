import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function AdminHeader() {
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
          <Button color="inherit">Add Books</Button>
          <Button color="inherit">Add Users</Button>
          <Button color="inherit">View Users</Button>
          <Button color="error" variant="contained" sx={{ ml: 1 }}>
            Logout
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default AdminHeader