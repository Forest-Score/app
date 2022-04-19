import * as React from "react";
import { FormControlLabel, FormGroup, RadioGroup, Radio } from "@mui/material";

const Work = () => {
  return (
    <FormGroup>
      <RadioGroup>
        <FormControlLabel
          value="no"
          control={<Radio />}
          label="No, I plan on bringing in help"
        />
        <FormControlLabel
          value="mix"
          control={<Radio />}
          label="Yes, but not the felling or chainsawing"
        />
        <FormControlLabel
          value="yes"
          control={<Radio />}
          label="Yes, plan on doing it all myself"
        />
      </RadioGroup>
    </FormGroup>
  );
};

export default Work;
