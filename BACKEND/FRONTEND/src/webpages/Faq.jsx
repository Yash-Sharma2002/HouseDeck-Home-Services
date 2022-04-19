import React from 'react'
import { Typography, Box } from '@mui/material'
import { FAQData } from '../constants/data';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../components/head/Header';
import Footer from '../components/foot/Footer';

const AccordianStyle = {
    boxShadow: 0,
    borderBottom: '1px solid #e0e0e0',
    textAlign: 'left',
    padding: '20px 15px!important',

}

function Content({ width, padding, variant, margin }) {
    const commonProps = [{ name: "Home Services", url: "/home-services" }];

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Header commonProps={commonProps} />
            <Box
                sx={{
                    textAlign: "start",
                    width: width,
                    margin: margin,
                    padding: padding,
                    wordWrap: 'break-word'
                }}
            >
                <Typography variant={variant} sx={{ fontWeight: "600", color: "#1b685f" }}>
                    Frequently Asked Questions
                </Typography>

                <Box sx={{ mt: 3 }}>
                    {FAQData.map(data =>
                        <Accordion expanded={expanded === data.panel}
                            onChange={handleChange(data.panel)}
                            disableGutters
                            sx={AccordianStyle}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ fontWeight: "600", color: "#1b685f", fontSize: "16px" }} />}
                            >
                                <Typography sx={{
                                    fontWeight: "600",
                                    color: "#1b685f",
                                    fontSize: "16px",
                                }}>
                                    {data.ques}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontSize: "16px", color: "#95b2af" }}>
                                    {data.ans}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )}
                </Box>

            </Box>
            <Footer />
        </div>
    );
}

export default function Faq() {
    const xlMax = useMediaQuery("(max-width:2000px)");
    const xlMin = useMediaQuery("(min-width:1200px)");
    const mdMax = useMediaQuery("(max-width:1200px)");
    const mdMin = useMediaQuery("(min-width:600px)");
    const sm = useMediaQuery("(max-width:600px)");
    return (
        <>
            {xlMax && xlMin && <Content width={"1170px"} padding={"unset"} variant={'h3'} margin={"100px auto"} />}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <Content width={"unset"} padding={"0px 70px"} variant={'h3'} margin={"50px auto"} />
            )}
            {sm && <Content width={"unset"} padding={"0px 20px"} variant={'h5'} margin={"20px auto"} />}
        </>
    );
}
