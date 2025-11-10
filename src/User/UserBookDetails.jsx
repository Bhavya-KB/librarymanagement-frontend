
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  CircularProgress,
} from "@mui/material";
import UserHeader from "../components/UserHeader";
import UserFooter from "../components/UserFooter";
import { getAllUsersAPI } from "../service/allAPI";
import UserDetailsHeader from "../components/UserDetailsHeader";

export default function UserBookDetails() {
  const [bookDetails, setBookDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get logged-in user info from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Fetch all borrowed books (admin collection)

  const fetchBookDetails = async () => {
  try {
    const result = await getAllUsersAPI(); // fetch all
    if (result.data) {
      // ✅ Show only the logged-in user's books
      const userSpecificBooks = result.data.filter(
        (book) => book.email === loggedInUser?.email
      );
      setBookDetails(userSpecificBooks);
    }
  } catch (error) {
    console.error("Error fetching books:", error);
  } finally {
    setLoading(false);
  }
};
  // const fetchBookDetails = async () => {
  //   try {
  //     const result = await getAllUsersAPI(); // this calls /admin
  //     if (result.data) {
  //       setBookDetails(result.data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching books:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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
      {/* <UserHeader /> */}

      <UserDetailsHeader/>

      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage:
            "url('https://img.freepik.com/free-photo/coffee-open-book-with-flower-inside_23-2147617657.jpg?semt=ais_hybrid&w=740&q=80 ')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          py: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Container maxWidth="md">
          {/* Centered User Info */}
          {/* {loggedInUser && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                bgcolor: "rgba(255,255,255,0.85)",
                p: 4,
                mb: 5,
                borderRadius: "50%",
                boxShadow: 4,
                width: 120,
      height: 120,
       mx: "auto", 
              }}
            >
              <Avatar
                src={loggedInUser.image}
                alt={loggedInUser.username}
                sx={{
                  width: 120,
                  height: 120,
                  mb: 2,
                  border: "3px solid #7a2a06",
                }}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#7a2a06" }}
              >
                {loggedInUser.username}
              </Typography>
              <Typography variant="body1" sx={{ color: "#333" }}>
                {loggedInUser.email}
              </Typography>
            </Box>
          )} */}

          {loggedInUser && (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      mb: 5,
    }}
  >
    {/* Circle white background around image */}
    <Box
      sx={{
        width: 150,
        height: 150,
        borderRadius: "50%",
        bgcolor: "#fff",
        boxShadow: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Avatar
        src={loggedInUser.image}
        alt={loggedInUser.username}
        sx={{
          width: 130,
          height: 130,
          border: "3px solid #7a2a06",
        }}
      />
    </Box>

    {/* Username */}
    <Typography
      variant="h6"
      sx={{ fontWeight: "bold", color: "#7a2a06", mt: 1,fontSize:"28px" }}
    >
      {loggedInUser.username}
    </Typography>

    {/* Email */}
    <Typography variant="body2" sx={{  fontWeight: "bold", color: "#312520ff", fontSize:"20px" }}>
      {loggedInUser.email}
    </Typography>
  </Box>
)}

          

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
                style={{ width: 180 }}
              />
              <Typography variant="h6" sx={{ mt: 2 }}>
                No borrowed books found!
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

                          {/* ✅ Display user image above the User ID */}
                                            {book.imgUrl && (
                                              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                                                <img
                                                  src={book.imgUrl}
                                                  alt={book.userName}
                                                  style={{
                                                    width: '300px',
                                                    height: '300px',
                                                    // borderRadius: '10%',
                                                    // objectFit: 'cover',
                                                    border: '3px solid #d19274ff'
                                                  }}
                                                />
                                              </Box>
                                            )}


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


