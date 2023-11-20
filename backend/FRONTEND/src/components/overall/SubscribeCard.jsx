import React from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { v4 as uuidV4 } from 'uuid'
import { Link, useMediaQuery } from '@mui/material'
import { checkSubscriptionStatus, makePayments } from '../../Api/paymentCashfreeApi'
import { LoginContext } from '../../context/Context'
import Login from '../dialogs/Login';


function Content({ padding, padding2, display, displayForButton }) {
    const { setMessage, setMessageType, setShow, userData,decrypt, isLogin } = React.useContext(LoginContext)
    const [show, hide] = React.useState(null)
    const [paymentLink, setPaymentLink] = React.useState('')
    const [orderId, setOrderId] = React.useState('')
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    function changeOrderId() {
        setOrderId(uuidV4())
    }
    const GetSubscription = async (id, price) => {
        const data = {
            order_id: `OrderId_${orderId}`,
            order_amount: `${price}.00`,
            order_currency: 'INR',
            customer_details: {
                customer_id: decrypt(userData.USERDATA_AS_USERNAME),
                customer_email:decrypt(userData.USERDATA_AS_EMAIL),
                customer_phone:decrypt(userData.USERDATA_AS_NUMBER)
            },
        }
        let response = await makePayments(data)
        if (response) {
            setShow(true)
            setMessage('Order Placed')
            setMessageType('success')
            setPaymentLink(response.data.payment_link)
            hide(id)

        }
    }
    const GetPayment = async (name, price) => {
        const currentDateTime = new Date()
        const items = {
            Order_Details: {
                Order_Id: `OrderId_${orderId}`,
                Order_Date: currentDateTime.toString().slice(0, 15),
                Order_Time: currentDateTime.toString().slice(16, 25),
                Subscription: {
                    Name: `${name}`,
                    Price: `${price}.00`,
                },
                Order_Amount: `${price}.00`,
            },
            Payment_Details: {
                Paid: 'Yes',
            },
            Customer_Details: {
                Customer_Id: decrypt(userData.USERDATA_AS_USERNAME),
                Customer_Email:decrypt(userData.USERDATA_AS_EMAIL),
                Customer_Phone:decrypt(userData.USERDATA_AS_NUMBER)
            }
        }
        const interval = setInterval(async () => {
            const response = await checkSubscriptionStatus(items)
            if (response) {
                if (response.order_status === 'PAID') {
                    clearInterval(interval)
                    setShow(true)
                    setMessage('Payment Recieved')
                    setMessageType('success')
                    hide(null)
                } else {
                    setShow(true)
                    setMessage('Payment is processing...')
                    setMessageType('info')
                }
            }
            else {
                setShow(true)
                setMessage('Payment Unsuccessful')
                clearInterval(interval)
                hide(null)
                setMessageType('error')
            }
        }, 10000);
    }

    return (
        <div id="subscription-plans" style={{ padding: padding }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Typography sx={{
                    fontWeight: '600',
                    color: '#000000',
                    fontSize: '22px',
                    paddingBottom: '50px',
                    marginTop: '40px',
                }}>
                    Subscription Services
                </Typography>

                <Box sx={{
                    textAlign: 'center',
                }}>
                    <a style={{
                        color: 'white',
                        fontSize: '16px',
                        textDecoration: 'none',
                        padding: '10px',
                        background: 'linear-gradient(to right,#F45C43 ,#EB3349 )',
                        fontFamily: "Fredoka",
                        borderRadius: 5,
                        display: displayForButton
                    }} href="/subcription">
                        View all plans &#10140;
                    </a>
                </Box>

            </Box>

            <Box sx={{ display: display, alignItems: 'center', justifyContent: 'center' }}>


                <Card sx={{ width: '33%', borderRadius: 4, height: '650px', margin: '0px 10px', background: "#ffe732" }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            background: `url(${require('../../assets/other/kitchenCleaning.png')})`,
                            backgroundSize: 'cover',
                            height: '195px',
                            objectFit: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        </Box>
                        <Box>
                            <Typography sx={{
                                fontFamily: "Hubballi, cursive",
                                textAlign: 'center',
                                fontWeight: '900',
                                fontSize: '55px',
                                pt: 5,
                            }}>
                                $3350
                                <p style={{ fontSize: '15px', marginTop: "-25px" }}>for 3-months</p>
                                <p style={{ fontSize: '17px', fontFamily: 'sans-serif', fontWeight: '600' }}>Kitchen Deep Cleaning</p>
                            </Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'center', wordWrap: 'break-word', fontSize: '16px', marginTop: '20px', padding: padding2 }} variant="body2" color="#000000">
                            Give your kitchen a deep clean from top to bottom, from inside the oven to outside the cabinets.
                        </Typography>
                        {
                            show === 0 ?
                                <Link href={paymentLink} target='_blank' rel="noreferrer" sx={{ textDecoration: 'none' }}>
                                    <Button sx={{
                                        fontSize: '12px',
                                        color: '#ffffff ',
                                        padding: '15px 20px',
                                        borderRadius: 15,
                                        background: "#ff3110",
                                        textAlign: 'center',
                                        mt: 6,
                                        boxShadow: 0,
                                        '&:hover': {
                                            background: '#000000',
                                            color: 'white'
                                        }
                                    }}
                                        onClick={() => GetPayment('Kitchen Deep Cleaning - [For 3 months]', '3350')}>
                                        Pay now
                                    </Button>
                                </Link>
                                :
                                <>
                                    {
                                        isLogin ? <Button sx={{
                                            fontSize: '12px',
                                            color: '#ffffff ',
                                            padding: '15px 20px',
                                            borderRadius: 15,
                                            background: "#ff3110",
                                            textAlign: 'center',
                                            mt: 6,
                                            boxShadow: 0,
                                            '&:hover': {
                                                background: '#000000',
                                                color: 'white'
                                            }
                                        }}
                                            onMouseEnter={() => changeOrderId()}
                                            onClick={() => GetSubscription(0, '3350')}>
                                            Book Now
                                        </Button>
                                            :
                                            <Button sx={{
                                                fontSize: '12px',
                                                color: '#ffffff ',
                                                padding: '15px 20px',
                                                borderRadius: 15,
                                                background: "#ff3110",
                                                textAlign: 'center',
                                                mt: 6,
                                                boxShadow: 0,
                                                '&:hover': {
                                                    background: '#000000',
                                                    color: 'white'
                                                }
                                            }} onClick={handleClickOpen}>
                                                Book Now
                                            </Button>

                                    }
                                </>
                        }
                    </Box>
                </Card>


                <Card sx={{ width: '33%', borderRadius: 4, height: '700px', margin: '0px 10px', background: "rgb(234,253,247)" }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            background: `url(${require('../../assets/other/bathroomCleaning.png')})`,
                            backgroundSize: 'cover',
                            height: '220px',
                            objectFit: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        </Box>
                        <Box>
                            <Typography sx={{
                                fontFamily: "Hubballi, cursive",
                                textAlign: 'center',
                                fontWeight: '900',
                                fontSize: '58px',
                                pt: 4,
                            }}>
                                $1400
                                <p style={{ fontSize: '15px', marginTop: "-25px" }}>for 3-months</p>
                                <p style={{ fontSize: '17px', fontFamily: 'sans-serif', fontWeight: '600' }}>Bathroom Cleaning</p>
                            </Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'center', wordWrap: 'break-word', fontSize: '16px', marginTop: '20px', padding: padding2 }} variant="body2" color="#000000">
                            Don’t put off cleaning your bathroom! Let us handle it so you have more time for the things you love.
                        </Typography>
                        {
                            show === 1 ?
                                <Link href={paymentLink} target='_blank' rel="noreferrer" sx={{ textDecoration: 'none' }}>
                                    <Button sx={{
                                        fontSize: '12px',
                                        color: '#ffffff ',
                                        padding: '15px 20px',
                                        borderRadius: 15,
                                        background: "#ff3110",
                                        textAlign: 'center',
                                        mt: 6,
                                        boxShadow: 0,
                                        '&:hover': {
                                            background: '#000000',
                                            color: 'white'
                                        }
                                    }} onClick={() => GetPayment('Bathroom Cleaning- [For 3 months]', '1400')}>
                                        Pay now
                                    </Button>
                                </Link>
                                :
                                <>
                                    {
                                        isLogin ? <Button sx={{
                                            fontSize: '12px',
                                            color: '#ffffff ',
                                            padding: '15px 20px',
                                            borderRadius: 15,
                                            background: "#ff3110",
                                            textAlign: 'center',
                                            mt: 6,
                                            boxShadow: 0,
                                            '&:hover': {
                                                background: '#000000',
                                                color: 'white'
                                            }
                                        }}
                                            onMouseEnter={() => changeOrderId()}
                                            onClick={() => GetSubscription(1, '1400')}>
                                            Book Now
                                        </Button>
                                            :
                                            <Button sx={{
                                                fontSize: '12px',
                                                color: '#ffffff ',
                                                padding: '15px 20px',
                                                borderRadius: 15,
                                                background: "#ff3110",
                                                textAlign: 'center',
                                                mt: 6,
                                                boxShadow: 0,
                                                '&:hover': {
                                                    background: '#000000',
                                                    color: 'white'
                                                }
                                            }} onClick={handleClickOpen}>
                                                Book Now
                                            </Button>

                                    }
                                </>
                        }
                    </Box>
                </Card>


                <Card sx={{ width: '33%', borderRadius: 4, height: '650px', margin: '0px 10px', background: "#ffe732" }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            background: `url(${require('../../assets/other/sofaCleaning.png')})`,
                            backgroundSize: 'cover',
                            height: '195px',
                            objectFit: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        </Box>
                        <Box>
                            <Typography sx={{
                                fontFamily: "Hubballi, cursive",
                                textAlign: 'center',
                                fontWeight: '900',
                                fontSize: '55px',
                                pt: 5
                            }}>
                                $2800
                                <p style={{ fontSize: '15px', marginTop: "-25px" }}>for 3-months</p>
                                <p style={{ fontSize: '17px', fontFamily: 'sans-serif', fontWeight: '600' }}>Sofa Cleaning (5 Seater)</p>
                            </Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'center', wordWrap: 'break-word', fontSize: '16px', marginTop: '20px', padding: padding2 }} variant="body2" color="#000000">
                            We pride ourselves on providing you with a quick and convenient way to clean your home’s sofa and other upholstery items.
                        </Typography>
                        {
                            show === 2 ?
                                <Link href={paymentLink} target='_blank' rel="noreferrer" sx={{ textDecoration: 'none' }}>
                                    <Button sx={{
                                        fontSize: '12px',
                                        color: '#ffffff ',
                                        padding: '15px 20px',
                                        borderRadius: 15,
                                        background: "#ff3110",
                                        textAlign: 'center',
                                        mt: 6,
                                        boxShadow: 0,
                                        '&:hover': {
                                            background: '#000000',
                                            color: 'white'
                                        }
                                    }}
                                        onClick={() => GetPayment('Sofa Cleaning (5 Seater) - [For 3 months]', '2800')}>
                                        Pay now
                                    </Button>
                                </Link>
                                :
                                <>
                                    {
                                        isLogin ? <Button sx={{
                                            fontSize: '12px',
                                            color: '#ffffff ',
                                            padding: '15px 20px',
                                            borderRadius: 15,
                                            background: "#ff3110",
                                            textAlign: 'center',
                                            mt: 6,
                                            boxShadow: 0,
                                            '&:hover': {
                                                background: '#000000',
                                                color: 'white'
                                            }
                                        }}
                                            onMouseEnter={() => changeOrderId()}
                                            onClick={() => GetSubscription(2, '2800')}>
                                            Book Now
                                        </Button>
                                            :
                                            <Button sx={{
                                                fontSize: '12px',
                                                color: '#ffffff ',
                                                padding: '15px 20px',
                                                borderRadius: 15,
                                                background: "#ff3110",
                                                textAlign: 'center',
                                                mt: 6,
                                                boxShadow: 0,
                                                '&:hover': {
                                                    background: '#000000',
                                                    color: 'white'
                                                }
                                            }} onClick={handleClickOpen}>
                                                Book Now
                                            </Button>

                                    }
                                </>
                        }
                    </Box>
                </Card>

            </Box>
            <Login open={open} setOpen={setOpen} type={'signin'} />
        </div>
    )
}



