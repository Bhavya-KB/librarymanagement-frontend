// import React from "react";
// import {
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Box,
//   Button,
//   CardActions,
//   Container,
// } from "@mui/material";

// const sampleBooks = [
//   {
//     id: 1,
//     title: "The Little Prince",
//     author: "Antoine de Saint-Exupéry",
//     image:
//       "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=600&auto=format&fit=crop",
//     description:
//       "A poetic tale of loneliness, friendship, love and loss.",
//   },
//   {
//     id: 1,
//     title: "The Little Prince",
//     author: "Antoine de Saint-Exupéry",
//     image:
//       "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=600&auto=format&fit=crop",
//     description:
//       "A poetic tale of loneliness, friendship, love and loss.",
//   },
//   {
//     id: 1,
//     title: "The Little Prince",
//     author: "Antoine de Saint-Exupéry",
//     image:
//       "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=600&auto=format&fit=crop",
//     description:
//       "A poetic tale of loneliness, friendship, love and loss.",
//   },
//   {
//     id: 1,
//     title: "The Little Prince",
//     author: "Antoine de Saint-Exupéry",
//     image:
//       "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=600&auto=format&fit=crop",
//     description:
//       "A poetic tale of loneliness, friendship, love and loss.",
//   },
//   {
//     id: 1,
//     title: "The Little Prince",
//     author: "Antoine de Saint-Exupéry",
//     image:
//       "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=600&auto=format&fit=crop",
//     description:
//       "A poetic tale of loneliness, friendship, love and loss.",
//   },
//   {
//     id: 1,
//     title: "The Little Prince",
//     author: "Antoine de Saint-Exupéry",
//     image:
//       "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=600&auto=format&fit=crop",
//     description:
//       "A poetic tale of loneliness, friendship, love and loss.",
//   }
 
  
// ];

// export default function BookListing() {
//   return (
//     <Container sx={{ py: 4 }} id="book-section">
//       <Typography
//         variant="h5"
//         sx={{ mb: 3, fontWeight: 700, textAlign: "center" }}
//       >
//         Book Listing
//       </Typography>

//       <Grid container spacing={3} alignItems="stretch">
       
//           <Grid
//             item
//             xs={12}
//             sm={6}
//             md={4}
//             // key={book.id}
//             sx={{ display: "flex" }}
//           >
//            <Box
//                    sx={{
//                      backgroundColor: "#fff",
//                      borderRadius: "16px",
//                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//                      textAlign: "center",
//                      p: 3,
                     
//                      transition: "transform 0.3s",
//                      "&:hover": { transform: "translateY(-8px)" },
//                    }}
//                  >
//                    <Box
//                      component="img"
//                      src="https://images-fe.ssl-images-amazon.com/images/I/716l34WGkXL._AC_UL210_SR210,210_.jpg"
//                      alt="The Secret Life of Mitty"
//                      sx={{
//                        width: "70%",
//                        height:"180px",
//                        borderRadius: "8px",
//                        mb: 2,
//                        mx: "auto",
//                      }}
//                    />
//                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                      The Secret Life of Mitty
//                    </Typography>
//                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
//                      by James Thurber
//                    </Typography>
//                    <Typography sx={{ color: "#ff9800" }}>⭐⭐⭐⭐☆</Typography>
//                  </Box>
//           </Grid>
        
//       </Grid>
//     </Container>
//   );
// }

//latest

// import React, { useEffect, useState } from "react";
// import {
//   Grid,
//   Typography,
//   Box,
//   Container,
// } from "@mui/material";
// import { getAllBooksAPI } from "../service/allAPI";

// export default function BookListing() {
//   const [books, setBooks] = useState([]);

