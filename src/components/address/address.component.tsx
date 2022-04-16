import { Button, FormControl, InputLabel, TextField } from "@mui/material";
import * as React from "react";

interface AddressProps {
  onSubmit: () => void;
}

const Address = (props: AddressProps) => {
  const [address, setAddress] = React.useState("");
  const { onSubmit } = props;

  return (
    <FormControl>
      <InputLabel htmlFor="address-input">Search for Address</InputLabel>
      <TextField
        id="address-input"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        variant="filled"
      />
      <Button variant="contained" onClick={onSubmit}>
        Find Property
      </Button>
    </FormControl>
  );
};

export default Address;
