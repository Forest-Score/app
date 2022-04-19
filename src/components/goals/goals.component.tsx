import * as React from "react";
import { FormControlLabel, FormGroup, RadioGroup, Radio } from "@mui/material";

const Goals = () => {
  return (
    <FormGroup>
      <RadioGroup>
        <FormControlLabel
          value="legacy"
          control={<Radio />}
          label="Legacy:  I want the forest to be as healthy as possible."
        />
        <FormControlLabel
          value="fire"
          control={<Radio />}
          label="Fire Prevention: I want my property to have the best shot of survival in the event of a fire."
        />
        <FormControlLabel
          value="estate"
          control={<Radio />}
          label="Real Estate: I want to understand the forest 's health before making an investment decision."
        />
        <FormControlLabel
          value="commercial"
          control={<Radio />}
          label="Commercial: I have goals to harvest forest products in the future."
        />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormGroup>
  );
};

export default Goals;
