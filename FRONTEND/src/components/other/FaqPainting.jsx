import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TopHeadQuestions = {
  fontWeight: "600",
  color: "#F45C43",
  fontSize: "22px",
  paddingBottom: "50px",
  borderBottom: "1px solid #e0e0e0",
  marginTop: "20px",
};

const TopQuestions = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [id, setId] = React.useState(null);

  const handleChange = (panel, id) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    if (panel && isExpanded) {
      setId(parseInt(panel.slice(5,)));
    } else {
      setId(null);
    }
  };

  const AccordianStyle = {
    boxShadow: 0,
    borderBottom: "1px solid #e0e0e0",
    textAlign: "left",
    padding: "20px 15px!important",
  };
  return (
    <>
      <Typography variant="h4" style={TopHeadQuestions}>
        Top questions
      </Typography>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1", 1)}
        disableGutters
        sx={AccordianStyle}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: id === 1 ? "#FF512F" : "#464646" }} />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: id === 1 ? "#FF512F" : "#464646" }}>
            Who will paint my house?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We have a panel of contractors, and painters who are trained by us
            with respect to our product range. Our painters are trained to
            ensure that the correct application procedures are followed. They
            are also trained in textured and specialty paint finishes.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2", 2)}
        disableGutters
        sx={AccordianStyle}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: id === 2 ? "#FF512F" : "#464646" }} />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ color: id === 2 ? "#FF512F" : "#464646" }}>
            What is the benefit of working with us?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You will get Excellent customer service, work quality and
            satisfaction.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3", 3)}
        disableGutters
        sx={AccordianStyle}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: id === 3 ? "#FF512F" : "#464646" }} />
          }
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ color: id === 3 ? "#FF512F" : "#464646" }}>
            3. After the painting work is over, would you will be cleaning up
            the home?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we will do the post painting clean-up for your home and will
            leave your home clean and beautifully painted.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4", 4)}
        disableGutters
        sx={AccordianStyle}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: id === 4 ? "#FF512F" : "#464646" }} />
          }
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ color: id === 4 ? "#FF512F" : "#464646" }}>
            How do I get an estimate?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can get an estimate by going through our website, there you can
            choose a page according to your need such as Interior Painting,
            Exterior Painting, Rental Painting, Water Proofing & Deep Cleaning.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5", 5)}
        disableGutters
        sx={AccordianStyle}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: id === 5 ? "#FF512F" : "#464646" }} />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ color: id === 5 ? "#FF512F" : "#464646" }}>
             What kind of painting jobs you offer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We provide an end to end 1. Interior Painting 2. Exterior Painting
            3. Wood Finishes ( Paint & Polish ) 4.Metal Painting 5. Textures 6.
            Stencils 7. Wall Arts 8. Wall Paper 9. Waterproofing 10. Cleaning
            Services. When it comes to painting, we take pride in saying we know
            in and out. Give us any design/image, we recreate them on the walls
            - Pixel Perfect. You also have the flexibility of choosing over a
            wide range of products from the brands
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

function XLMainPageTopQuestions() {
  return (
    <div
      id="faqs"
      style={{
        padding: "60px 100px",
      }}
    >
      <TopQuestions />
    </div>
  );
}

function SMMainPageTopQuestions() {
  return (
    <div
      id="faqs"
      style={{
        padding: "30px 20px",
      }}
    >
      <TopQuestions />
    </div>
  );
}

function MDMainPageTopQuestions() {
  return (
    <div
      id="faqs"
      style={{
        padding: "20px",
      }}
    >
      <TopQuestions />
    </div>
  );
}

export default function FaqPainting() {
  const xlMax = useMediaQuery("(max-width:2000px)");
  const xlMin = useMediaQuery("(min-width:1160px)");
  const mdMax = useMediaQuery("(max-width:1160px)");
  const mdMin = useMediaQuery("(min-width:600px)");
  const sm = useMediaQuery("(max-width:600px)");
  return (
    <>
      {xlMax && xlMin && <XLMainPageTopQuestions />}
      {!(xlMax && xlMin) && mdMax && mdMin && <MDMainPageTopQuestions />}
      {sm && <SMMainPageTopQuestions />}
    </>
  );
}
