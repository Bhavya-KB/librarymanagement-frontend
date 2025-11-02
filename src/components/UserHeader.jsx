import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import InfoIcon from "@mui/icons-material/Info";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

export default function UserHeader({
  logoSrc = "https://media.istockphoto.com/id/1270155083/vector/blue-e-book-logo-design-vector-sign-of-electronic-book-library-icon-symbol.jpg?s=612x612&w=0&k=20&c=DGwVHcCijit8E62o3S2dqFXM2usLP2AmJoOSnDhsI5M=",
  appName = "LIBRARY",
  onLogout = () => {},
}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleLogout = () => {
    handleCloseNavMenu();
    onLogout();
  };

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    handleCloseNavMenu();
  };

  return (
    <AppBar position="sticky" elevation={4} sx={{ bgcolor: "#2A6C88" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 1,
          }}
        >
          {/* Logo and App Name */}
          <Box
            component={Link}
            to="/userhome"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 1.5,
                overflow: "hidden",
                bgcolor: "rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={logoSrc}
                alt="logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              {appName}
            </Typography>
          </Box>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
            <Button
              onClick={() => handleScrollTo("about-section")}
              sx={{
                color: "#C2A67E",
                textTransform: "none",
                "&:hover": { color: "#fff", backgroundColor: "rgba(255,215,0,0.2)" },
              }}
            >
              <InfoIcon fontSize="small" sx={{ mr: 1 }} /> About
            </Button>

            <Button
              onClick={() => handleScrollTo("book-section")}
              sx={{
                color: "#C2A67E",
                textTransform: "none",
                "&:hover": { color: "#fff", backgroundColor: "rgba(255,215,0,0.2)" },
              }}
            >
              <MenuBookIcon fontSize="small" sx={{ mr: 1 }} /> Books
            </Button>

            <Button
              component={Link}
              to="/userbookdetails"
              sx={{
                color: "#C2A67E",
                textTransform: "none",
                "&:hover": { color: "#fff", backgroundColor: "rgba(255,215,0,0.2)" },
              }}
            >
              <PersonIcon fontSize="small" sx={{ mr: 1 }} /> User Details
            </Button>

            <Button
              onClick={handleLogout}
              startIcon={<LogoutIcon />}
              variant="contained"
              sx={{
                textTransform: "none",
                fontWeight: 700,
                bgcolor: "#fff",
                color: "#C2A67E",
                "&:hover": { bgcolor: "#e0e0e0" },
              }}
            >
              Logout
            </Button>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenNavMenu}
              sx={{ bgcolor: "rgba(255,255,255,0.08)" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <MenuItem onClick={() => handleScrollTo("about-section")}>
                About
              </MenuItem>
              <MenuItem onClick={() => handleScrollTo("book-section")}>
                Books
              </MenuItem>
              <MenuItem component={Link} to="/userbookdetails" onClick={handleCloseNavMenu}>
                User Details
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
