import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";

import MenuItem from "@mui/material/MenuItem";
import {
  Avatar,
  ClickAwayListener,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
// import GroupsIcon from "@mui/icons-material/Groups";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import logo from "../../assets/logo.png";

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose =
    (page: string) => (event: Event | React.SyntheticEvent) => {
      setAnchorEl(null);
      navigate(page);
    };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        overflowX: "hidden",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <ClickAwayListener onClickAway={handleClose("")}>
            <IconButton
              size="large"
              edge="start"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              sx={{ mr: 156, flexGrow: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </ClickAwayListener>
          <div>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose("/")}>
                {" "}
                <ListItemIcon>
                  <HomeIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose("/archive")}>
                <ListItemIcon>
                  <AnalyticsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Player Data</ListItemText>
              </MenuItem>
            </Menu>
          </div>
          <Box sx={{ overflow: "hidden" }}>
            {" "}
            {/* Apply overflow hidden to container */}
            <Avatar
              alt="Remy Sharp"
              src={logo}
              className="image"
              sx={{ width: 150, height: 70, pb: 0, lineHeight: 0 }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
