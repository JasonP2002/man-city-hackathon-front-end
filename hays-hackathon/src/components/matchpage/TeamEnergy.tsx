import * as React from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import { Box } from "@mui/system";
import axios from "axios";

const EnergyProgress = React.memo((props: any) => {
  const [progress, setProgress] = React.useState(0);
  const [arrayOfId, setId] = React.useState([""]);
  const [dataa, setDataa] = React.useState("");
  const getAllDataa = () => {
    axios
      .get("http://127.0.0.1:5000/players/MCI")
      .then((response) => {
        const players = response.data.players;
        console.log(players);
        const ssiIds: string[] = [];
        for (const player of players) {
          const ssiId = player.ssiId;
          ssiIds.push(ssiId);
        }

        setDataa(response.data.players);
        setId(ssiIds);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getAllDataa();
  }, []);

  type EnergyData = number;

  const fetchEnergyData = async (ssiId: string): Promise<EnergyData> => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/energy/predict/energy-level?ssiId=${ssiId}&date=2022-12-04&minutes=0`,
        {
          params: {
            date: "2022-12-04",
          },
        }
      );
      return response.data as EnergyData;
    } catch (error) {
      console.log(`Failed to fetch energy data for ssiId: ${ssiId}`, error);
      throw error;
    }
  };

  const fetchEnergyDataForAllIds = async (): Promise<EnergyData[]> => {
    try {
      const energyDataArray: EnergyData[] = await Promise.all(
        arrayOfId.map(async (ssiId) => fetchEnergyData(ssiId))
      );
      return energyDataArray;
    } catch (error) {
      console.log("Failed to fetch energy data for all ssiIds", error);
      throw error;
    }
  };

  const fetchData = async () => {
    try {
      const energyDataArray = await fetchEnergyDataForAllIds();
      const sum = energyDataArray.reduce((acc, val) => acc + val, 0);
      console.log("Sum:", sum);
      return sum;
    } catch (error) {
      console.log(error);
    }
  };

  const getFinalSum = async () => {
    try {
      const sum = await fetchData();
      console.log("Final Sum:", sum);
      if (typeof sum === "number") {
        const percentage = (sum / (arrayOfId.length * 100)) * 100;
        setProgress(percentage);
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    const startTimer = () => {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress >= 100 ? 100 : prevProgress + 1;
          return newProgress;
        });
      }, 15000);
    };

    if (arrayOfId.length > 0 && progress === 0) {
      getFinalSum();
    }
    if (progress > 0.0) {
      setTimeout(() => {
        startTimer();
      }, 15000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [arrayOfId, progress]);
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>Average Energy Levels</h3>
      <CircularProgress
        sx={{
          color: "black",
          "--CircularProgress-progressColor": "#5be51f",
          "--CircularProgress-size": "80px",
        }}
        determinate
        value={progress}
      >
        {`${Math.round(progress)}%`}
      </CircularProgress>
    </Box>
  );
});
export default EnergyProgress;
