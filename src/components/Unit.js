import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default function Unit({ num }) {
  const classes = useStyles();

  return (
    <Grid item>
      <Paper className={classes.paper}>
        <Typography variant="h2" component="h2">
          {num}
        </Typography>
      </Paper>
    </Grid>
  );
}
