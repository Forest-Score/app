import * as React from "react";
import { FormControlLabel, FormGroup, RadioGroup, Radio } from "@mui/material";

const Experience = () => {
  return (
    <FormGroup>
      <RadioGroup>
        <FormControlLabel
          value="beginner"
          control={<Radio />}
          label="I know that I'm looking at trees but that's it"
        />
        <FormControlLabel
          value="intermediate"
          control={<Radio />}
          label="I can identify different types of trees"
        />
        <FormControlLabel
          value="expert"
          control={<Radio />}
          label="Call me Paul Bunyan. I know all about forest ecology"
        />
      </RadioGroup>
    </FormGroup>
  );
};

export default Experience;
