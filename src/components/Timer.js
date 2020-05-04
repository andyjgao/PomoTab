import React from "react";
import Unit from "./Unit";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    paddingTop: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Control() {
  const classes = useStyles()
  return (
    <div>
      <Grid container spacing={2}>
        <Unit />
        <Unit />
        <Grid item>
          <Typography className={classes.paper} variant="h2" component="h2">
            :
          </Typography>
        </Grid>
        <Unit />
        <Unit />
      </Grid>
    </div>
  );
}
