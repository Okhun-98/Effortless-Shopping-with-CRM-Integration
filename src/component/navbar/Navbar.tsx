import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { yellow } from "@mui/material/colors";

interface Props {
  window?: () => Window;
  title: string;
  links: { label: string; url: string }[];
}

const drawerWidth = 240;

const DrawerAppBar: React.FC<Props> = (props: Props) => {
  const { window, links, title } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {title}
      </Typography>
      <Divider />
      <List>
        {links.map((link) => (
          <ListItem key={link.url} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to={link.url}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemText primary={link.label} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color={"yellow"}
            textTransform={"uppercase"}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Shop In
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {links.map((link) => (
              <Button
                key={link.url}
                sx={{ color: "#fff" }}
                component={Link}
                to={link.url}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
};

export default DrawerAppBar;
