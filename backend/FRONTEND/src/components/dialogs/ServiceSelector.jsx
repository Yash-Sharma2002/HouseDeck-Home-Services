import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { sha256 } from 'js-sha256';
import CloseIcon from '@mui/icons-material/Close'
import { Box, Stack, Typography, Dialog, useMediaQuery, TextField } from '@mui/material'
import { Button, Divider } from '@mui/material'
import { checkPaymentStatus, makePayments } from '../../Api/paymentCashfreeApi'
import { styled } from '@mui/material/styles'
import { v4 as uuidV4 } from 'uuid'
import { serviceSenderAsDraft } from '../../Api/serviceSender'
import MyLocationIcon from '@mui/icons-material/MyLocation'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import '../../css/OnlyForDialog.css';
import DatePicker from '@mui/lab/DatePicker'
import TimePicker from '@mui/lab/TimePicker'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import SendIcon from '@mui/icons-material/Send';
import FormLabel from '@mui/material/FormLabel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { LoginContext } from '../../context/Context'
import { getPlace } from '../../Api/getPlaces'
import Login from './Login'
import { MiniServices } from '../../constants/data'
import { promocodeFetch, } from '../../Api/priceReductionPromocode'
import fetch from 'node-fetch'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        width: 'unset',
        height: 'inherit',
    },
}));



// displayAtStart - 0
// displayForServiceSelectionProcess - 1
// display-2
// displayForStepper - 3
// displayForAppointment - 4
// displayForPayment - 5
// displayForCode - 6