function SMContent({ displayForButton }) {
    const { setMessage, setMessageType, setShow, userData,decrypt, isLogin } = React.useContext(LoginContext)
    const [show, hide] = React.useState(null)
    const [paymentLink, setPaymentLink] = React.useState('')
    const [orderId, setOrderId] = React.useState('')
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };
    function changeOrderId() {
        setOrderId(uuidV4())
    }
    const GetSubscription = async (id, price) => {
        const data = {
            order_id: `OrderId_${orderId}`,
            order_amount: `${price}.00`,
            order_currency: 'INR',
            customer_details: {
                customer_id: decrypt(userData.USERDATA_AS_USERNAME),
                customer_email:decrypt(userData.USERDATA_AS_EMAIL),
                customer_phone:decrypt(userData.USERDATA_AS_NUMBER)
            },
        }
        let response = await makePayments(data)
        if (response) {
            setShow(true)
            setMessage('Order Placed')
            setMessageType('success')
            setPaymentLink(response.data.payment_link)
            hide(id)

        }
    }

    const GetPayment = async (name, price) => {
        const currentDateTime = new Date()
        const items = {
            Order_Details: {
                Order_Id: `OrderId_${orderId}`,
                Order_Date: currentDateTime.toString().slice(0, 15),
                Order_Time: currentDateTime.toString().slice(16, 25),
                Subscription: {
                    Name: `${name}`,
                    Price: `${price}.00`,
                },
                Order_Amount: `${price}.00`,
            },
            Payment_Details: {
                Paid: 'Yes',
            },
            Customer_Details: {
                Customer_Id: decrypt(userData.USERDATA_AS_USERNAME),
                Customer_Email:decrypt(userData.USERDATA_AS_EMAIL),
                Customer_Phone:decrypt(userData.USERDATA_AS_NUMBER)
            }
        }
        const interval = setInterval(async () => {
            const response = await checkSubscriptionStatus(items)
            if (response) {
                if (response.order_status === 'PAID') {
                    clearInterval(interval)
                    setShow(true)
                    setMessage('Payment Recieved')
                    setMessageType('success')
                    hide(false)
                } else {
                    setShow(true)
                    setMessage('Payment is processing...')
                    setMessageType('info')
                }
            }
            else {
                setShow(true)
                setMessage('Payment Unsuccessful')
                clearInterval(interval)
                setMessageType('error')
            }
        }, 10000);
    }

    return (
        <div id="subscription-plans" style={{ padding: '20px' }}>
            <Typography sx={{
                fontWeight: '600',
                color: '#000000',
                fontSize: '22px',
                paddingBottom: '50px',
                marginTop: '40px',
            }}>
                Subscription Services
            </Typography>




            <Box sx={{ display: 'block', alignItems: 'center', justifyContent: 'center' }}>


                <Card sx={{ maxWidth: 'unset', borderRadius: 4, marginTop: '25px', height: '600px', background: "#ffe732" }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            background: `url(${require('../../assets/other/kitchenCleaning.png')})`,
                            backgroundSize: 'cover',
                            height: '195px',
                            objectFit: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        </Box>
                        <Box>
                            <Typography sx={{
                                fontFamily: "Hubballi, cursive",
                                textAlign: 'center',
                                fontWeight: '900',
                                fontSize: '55px',
                                pt: 5
                            }}>
                                $3350
                                <p style={{ fontSize: '15px', marginTop: "-25px" }}>for 3-months</p>
                                <p style={{ fontSize: '17px', fontFamily: 'sans-serif', fontWeight: '500' }}>Kitchen Deep Cleaning</p>
                            </Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'center', wordWrap: 'break-word', fontSize: '16px', marginTop: '20px', padding: '10px 20px' }} variant="body2" color="#000000">
                            Give your kitchen a deep clean from top to bottom, from inside the oven to outside the cabinets.
                        </Typography>
                        {
                            show === 0 ?
                                <Link href={paymentLink} target='_blank' rel="noreferrer" sx={{ textDecoration: 'none' }}>
                                    <Button sx={{
                                        fontSize: '12px',
                                        color: '#ffffff ',
                                        padding: '15px 20px',
                                        borderRadius: 15,
                                        background: "#ff3110",
                                        textAlign: 'center',
                                        mt: 6,
                                        boxShadow: 0,
                                        '&:hover': {
                                            background: '#000000',
                                            color: 'white'
                                        }
                                    }} onClick={() => GetPayment('Kitchen Deep Cleaning - [For 3 months]', '3350')}>
                                        Pay now
                                    </Button>
                                </Link>
                                :
                                <>
                                    {
                                        isLogin ? <Button sx={{
                                            fontSize: '12px',
                                            color: '#ffffff ',
                                            padding: '15px 20px',
                                            borderRadius: 15,
                                            background: "#ff3110",
                                            textAlign: 'center',
                                            mt: 6,
                                            boxShadow: 0,
                                            '&:hover': {
                                                background: '#000000',
                                                color: 'white'
                                            }
                                        }}
                                            onMouseEnter={() => changeOrderId()}
                                            onClick={() => GetSubscription(0, '3350')}>
                                            Book Now
                                        </Button>
                                            :
                                            <Button sx={{
                                                fontSize: '12px',
                                                color: '#ffffff ',
                                                padding: '15px 20px',
                                                borderRadius: 15,
                                                background: "#ff3110",
                                                textAlign: 'center',
                                                mt: 6,
                                                boxShadow: 0,
                                                '&:hover': {
                                                    background: '#000000',
                                                    color: 'white'
                                                }
                                            }} onClick={handleClickOpen}>
                                                Book Now
                                            </Button>

                                    }
                                </>
                        }
                    </Box>
                </Card>


                <Card sx={{ maxWidth: 'unset', borderRadius: 4, marginTop: '25px', height: '630px', background: "rgb(234,253,247)" }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            background: `url(${require('../../assets/other/bathroomCleaning.png')})`,
                            backgroundSize: 'cover',
                            height: '220px',
                            objectFit: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        </Box>
                        <Box>
                            <Typography sx={{
                                fontFamily: "Hubballi, cursive",
                                textAlign: 'center',
                                fontWeight: '900',
                                fontSize: '58px',
                                pt: 4
                            }}>
                                $1400
                                <p style={{ fontSize: '15px', marginTop: "-25px" }}>for 3-months</p>
                                <p style={{ fontSize: '17px', fontFamily: 'sans-serif', fontWeight: '600' }}>Bathroom Cleaning</p>

                            </Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'center', wordWrap: 'break-word', fontSize: '16px', marginTop: '20px', padding: '10px 20px' }} variant="body2" color="#000000">
                            Don’t put off cleaning your bathroom! Let us handle it so you have more time for the things you love.
                        </Typography>
                        {
                            show === 1 ?
                                <Link href={paymentLink} target='_blank' rel="noreferrer" sx={{ textDecoration: 'none' }}>
                                    <Button sx={{
                                        fontSize: '12px',
                                        color: '#ffffff ',
                                        padding: '15px 20px',
                                        borderRadius: 15,
                                        background: "#ff3110",
                                        textAlign: 'center',
                                        mt: 6,
                                        boxShadow: 0,
                                        '&:hover': {
                                            background: '#000000',
                                            color: 'white'
                                        }
                                    }} onClick={() => GetPayment('Bathroom Cleaning- [For 3 months]', '1400')}>
                                        Pay now
                                    </Button>
                                </Link>
                                :
                                <>
                                    {
                                        isLogin ? <Button sx={{
                                            fontSize: '12px',
                                            color: '#ffffff ',
                                            padding: '15px 20px',
                                            borderRadius: 15,
                                            background: "#ff3110",
                                            textAlign: 'center',
                                            mt: 6,
                                            boxShadow: 0,
                                            '&:hover': {
                                                background: '#000000',
                                                color: 'white'
                                            }
                                        }}
                                            onMouseEnter={() => changeOrderId()}
                                            onClick={() => GetSubscription(1, '1400')}>
                                            Book Now
                                        </Button>
                                            :
                                            <Button sx={{
                                                fontSize: '12px',
                                                color: '#ffffff ',
                                                padding: '15px 20px',
                                                borderRadius: 15,
                                                background: "#ff3110",
                                                textAlign: 'center',
                                                mt: 6,
                                                boxShadow: 0,
                                                '&:hover': {
                                                    background: '#000000',
                                                    color: 'white'
                                                }
                                            }} onClick={handleClickOpen}>
                                                Book Now
                                            </Button>

                                    }
                                </>
                        }
                    </Box>
                </Card>


                <Card sx={{ maxWidth: 'unset', borderRadius: 4, marginTop: '25px', height: '600px', background: "#ffe732" }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            background: `url(${require('../../assets/other/sofaCleaning.png')})`,
                            backgroundSize: 'cover',
                            height: '195px',
                            objectFit: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        </Box>
                        <Box>
                            <Typography sx={{
                                fontFamily: "Hubballi, cursive",
                                textAlign: 'center',
                                fontWeight: '900',
                                fontSize: '55px',
                                pt: 5
                            }}>
                                $2800
                                <p style={{ fontSize: '15px', marginTop: "-25px" }}>for 3-months</p>
                                <p style={{ fontSize: '17px', fontFamily: 'sans-serif', fontWeight: '600' }}>Sofa Cleaning (5 Seater)</p>
                            </Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'center', wordWrap: 'break-word', fontSize: '16px', marginTop: '20px', padding: '10px 20px' }} variant="body2" color="#000000">
                            We pride ourselves on providing you with a quick and convenient way to clean your home’s sofa and other upholstery items.
                        </Typography>
                        {
                            show === 2 ?
                                <Link href={paymentLink} target='_blank' rel="noreferrer" sx={{ textDecoration: 'none' }}>
                                    <Button sx={{
                                        fontSize: '12px',
                                        color: '#ffffff ',
                                        padding: '15px 20px',
                                        borderRadius: 15,
                                        background: "#ff3110",
                                        textAlign: 'center',
                                        mt: 6,
                                        boxShadow: 0,
                                        '&:hover': {
                                            background: '#000000',
                                            color: 'white'
                                        }
                                    }}
                                        onClick={() => GetPayment('Sofa Cleaning (5 Seater) - [For 3 months]', '2800')}>
                                        Pay now
                                    </Button>
                                </Link>
                                :
                                <>
                                    {
                                        isLogin ? <Button sx={{
                                            fontSize: '12px',
                                            color: '#ffffff ',
                                            padding: '15px 20px',
                                            borderRadius: 15,
                                            background: "#ff3110",
                                            textAlign: 'center',
                                            mt: 6,
                                            boxShadow: 0,
                                            '&:hover': {
                                                background: '#000000',
                                                color: 'white'
                                            }
                                        }}
                                            onMouseEnter={() => changeOrderId()}
                                            onClick={() => GetSubscription(2, '2800')}>
                                            Book Now
                                        </Button>
                                            :
                                            <Button sx={{
                                                fontSize: '12px',
                                                color: '#ffffff ',
                                                padding: '15px 20px',
                                                borderRadius: 15,
                                                background: "#ff3110",
                                                textAlign: 'center',
                                                mt: 6,
                                                boxShadow: 0,
                                                '&:hover': {
                                                    background: '#000000',
                                                    color: 'white'
                                                }
                                            }} onClick={handleClickOpen}>
                                                Book Now
                                            </Button>

                                    }
                                </>
                        }
                    </Box>
                </Card>

            </Box>
            <Box sx={{
                textAlign: 'center',
                marginTop: '30px',
            }}>
                <a style={{
                    color: 'white',
                    fontSize: '16px',
                    textDecoration: 'none',
                    padding: '8px',
                    background: 'linear-gradient(to right,#F45C43 ,#EB3349 )',
                    fontFamily: "Fredoka",
                    borderRadius: 5,
                    display: displayForButton
                }} href="/subcription">
                    View all plans &#10140;
                </a>
            </Box>

            <Login open={open} setOpen={setOpen} type={'signin'} />

        </div>
    )
}


export default function SubscribeCard({ displayForButton }) {

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1160px)');
    const mdMax = useMediaQuery('(max-width:1160px)');
    const mdMin = useMediaQuery('(min-width:820px)');
    const sm = useMediaQuery('(max-width:820px)');
    return (

        <>
            {xlMax && xlMin && (
                <Content padding={'60px 100px'} padding2={'10px 40px'} display={'flex'} displayForButton={displayForButton} />

            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <Content padding={'30px 20px'} padding2={'10px 20px'} display={'flex'} displayForButton={displayForButton} />

            )}
            {!(mdMax && mdMin) && sm && (
                <SMContent displayForButton={displayForButton} />
            )}
        </>
    )

}
