import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import './OnlyForDialog.css';
import { v4 as uuidV4 } from 'uuid'
import { serviceSender } from '../../Api/serviceSender';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        // width: '600px'
    },
}));

export default function ServicesDialog({ options, open, setOpen }) {

    const fullScreen = useMediaQuery('(max-width:700px)');
    const [price, setPrice] = React.useState(0)
    const [Service, setService] = React.useState([])
    const [display, setDisplay] = React.useState(false)

    const handleClose = () => {
        setOpen(false)

    };
    function add(service, price) {
        if (service && price !== 0) {
            setPrice((prevPrice) => parseFloat(prevPrice) + parseFloat(price))
            setService(prevItems => {
                return [...prevItems, { id: uuidV4(), ServiceChoseByUser: service, PriceForService: price }]
            })
            setDisplay(true)
        }
        else {
            setDisplay(false)
        }
    }

    function remove(id, price) {
        setService(Service => {
            return Service.filter(data => data.id !== id)
        })
        setPrice((prevPrice) => parseFloat(prevPrice) - parseFloat(price))
        if (price) {
            setDisplay(false)
        }
    }

    const sendToDatabase = async () => {
        const items = { Service, TotalPrice: price }
        let response = await serviceSender(items)
        if (response) {
            console.log(response);
        } else {
            console.log('error occured while calling api');
        }
    }

    console.log(Service)
    return (
        <>
            <BootstrapDialog
                fullScreen={fullScreen}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth={false}
            >
                <Box className='non-scroll' sx={{ height: 'unset', width: '550px', padding: '15px', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: '700' }}>Select Your Services</Typography>
                        <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
                    </Box>
                    <Box>
                        {options.map((data) => {
                            const service = data.type
                            const price = data.price
                            const fakePrice = parseInt(price) + 200
                            return (
                                <>
                                    <Box key={data.type}>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <img src="../other/cleaning.jpg" style={{ pdding: '10px', marginTop: '10px' }} />
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px 4px' }}>
                                            <Typography sx={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Fredoka' }}>{service}</Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                                                <Typography sx={{ fontSize: '17px', fontWeight: '600', fontFamily: 'Fredoka', textDecoration: 'line-through', color: 'gray' }}>&#8377;{fakePrice.toLocaleString()}</Typography>
                                                <Typography sx={{ ml: 2, fontSize: '18px', fontWeight: '600', fontFamily: 'Fredoka' }}>&#8377;{price.toLocaleString()}</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ textAlign: 'end' }}>
                                            <Button variant='outlined' sx={{ marginLeft: 'auto', marginRight: '0px', textTransform: 'none' }} onClick={() => add(service, price)}>Select</Button>
                                        </Box>
                                    </Box>
                                </>
                            )
                        }
                        )}

                        {
                            display ?
                                <>
                                    <Accordion disableGutters sx={{
                                        boxShadow: 0,
                                    }}>
                                        <AccordionSummary sx={{padding:0,my: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                                    <Typography sx={{fontSize: '18px', fontWeight: '600', fontFamily: 'Fredoka' }}>See all items</Typography>
                                                    <ExpandMoreIcon />
                                                </Box>
                                                <Box sx={{ display: 'flex',  alignItems: 'center', }}>
                                                    <Typography sx={{fontSize: '18px', fontWeight: '600', fontFamily: 'Fredoka' }}>&#8377;{price.toLocaleString()}</Typography>
                                                    <Button variant='outlined' sx={{ textTransform: 'none' }} onClick={sendToDatabase}>Contnue</Button>
                                                </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {Service.map(data =>
                                                <>
                                                    <Box sx={{ my: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Typography>{data.ServiceChoseByUser}</Typography>
                                                        {/* <Typography>{data.PriceForService}</Typography> */}
                                                        <CloseIcon onClick={() => remove(data.id, data.PriceForService)} />
                                                    </Box>
                                                </>
                                            )}
                                        </AccordionDetails>
                                    </Accordion>
                                </>

                                : null
                        }


                    </Box>
                </Box>
            </BootstrapDialog>
        </>
    )
}
