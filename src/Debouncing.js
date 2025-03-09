import { useState } from "react";

export const Debouncing = () => {
  const debouncing = () => {
    let timer = null;
    return () => {
      if (timer) clearTimeout(timer);
      console.log("f", timer);
      timer = setTimeout(() => {
        console.log("input");
      }, [1000]);
      console.log(timer);
    };
  };

  const betterDebouncing = debouncing();

  return (
    <div>
      <input type="text" onKeyUp={betterDebouncing()} />
    </div>
  );
};
