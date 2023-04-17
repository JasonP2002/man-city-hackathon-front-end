import React, { useState } from "react";
import Layout from "../layout/layout";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router";
import axios from "axios";

export default function MatchDetails() {
  const [location, setLocation] = React.useState("home");
  const [opponent, setOpponent] = useState({});
  const [formation, setFormation] = useState({});
  const [numPlayers, setNumPlayers] = useState(0);

  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation((event.target as HTMLInputElement).value);
  };

  const handleDisabled = (opp: object, f: object) => {
    if (Object.keys(opp).length === 0 || Object.keys(f).length === 0) {
      return true;
    }
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
          state: {
            opposition: opponent,
            form: formation,
            location: location,
            num_players: data.length,
          },
        });
      }
    };

  const [data, setData] = useState("");
  const getAllData = () => {
    axios
      .get("http://localhost:8888/player")
      .then((response) => {
        setData(response.data);
        setNumPlayers(data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getAllData();
  });

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

  return (
    <Layout>
      <Box
        sx={{
          width: "60%",
          height: 520,
          marginLeft: 35,
          marginBlockStart: 8,
          backgroundColor: "#E6E6E6",
        }}
        border={4}
        borderColor="black"
        borderRadius={5}
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
              margin: 2,
            }}
            onChange={(event, value) => setOpponent({ value })}
            renderInput={(params) => <TextField {...params} label="Opponent" />}
          />
          <Box m={1} display="flex" justifyContent="center" alignItems="center">
            <FormControl>
              <RadioGroup
                className="checkbox"
                row
                value={location}
                onChange={handleChange}
                aria-labelledby="checkbox"
                name="position"
                sx={{
                  marginBottom: 4,
                  marginTop: 4,
                  fontSize: 100,
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
          </Box>
          <Autocomplete
            disablePortal
            id="dropdown"
            options={formations}
            isOptionEqualToValue={(options, value) =>
              options.label === value.label
            }
            sx={{
              padding: 1,
              margin: 2,
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
            marginTop={5}
          >
            <Button
              variant="contained"
              onClick={handleClose("match")}
              disabled={handleDisabled(opponent, formation)}
              sx={{
                width: "30%",
                fontSize: "100",
                border: 4,
                borderColor: "#black",
                backgroundColor: "#7cc644",
                color: "black",
                ":hover": {
                  bgcolor: "#5cb800",
                  color: "black",
                },
              }}
              endIcon={<ArrowForwardIosIcon />}
            >
              <h3>SELECT TEAM</h3>
            </Button>
          </Box>
        </div>
      </Box>
    </Layout>
  );
}
