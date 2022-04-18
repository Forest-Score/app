import { Box, Button, Typography } from "@mui/material";
import * as React from "react";

interface QuestionProps {
  children: JSX.Element;
  disabled?: boolean;
  header: string;
  isLast?: boolean;
  onSubmit: () => void;
}

const Question = (props: QuestionProps) => {
  const { children, disabled, header, isLast, onSubmit } = props;
  return (
    <Box>
      <Typography component="h3" variant="h5" gutterBottom>
        {header}
      </Typography>
      <Box mb={2}>{children}</Box>
      <Button
        disabled={disabled}
        color="primary"
        variant="contained"
        onClick={onSubmit}
      >
        {isLast ? "SUBMIT" : "NEXT"}
      </Button>
    </Box>
  );
};

export default Question;
