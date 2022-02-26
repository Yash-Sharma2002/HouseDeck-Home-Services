import { Typography } from '@mui/material'
import React from 'react'
import { FAQData } from '../constants/data';
import Header from '../HousDeckWebsiteComponents/Header'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../HousDeckWebsiteComponents/Footer';


const AccordianStyle = {
    boxShadow: 0,
    borderBottom: '1px solid #e0e0e0',
    textAlign: 'left',
    padding: '20px 15px!important',

}
const AllAccordians = () => {
    
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            {FAQData.map(data =>
                <Accordion expanded={expanded === data.panel}
                    onChange={handleChange(data.panel)}
                    disableGutters
                    sx={AccordianStyle}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='colorChange1' />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className='colorChange1'>
                            {data.ques}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {data.ans}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )}
        </>
    )
}



function XLFaqsPageTopQuestions() {
    return (
        <div style={{
            padding: '20px 70px'
        }} >
            <AllAccordians />
        </div>
    )
}


function SMFaqsPageAllAccordians() {
    return (
        <div style={{
            padding: '20px 30px'
        }} >
            <AllAccordians />
        </div>
    )
}


function MDFaqsPageAllAccordians() {
    return (
        <div style={{
            padding: '20px'
        }} >
            <AllAccordians />
        </div>
    )
}


export default function HouseDeckHomeServicesFAQpage() {
    const commonProps = [
        { name: 'Home Services', url: '/' },
    ]

    // const [expanded, setExpanded] = React.useState(false);

    // const handleChange = (panel) => (event, isExpanded) => {
    //     setExpanded(isExpanded ? panel : false);
    // };

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1160px)');
    const mdMax = useMediaQuery('(max-width:1160px)');
    const mdMin = useMediaQuery('(min-width:600px)');
    const sm = useMediaQuery('(max-width:600px)');

    return (
        <div>
            <Header commonProps={commonProps} />
            <Typography variant='h5' sx={{ textAlign: 'center', marginTop: '4rem', padding: "50px" }}>Frequently Asked Questions</Typography>
            {xlMax && xlMin && (
                <XLFaqsPageTopQuestions />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <MDFaqsPageAllAccordians />
            )}
            {sm && (<SMFaqsPageAllAccordians />)}
            <Footer />
        </div>
    )
}
