import * as React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";

const LayoutComponent = ({}) => {
  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h2" component="h1" mb={2}>
        Forest Score
      </Typography>
      <Paper elevation={3}>
        <Box p={2}>Content</Box>
      </Paper>
    </Container>
  );
};

export default LayoutComponent;
