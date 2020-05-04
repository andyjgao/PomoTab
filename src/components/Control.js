import React from "react";
import Button from "@material-ui/core/Button";
import {
  createMuiTheme,
  withStyles,
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
    color: "#FFFFFF"
  },

}));
export default function Timer() {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button color="primary" className={classes.start} variant="contained">
          Start
        </Button>
        <Button color="secondary" variant="outlined">Reset</Button>
      </ThemeProvider>
    </div>
  );
}