function Content({ options, category, data, setOptions, open, setOpen, width, newService }) {


    const { city, isLogin, setMessage, setMessageType, setShow, userData, decrypt } = React.useContext(LoginContext)
    const navigate = useNavigate()
    const fullScreen = useMediaQuery('(max-width:650px)');
    const [totalPrice, setPrice] = React.useState(0)
    const [date, setdate] = React.useState(null)
    const [relatedLocation, setRelatedLocation] = React.useState({ predictions: [], status: '' })
    const [location, setLocation] = React.useState('');
    const [openLogin, setOpenLogin] = React.useState(false)
    const [time, settime] = React.useState(new Date('2022-03-01 12:00'))
    const [Services, setServices] = React.useState([])
    const [displayForServiceSelectionProcess, setDisplayForServiceSelectionProcess] = React.useState(true)
    const [displayForStepper, setDisplayForStepper] = React.useState(false)
    const [displayForAppointment, setDisplayForAppointment] = React.useState(false)
    const [displayAtStart, setDisplayAtStart] = React.useState(false)
    const [displayForPayment, setDisplayForPayment] = React.useState(false)
    const [displayForPaymentProcessor, setDisplayForPaymentProcessor] = React.useState(false)
    const [display, setDisplay] = React.useState(true)
    const [paymentLink, setPaymentLink] = React.useState('')
    const [orderId, setOrderId] = React.useState('')
    const [promoCode, setPromoCode] = React.useState({
        code: '',
        applied: false,
        redution: 0
    })
    const [ip, setIP] = React.useState('')
    const [valueForLocation, setValueForLocation] = React.useState('');
    const [displayForCode, setDisplayForCode] = React.useState('');
    fetch('http://api.ipify.org/?format=json').then(res => res.json()).then(data => { setIP(data.ip) })
    const handleClose = () => {
        setOpen(false)
        settime(new Date('2022-03-01 12:00'))
        setDisplayForServiceSelectionProcess(true)
        setDisplayForStepper(false)
        setDisplayForAppointment(false)
        setDisplayForPaymentProcessor(false)
        setDisplayAtStart(false)
        setDisplayForPayment(false)
        setValueForLocation('')
        setPaymentLink('')
        setOrderId('')
        setDisplayForCode(false)
        setRelatedLocation({ predictions: [], status: '' })
    };

    const handleChange = (event) => {
        if (event.target.value === 'Yes') {
            setDisplayForCode(true);
        }
        if (event.target.value === 'No') {
            setDisplayForCode(false);
        }
    };

    async function handleRelatedLocationChange(value) {
        setValueForLocation(value)
        var response = await getPlace({ input: value })
        if (response) {
            setRelatedLocation(response)
        }
    }


    function Select(service, price) {
        if (options === MiniServices && totalPrice === 0) {
            setShow(true)
            setMessage('Mini Services can only be selected with other services')
            setMessageType('error')
            return
        }
        if (!Services.map((item) => item.Service).includes(service)) {
            setServices((prevItems) => [
                ...prevItems,
                { Service: service, Price: price }
            ]);
            setDisplayAtStart(false)
            setDisplay(true)
            setPrice((prevPrice) => parseFloat(prevPrice) + parseFloat(price))
        } else {
            const allOtherServices = Services.filter(
                (item) => item.Service !== service
            );
            setServices([...allOtherServices]);
            setPrice((prevPrice) => parseFloat(prevPrice) - parseFloat(price))
        }
    }
    function getRequiredThings() {
        if (isLogin) {
            if (Services) {

                setDisplayForServiceSelectionProcess(false)
                setDisplayForStepper(true)
                setDisplayForAppointment(false)
                setDisplayForPayment(false)
                setDisplayAtStart(false)
                setOrderId(uuidV4())
            }
        } else {
            setOpenLogin(!openLogin)
        }
    }

    function locationSubmit() {
        if (location) {
            setDisplayForServiceSelectionProcess(false)
            setDisplayForStepper(false)
            setDisplayAtStart(false)
            setDisplayForPayment(false)
            setDisplayForAppointment(true)
        }
        else {
            setShow(true)
            setMessageType('error')
            setMessage('Please enter a valid location')
        }
    }

    function getLocation(value, enteredCity) {
        if (!value) {
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
        } else {
            if (!(city === enteredCity)) {
                setShow(true)
                setMessage('Select a location nearby selected city')
                setMessageType('error')
            } else {
                setLocation(value)
                setValueForLocation(value)
            }
        }
    }



    function AtStart() {
        setDisplayAtStart(true)
        setDisplayForServiceSelectionProcess(false)
        setDisplayForStepper(false)
        setDisplayForPayment(false)
        setDisplayForAppointment(false)
    }


    const CreateOrder = async () => {
        const data = {
            order_id: `OrderId_${orderId}`,
            order_amount: `${totalPrice}`,
            order_currency: 'INR',
            customer_details: {
                customer_id: decrypt(userData.USERDATA_AS_USERNAME),
                customer_email: decrypt(userData.USERDATA_AS_EMAIL),
                customer_phone: decrypt(userData.USERDATA_AS_NUMBER)
            },
        }
        let response = await makePayments(data)
        if (response) {
            setDisplayAtStart(false)
            setDisplayForServiceSelectionProcess(false)
            setDisplayForStepper(false)
            setDisplayForAppointment(false)
            setDisplayForPayment(true)
            setPaymentLink(response.data.payment_link)
        }
    }

    async function OnPromoCodeApply() {
        if (!promoCode.applied) {
            const response = await promocodeFetch({
                Code: promoCode.code,
                Customer_Details: {
                    Customer_Id: decrypt(userData.USERDATA_AS_USERNAME),
                    Customer_Email: decrypt(userData.USERDATA_AS_EMAIL),
                    Customer_Phone: decrypt(userData.USERDATA_AS_NUMBER)
                }
            })
            // const response = await promocodeStore({ Code: promoCode.code,Price_Reduction:'200' })
            if (response) {
                if (response === 400) {
                    setShow(true)
                    setMessage('This code is not available for you now')
                    setMessageType('info')
                    return
                }
                setShow(true)
                setMessage('Code Applied, Price Reduced')
                setMessageType('success')
                const id = response.Price_Reduction
                let newPrice;
                if (id.substr(id.length - 1) === "%") {
                    newPrice = totalPrice * parseInt(response.Price_Reduction) / 100
                    setPromoCode({ code: promoCode.code, applied: true, reduction: newPrice })
                }
                else {
                    newPrice = parseInt(response.Price_Reduction)
                    setPromoCode({ code: promoCode.code, applied: true, reduction: newPrice })
                }
                setPrice((prevPrice) => prevPrice - newPrice)
            } else {
                setShow(true)
                setMessage('Wrong PromoCode')
                setMessageType('error')
                return
            }
        } else {
            setShow(true)
            setMessage('Code already applied.')
            setMessageType('secondary')
        }
    }
    const saveDraft = async () => {
        const currentDateTime = new Date()
        const items = {
            Order_Details: {
                Order_Id: `OrderId_${orderId}`,
                Order_Date: currentDateTime.toString().slice(0, 15),
                Order_Time: currentDateTime.toString().slice(16, 25),
                Category: category,
                Services,
                Order_Amount: `${totalPrice}`,
                Appointment_Location: location,
                Appointment_Date: date.toString().slice(0, 15),
                Appointment_Time: time.toString().slice(16, 25),
            },
            Draft: 'Yes',
            Payment_Details: {
                Paid: 'No',
                Payment_Link: paymentLink,
            },
            Customer_Details: {
                Customer_Id: decrypt(userData.USERDATA_AS_USERNAME),
                Customer_Email: decrypt(userData.USERDATA_AS_EMAIL),
                Customer_Phone: decrypt(userData.USERDATA_AS_NUMBER)
            }
        }
        let response = await serviceSenderAsDraft(items)
        if (response) {
            setShow(true)
            setMessage('Saving as Draft....')
            setMessageType('info')
            navigate('/my-bookings')
            FacebookDataSender(items,ip,"addtocart")
            handleClose()
        } else {
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
        setDisplayForPayment(false)
        setDisplayForAppointment(false)
    }
    const onClickPay = async () => {

        const currentDateTime = new Date()
        const items = {
            Order_Details: {
                Order_Id: `OrderId_${orderId}`,
                Order_Date: currentDateTime.toString().slice(0, 15),
                Order_Time: currentDateTime.toString().slice(16, 25),
                Category: category,
                Services,
                Order_Amount: `${totalPrice}`,
                Appointment_Location: location,
                Appointment_Date: date.toString().slice(0, 15),
                Appointment_Time: time.toString().slice(16, 25),
            },
            Draft: 'No',
            Payment_Details: {
                Paid: 'Yes',
            },
            Customer_Details: {
                Customer_Id: decrypt(userData.USERDATA_AS_USERNAME),
                Customer_Email: decrypt(userData.USERDATA_AS_EMAIL),
                Customer_Phone: decrypt(userData.USERDATA_AS_NUMBER)
            },
        }
        const interval = setInterval(async () => {
            const response = await checkPaymentStatus(items)
            if (response) {
                if (response.order_status === 'PAID') {
                    clearInterval(interval)
                    handleClose()
                    setShow(true)
                    setMessage('Order Placed')
                    setMessageType('success')
                    navigate('/my-bookings')
                    FacebookDataSender(items,ip,"Purchase")
                } else {
                    setShow(true)
                    setMessage('Payment is processing...')
                    setMessageType('info')
                }
            }
        }, 10000);
    }



   async function FacebookDataSender(item,ip,type){
        const PixelID = '820907902616795' 
        const access_token = 'EAAUjOBHpKPgBAOpx29gjOfT4pXEuDJqOCwZAZA2uIvbdbSqEYj3dtHV6CrNOZAHjtrBlxUahNDvopLlYDZCd1TQN3xDiwrojOWwoqPU1EaCbvjOesZAes0DW8QouEkfrZCXnzmaadue9W7oe1thCDCz9HiagsPOkdkTem3dshYmSZCc4rgfk8TDQhVfksdJH38ZD'
        const fbData = {
            "data": [
               {
                  "event_name": type,
                  "event_time":  Math.floor(new Date() / 1000),
                  "event_id":uuidV4() ,
                  "event_source_url": `http://housedeckhomeservices.in/service=${newService}`,         
                  "action_source": "website",
                  "user_data": {
                     "client_ip_address": ip,
                     "client_user_agent": navigator.userAgent,
                     "em": [
                        sha256(item.Customer_Details.Customer_Email)
                     ],
                     "ph": [
                        sha256(item.Customer_Details.Customer_Phone)
                     ],
                     "fbc": "fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890",
                     "fbp": "fb.1.1558571054389.1098115397"
                  },
                  "custom_data": {
                     "value":item.Order_Details.Total_Amount,
                     "currency": "INR",
                     "content_ids": [
                        item.Order_Details.Order_Id
                     ],
                     "content_type": "product"
                  },
                  "opt_out": false
               }
            ]
         }
         const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fbData)
        };
        await fetch(`https://graph.facebook.com/v14.0/${PixelID}/events?access_token=${access_token}`, requestOptions)
        .then(response => response.json()).then(data => {console.log(data)})
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
                                data.map(data =>
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
                                                <img src={options.imgUrl} alt={service} style={{ marginTop: '10px', width: (width === 'auto') ? '-webkit-fill-available' : width }} />
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
                                                                alignItems: 'baseline'
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
                                                                    marginTop: '3px',
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
                                                    {!Services.map((item) => item.Service).includes(data.type)
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
                                (display && !(totalPrice === 0)) ?
                                    <>
                                        <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                                            <Typography sx={{ mr: 1, fontSize: '18px', fontWeight: '600', fontFamily: 'Fredoka' }}>&#8377;{totalPrice}</Typography>
                                            <Divider orientation='vertical' sx={{ color: 'black' }} flexItem />
                                            <Typography sx={{ ml: 1, color: 'gray', fontSize: '13px', fontFamily: 'Fredoka' }}>{Services.length} item</Typography>
                                            <Button variant='outlined' sx={{ ml: 1, textTransform: 'none', boxShadow: 0 }} color='secondary' endIcon={<SendIcon />} onClick={getRequiredThings}>Next</Button>
                                        </Box>
                                    </>

                                    : <Box></Box>
                            }

                        </Box>

                    </Box>
                </Box>

                {/* ---------------------Stepper code is here -------------- */}

                <Box sx={{ display: displayForStepper ? 'block' : 'none', width: width, height: '90vh', padding: '15px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: '700' }}>Select Your Services</Typography>
                        <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
                    </Box>

                    <Box>
                        <input
                            value={valueForLocation}
                            id='searchInput'
                            placeholder='Enter your location'
                            type='text'
                            autocomplete="off"
                            onChange={(e) => handleRelatedLocationChange(e.target.value)}
                            style={{
                                border: '1px solid #e5e5e5',
                                userSelect: 'none',
                                width: '-webkit-fill-available',
                                height: '40px',
                                fontSize: '14px',
                                marginTop: '30px',
                                paddingLeft: '10px'
                            }} />
                        {
                            relatedLocation.status === 'OK' ? relatedLocation.predictions.map((data, index) => {
                                var enteredCity = ''
                                if (data.types.includes('locality')) {
                                    const id = data.types.indexOf('locality')
                                    enteredCity = data.terms[id].value
                                    if (enteredCity === 'Bengaluru') {
                                        enteredCity = 'Bangalore'
                                    }
                                    if (enteredCity === 'New Delhi') {
                                        enteredCity = 'Delhi'
                                    }
                                } else if (data.types.includes('sublocality')) {
                                    const id = data.types.indexOf('sublocality')
                                    enteredCity = data.terms[id].value
                                    if (data.structured_formatting.secondary_text.includes(enteredCity)) {

                                        if (enteredCity === 'Bengaluru') {
                                            enteredCity = 'Bangalore'
                                        }
                                        if (enteredCity === 'New Delhi') {
                                            enteredCity = 'Delhi'
                                        }
                                    } else {
                                        enteredCity = data.terms[id + 1].value
                                        if (enteredCity === 'Bengaluru') {
                                            enteredCity = 'Bangalore'
                                        }
                                        if (enteredCity === 'New Delhi') {
                                            enteredCity = 'Delhi'
                                        }
                                    }
                                }
                                return (
                                    <Box key={index}>
                                        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'flex-start', cursor: 'pointer' }} onClick={() => getLocation(data.description, enteredCity)}>

                                            <LocationOnIcon sx={{ fontSize: '19px', paddingTop: '4px', ml: 1 }} />
                                            <Typography sx={{ ml: 1 }}>
                                                <span style={{ fontWeight: '900' }}>{data.description.slice(0, data.matched_substrings[0].length)}</span><span>{data.description.slice(data.matched_substrings[0].length,)}</span>
                                            </Typography>
                                        </Box>
                                    </Box>
                                )
                            }) :
                                <Box></Box>
                        }
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', color: 'rgb(25, 118, 210)', my: 4 }} onClick={() => getLocation('', '')}>
                        <MyLocationIcon />
                        <Typography sx={{ fontSize: '16px', ml: 1, cursor: 'pointer' }} >current location</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <ArrowBackIcon onClick={AtStart} sx={{ position: 'absolute', bottom: 20, cursor: 'pointer' }} />
                        <Button sx={{ fontSize: '16px', textTransform: 'none', position: 'absolute', bottom: 10, right: 10 }} variant='outlined' color='secondary' endIcon={<SendIcon />} onClick={locationSubmit}>Next</Button>
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
                                    maxTime={new Date(0, 0, 0, 16)}
                                />
                            </Stack>
                        </LocalizationProvider>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <ArrowBackIcon onClick={AtStart} sx={{ position: 'absolute', bottom: 17, cursor: 'pointer' }} />
                        <Button sx={{ fontSize: '16px', marginLeft: 'auto', marginRight: '0px', textTransform: 'none', position: 'absolute', bottom: 10, right: 10 }} variant='outlined' color='secondary' endIcon={<SendIcon />} onClick={() => {
                            if (!date) {
                                setShow(true)
                                setMessage('Enter Date.')
                                setMessageType('error')
                                return
                            }
                            if (!time) {
                                setShow(true)
                                setMessage('Enter Time.')
                                setMessageType('error')
                                return
                            }
                            setDisplayAtStart(false)
                            setDisplayForServiceSelectionProcess(false)
                            setDisplayForStepper(false)
                            setDisplayForAppointment(false)
                            setDisplayForPayment(true)
                        }}>Next</Button>
                    </Box>
                </Box>

                <Box sx={{ display: displayForPayment ? 'block' : 'none', width: width, padding: '15px', }}>
                    <Box sx={{ textAlign: 'right' }}>
                        <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer', }} />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: '700' }}>Your Order</Typography>
                    </Box>
                    <Box>
                        {Services.map((data, index) => {
                            return (
                                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '16px', fontFamily: 'Fredoka' }}>{data.Service}</Typography>
                                    <Typography sx={{ fontSize: '16px', fontFamily: 'Fredoka' }}>&#8377;{data.Price}</Typography>
                                </Box>
                            )
                        })}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                            {
                                promoCode.applied ?
                                    <>
                                        <Box>
                                            <Typography sx={{ fontSize: '17px', fontFamily: 'Fredoka' }}>Total Price</Typography>
                                            <Typography sx={{ fontSize: '17px', fontFamily: 'Fredoka' }}>New Price</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: '17px', fontFamily: 'Fredoka' }}>&#8377;{totalPrice + promoCode.reduction}</Typography>
                                            <Typography sx={{ fontSize: '17px', fontFamily: 'Fredoka' }}>&#8377;{totalPrice}</Typography>
                                        </Box>
                                    </>
                                    :
                                    <>
                                        <Typography sx={{ fontSize: '17px', fontFamily: 'Fredoka' }}>Total Price</Typography>
                                        <Typography sx={{ fontSize: '17px', fontFamily: 'Fredoka' }}>&#8377;{totalPrice}</Typography>
                                    </>
                            }
                        </Box>
                    </Box>
                    {
                        displayForPaymentProcessor ?
                            <Box sx={{ textAlign: 'center', mt: 2 }}>
                                <Typography sx={{ fontSize: '12px', fontFamily: 'Fredoka', mt: '5px' }}>*Do not refresh the page. We will automatically redirect you when payment is completed. </Typography>
                            </Box>
                            : null
                    }
                    {/* <Box sx={{ textAlign: 'center', mt: 2 }}> */}
                    {/* <Box sx={{ position: 'absolute', zIndex: '1000', top:"50%",left:'50%',transform:"translate(-50%,-50%)"}}> */}
                    <Box sx={{ display: 'flex', alignItems: 'center', m: '0 auto', justifyContent: 'center', my: 3, padding: '0px 9px', borderRadius: 1, background: 'white', border: '3px solid orange', width: "fit-content", }}>
                        <Typography sx={{ fontSize: '17px' }}>Add-on</Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: 'Fredoka', fontWeight: '800', color: '#1565c0', cursor: 'pointer', textDecoration: 'underline', ml: 1, my: 2 }} onClick={() => handleClickOpen(MiniServices)}>Mini Services</Typography>
                    </Box>
                    {/* </Box> */}
                    {/* <img src={require('../../assets/other/addon_service2.jpg')} alt="paypal" style={{ width: '100%', }} />
                    </Box> */}
                    {
                        newService === "home_cleaning" ?
                            <Box sx={{ my: 2, textAlign: 'center' }}>

                                {
                                    promoCode.applied ?
                                        <>
                                            <Box sx={{ textAlign: 'center' }}>
                                                <Typography sx={{ fontSize: '16px' }}>Applied PromoCode</Typography>
                                                <Typography sx={{ fontSize: '16px', textDecoration: 'underline' }}>{promoCode.code}</Typography>
                                            </Box>
                                        </>
                                        :
                                        <>
                                            <FormLabel >Do you Have a promocode</FormLabel>

                                            <RadioGroup row defaultValue="No" onChange={handleChange} sx={{ justifyContent: 'center' }}>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            {
                                                displayForCode ?
                                                    <Box sx={{ my: 10, textAlign: 'center' }}>
                                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                                                            <Typography sx={{ fontSize: "18px", fontWeight: '700' }}>Enter Promo-Code</Typography>
                                                        </Box>
                                                        <Box sx={{ textAlign: 'center' }}>
                                                            <TextField
                                                                placeholder="Enter Promo-Code (if any)"
                                                                variant="standard"
                                                                onChange={(e) => setPromoCode({ code: e.target.value, applied: false })}
                                                                sx={{ margin: '0px auto', textAlign: 'center' }}
                                                            />
                                                        </Box>
                                                        <Button sx={{ fontSize: '16px', textTransform: 'none', my: 2 }} variant='outlined' color='success' onClick={OnPromoCodeApply} >Apply</Button>
                                                    </Box>
                                                    :
                                                    <Box></Box>

                                            }
                                        </>
                                }
                            </Box>
                            :
                            null
                    }
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>

                        <Button sx={{ fontSize: '16px', textTransform: 'none', }} variant='contained' onClick={saveDraft}>Shortlist</Button>
                        {
                            paymentLink ?
                                <a href={paymentLink} style={{ textDecoration: 'none', }} target="_blank" rel="noreferrer" onClick={() => {
                                    setShow(true)
                                    setMessage("Please wait while we processing the payment")
                                    setMessageType("info")
                                }}>
                                    <Button sx={{ fontSize: '16px', textTransform: 'none', }} variant='contained' onClick={onClickPay} >Pay Now</Button>
                                </a>
                                :
                                <Button sx={{ fontSize: '16px', textTransform: 'none', }} variant='contained' onClick={CreateOrder} >Book</Button>
                        }

                    </Box>
                </Box>
                <Login open={openLogin} setOpen={setOpenLogin} />


            </BootstrapDialog>
        </>
    )
}



export default function ServiceSelector({ options, category, data, setOptions, open, setOpen, newService }) {

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:650px)');
    const sm = useMediaQuery('(max-width:650px)');
    return (

        <>
            {xlMax && xlMin && (
                <Content options={options} category={category} data={data} setOptions={setOptions} open={open} setOpen={setOpen} width={'550px'} newService={newService} />
            )}
            {sm && (<Content options={options} category={category} data={data} setOptions={setOptions} open={open} setOpen={setOpen} width={'auto'} newService={newService} />)}

        </>
    )
}



