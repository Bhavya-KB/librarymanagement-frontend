import { Box, Button, TextField, Typography, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminFooter from '../components/AdminFooter'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { addUserAPI, getAllRegisterAPI } from '../service/allAPI'

function AdminAddUser() {

  const [userInput, setUserInput] = useState({
    userId: "",
    userName: "",
    email: "",
    bookName: "",
    bookNumber: "",
    takenDate: "",
    returnDate: "",
    imgUrl: ""
  });

  const [registeredUsers, setRegisteredUsers] = useState([]);
  const navigate = useNavigate();

  // ✅ Fetch registered users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getAllRegisterAPI();
        setRegisteredUsers(res.data || []);
      } catch (err) {
        console.error("Error fetching registered users:", err);
      }
    };
    fetchUsers();
  }, []);

  // ✅ Add user details
  const adduser = async (e) => {
    e.preventDefault();
    const { userId, userName, email, bookName, bookNumber, takenDate, returnDate, imgUrl } = userInput;

    if (userId && userName && email && bookName && bookNumber && takenDate && returnDate && imgUrl) {
      try {
        const result = await addUserAPI(userInput);
        console.log('User Details added:', result.data || result);

        Swal.fire({
          title: "Good job!",
          text: "User Details Added Successfully!",
          icon: "success"
        });

        setUserInput({
          userId: "",
          userName: "",
          email: "",
          bookName: "",
          bookNumber: "",
          takenDate: "",
          returnDate: "",
          imgUrl: ""
        });

        setTimeout(() => {
          navigate('/adminview');
        }, 1500);

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
        text: "Please fill all fields including selecting a user!"
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
            padding: 1,
            paddingX: 4,
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
            sx={{ color: "#5e1111ff" }}
          >
            Add User Details
          </Typography>

          <Box noValidate autoComplete="off">
            
            {/* ✅ Select Registered User */}
            <TextField
              select
              label="Select Registered User"
              fullWidth
              required
              sx={{ mb: 2 }}
              value={userInput.email}
              onChange={(e) => {
                const selectedUser = registeredUsers.find(
                  (u) => u.email === e.target.value
                );
                setUserInput({
                  ...userInput,
                  userId: selectedUser?.id || "",
                  userName: selectedUser?.username || "",
                  email: selectedUser?.email || "",
                });
              }}
            >
              <MenuItem value="">Select a user</MenuItem>
              {registeredUsers.map((user) => (
                <MenuItem key={user.id} value={user.email}>
                  {user.username} ({user.email})
                </MenuItem>
              ))}
            </TextField>

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
              InputLabelProps={{ shrink: true }}
              fullWidth
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

            <TextField
              label="Image URL"
              name="imgUrl"
              fullWidth
              required
              sx={{ mb: 2 }}
              value={userInput.imgUrl}
              onChange={(e) => setUserInput({ ...userInput, imgUrl: e.target.value })}
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
                  email: "",
                  bookName: "",
                  bookNumber: "",
                  takenDate: "",
                  returnDate: "",
                  imgUrl: ""
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
      <AdminFooter />
    </>
  )
}

export default AdminAddUser




//old
// import { Box, Button, TextField, Typography } from '@mui/material'
// import React, { useState } from 'react'
// import AdminHeader from '../components/AdminHeader'
// import { addUserAPI } from '../service/allAPI'
// import Swal from 'sweetalert2'
// import { useNavigate } from 'react-router-dom'
// import AdminFooter from '../components/AdminFooter'

// function AdminAddUser() {

//   const [userInput, setUserInput] = useState({
//     userId: "",
//     userName: "",
//     bookName: "",
//     bookNumber: "",
//     takenDate: "",
//     returnDate: "",
//     imgUrl:""
//   })

//   const navigate = useNavigate()

//   // Add user handler
//   const adduser = async (e) => {
//     e.preventDefault(); 

//     const { userId, userName, bookName, bookNumber, takenDate, returnDate,imgUrl } = userInput;

//     if (userId && userName && bookName && bookNumber && takenDate && returnDate && imgUrl) {
//       try {
//         const result = await addUserAPI(userInput);
//         console.log('User Details added:', result.data || result);
//         console.log('Generated ID:', result.data?.id);

//         Swal.fire({
//           title: "Good job!",
//           text: "User Details Added Successfully!",
//           icon: "success"
//         });

      
//         setUserInput({
//           userId: "",
//           userName: "",
//           bookName: "",
//           bookNumber: "",
//           takenDate: "",
//           returnDate: "",
//           imgUrl:""
//         });
        
//       setTimeout(() => {
//         navigate('/adminview');
//       }, 1500);

//       } catch (err) {
//         console.error(err);
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: 'Failed to add user details!'
//         });
//       }
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Please fill all fields!"
//       });
//     }
//   };

//   return (
//     <>
//       <AdminHeader />
//       <Box
//         sx={{
//           width: '100%',
//           height: '100vh',
//           backgroundImage:
//             'url(https://www.linuxlinks.com/wp-content/uploads/2019/04/young-woman-studying-library.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Box
//           sx={{
//             backgroundColor: 'rgba(255, 255, 255, 0.9)',
//             padding: 1,
//             paddingX:4,
//             borderRadius: 3,
//             width: { xs: '90%', sm: '70%', md: '50%' },
//             boxShadow: 6,
//           }}
//         >
//           <Typography
//             variant="h5"
//             gutterBottom
//             align="center"
//             fontWeight="bold"
//             sx={{ color: "#5e1111ff" }}
//           >
//             Add User Details
//           </Typography>

         
//           <Box noValidate autoComplete="off">
//             <TextField
//               label="User ID"
//               name="userId"
//               type="number"
//               fullWidth
//               required
//               sx={{ mb: 2 }}
//               value={userInput.userId}
//               onChange={(e) => setUserInput({ ...userInput, userId: e.target.value })}
//             />
//             <TextField
//               label="User Name"
//               name="userName"
//               fullWidth
//               required
//               sx={{ mb: 2 }}
//               value={userInput.userName}
//               onChange={(e) => setUserInput({ ...userInput, userName: e.target.value })}
//             />
//             <TextField
//               label="Book Name"
//               name="bookName"
//               fullWidth
//               required
//               sx={{ mb: 2 }}
//               value={userInput.bookName}
//               onChange={(e) => setUserInput({ ...userInput, bookName: e.target.value })}
//             />
//             <TextField
//               label="Book Number"
//               name="bookNumber"
//               fullWidth
//               required
//               sx={{ mb: 2 }}
//               value={userInput.bookNumber}
//               onChange={(e) => setUserInput({ ...userInput, bookNumber: e.target.value })}
//             />
//             <TextField
//               label="Taken Date"
//               name="takenDate"
//               type="date"
//               fullWidth
//               InputLabelProps={{ shrink: true }}
//               required
//               sx={{ mb: 2 }}
//               value={userInput.takenDate}
//               onChange={(e) => setUserInput({ ...userInput, takenDate: e.target.value })}
//             />
//             <TextField
//               label="Return Date"
//               name="returnDate"
//               type="date"
//               InputLabelProps={{ shrink: true }}
//               fullWidth
//               required
//               sx={{ mb: 2 }}
//               value={userInput.returnDate}
//               onChange={(e) => setUserInput({ ...userInput, returnDate: e.target.value })}
//             />

//                {/* ✅ Added Image URL Field */}
//             <TextField
//               label="Image URL"
//               name="imageUrl"
//               fullWidth
//               required
//               sx={{ mb: 2 }}
//               value={userInput.imgUrl}
//               onChange={(e) => setUserInput({ ...userInput, imgUrl: e.target.value })}
//             />

//             <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
//               <Button
//                 variant="contained"
//                 sx={{
//                   backgroundColor: '#f43636',
//                   '&:hover': { backgroundColor: '#d12f2f' },
//                 }}
//                 onClick={() => setUserInput({
//                   userId: "",
//                   userName: "",
//                   bookName: "",
//                   bookNumber: "",
//                   takenDate: "",
//                   returnDate: "",
//                   imgUrl:""
//                 })}
//               >
//                 Cancel
//               </Button>

//               <Button
//                 variant="contained"
//                 sx={{
//                   backgroundColor: '#983508',
//                   '&:hover': { backgroundColor: '#7a2a06' },
//                 }}
//                 onClick={adduser}
//               >
//                 Add Details
//               </Button>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//       <AdminFooter/>
//     </>
//   )
// }

// export default AdminAddUser
