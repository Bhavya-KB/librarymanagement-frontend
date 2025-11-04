// import React from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   Grid,
//   Avatar,
// } from "@mui/material";
// import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
// import UserHeader from "../components/UserHeader";
// import UserFooter from "../components/UserFooter";

// // sample data
// const borrowedBooks = [
//   {
//     userId: "U001",
//     userName: "John Doe",
//     bookName: "The Great Gatsby",
//     bookNumber: "B123",
//     takenDate: "2025-10-15",
//     returnDate: "2025-11-01",
//   },
//   {
//     userId: "U001",
//     userName: "John Doe",
//     bookName: "Moby Dick",
//     bookNumber: "B234",
//     takenDate: "2025-10-20",
//     returnDate: "2025-11-05",
//   },
//   {
//     userId: "U001",
//     userName: "John Doe",
//     bookName: "Pride and Prejudice",
//     bookNumber: "B345",
//     takenDate: "2025-10-28",
//     returnDate: "2025-11-12",
//   },
// ];

// export default function UserBookDetails() {
//   return (
//    <>
//   <UserHeader/> 
//         <Box
//           sx={{
//             minHeight: "100vh",
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1500&auto=format&fit=crop')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundAttachment: "fixed",
//             py: 10,
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <Container maxWidth="md">
//             {/* Header */}
//             <Box
//               sx={{
//                 textAlign: "center",
//                 mb: 5,
//                 bgcolor: "rgba(255,255,255,0.8)",
//                 p: 2,
//                 borderRadius: 3,
//                 boxShadow: 3,
//               }}
//             >
//               <Typography variant="h4" sx={{ fontWeight: 700 }}>
//                 Borrowed Books
//               </Typography>
//               <Typography variant="subtitle1" color="#2A6C88">
//                 All books currently borrowed by the user
//               </Typography>
//             </Box>
    
//             {/* User Info Summary */}
//             <Box
//               sx={{
//                 bgcolor: "rgba(255,255,255,0.85)",
//                 p: 3,
//                 borderRadius: 3,
//                 mb: 4,
//                 boxShadow: 2,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 2,
//               }}
//             >
//               <Avatar sx={{ bgcolor: "#c96565ff", width: 64, height: 64 }}>
//                 <LibraryBooksIcon fontSize="large" />
//               </Avatar>
//               <Box>
//                 <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                   User ID: {borrowedBooks[0].userId}
//                 </Typography>
//                 <Typography variant="body1" color="#2A6C88">
//                   Username: {borrowedBooks[0].userName}
//                 </Typography>
//               </Box>
//             </Box>
    
//             {/* Book Cards */}
//             <Grid container spacing={3}>
//               {borrowedBooks.map((book, index) => (
//                 <Grid item xs={12} sm={6} key={index}>
//                   <Card
//                     sx={{
//                       bgcolor: "rgba(255,255,255,0.85)",
//                       borderRadius: 3,
//                       boxShadow: 4,
//                       transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                       "&:hover": {
//                         transform: "translateY(-6px)",
//                         boxShadow: 6,
//                       },
//                     }}
//                   >
//                     <CardContent>
//                       <Typography
//                         variant="h6"
//                         sx={{ fontWeight: 700, color: "#2A6C88" }}
//                       >
//                         {book.bookName}
//                       </Typography>
//                       <Typography variant="body2" color="#2A6C88">
//                         Book Number: {book.bookNumber}
//                       </Typography>
//                       <Typography variant="body2" sx={{ mt: 1 }}>
//                         <strong>Taken Date:</strong> {book.takenDate}
//                       </Typography>
//                       <Typography variant="body2">
//                         <strong>Return Date:</strong> {book.returnDate}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </Container>
//         </Box>
//         <UserFooter/>
//    </>
//   );
// }


import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  CircularProgress,
} from "@mui/material";
import UserHeader from "../components/UserHeader";
import UserFooter from "../components/UserFooter";
import { getAllUsersAPI } from "../service/allAPI";

export default function UserBookDetails() {
  const [bookDetails, setBookDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookDetails = async () => {
    try {
      const result = await getAllUsersAPI();
      if (result.data) {
        // No filtering — show all book details
        setBookDetails(result.data);
      }
    } catch (error) {
      console.error("Error fetching book details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, []);

  if (loading)
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <>
      <UserHeader />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1500&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          py: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="md">
          {/* Page Header */}
          <Box
            sx={{
              textAlign: "center",
              mb: 5,
              bgcolor: "rgba(255,255,255,0.8)",
              p: 2,
              borderRadius: 3,
              boxShadow: 3,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Available Books
            </Typography>
            <Typography variant="subtitle1" color="#2A6C88">
              List of all books added by the admin
            </Typography>
          </Box>

          {bookDetails.length === 0 ? (
            <Box
              textAlign="center"
              sx={{
                bgcolor: "rgba(255,255,255,0.7)",
                p: 5,
                borderRadius: 3,
              }}
            >
              <img
                src="https://www.allfixhome.com/_next/image?url=%2Fnot-found.gif&w=256&q=75"
                alt="Not found"
              />
              <Typography variant="h6" sx={{ mt: 2 }}>
                No books available!
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {bookDetails.map((book, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    sx={{
                      bgcolor: "rgba(255,255,255,0.85)",
                      borderRadius: 3,
                      boxShadow: 4,
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, color: "#2A6C88" }}
                      >
                        {book.bookName}
                      </Typography>
                      <Typography variant="body2" color="#2A6C88">
                        Book Number: {book.bookNumber}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        <strong>Taken Date:</strong> {book.takenDate}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Return Date:</strong> {book.returnDate}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>
      <UserFooter />
    </>
  );
}