//   // Fetch all books
//   const fetchBooks = async () => {
//     try {
//       const result = await getAllBooksAPI();
//       setBooks(result.data || []); // Store books in state
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   return (
//     <Container sx={{ py: 4 }} id="book-section">
//       <Typography
//         variant="h4"
//         sx={{ mb: 3, fontWeight: 700, textAlign: "center" ,  color: "#5e1111ff", fontWeight: "bold",}}
//       >
//         Book Listing
//       </Typography>

//       <Grid container spacing={3} alignItems="stretch">
//         {books.length > 0 ? (
//           books.map((book) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={4}
//               key={book.id}
//               sx={{ display: "flex" }}
//             >
//               <Box
//                 sx={{
//                   backgroundColor: "#fff",
//                   borderRadius: "16px",
//                   boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//                   textAlign: "center",
//                   p: 3,
//                   transition: "transform 0.3s",
//                   "&:hover": { transform: "translateY(-8px)" },
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={book.image}
//                   alt={book.name}
//                   sx={{
//                     width: "70%",
//                     height: "180px",
//                     borderRadius: "8px",
//                     mb: 2,
//                     mx: "auto",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                   {book.name}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ mb: 1 }}
//                 >
//                   by {book.author}
//                 </Typography>
//                 <Typography sx={{ color: "#ff9800" }}>
//                   {"⭐".repeat(Math.floor(book.rating))}{" "}
//                   {"☆".repeat(5 - Math.floor(book.rating))}
//                 </Typography>
//               </Box>
//             </Grid>
//           ))
//         ) : (
//           <Typography
//             variant="body1"
//             sx={{ textAlign: "center", width: "100%", mt: 4 }}
//           >
//             No books available. Admin need to add  📚
//           </Typography>
//         )}
//       </Grid>


//     </Container>
//   );
// }


//new

import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import { getAllBooksAPI } from "../service/allAPI";

export default function BookListing() {
  const [books, setBooks] = useState([]);

  // 🧩 Dummy Book Data
  const dummyBooks = [
    {
      id: 101,
      name: "The Secrets Between Us",
      author: "Louise Douglas",
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/81W3naQ7CkL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 102,
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating: 4.8,
      image:
        "https://m.media-amazon.com/images/I/81OthjkJBuL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 103,
      name: "1984",
      author: "George Orwell",
      rating: 2.7,
      image:
        "https://www.eourmart.com/cdn/shop/products/51FXP6S8wWS.jpg?v=1639834548",
    },

    {
      id: 104,
      name: "The Immortals Of Meluha",
      author: "Amish",
      rating: 3.5,
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/818bGgNn0EL._AC_UL375_SR375,375_.jpg",
    },
  ];

  // 🧠 Fetch All Books from API
  const fetchBooks = async () => {
    try {
      const result = await getAllBooksAPI();
      setBooks(result.data || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // 📘 Reusable Book Card Component
  const BookCard = ({ book }) => (
    <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
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
          src={book.image}
          alt={book.name}
          sx={{
            width: "70%",
            height: "180px",
            borderRadius: "8px",
            mb: 2,
            mx: "auto",
            objectFit: "cover",
            
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {book.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          by {book.author}
        </Typography>
        <Typography sx={{ color: "#ff9800" }}>
          {"⭐".repeat(Math.floor(book.rating))}{" "}
          {"☆".repeat(5 - Math.floor(book.rating))}
        </Typography>
      </Box>
    </Grid>
  );

  return (
    <Container sx={{ pt: 2, pb: 6  }} id="book-section">
      {/* 🧩 Dummy Book Section (Now on Top) */}
      <Typography
        variant="h4"
        sx={{
           mt: 0, 
        mb: 1.5, 
          fontWeight: 700,
          textAlign: "center",
          color: "#5e1111ff",
        }}
      >
        Recommended Books
      </Typography>

      <Grid container spacing={3} alignItems="stretch"   justifyContent="center" >
        {dummyBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Grid>

      {/* 🔽 Divider between sections */}
      <Box sx={{ my: 5, borderBottom: "1px dashed #ccc" }} />

      {/* 📚 Main Book Listing Section */}
      <Typography
        variant="h4"
        sx={{
          // mb: 3,
          fontWeight: 700,
          textAlign: "center",
          color: "#5e1111ff",
        }}
      >
        Book Listing
      </Typography>

      <Grid container spacing={3} alignItems="stretch"  justifyContent="center">
        {books.length > 0 ? (
          books.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <Typography
            variant="body1"
            sx={{ textAlign: "center", width: "100%", mt: 4 }}
          >
            No books available. Admin needs to add 📚
          </Typography>
        )}
      </Grid>
    </Container>
  );
}



