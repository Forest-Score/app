import { TextField } from "@mui/material";
import * as React from "react";

interface AddressProps {
  onSubmit: () => void;
}

const Address = (props: AddressProps) => {
  const [address, setAddress] = React.useState("");
  const { onSubmit } = props;

  return (
    <TextField
      id="address-input"
      onChange={(e) => setAddress(e.target.value)}
      value={address}
      variant="filled"
      fullWidth
    />
  );
};

export default Address;
