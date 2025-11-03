import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  CardActions,
  Container,
} from "@mui/material";

const sampleBooks = [
  {
    id: 1,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=600&auto=format&fit=crop",
    description:
      "A poetic tale of loneliness, friendship, love and loss.",
  },
  {
    id: 1,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=600&auto=format&fit=crop",
    description:
      "A poetic tale of loneliness, friendship, love and loss.",
  },
  {
    id: 1,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=600&auto=format&fit=crop",
    description:
      "A poetic tale of loneliness, friendship, love and loss.",
  },
  {
    id: 1,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=600&auto=format&fit=crop",
    description:
      "A poetic tale of loneliness, friendship, love and loss.",
  },
  {
    id: 1,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=600&auto=format&fit=crop",
    description:
      "A poetic tale of loneliness, friendship, love and loss.",
  },
  {
    id: 1,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=600&auto=format&fit=crop",
    description:
      "A poetic tale of loneliness, friendship, love and loss.",
  }
 
  
];

export default function BookListing({ books = sampleBooks }) {
  return (
    <Container sx={{ py: 4 }} id="book-section">
      <Typography
        variant="h5"
        sx={{ mb: 3, fontWeight: 700, textAlign: "center" }}
      >
        Book Listing
      </Typography>

      <Grid container spacing={3} alignItems="stretch">
        {books.map((book) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={book.id}
            sx={{ display: "flex" }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%",
                borderRadius: 3,
                boxShadow: 4,
                overflow: "hidden",
              }}
            >
              {/* Fixed image height */}
              <CardMedia
                component="img"
                image={book.image}
                alt={book.title}
                sx={{
                  height: 200,
                  objectFit: "cover",
                }}
              />

              {/* Fixed content section */}
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 140,
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600 }}
                    noWrap
                  >
                    {book.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                    noWrap
                  >
                    {book.author}
                  </Typography>
                </Box>

                {/* Clamp description */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    lineHeight: 1.4,
                  }}
                >
                  {book.description}
                </Typography>
              </CardContent>

              {/* Button bar pinned to bottom */}
              <CardActions
                sx={{
                  px: 2,
                  pb: 2,
                  justifyContent: "space-between",
                }}
              >
               
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
