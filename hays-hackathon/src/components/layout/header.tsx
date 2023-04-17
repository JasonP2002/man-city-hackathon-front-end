import { Stack } from "@mui/material";
import MenuListComposition from "./NavigationBar";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Stack
      direction="row"
      mr={0.5}
      mb={0.25}
      padding={0}
      alignItems="center"
      spacing={74}
      height="75px"
    >
      <MenuListComposition />
      <div className="imageWrapper"></div>
      <img
        src={`${logo}?w=164&h=164&fit=crop&auto=format`}
        alt=""
        className="image"
        width="320"
        height="220"
      />
    </Stack>
  );
};

export default Header;
