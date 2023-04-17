import * as React from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import { Box } from "@mui/system";

export default function EnergyProgress() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress));
  }, []);
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        marginLeft: 80,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>Average Energy Levels</h3>
      <CircularProgress size="lg" color="primary" determinate value={progress}>
        {`${Math.round(progress)}%`}
      </CircularProgress>
    </Box>
  );
}
