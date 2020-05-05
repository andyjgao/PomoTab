import React from "react";
import Control from "./Control";
import Timer from "./Timer";
import Focus from "./Focus";
import Box from "@material-ui/core/Box";


export default function Center({ time, handleStart, start, handleReset,focus }) {
  return (
    <>
      <Timer time={time} />
      <Box mt={3}>
        <Control
          handleReset={handleReset}
          handleStart={handleStart}
          start={start}
        />
      </Box>
      <Box mt={3}>
        <Focus focus={focus} />
      </Box>
    </>
  );
}
