import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

export default function Focus({ focus }) {
  return (
    <Box width={400}>
      <TextField
        inputProps={{ style: { textAlign: "center" } }}
        label="Focus"
        id="outlined-multiline-static"
        disabled={focus}
        placeholder="What is your focus for this session?"
        variant="outlined"
        fullWidth
      />
    </Box>
  );
}
