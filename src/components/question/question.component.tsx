import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

interface QuestionProps {
  children: JSX.Element;
  header: string;
}

const Question = (props: QuestionProps) => {
  const { children, header } = props;
  return (
    <Box>
      <Typography component="h3" variant="h5" gutterBottom>
        {header}
      </Typography>
      {children}
    </Box>
  );
};

export default Question;
