import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TopHeadQuestions = {
    fontWeight: '600',
    color: '#464646',
    fontSize: '22px',
    paddingBottom: '50px',
    borderBottom: '1px solid #e0e0e0',
    marginTop:'30px'
}



const TopQuestions = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const AccordianStyle = {
        boxShadow: 0,
        borderBottom: '1px solid #e0e0e0',
        textAlign: 'left',
        padding: '20px 15px!important',

    }
    return (
        <>
            <Typography variant='h4' style={TopHeadQuestions}>Top questions</Typography>


            <Accordion expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
                disableGutters
                sx={AccordianStyle}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className='colorChange1' />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className='colorChange1'>
                        How to book a service on NoBroker?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Just click on the service required by you, see the prices and fill some
                        basic contact details to schedule the service.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion
                expanded={expanded === 'panel2'} onChange={handleChange('panel2')} disableGutters sx={AccordianStyle}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className='colorChange2' />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className='colorChange2'>
                        Who is going to fulfill the service?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                        NoBroker Partners are selected individuals / companies who meet our stringent
                        criteria for delivering quality home services.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} disableGutters sx={AccordianStyle}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className='colorChange3' />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className='colorChange3' >
                        What all services are available on NoBroker?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        We provide services like Home Painting, Home Cleaning, Electrician, Plumbing, Carpentry.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} disableGutters sx={AccordianStyle}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className='colorChange4' />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className='colorChange4' >How are NoBroker services different
                        from other online portals?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Other online portals merely put you in touch with the service providers
                        leaving the service quality upto individual vendors. On the other hand, all
                        NoBroker services are owned and fulfilled by NoBroker Partners who adhere to a strict quality criteria.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}



function XLMainPageTopQuestions() {
    return (
        <div id="faqs" style={{
            padding: '60px 100px'
        }} >
            <TopQuestions />
        </div>
    )
}


function SMMainPageTopQuestions() {
    return (
        <div id="faqs" style={{
            padding: '30px 20px'
        }} >
            <TopQuestions />
        </div>
    )
}


function MDMainPageTopQuestions() {
    return (
        <div id="faqs" style={{
            padding: '20px'
        }} >
            <TopQuestions />
        </div>
    )
}


export default function MainPageTopQuestions() {

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1160px)');
    const mdMax = useMediaQuery('(max-width:1160px)');
    const mdMin = useMediaQuery('(min-width:600px)');
    const sm = useMediaQuery('(max-width:600px)');
    return (

        <>
            {xlMax && xlMin && (
                <XLMainPageTopQuestions />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <MDMainPageTopQuestions />
            )}
            {sm && (<SMMainPageTopQuestions />)}
        </>
    )
}
