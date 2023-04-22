import React, { useState, useEffect } from "react";
import calculateTimeInSeconds from "./../../Helpers/timeHelper";
import Controls from "../layout/timerControls";

function Timer() {
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [timeArray, setTimeArray] = useState<Array<number | string>>([]);

  useEffect(() => {
    setTimeArray(calculateTimeInSeconds(timeInSeconds));
  }, [timeInSeconds]);

  return (
    <main className="stopwatch-container">
      <Controls setTimeInSeconds={setTimeInSeconds} />
      <section className="timer-display">
        {/* <p id="hour">{timeArray[0]}</p> */}
        {/* <span>:</span> */}
        <p id="minute">{timeArray[1]}</p>
        <span>:</span>
        <p id="second">{timeArray[2]}</p>
      </section>
    </main>
  );
}

export default Timer;
