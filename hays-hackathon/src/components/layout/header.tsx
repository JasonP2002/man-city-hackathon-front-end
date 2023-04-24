import { Stack } from "@mui/material";
import MenuListComposition from "./NavigationBar";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Stack
      direction="row"
      mr={0.5}
      mb={0.25}
      mt={0}
      padding={0}
      alignItems="center"
      spacing={74}
      height="75px"
    >
      <MenuListComposition />
    </Stack>
  );
};

export default Header;
