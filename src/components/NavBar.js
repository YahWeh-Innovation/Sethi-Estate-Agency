import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  ListItemIcon,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
import Link from "next/link";
import ArticleIcon from "@mui/icons-material/Article";
import DomainIcon from "@mui/icons-material/Domain";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        zIndex: "20",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
        backgroundColor: "rgba(166, 124, 82, 0.6)",
        backdropFilter: "blur(20px)",
      }}
      onClick={toggleDrawer}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            href="/"
            sx={{
              "&:hover": { backgroundColor: "#f0f0f7" },
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            href="/about"
            sx={{
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            href="/properties"
            sx={{
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            <ListItemIcon>
              <DomainIcon />
            </ListItemIcon>
            <ListItemText primary="Properties" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            href="/blogs"
            sx={{
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Blogs" />
          </ListItemButton>
        </ListItem>
      </List>

      <Box sx={{ padding: 2 }}>
        <Button
          fullWidth
          sx={{
            backgroundColor: "#2F1D19",
            color: "white",
            gap: "10px",
            "&:hover": {
              backgroundColor: "#145C2C",
            },
          }}
          component={Link}
          href="/contact"
        >
          <PhoneIcon /> Contact Us
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(166, 124, 82, 0.6)",
          backdropFilter: "blur(40px)",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Box>
            <Box
              component="img"
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1737480338/_2_cpcou5.png"
              alt="K.S. Global Logo"
              sx={{
                height: 70,
                width: "auto",
                cursor: "pointer",
              }}
            />
            <Box
              component="img"
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/c_crop,w_1800,h_600/v1737480338/sethiEstate1_zua8bu.png"
              alt="K.S. Global Logo"
              sx={{
                height: 70,
                width: "auto",
                cursor: "pointer",
              }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              flexGrow: 2,
              gap: 2,
            }}
          >
            <Button color="inherit" component={Link} href="/">
              Home
            </Button>
            <Button color="inherit" component={Link} href="/about">
              About Us
            </Button>
            <Button color="inherit" component={Link} href="/properties/search">
              Properties
            </Button>
            <Button color="inherit" component={Link} href="/blogs">
              Blogs
            </Button>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                background: "#2F1D19",
                borderRadius: "10px",
                gap: "10px",
                padding: "8px 16px",
                "&:hover": {
                  borderColor: "#DDD",
                },
              }}
              component={Link}
              href="/contact"
            >
              <PhoneIcon /> Contact
            </Button>
          </Box>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", sm: "none" }, ml: "auto" }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        {drawerContent}
      </Drawer>
    </>
  );
}