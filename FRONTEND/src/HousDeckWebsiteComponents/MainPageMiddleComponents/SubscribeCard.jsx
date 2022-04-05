import React from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { v4 as uuidV4 } from 'uuid'
import { useMediaQuery } from '@mui/material'
import { checkPaymentStatus, makePayments } from '../../Api/paymentCashfreeApi'
import { LoginContext } from '../../context/ContextProvider'


function Content({ padding, padding2, display, displayForButton }) {
    const { setMessage, setMessageType, setShow } = React.useContext(LoginContext)

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

    const CreateOrder = async (name, price) => {
        const userData = loadUserData()
        const orderId = uuidV4()
        const data = {
            order_id: `OrderId_${orderId}`,
            order_amount: `${price}.00`,
            order_currency: 'INR',
            customer_details: {
                customer_id: userData.Username,
                customer_email: userData.Email,
                customer_phone: userData.Number
            },
        }
        let response = await makePayments(data)
        console.log(response);
        if (response) {
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
                    Customer_Id: userData.Username,
                    Customer_Email: userData.Email,
                    Customer_Phone: userData.Number
                }
            }
            const interval = setInterval(async () => {
                const response = await checkPaymentStatus(items)
                if (response) {
                    if (response.order_status === 'PAID') {
                        clearInterval(interval)
                        setShow(true)
                        setMessage('Order Placed')
                        setMessageType('success')
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
                    color: '#464646',
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
                        background: '#1b685f',
                        fontFamily: "Fredoka",
                        borderRadius: 5,
                        display: displayForButton
                    }} href="/home-services/subcription">
                        View all plans &#10140;
                    </a>
                </Box>

            </Box>

            <Box sx={{ display: display, alignItems: 'center', justifyContent: 'center' }}>


                <Card sx={{ width: '33%', borderRadius: 4, height: '450px', margin: '0px 10px', background: "rgb(234,253,247)" }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            background: "url(../other/kitchenCleaning.png)",
                            backgroundSize: 'cover',
                            height: '195px',
                            objectFit: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            <Typography sx={{
                                fontFamily: "Hubballi, cursive",
                                textAlign: 'center',
                                fontWeight: '900',
                                fontSize: '55px',
                                pt: 5
                            }}>
                                &#8377;3350
                                <p style={{ fontSize: '15px', marginTop: "-25px" }}>for 3-months</p>
                                <p style={{ fontSize: '17px', fontFamily: 'sans-serif', fontWeight: '100' }}>Kitchen Deep Cleaning</p>
                            </Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'center', wordWrap: 'break-word', fontSize: '16px', marginTop: '20px', padding: padding2 }} variant="body2" color="rgba(27,104,95,0.6)">
                            Give your kitchen a deep clean from top to bottom, from inside the oven to outside the cabinets.
                        </Typography>
                        <Button sx={{
                            fontSize: '12px',
                            color: 'rgb(65,88,208) ',
                            padding: '15px 20px',
                            borderRadius: 15,
                            background: "#bee9d8",
                            textAlign: 'center',
                            mt: 6,
                            boxShadow: 0,
                            '&:hover': {
                                background: 'rgb(122,220,180)',
                                color: 'white'
                            }
                        }} onClick={()=>CreateOrder('Kitchen Deep Cleaning - [For 3 months]', '3350')}>
                            Order Now
                        </Button>
                    </Box>
                </Card>


                <Card sx={{ width: '33%', borderRadius: 4, height: '500px', margin: '0px 10px', background: "rgb(234,253,247)" }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            background: "url(../other/bathroomCleaning.png)",
                            backgroundSize: 'cover',
                            height: '220px',
                            objectFit: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            <Typography sx={{
                                fontFamily: "Hubballi, cursive",
                                textAlign: 'center',
                                fontWeight: '900',
                                fontSize: '58px',
                                pt: 4,
                            }}>
                                &#8377;1400
                                <p style={{ fontSize: '15px', marginTop: "-25px" }}>for 3-months</p>
                                <p style={{ fontSize: '17px', fontFamily: 'sans-serif', fontWeight: '100' }}>Bathroom Cleaning</p>
                            </Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'center', wordWrap: 'break-word', fontSize: '16px', marginTop: '20px', padding: padding2 }} variant="body2" color="rgba(27,104,95,0.6)">
                            Don’t put off cleaning your bathroom! Let us handle it so you have more time for the things you love.
                        </Typography>
                        <Button sx={{
                            fontSize: '12px',
                            color: 'rgb(65,88,208) ',
                            padding: '15px 20px',
                            borderRadius: 15,
                            background: "#bee9d8",
                            textAlign: 'center',
                            marginTop: 8,
                            boxShadow: 0,
                            '&:hover': {
                                background: 'rgb(122,220,180)',
                                color: 'white'
                            }
                        }}>
                            Order Now
                        </Button>
                    </Box>
                </Card>


                <Card sx={{ width: '33%', borderRadius: 4, height: '450px', margin: '0px 10px', background: "rgb(234,253,247)" }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            background: "url(../other/sofaCleaning.png)",
                            backgroundSize: 'cover',
                            height: '195px',
                            objectFit: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            <Typography sx={{
                                fontFamily: "Hubballi, cursive",
                                textAlign: 'center',
                                fontWeight: '900',
                                fontSize: '55px',
                                pt: 5
                            }}>
                                &#8377;2800
                                <p style={{ fontSize: '15px', marginTop: "-25px" }}>for 3-months</p>
                                <p style={{ fontSize: '17px', fontFamily: 'sans-serif', fontWeight: '100' }}>Sofa Cleaning (5 Seater)</p>
                            </Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'center', wordWrap: 'break-word', fontSize: '16px', marginTop: '20px', padding: padding2 }} variant="body2" color="rgba(27,104,95,0.6)">
                            We pride ourselves on providing you with a quick and convenient way to clean your home’s sofa and other upholstery items.
                        </Typography>
                        <Button sx={{
                            fontSize: '12px',
                            color: 'rgb(65,88,208) ',
                            padding: '15px 20px',
                            borderRadius: 15,
                            background: "#bee9d8",
                            textAlign: 'center',
                            mt: 4,
                            boxShadow: 0,
                            '&:hover': {
                                background: 'rgb(122,220,180)',
                                color: 'white'
                            }
                        }}>
                            Order Now
                        </Button>
                    </Box>
                </Card>

            </Box>

        </div>
    )
}



