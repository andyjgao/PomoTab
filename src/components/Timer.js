import React from "react";
import Unit from "./Unit";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import calcTime from '../utils/timeCalc'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function Control({ time }) {
  const timeArray = calcTime(time);
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={1}>
        <Unit num={timeArray[0]} />
        <Unit num={timeArray[1]} />
        <Typography className={classes.paper} variant="h1" component="h2">
          :
        </Typography>
        <Unit num={timeArray[2]} />
        <Unit num={timeArray[3]} />
      </Grid>
    </div>
  );
}
