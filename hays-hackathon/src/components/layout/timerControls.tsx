import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, IconButton } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

type Props = {
  setTimeInSeconds: Function;
};

function Controls(props: Props) {
  const { setTimeInSeconds } = props;
  const [intervalId, setIntervalId] = useState<number>(0);

  const handlePlayButton = (e: object) => {
    const interval: any = setInterval(() => {
      setTimeInSeconds((previousState: number) => previousState + 1);
    }, 1000);

    setIntervalId(interval);
  };

  const handleStopButton = () => {
    clearInterval(intervalId);
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setTimeInSeconds(0);
  };

  return (
    <Box className="stopwatch-controls-container" ml={168}>
      <IconButton onClick={handlePlayButton} type="button">
        <PlayArrowIcon />
      </IconButton>
      <IconButton onClick={handleStopButton} type="button">
        <PauseIcon />
      </IconButton>
      <IconButton onClick={handleReset} type="button">
        <RestartAltIcon />
      </IconButton>
    </Box>
  );
}

export default Controls;
