import { useState } from "react";
import { useEffect } from "react";

const ProgressBar = ({ progress }) => {
  const [progressNew, setProgressNew] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setProgressNew(progress);
    }, 0);
  }, []);
  return (
    <div
      className="outer"
      role="Progress Bar"
      aria-valuenow={progressNew}
      aria-valuemax={"100%"}
      aria-valuemin={"0%"}
    >
      <div className="inner" style={{ width: `${progressNew}%` }}></div>
      <div
        style={{
          position: "absolute",
          inset: "0",
        }}
      >
        {progressNew}%
      </div>
    </div>
  );
};

export const ProgressBars = () => {
  const progressArr = [10, 40, 60, 100];
  return (
    <div>
      {progressArr.map((progress, index) => (
        <div key={index}>
          <ProgressBar progress={progress} />
        </div>
      ))}
    </div>
  );
};
