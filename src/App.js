import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Center from "./components/Center";
import "./App.css";

function App() {
  return (
    <Box mt={3}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography variant="h3" component="h3">
          PomoTab
        </Typography>
        <Grid container direction="row" justify="center" alignItems="center">
          <Center />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
