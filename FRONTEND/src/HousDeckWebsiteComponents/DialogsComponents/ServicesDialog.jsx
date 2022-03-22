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
import MyLocationIcon from '@mui/icons-material/MyLocation';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import Stack from '@mui/material/Stack';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        // width: '600px'
    },
}));

export default function ServicesDialog({ options, open, setOpen }) {

    const fullScreen = useMediaQuery('(max-width:700px)');
    const [price, setPrice] = React.useState(0)
    const [date, setdate] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [time, settime] = React.useState('');
    const [services, setService] = React.useState([])
    const [displayForServiceSelectionProcess, setDisplayForServiceSelectionProcess] = React.useState(true)
    const [displayForStepper, setDisplayForStepper] = React.useState(false)
    const [displayForAppointment, setDisplayForAppointment] = React.useState(false)
    const [display, setDisplay] = React.useState(false)

    const handleClose = () => {
        setOpen(false)
        setdate(null)
        settime(null)
        setDisplayForServiceSelectionProcess(true)
        setDisplayForStepper(false)
        setDisplayForAppointment(false)
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

    function getRequiredThings() {
        setDisplayForServiceSelectionProcess(false)
        setDisplayForStepper(true)
        setDisplayForAppointment(false)
        // var autocomplete = new google.maps.places.Autocomplete((document.getElementById('searchInput')), {
        //     types: ['geocode'],
        /*componentRestrictions: {
         country: "USA"
        }*/
        // });

        // google.maps.event.addListener(autocomplete, 'place_changed', function () {
        //     var near_place = autocomplete.getPlace();
        // });
    }

    function locationSubmit() {
        setDisplayForServiceSelectionProcess(false)
        setDisplayForStepper(false)
        setDisplayForAppointment(true)
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation(`${position.coords.latitude} ${position.coords.longitude}`)
            });
            locationSubmit();
        } else {
            console.log("Geolocation is not supported by this browser.")
        }
    }

    const sendToDatabase = async () => {
        const items = {
            services,
            totalPrice: price,
            locationForService: location,
            dateForService: date,
            timeForService: time,
        }
        console.log(items)
        let response = await serviceSender(items)
        if (response) {
            console.log(response);
        } else {
            console.log('error occured while calling api');
        }
    }

    return (
        <>
            <BootstrapDialog
                fullScreen={fullScreen}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth={false}
            >

                <Box className='non-scroll' sx={{ display: displayForServiceSelectionProcess ? 'block' : 'none', height: '90vh', width: '550px', padding: '15px', }}>
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
                                            <img src="../other/cleaning.jpg" alt="" style={{ pdding: '10px', marginTop: '10px' }} />
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
                                        <AccordionSummary sx={{ padding: 0, my: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                                <Typography sx={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Fredoka' }}>See all items</Typography>
                                                <ExpandMoreIcon />
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                                <Typography sx={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Fredoka' }}>&#8377;{price.toLocaleString()}</Typography>
                                                <Button variant='outlined' sx={{ textTransform: 'none' }} onClick={getRequiredThings}>Contnue</Button>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {services.map(data =>
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

                {/* ---------------------Stepper code is here -------------- */}

                <Box sx={{ display: displayForStepper ? 'block' : 'none', height: '90vh', width: '550px', padding: '15px', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: '700' }}>Select Your Services</Typography>
                        <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
                    </Box>

                    <Box>
                        <input
                            id='searchInput'
                            placeholder='Enter your location'
                            type='text'
                            // onChange={e => handleNumChange(e.target)}
                            style={{
                                border: '1px solid #e5e5e5',
                                userSelect: 'none',
                                width: '97%',
                                height: '40px',
                                fontSize: '14px',
                                marginTop: '30px',
                                paddingLeft: '10px'
                            }} />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', color: 'rgb(25, 118, 210)', my: 4 }} onClick={getLocation}>
                        <MyLocationIcon />
                        <Typography sx={{ fontSize: '16px', ml: 1 }} >current location</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'end', mt: 52 }}>
                        <Button sx={{ fontSize: '16px', marginLeft: 'auto', marginRight: '0px', textTransform: 'none' }} variant='outlined' onClick={locationSubmit}>Continue</Button>
                    </Box>
                </Box>

                <Box sx={{ display: displayForAppointment ? 'block' : 'none', height: '90vh', width: '550px', padding: '15px', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: '700' }}>Select Date and Time</Typography>
                        <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
                    </Box>

                    <Box>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={1} sx={{ width: '300px' }}>
                                <DatePicker
                                    label="Enter date"
                                    value={date}
                                    disablePast
                                    calenders={1}
                                    onChange={(newdate) => {
                                        setdate(newdate.slice(0,15));
                                    }}
                                    renderInput={(params) => <TextField sx={{ my: 4 }} {...params} />}
                                />

                                <TimePicker
                                    renderInput={(params) => <TextField {...params} />}
                                    value={time}
                                    label="Enter Time"
                                    onChange={(newtime) => {
                                        settime(newtime.slice(16,25));
                                    }}
                                    minTime={new Date(0, 0, 0, 8)}
                                    maxTime={new Date(0, 0, 0, 18, 45)}
                                />
                            </Stack>
                        </LocalizationProvider>
                    </Box>

                    <Box sx={{ textAlign: 'end', mt: 45 }}>
                        <Button sx={{ fontSize: '16px', marginLeft: 'auto', marginRight: '0px', textTransform: 'none' }} variant='outlined' onClick={sendToDatabase}>Continue</Button>
                    </Box>
                </Box>

            </BootstrapDialog>
        </>
    )
}
