import React from 'react'
import { Box, TextField, Button, Typography, Rating } from '@mui/material';


function AdminBookAdd() {
  return (
    <>
    <Box sx={{ backgroundImage: 'url(https://www.shutterstock.com/image-photo/book-open-pages-close-up-600nw-2562942291.jpg)', width: '100%', height: '900px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>



        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            padding: 4,
            borderRadius: 2,
            width: '50%',
            maxWidth: '100%',
            boxShadow: 5,

          }}
        >
          <Typography variant="h5" gutterBottom align='center'>
            Let's Add a New Read!📖
          </Typography>

          <Box component="form">
            <TextField
              label="Book Name"
              name="name"
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              label="Image URL"
              name="image"
              fullWidth
              required
              sx={{ mb: 2 }}
              placeholder="https://www.shutterstock.com/image-photo/book-stack-opened-on-desk-260nw-2318012963.jpg"
            />
            <TextField
              label="Author"
              name="name"
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <Box sx={{ mb: 2 }}>
              <Typography>
                Rating :
              </Typography>
              <Rating
                name="rating"

              />


            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#f43636ff',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#d12f2f', 
                  },
                }}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#983508ff',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#7a2a06', 
                  },
                }}
              >
                Add Book
              </Button>


            </Box>





          </Box>
        </Box>

      </Box>
    
    </>
  )
}

export default AdminBookAdd