function SMContent({ displayForButton }) {
    return (
        <div id="subscription-plans" style={{ padding: '20px' }}>
            <Typography sx={{
                fontWeight: '600',
                color: '#464646',
                fontSize: '22px',
                paddingBottom: '50px',
                marginTop: '40px',
            }}>
                Subscription Services
            </Typography>




            <Box sx={{ display: 'block', alignItems: 'center', justifyContent: 'center' }}>


                <Card sx={{ maxWidth: 'unset', borderRadius: 4, marginTop: '25px', height: '450px', background: "rgb(234,253,247)" }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            background: "url(../other/kitchenCleaning.png)",
                            backgroundSize: 'cover',
                            height: '195px',
                            objectFit: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            <Typography sx={{
                                fontFamily: "Hubballi, cursive",
                                textAlign: 'center',
                                fontWeight: '900',
                                fontSize: '55px',
                                pt: 5
                            }}>
                                &#8377;3350
                                <p style={{ fontSize: '15px', marginTop: "-25px" }}>for 3-months</p>
                                <p style={{ fontSize: '17px', fontFamily: 'sans-serif', fontWeight: '100' }}>Kitchen Deep Cleaning</p>
                            </Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'center', wordWrap: 'break-word', fontSize: '16px', marginTop: '20px', padding: '10px 20px' }} variant="body2" color="rgba(27,104,95,0.6)">
                            Give your kitchen a deep clean from top to bottom, from inside the oven to outside the cabinets.
                        </Typography>
                        <Button sx={{
                            fontSize: '12px',
                            color: 'rgb(65,88,208) ',
                            padding: '15px 20px',
                            borderRadius: 15,
                            background: "#bee9d8",
                            textAlign: 'center',
                            mt: 6,
                            boxShadow: 0,
                            '&:hover': {
                                background: 'rgb(122,220,180)',
                                color: 'white'
                            }
                        }}>
                            Order Now
                        </Button>
                    </Box>
                </Card>


                <Card sx={{ maxWidth: 'unset', borderRadius: 4, marginTop: '25px', height: '450px', background: "rgb(234,253,247)" }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            background: "url(../other/bathroomCleaning.png)",
                            backgroundSize: 'cover',
                            height: '220px',
                            objectFit: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            <Typography sx={{
                                fontFamily: "Hubballi, cursive",
                                textAlign: 'center',
                                fontWeight: '900',
                                fontSize: '58px',
                                pt: 4
                            }}>
                                &#8377;1400
                                <p style={{ fontSize: '15px', marginTop: "-25px" }}>for 3-months</p>
                                <p style={{ fontSize: '17px', fontFamily: 'sans-serif', fontWeight: '100' }}>Bathroom Cleaning</p>

                            </Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'center', wordWrap: 'break-word', fontSize: '16px', marginTop: '20px', padding: '10px 20px' }} variant="body2" color="rgba(27,104,95,0.6)">
                            Don’t put off cleaning your bathroom! Let us handle it so you have more time for the things you love.
                        </Typography>
                        <Button sx={{
                            fontSize: '12px',
                            color: 'rgb(65,88,208) ',
                            padding: '15px 20px',
                            borderRadius: 15,
                            background: "#bee9d8",
                            textAlign: 'center',
                            marginTop: 4,
                            boxShadow: 0,
                            '&:hover': {
                                background: 'rgb(122,220,180)',
                                color: 'white'
                            }
                        }}>
                            Order Now
                        </Button>
                    </Box>
                </Card>


                <Card sx={{ maxWidth: 'unset', borderRadius: 4, marginTop: '25px', height: '450px', background: "rgb(234,253,247)" }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            background: "url(../other/sofaCleaning.png)",
                            backgroundSize: 'cover',
                            height: '195px',
                            objectFit: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            <Typography sx={{
                                fontFamily: "Hubballi, cursive",
                                textAlign: 'center',
                                fontWeight: '900',
                                fontSize: '55px',
                                pt: 5
                            }}>
                                &#8377;2800
                                <p style={{ fontSize: '15px', marginTop: "-25px" }}>for 3-months</p>
                                <p style={{ fontSize: '17px', fontFamily: 'sans-serif', fontWeight: '100' }}>Sofa Cleaning (5 Seater)</p>
                            </Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'center', wordWrap: 'break-word', fontSize: '16px', marginTop: '20px', padding: '10px 20px' }} variant="body2" color="rgba(27,104,95,0.6)">
                            We pride ourselves on providing you with a quick and convenient way to clean your home’s sofa and other upholstery items.
                        </Typography>
                        <Button sx={{
                            fontSize: '12px',
                            color: 'rgb(65,88,208) ',
                            padding: '15px 20px',
                            borderRadius: 15,
                            background: "#bee9d8",
                            textAlign: 'center',
                            mt: 6,
                            boxShadow: 0,
                            '&:hover': {
                                background: 'rgb(122,220,180)',
                                color: 'white'
                            }
                        }}>
                            Order Now
                        </Button>
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
                    background: '#1b685f',
                    fontFamily: "Fredoka",
                    borderRadius: 5,
                    display: displayForButton
                }} href="/home-services/subcription">
                    View all plans &#10140;
                </a>
            </Box>


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
