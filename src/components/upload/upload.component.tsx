import { Button } from "@mui/material";
import * as React from "react";

interface UploadProps {
  onSubmit: () => void;
}

const Upload = (props: UploadProps) => {
  const { onSubmit } = props;

  return (
    <Button variant="contained" component="label" onClick={onSubmit}>
      Upload File <input type="file" accept="image/*" hidden />
    </Button>
  );
};

export default Upload;
