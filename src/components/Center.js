import React from "react";
import Control from "./Control";
import Timer from "./Timer";
import Box from "@material-ui/core/Box";

export default function Center({time, handleStart, start, handleReset}) {
  return (
    <>
      <Timer time={time}/>
      <Box mt={3}>
        <Control handleReset={handleReset} handleStart={handleStart} start={start}/>
      </Box>
    </>
  );
}
