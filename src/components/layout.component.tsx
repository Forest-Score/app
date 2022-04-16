import * as React from "react";
import { Box, Container, Paper, Slide, Typography } from "@mui/material";

import Address from "./address/address.component";
import Upload from "./upload/upload.component";

const LayoutComponent = ({}) => {
  const [active, setActive] = React.useState("address");

  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h2" component="h1" textAlign="center" mb={2}>
        Forest Score
      </Typography>
      <Paper elevation={3} sx={{ height: "calc(100vw - 120px)" }}>
        <Box p={2} pt={5} textAlign="center">
          <Slide
            direction="left"
            in={active === "address"}
            mountOnEnter
            unmountOnExit
          >
            <Box>
              <Address onSubmit={() => setActive("upload")} />
            </Box>
          </Slide>
          <Slide
            direction="left"
            in={active === "upload"}
            mountOnEnter
            unmountOnExit
          >
            <Box>
              <Upload onSubmit={() => setActive("address")} />
            </Box>
          </Slide>
        </Box>
      </Paper>
    </Container>
  );
};

export default LayoutComponent;
