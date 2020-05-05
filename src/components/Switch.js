import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.grey[500],
      "& + $track": {
        opacity: 1,
        backgroundColor: "#FFFFFF",
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "#000000",
  },
  checked: {},
}))(Switch);

export default function CustomizedSwitches({ handleDark }) {
  return (
    <Box justifyContent="flex-end">
      <Grid component="label" container a spacing={1}>
        <Grid item>
          <span role="img" aria-label="sun">
            ☀️
          </span>
        </Grid>
        <Grid item>
          <AntSwitch onChange={handleDark} name="checkedC" />
        </Grid>
        <Grid item>
          <span role="img" aria-label="moon">
            🌙
          </span>
        </Grid>
      </Grid>
    </Box>
  );
}
