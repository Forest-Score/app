import * as React from "react";
import { Box, Container, Paper, Slide, Typography } from "@mui/material";

import Address from "./address/address.component";
import Upload from "./upload/upload.component";
import Question from "./question/question.component";
import Goals from "./goals/goals.component";
import Experience from "./experience/experience.component";
import Work from "./work/work.component";

const LayoutComponent = ({}) => {
  const [active, setActive] = React.useState("goals");

  const answerQuestion = (current: string, next: string) => {
    console.log(current, next);
    setActive(next);
  };

  return (
    <Container component="main" maxWidth="md">
      <Typography
        variant="h2"
        component="h1"
        textAlign="center"
        mb={4}
        mt={8}
        sx={{ fontFamily: "'Eczar', serif", fontWeight: 700 }}
      >
        <a
          href="https://forestscore.com"
          style={{
            alignItems: "center",
            color: "#313131",
            display: "flex",
            fontWeight: 700,
            gap: "1rem",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <img
            src="https://img.icons8.com/plasticine/100/000000/coniferous-tree.png"
            height="75"
          />{" "}
          Forest Score
        </a>
      </Typography>
      <Paper
        elevation={0}
        sx={{
          maxWidth: "700px",
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <Box p={2}>
          <Slide in={active === "goals"} mountOnEnter unmountOnExit>
            <Box>
              <Question
                header="Which best describes your motivation?"
                onSubmit={() => answerQuestion("goals", "experience")}
              >
                <Goals />
              </Question>
            </Box>
          </Slide>
          <Slide in={active === "experience"} mountOnEnter unmountOnExit>
            <Box>
              <Question
                header="How knowledgeable are you about the forest around you?"
                onSubmit={() => answerQuestion("experience", "work")}
              >
                <Experience />
              </Question>
            </Box>
          </Slide>
          <Slide in={active === "work"} mountOnEnter unmountOnExit>
            <Box>
              <Question
                header="Are you planning on working on the forest property yourself?"
                onSubmit={() => answerQuestion("work", "address")}
              >
                <Work />
              </Question>
            </Box>
          </Slide>
          <Slide in={active === "address"} mountOnEnter unmountOnExit>
            <Box>
              <Question
                header="What is the address of the subject property?"
                onSubmit={() => answerQuestion("address", "upload")}
              >
                <Address onSubmit={() => setActive("upload")} />
              </Question>
            </Box>
          </Slide>
          <Slide in={active === "upload"} mountOnEnter unmountOnExit>
            <Box>
              <Question
                header="Do you have drone footage to upload?"
                onSubmit={() => answerQuestion("upload", "results")}
                isLast
              >
                <Upload onSubmit={() => alert("upload")} />
              </Question>
            </Box>
          </Slide>
          <Slide in={active === "results"} mountOnEnter unmountOnExit>
            <div>The Results</div>
          </Slide>
        </Box>
      </Paper>
    </Container>
  );
};

export default LayoutComponent;
