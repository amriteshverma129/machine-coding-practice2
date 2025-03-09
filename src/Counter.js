import { useState, useRef } from "react";

const Counter = () => {
  const [time, setTime] = useState({
    hour: 0,
    min: 0,
    sec: 0,
    mSec: 0,
  });

  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current) return; // Prevent multiple intervals

    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        let { hour, min, sec, mSec } = prev;
        mSec += 10; // Increase by 10 milliseconds

        if (mSec >= 1000) {
          mSec = 0;
          sec += 1;
        }
        if (sec >= 60) {
          sec = 0;
          min += 1;
        }
        if (min >= 60) {
          min = 0;
          hour += 1;
        }

        return { hour, min, sec, mSec };
      });
    }, 10);
  };

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleReset = () => {
    handleStop();
    setTime({ hour: 0, min: 0, sec: 0, mSec: 0 });
  };

  return (
    <div>
      {time.hour}:{time.min}:{time.sec}:{time.mSec}
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
