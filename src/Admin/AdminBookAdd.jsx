// import React from 'react'
// import { Box, TextField, Button, Typography, Rating } from '@mui/material';
// import AdminHeader from '../components/AdminHeader';


// function AdminBookAdd() {
//   return (
//     <>
//     <AdminHeader/>
//     <Box sx={{ backgroundImage: 'url(https://www.shutterstock.com/image-photo/book-open-pages-close-up-600nw-2562942291.jpg)', width: '100%', height: '900px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>



//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             backgroundColor: 'rgba(255, 255, 255, 0.85)',
//             padding: 4,
//             borderRadius: 2,
//             width: '50%',
//             maxWidth: '100%',
//             boxShadow: 5,

//           }}
//         >
//           <Typography variant="h5" gutterBottom align='center'>
//             Let's Add a New Read!📖
//           </Typography>

//           <Box component="form">
//             <TextField
//               label="Book Name"
//               name="name"
//               fullWidth
//               required
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               label="Image URL"
//               name="image"
//               fullWidth
//               required
//               sx={{ mb: 2 }}
//               placeholder="https://www.shutterstock.com/image-photo/book-stack-opened-on-desk-260nw-2318012963.jpg"
//             />
//             <TextField
//               label="Author"
//               name="name"
//               fullWidth
//               required
//               sx={{ mb: 2 }}
//             />
//             <Box sx={{ mb: 2 }}>
//               <Typography>
//                 Rating :
//               </Typography>
//               <Rating
//                 name="rating"

//               />


//             </Box>

//             <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

//               <Button
//                 variant="contained"
//                 sx={{
//                   backgroundColor: '#f43636ff',
//                   color: '#ffffff',
//                   '&:hover': {
//                     backgroundColor: '#d12f2f', 
//                   },
//                 }}
//               >
//                 Cancel
//               </Button>

//               <Button
//                 type="submit"
//                 variant="contained"
//                 sx={{
//                   backgroundColor: '#983508ff',
//                   color: '#ffffff',
//                   '&:hover': {
//                     backgroundColor: '#7a2a06', 
//                   },
//                 }}
//               >
//                 Add Book
//               </Button>


//             </Box>





//           </Box>
//         </Box>

//       </Box>
    
//     </>
//   )
// }

// export default AdminBookAdd


import React, { useState } from "react";
import { Box, TextField, Button, Typography, Rating } from "@mui/material";
import AdminHeader from "../components/AdminHeader";
import {addBookAPI} from '../service/allAPI'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function AdminBookAdd() {

  const navigate = useNavigate()
  const [bookData, setBookData] = useState({
    name: "",
    image: "",
    author: "",
    rating: 0,
  });

  // Handle text field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  // Handle rating change
  const handleRatingChange = (event, newValue) => {
    setBookData({ ...bookData, rating: newValue });
  };

  // Handle add book button click
  const handleAddBook = async (e) => {
    e.preventDefault();

    const { name, image, author, rating } = bookData;

    if (!name || !image || !author || rating === 0) {
      Swal.fire({
        icon: "error",
        title: "Please fill all fields",
      });
      return;
    }

    try {
      const result = await addBookAPI(bookData);
      console.log("Book added:", result.data || result);

      Swal.fire({
        title: "Success!",
        text: "Book added successfully 🎉",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      // Reset form
      setBookData({
        name: "",
        image: "",
        author: "",
        rating: 0,
      });

        setTimeout(() => {
        navigate('/adminhome');
      }, 1500);

    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error adding book",
      });
    }
  };

  return (
    <>
      <AdminHeader />
      <Box
        sx={{
          backgroundImage:
            "url(https://www.shutterstock.com/image-photo/book-open-pages-close-up-600nw-2562942291.jpg)",
          width: "100%",
          height: "900px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "37%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            padding: 4,
            borderRadius: 2,
            width: "50%",
            maxWidth: "100%",
            boxShadow: 5,
          }}
        >
          <Typography variant="h5" gutterBottom align="center">
            Let's Add a New Read!📖
          </Typography>

          <Box component="form" onSubmit={handleAddBook}>
            <TextField
              label="Book Name"
              name="name"
              value={bookData.name}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              label="Image URL"
              name="image"
              value={bookData.image}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              label="Author"
              name="author"
              value={bookData.author}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <Box sx={{ mb: 2 }}>
              <Typography>Rating :</Typography>
              <Rating
                name="rating"
                value={bookData.rating}
                onChange={handleRatingChange}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#983508ff",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#7a2a06",
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
  );
}

export default AdminBookAdd;
