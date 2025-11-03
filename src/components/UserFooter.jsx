// Footer.jsx
import React from "react";
import {
  Box,
  Typography,
  Link,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import BookIcon from "@mui/icons-material/Book";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";


function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function UserFooter() {
  return (
    // Outer full-width wrapper — ensures background spans entire viewport
    <Box
      component="footer"
      sx={{
        width: "100%",                // full width
        position: "relative",
        left: 0,
        right: 0,
        mt: 8,
        pt: { xs: 6, md: 10 },
        pb: { xs: 4, md: 6 },
        bgcolor: "#c96565ff",
        color: "rgba(243, 238, 237, 1)",
        boxSizing: "border-box",
      }}
    >
      {/* Inner container that controls horizontal padding but not page-centering gaps */}
      <Box
        sx={{
          maxWidth: "1600px",                // control content width if you want
          mx: "auto",                        // center content horizontally
          px: { xs: 2, sm: 4, md: 8 },       // internal padding (no side gaps outside bg)
          boxSizing: "border-box",
        }}
      >
        {/* three-column row */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            alignItems: "flex-start",
            flexWrap: { xs: "wrap", sm: "nowrap" }, // nowrap on larger screens
            pb: 2,
          }}
        >
          {/* Summary */}
          <Box sx={{ flex: "1 1 33%", minWidth: 240 }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: 2,
                  bgcolor: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: 1,
                }}
              >
                <BookIcon sx={{ fontSize: 34, color: "secondary.main" }} />
              </Box>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Library Hub
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(243, 238, 237, 1)" }}>
                  A compact, elegant library management system for small libraries.
                  Discover books, manage loans, and keep your collection organised — all with a clean, friendly interface.
                </Typography>

                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <IconButton aria-label="facebook" size="small" sx={{ bgcolor: "rgba(255,255,255,0.06)", color: "inherit", "&:hover": { bgcolor: "rgba(255,255,255,0.12)" }}}>
                    <FacebookIcon fontSize="small" />
                  </IconButton>
                  <IconButton aria-label="twitter" size="small" sx={{ bgcolor: "rgba(255,255,255,0.06)", color: "inherit", "&:hover": { bgcolor: "rgba(255,255,255,0.12)" }}}>
                    <TwitterIcon fontSize="small" />
                  </IconButton>
                  <IconButton aria-label="instagram" size="small" sx={{ bgcolor: "rgba(255,255,255,0.06)", color: "inherit", "&:hover": { bgcolor: "rgba(255,255,255,0.12)" }}}>
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Box>
            </Box>
          </Box>

          {/* Navigation */}
          <Box sx={{ flex: "1 1 33%", minWidth: 200 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              Navigation
            </Typography>

            <List disablePadding>
              <ListItemButton sx={{ pl: 0 }} onClick={() => scrollToId("about-section")}>
                <ListItemText primary={<Box component="span" sx={{ display: "flex", gap: 1, alignItems: "center" }}><InfoIcon sx={{ fontSize: 18 }} /> About</Box>} />
              </ListItemButton>

              <ListItemButton sx={{ pl: 0 }} onClick={() => scrollToId("book-section")}>
                <ListItemText primary={<Box component="span" sx={{ display: "flex", gap: 1, alignItems: "center" }}><BookIcon sx={{ fontSize: 18 }} /> Books</Box>} />
              </ListItemButton>

             <ListItemButton
  component={Link}
  to="/userbookdetails"
  sx={{ pl: 0, color: "inherit", textDecoration: "none" }}
>
  <ListItemText
    primary={
      <Box component="span" sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <PersonIcon sx={{ fontSize: 18 }} /> User Details
      </Box>
    }
/>
</ListItemButton>
            </List>
          </Box>

          {/* Contact */}
          <Box sx={{ flex: "1 1 33%", minWidth: 260 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              Contact
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">123 Library Lane, Booktown</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">+91 98765 43210</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <EmailIcon fontSize="small" />
              <Typography variant="body2">hello@libraryhub.example</Typography>
            </Box>

            <Typography variant="body2" sx={{ mb: 1 }}>
              Subscribe for updates
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1} component="form" onSubmit={(e) => e.preventDefault()}>
              <TextField placeholder="Your email" size="small" sx={{ bgcolor: "rgba(251, 241, 241, 0.36)", borderRadius: 1, input: { color: "#ecf1f4ff" }, "& .MuiOutlinedInput-notchedOutline": { border: "none" }, minWidth: 0, flex: 1 }} InputProps={{ sx: { color: "inherit" } }} />
              <Button type="submit" variant="contained" sx={{ whiteSpace: "nowrap",backgroundColor:"#f43636" }}>Contact</Button>
            </Stack>
          </Box>
        </Box>

        {/* bottom bar */}
        <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.08)", mt: 4, pt: 3, display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: "center", gap: 2 }}>
          <Typography variant="caption" sx={{ color: "rgba(243, 238, 237, 1)" }}>
            © {new Date().getFullYear()} Library Hub — Small library management made beautiful.
          </Typography>

          <Box>
            <Link href="#" underline="none" color="inherit" sx={{ mr: 2, cursor: "pointer" }} onClick={() => scrollToId("about-section")}>About</Link>
            <Link href="#" underline="none" color="inherit" sx={{ mr: 2, cursor: "pointer" }} onClick={() => scrollToId("book-section")}>Books</Link>
<Link
  component={Link}
  to="/userbookdetails"
  underline="none"
  color="inherit"
  sx={{ cursor: "pointer" }}
>
  User Details
</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
