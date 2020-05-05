import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Center from "./components/Center";
import Switch from "./components/Switch";
import useInterval from "./utils/useInterval";
import Tomato from "./assets/tomato.png";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import test from "./assets/bell.mp3"
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import "./App.css";

const audio = new Audio(test)

function App() {
  const timeStudy = 25*60;
  const timeRest = 5*60;
  const timeVal = timeStudy;

  const [time, timeSet] = useState(timeVal);
  const [rest, restSet] = useState(false);
  const [start, startSet] = useState(false);
  const [focus, focusSet] = useState(false);
  const [dark, darkSet] = useState(false);
  const handleDark = () => {
    darkSet(!dark);
  };
  const handleReset = () => {
    startSet(false);
    timeSet(timeVal);
    audio.pause()
    audio.currenTime = 0
  };

  const handleStart = () => {
    startSet(!start);
    audio.pause()
    audio.currenTime = 0
  };

  useEffect(() => {
    if (time === 0 && !rest) {
      audio.play()
      restSet(true);
      timeSet(timeRest);
      startSet(false);
    } else if (time === 0 && rest) {
      audio.play()
      restSet(false);
      timeSet(timeStudy);
      startSet(false);
    }
    // this can probably be optimized
    if (time < timeStudy) {
      focusSet(true);
    } else {
      focusSet(false);
    }
  }, [time]);

  useInterval(
    () => {
      timeSet(time - 1);
    },
    start && time ? 1000 : null
  );
  const darkTheme = createMuiTheme({
    palette: {
      type: dark ? "dark" : "light",
    },
  });
  const useStyles = makeStyles((theme) => ({
    halfWidth: {
      width: "45%",
    },
    center: {
      textAlign: "center",
    },
    visible: {
      visibility: (rest && !start) ? "visible": "hidden" 
    },
  }));
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container justify="right" alignItems="right">
        <Switch handleDark={handleDark} />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Box mt={15} mb={3} className={classes.center}>
          <Grid item>
            <Typography variant="h4" component="h4" className={classes.visible}>
              Start Break?
            </Typography>

            <img className={classes.halfWidth} src={Tomato} />
          </Grid>
        </Box>
      </Grid>

      <Grid container direction="column" justify="center" alignItems="center">
        <Center
          handleReset={handleReset}
          handleStart={handleStart}
          start={start}
          time={time}
          focus={focus}
        />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
