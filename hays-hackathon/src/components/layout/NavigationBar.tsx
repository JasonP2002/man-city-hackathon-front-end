import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { IconButton, ListItemIcon, ListItemText, Menu } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
// import GroupsIcon from "@mui/icons-material/Groups";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import AnalyticsIcon from "@mui/icons-material/Analytics";

export default function MenuListComposition() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();

  const handleClose =
    (page: string) => (event: Event | React.SyntheticEvent) => {
      setAnchorEl(null);
      navigate(page);
    };

  return (
    <div>
      <ClickAwayListener onClickAway={handleClose("")}>
        <IconButton
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon style={{ color: "#000000", fontSize: "40px" }} />
        </IconButton>
      </ClickAwayListener>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
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
  );
}
