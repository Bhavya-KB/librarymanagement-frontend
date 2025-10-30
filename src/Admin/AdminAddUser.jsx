import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

function AdminAddUser() {
  return (
    <>
       <Box
                sx={{
                    width: '100%',
                    height: '100vh',
                    backgroundImage:
                        'url(https://www.linuxlinks.com/wp-content/uploads/2019/04/young-woman-studying-library.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        padding: 4,
                        borderRadius: 3,
                        width: { xs: '90%', sm: '70%', md: '50%' },
                        boxShadow: 6,
                    }}
                >
                    <Typography
                        variant="h5"
                        gutterBottom
                        align="center"
                        fontWeight="bold"
                        sx={{ color: '#4a2f04' }}
                    >
                        Add User Details
                    </Typography>

                    <Box component="form" noValidate autoComplete="off">
                        <TextField
                            label="User ID"
                            name="userId"
                            type="number"
                            fullWidth
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="User Name"
                            name="userName"
                            fullWidth
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Book Name"
                            name="bookName"
                            fullWidth
                            required
                            sx={{ mb: 2 }}
                        />
                         <TextField
                            label="Book Number"
                            name="bookNumber"
                            fullWidth
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Taken Date"
                            name="takenDate"
                            type="date"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            required

                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Return Date"
                            name="returnDate"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            required

                            sx={{ mb: 2 }}
                        />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#f43636',
                                    '&:hover': { backgroundColor: '#d12f2f' },
                                }}
                            >
                                Cancel
                            </Button>

                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    backgroundColor: '#983508',
                                    '&:hover': { backgroundColor: '#7a2a06' },
                                }}
                            >
                                Add Details
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
    </>
  )
}

export default AdminAddUser
