import * as React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Divider } from '@mui/material'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { v4 as uuidV4 } from 'uuid'
import { serviceSender } from '../../Api/serviceSender'
import MyLocationIcon from '@mui/icons-material/MyLocation'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import './OnlyForDialog.css'
import DatePicker from '@mui/lab/DatePicker'
import TimePicker from '@mui/lab/TimePicker'
import Stack from '@mui/material/Stack'
import { CleaningServicesData } from '../../constants/data';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { LoginContext } from '../../context/ContextProvider'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        width: 'unset',
        height: 'inherit',
    },
}));


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function Content({ options, setOptions, open, setOpen ,width}) {

    const { message, setMessage } = React.useContext(LoginContext)
    const { messageType, setMessageType } = React.useContext(LoginContext)

    const fullScreen = useMediaQuery('(max-width:650px)');
    const [price, setPrice] = React.useState(0)
    const [date, setdate] = React.useState(null)
    const [location, setLocation] = React.useState('');
    const [time, settime] = React.useState(new Date('2022-03-01 12:00'))
    const [Services, setServices] = React.useState([])
    const [displayForServiceSelectionProcess, setDisplayForServiceSelectionProcess] = React.useState(true)
    const [displayForStepper, setDisplayForStepper] = React.useState(false)
    const [displayForAppointment, setDisplayForAppointment] = React.useState(false)
    const [displayAtStart, setDisplayAtStart] = React.useState(false)
    const [show, setShow] = React.useState(false)
    const [display, setDisplay] = React.useState(true)

    const handleClose = () => {
        setOpen(false)
        setdate(null)
        settime(null)
        setDisplayForServiceSelectionProcess(true)
        setDisplayForStepper(false)
        setDisplayForAppointment(false)
        setDisplayAtStart(false)
        setDisplay(false)
        setServices([])
    };

    function Select(service, price) {
        if (!Services.map((item) => item.Services_Chosen_By_User).includes(service)) {
            setServices((prevItems) => [
                ...prevItems,
                { id: uuidV4(), Services_Chosen_By_User: service, Price_For_Chosen_Services: price }
            ]);
            setDisplayAtStart(false)
            setDisplay(true)
            setPrice((prevPrice) => parseFloat(prevPrice) + parseFloat(price))
        } else {
            const allOtherServices = Services.filter(
                (item) => item.Services_Chosen_By_User !== service
            );
            setServices([...allOtherServices]);
            setPrice((prevPrice) => parseFloat(prevPrice) - parseFloat(price))
        }
    }
    function getRequiredThings() {
        if (Services) {
            setDisplayForServiceSelectionProcess(false)
            setDisplayForStepper(true)
            setDisplayForAppointment(false)
            setDisplayAtStart(false)
        }
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
        setDisplayAtStart(false)
        setDisplayForAppointment(true)
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation(`${position.coords.latitude} ${position.coords.longitude}`)
            });
            locationSubmit();
        } else {
            setShow(true)
            setMessage('Error Occured. Location not valid')
            setMessageType('error')
        }
    }

    function loadUserData() {
        try {
            const serializedState = localStorage.getItem('userdata');
            if (serializedState === null) {
                return '';
            }
            return JSON.parse(serializedState);
        } catch (err) {
            localStorage.setItem("userdata", JSON.stringify({
                Number: '',
                Username: ''
            }))
            const serializedState = localStorage.getItem('userdata');
            if (serializedState === null) {
                return '';
            }
            return JSON.parse(serializedState);
        }

    }

    const handleAlertClose = () => {
        setShow(false)
        setMessage('')
        setMessageType('')
    }


    function AtStart() {
        setDisplayAtStart(true)
        setDisplayForServiceSelectionProcess(false)
        setDisplayForStepper(false)
        setDisplayForAppointment(false)
    }

    React.useEffect(() => {

        var style = document.createElement("style");
        style.innerHTML = `.non-scroll::-webkit-scrollbar {display: none;}`;
        document.head.appendChild(style);
    }
    )

    const sendToDatabase = async () => {
        const userData = loadUserData()
        const currentDateTime = new Date()
        const items = {
            Contact_Number_Of_User: userData.Number,
            Services,
            Total_Price: price,
            Location_Chosen_For_Service: location,
            Date_Chose_For_Service: date.toString().slice(0, 15),
            Time_Chose_For_Service: time.toString().slice(16, 25),
            Service_Chosen_Date: currentDateTime.toString().slice(0, 15),
            Service_Chosen_Time: currentDateTime.toString().slice(16, 25),
        }
        let response = await serviceSender(items)
        console.log(response);
        if (response) {
            handleClose()
        } else {
            console.log('he');
            setShow(true)
            setMessage('Cannot setup Service. Sorry for inconvenience. Please try again later.')
            setMessageType('error')
        }
    }

    const handleClickOpen = (services) => {
        setOptions(services)
        setDisplayAtStart(false)
        setDisplayForServiceSelectionProcess(true)
        setDisplayForStepper(false)
        setDisplayForAppointment(false)
    }

    return (
        <>
            <BootstrapDialog
                fullScreen={fullScreen}
                onClose={handleClose}
                open={open}
                maxWidth={false}
            >

                {
                    displayAtStart ?
                        <Box sx={{ width: width, background: 'white', borderRadius: 3, padding: '0px 24px', }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography sx={{ padding: '20px 0 8px', fontSize: '18px', fontWeight: '600', color: '#464646' }}>Select Your Service</Typography>
                                <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer', pt: '10px' }} />
                            </Box>


                            {
                                CleaningServicesData.map(data =>
                                    <>
                                        <Box key={data.options} sx={{ padding: '15px 0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleClickOpen(data.options)}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                                                <Box sx={{ background: `url(${data.imgUrl})`, width: '40px', height: '40px', borderRadius: '100%', backgroundPosition: '50%', backgroundRepeat: 'no-repeat', backgroundSize: 'auto 100%' }}></Box>
                                                <Typography sx={{ fontSize: '16px', color: '#464646', ml: 1 }}>{data.type}</Typography>
                                            </Box>
                                            <ArrowForwardIosIcon sx={{ fontSize: '16px', color: '#464646' }} />
                                        </Box>
                                        <Divider />
                                    </>
                                )
                            }
                        </Box>
                        :
                        null
                }

                <Box sx={{ display: displayForServiceSelectionProcess ? 'block' : 'none', }}>
                    <Box sx={{ position: 'sticky', top: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px', background: 'white', width: width, zIndex: '1000', px: '10px' }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: '700' }}>Select Your Services</Typography>
                        <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
                    </Box>
                    <Box>
                        <div className='childdiv' style={{ padding: '15px' }}>
                            {options.innerData.map((data) => {
                                const service = data.type
                                const price = data.price
                                const fakePrice = parseInt(price) + 200
                                return (
                                    <>
                                        <Box key={data.type}>
                                            <Box sx={{ textAlign: 'center' }}>
                                                <img src={options.imgUrl} alt="" style={{ marginTop: '10px', width: '100%' }} />
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px 4px' }}>
                                                <Typography sx={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Fredoka' }}>{service}</Typography>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                                                    <Typography sx={{ fontSize: '17px', fontWeight: '600', fontFamily: 'Fredoka', textDecoration: 'line-through', color: 'gray' }}>&#8377;{fakePrice.toLocaleString()}</Typography>
                                                    <Typography sx={{ ml: 2, fontSize: '18px', fontWeight: '600', fontFamily: 'Fredoka' }}>&#8377;{price.toLocaleString()}</Typography>
                                                </Box>
                                            </Box>

                                            <Box sx={{
                                                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                                            }}>
                                                <Box sx={{ display: 'block' }}>
                                                    {options.quotes.map(data1 =>
                                                        <>
                                                            <Box sx={{
                                                                display: 'flex',
                                                                color: 'rgba(54,54,54,.8)',
                                                                alignItems: 'center'
                                                            }}>
                                                                <Box sx={{
                                                                    borderWidth: '0px 2px 2px 0px',
                                                                    borderStyle: 'solid',
                                                                    borderColor: '#7b7b7b',
                                                                    position: 'absolute',
                                                                    transform: 'rotate(45deg)',
                                                                    height: '8px',
                                                                    width: '3px',
                                                                    display: 'block',
                                                                    marginTop: '-4px',
                                                                    ml: 1
                                                                }}></Box>
                                                                <Typography sx={{
                                                                    fontSize: '14px',
                                                                    marginLeft: '20px',
                                                                }}>{data1.text}</Typography>
                                                            </Box>
                                                        </>
                                                    )}
                                                </Box>
                                                <Button variant='outlined' sx={{ textTransform: 'none' }} onClick={() => Select(service, price)}>
                                                    {!Services.map((item) => item.Services_Chosen_By_User).includes(data.type)
                                                        ? "Select"
                                                        : "Unselect"}
                                                </Button>
                                            </Box>


                                        </Box>
                                    </>
                                )
                            })
                            }
                        </div>

                        <Box sx={{ position: 'sticky', bottom: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px', background: 'white', width: 'inherit', zIndex: '1000', px: '10px' }}>
                            <ArrowBackIcon onClick={AtStart} sx={{ mt: 3, cursor: 'pointer' }} />
                            {
                                (display && !(price === 0)) ?
                                    <>
                                        <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                                            <Typography sx={{ mr: 1, fontSize: '18px', fontWeight: '600', fontFamily: 'Fredoka' }}>&#8377;{price}</Typography>
                                            <Divider orientation='vertical' sx={{ color: 'black' }} flexItem />
                                            <Typography sx={{ ml: 1, color: 'gray', fontSize: '13px', fontFamily: 'Fredoka' }}>{Services.length} item</Typography>
                                            <Button variant='contained' sx={{ ml: 1, textTransform: 'none', boxShadow: 0 }} onClick={getRequiredThings}>Continue</Button>
                                        </Box>
                                    </>

                                    : <Box></Box>
                            }

                        </Box>

                    </Box>
                </Box>

                {/* ---------------------Stepper code is here -------------- */}

                <Box sx={{ display: displayForStepper ? 'block' : 'none', width: width,height:'90vh',padding:'15px' }}>
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
                                width: '-webkit-fill-available',
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
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <ArrowBackIcon onClick={AtStart} sx={{ position: 'absolute', bottom: 20, cursor: 'pointer' }} />
                        <Button sx={{ fontSize: '16px', textTransform: 'none', position: 'absolute', bottom: 10, right: 10 }} variant='contained' onClick={locationSubmit}>Continue</Button>
                    </Box>
                </Box>

                <Box sx={{ display: displayForAppointment ? 'block' : 'none', height: '90vh', width: width, padding: '15px', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: '700' }}>Select Date and Time</Typography>
                        <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
                    </Box>

                    <Box>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={1} sx={{ width: '-webkit-fill-available' }}>
                                <DatePicker
                                    label="Enter date"
                                    value={date}
                                    disablePast
                                    calenders={1}
                                    onChange={(newdate) => {
                                        setdate(newdate);
                                    }}
                                    renderInput={(params) => <TextField sx={{ my: 4 }} {...params} />}
                                    required
                                />

                                <TimePicker
                                    renderInput={(params) => <TextField {...params} />}
                                    value={time}
                                    label="Enter time"
                                    onChange={(newtime) => {
                                        settime(newtime);
                                    }}
                                    minTime={new Date(0, 0, 0, 8)}
                                    maxTime={new Date(0, 0, 0, 18)}
                                />
                            </Stack>
                        </LocalizationProvider>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <ArrowBackIcon onClick={AtStart} sx={{ position: 'absolute', bottom: 17, cursor: 'pointer' }} />
                        <Button sx={{ fontSize: '16px', marginLeft: 'auto', marginRight: '0px', textTransform: 'none', position: 'absolute', bottom: 10, right: 10 }} variant='contained' onClick={sendToDatabase}>Continue</Button>
                    </Box>
                </Box>
                <Snackbar open={show} autoHideDuration={6000} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} severity={messageType} sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>
            </BootstrapDialog>
        </>
    )
}



export default function ServicesDialog({ options, setOptions, open, setOpen }) {

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:650px)');
    const sm = useMediaQuery('(max-width:650px)');
    return (

        <>
            {xlMax && xlMin && (
                <Content options={options} setOptions={setOptions} open={open} setOpen={setOpen} width={'550px'} />
            )}
            {sm && (<Content options={options} setOptions={setOptions} open={open} setOpen={setOpen} width={'auto'} />)}

        </>
    )
}