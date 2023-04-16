import React from "react";
import { Stack } from "@mui/material";
import MenuListComposition from "./NavigationBar";

const Header = () => {
  return (
    <Stack direction="row" mr={20} mb={2} alignItems="center" spacing={65}>
      <MenuListComposition />
      <h1>ENERGY STATS</h1>
    </Stack>
  );
};

export default Header;
