import React, {useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Center from "./components/Center";
import useInterval from "./utils/useInterval"
import BruhSound from "./assets/bruh.mp3"
import "./App.css";


function App() {
  let audio = new Audio(BruhSound)
  audio.loop = true;

  const timeStudy = 2
  const timeRest = 5*60

  const timeVal = timeStudy;
  const [time, timeSet] = useState(timeVal);
  const [rest, restSet] = useState(false);
  const [start,startSet] = useState(false);
  const handleReset = () =>{
    audio.loop = false;
    startSet(false)
    timeSet(timeVal)
  }
  const handleStart = () =>{
    startSet(!start)
  }
  useEffect(()=>{
    if (time == 0 && !rest){
      restSet(true);
      timeSet(timeRest);
    }else if (time == 0 && rest){
      restSet(false)
      timeSet(timeStudy);
    }
  },[time])
  useInterval(()=>{
      timeSet(time -1);
  },start && time ? 1000 : null)
  return (
    <>
      <Box mt={15} mb={3}>
        <Grid
          container
          item
          direction="row"
          justify="center"
          alignItems="center"
          
        >
          <Typography variant="h3" component="h3">
            PomoTab
          </Typography>
        </Grid>
      </Box>
      <Grid container direction="column" justify="center" alignItems="center">
        <Center handleReset={handleReset} handleStart={handleStart} start={start} time={time} />

      </Grid>
    </>
  );
}

export default App;
