import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import { addUserAPI } from '../service/allAPI'
import Swal from 'sweetalert2'

function AdminAddUser() {

  const [userInput, setUserInput] = useState({
    userId: "",
    userName: "",
    bookName: "",
    bookNumber: "",
    takenDate: "",
    returnDate: ""
  })

  // Add user handler
  const adduser = async (e) => {
    e.preventDefault(); // ✅ stop form from reloading

    const { userId, userName, bookName, bookNumber, takenDate, returnDate } = userInput;

    if (userId && userName && bookName && bookNumber && takenDate && returnDate) {
      try {
        const result = await addUserAPI(userInput);
        console.log('User Details added:', result.data || result);
        console.log('Generated ID:', result.data?.id);

        Swal.fire({
          title: "Good job!",
          text: "User Details Added Successfully!",
          icon: "success"
        });

        // Reset form after success
        setUserInput({
          userId: "",
          userName: "",
          bookName: "",
          bookNumber: "",
          takenDate: "",
          returnDate: ""
        });

      } catch (err) {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to add user details!'
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all fields!"
      });
    }
  };

  return (
    <>
      <AdminHeader />
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

          {/* ✅ Removed "component=form" to prevent page reload */}
          <Box noValidate autoComplete="off">
            <TextField
              label="User ID"
              name="userId"
              type="number"
              fullWidth
              required
              sx={{ mb: 2 }}
              value={userInput.userId}
              onChange={(e) => setUserInput({ ...userInput, userId: e.target.value })}
            />
            <TextField
              label="User Name"
              name="userName"
              fullWidth
              required
              sx={{ mb: 2 }}
              value={userInput.userName}
              onChange={(e) => setUserInput({ ...userInput, userName: e.target.value })}
            />
            <TextField
              label="Book Name"
              name="bookName"
              fullWidth
              required
              sx={{ mb: 2 }}
              value={userInput.bookName}
              onChange={(e) => setUserInput({ ...userInput, bookName: e.target.value })}
            />
            <TextField
              label="Book Number"
              name="bookNumber"
              fullWidth
              required
              sx={{ mb: 2 }}
              value={userInput.bookNumber}
              onChange={(e) => setUserInput({ ...userInput, bookNumber: e.target.value })}
            />
            <TextField
              label="Taken Date"
              name="takenDate"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
              sx={{ mb: 2 }}
              value={userInput.takenDate}
              onChange={(e) => setUserInput({ ...userInput, takenDate: e.target.value })}
            />
            <TextField
              label="Return Date"
              name="returnDate"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              required
              sx={{ mb: 2 }}
              value={userInput.returnDate}
              onChange={(e) => setUserInput({ ...userInput, returnDate: e.target.value })}
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#f43636',
                  '&:hover': { backgroundColor: '#d12f2f' },
                }}
                onClick={() => setUserInput({
                  userId: "",
                  userName: "",
                  bookName: "",
                  bookNumber: "",
                  takenDate: "",
                  returnDate: ""
                })}
              >
                Cancel
              </Button>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#983508',
                  '&:hover': { backgroundColor: '#7a2a06' },
                }}
                onClick={adduser}
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
