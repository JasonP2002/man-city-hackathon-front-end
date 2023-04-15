import React, { useState } from "react";
import Layout from "../layout/layout";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
} from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { useNavigate } from "react-router";

export default function MatchDetails() {
  const [location, setLocation] = React.useState("home");
  const [opponent, setOpponent] = useState({});
  const [formation, setFormation] = useState({});

  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation((event.target as HTMLInputElement).value);
  };
  const handleClose =
    (page: string) => (event: Event | React.SyntheticEvent) => {
      if (
        anchorRef.current &&
        anchorRef.current.contains(event.target as HTMLElement)
      ) {
        return;
      }
      if (page) {
        navigate(page, {
          state: { opposition: opponent, form: formation, location: location },
        });
      }
    };

  const teams = [
    { label: "Manchester United", shorthand: "MUN" },
    { label: "West Ham", shorthand: "WHU" },
    { label: "Liverpool", shorthand: "LIV" },
  ];
  const formations = [
    { label: "4-3-3", formationType: "defensive" },
    { label: "3-5-2", formationType: "offensive" },
    { label: "4-4-2", formationType: "defensive" },
  ];
  const theme = createTheme({
    palette: {
      primary: {
        main: "#D9D9D9",
      },
      secondary: {
        light: "#0066ff",
        main: "#000000",
        contrastText: "#ffcc00",
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Box
          sx={{
            width: 500,
            height: 500,
            marginLeft: 60,
            marginBlockStart: 10,
            backgroundColor: "primary.main",
            borderRadius: 2,
          }}
        >
          <h2>START NEW MATCH</h2>
          <div>
            <Autocomplete
              disablePortal
              id="dropdown"
              options={teams}
              isOptionEqualToValue={(options, value) =>
                options.label === value.label
              }
              sx={{
                padding: 1,
              }}
              onChange={(event, value) => setOpponent({ value })}
              renderInput={(params) => (
                <TextField {...params} label="Opponent" />
              )}
            />
            <FormControl>
              <RadioGroup
                className="checkbox"
                row
                value={location}
                onChange={handleChange}
                aria-labelledby="checkbox"
                name="position"
                defaultValue="top"
                sx={{
                  marginLeft: 18,
                  margin: 4,
                }}
              >
                <FormControlLabel
                  id="checkbox"
                  value="home"
                  control={<Radio />}
                  label="Home"
                  labelPlacement="start"
                />
                <FormControlLabel
                  id="checkbox"
                  value="away"
                  control={<Radio />}
                  label="Away"
                  labelPlacement="start"
                />
              </RadioGroup>
            </FormControl>
            <Autocomplete
              disablePortal
              id="dropdown"
              options={formations}
              isOptionEqualToValue={(options, value) =>
                options.label === value.label
              }
              sx={{
                padding: 1,
              }}
              onChange={(event, value) => setFormation({ value })}
              renderInput={(params) => (
                <TextField {...params} label="Formation" />
              )}
            />
            <Box
              m={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton aria-label="start" onClick={handleClose("selection")}>
                <PlayArrowRoundedIcon id="playButton" />
              </IconButton>
            </Box>
          </div>
        </Box>
      </Layout>
    </ThemeProvider>
  );
}
