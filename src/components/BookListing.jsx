

import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, Container, TextField } from "@mui/material";
import { getAllBooksAPI } from "../service/allAPI";

export default function BookListing() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  // 🔍 Filtered book lists
  const filteredDummyBooks = dummyBooks.filter(
    (book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBooks = books.filter(
    (book) =>
      book.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ pt: 1, pb: 4 }} id="book-section">
     

      {/* 🧩 Recommended Books */}
      <Typography
        variant="h4"
        sx={{
          // mb: 2,
          fontWeight: 700,
          textAlign: "center",
          color: "#5e1111ff",
        }}
      >
        Recommended Books
      </Typography>
       {/* 🔎 Search Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 4,
          mt: 1,
        }}
      >
        <TextField
          label="Search Books..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            width: "60%",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        />
      </Box>

      <Grid container spacing={3} alignItems="stretch" justifyContent="center">
        {filteredDummyBooks.length > 0 ? (
          filteredDummyBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <Typography variant="body1" sx={{ mt: 4 }}>
            No matching recommended books found.
          </Typography>
        )}
      </Grid>

      <Box sx={{ my: 5, borderBottom: "1px dashed #ccc" }} />

      {/* 📚 Main Book Listing */}
      {/* <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: 700,
          textAlign: "center",
          color: "#5e1111ff",
        }}
      >
        Book Listing
      </Typography> */}

      <Grid container spacing={3} alignItems="stretch" justifyContent="center">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <Typography variant="body1" sx={{ mt: 4 }}>
            No books found matching your search.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}


