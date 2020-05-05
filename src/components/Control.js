import React from "react";
import Button from "@material-ui/core/Button";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const useStyles = makeStyles((theme) => ({
  start: {
    margin: theme.spacing(1),
  },
  whiteFont: {
    color: "#FFFFFF",
  },
}));
export default function Timer({ start, handleStart, handleReset }) {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        {!start && (
          <Button
            color="primary"
            onClick={handleStart}
            className={classes.start}
            variant="outlined"
          >
            Start
          </Button>
        )}
        {start && (
          <Button
            color="primary"
            onClick={handleStart}
            className={`${classes.start} ${classes.whiteFont}`}
            variant="contained"
          >
            Pause
          </Button>
        )}
        <Button
          color="secondary"
          onClick={handleReset}
          className={classes.start}
          variant="outlined"
        >
          Reset
        </Button>
      </ThemeProvider>
    </div>
  );
}
