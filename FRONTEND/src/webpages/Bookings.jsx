import React, { useEffect } from 'react'
import { getPaidBookingsAPI, getDraftBookingsAPI } from '../Api/getBookings'
import { getSubscriptionDetails } from '../Api/getSubscriptionDetails'
import { Box, Typography, Breadcrumbs, Link, Divider, Button } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Header from '../components/head/Header';
import Footer from '../components/foot/Footer';
import Tab from '@mui/material/Tab'
import { LoginContext } from '../context/Context'



function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Bookings() {
  const commonProps = [
    { name: 'Home Services', url: '/home-services' },
  ]

  const [bookings, setBookings] = React.useState([])
  const [subscription, setSubscriptions] = React.useState([])
  const [value, setValue] = React.useState(0);
  const { userData } = React.useContext(LoginContext)
  const items = {
    Customer_Details: {
      Customer_Id: userData.Username,
      Customer_Email: userData.Email,
      Customer_Phone: userData.Number
    }
  }


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // for always loading draft services first
  useEffect(() => {
    let ignore = false;
    if (!ignore) return getDraftBookings()
    return () => { ignore = true; }
  }, []);


  const getDraftBookings = async () => {
    const response = await getDraftBookingsAPI(items)
    if (response) {
      setSubscriptions([])
      setBookings(response.reverse())
    }
    else {
      setBookings([])
    }
  }
  const getPaidBookings = async () => {
    const response = await getPaidBookingsAPI(items)
    if (response) {
      setSubscriptions([])
      setBookings(response.reverse())
    }
    else {
      setBookings([])
    }
  }
  const getSubscriptions = async () => {
    const response = await getSubscriptionDetails(items)
    if (response) {
      setBookings([])
      setSubscriptions(response.reverse())
    } else {
      setSubscriptions([])
    }
  }

  function toTitle(str) {
    return str.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
  return (
    <div>
      <Header commonProps={commonProps} />

      <Box sx={{
        // background: 'rgb(229, 246, 245)', 
        height: '300px',
      }}>
        <Box sx={{ width: '70%', margin: '0px auto', mt: 10 }}>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3 }} >
            <Tabs value={value} onChange={handleChange}>
              <Tab sx={{ textTransform: 'none' }} label="Shortlists" onClick={getDraftBookings} {...a11yProps(0)} />
              <Tab sx={{ textTransform: 'none' }} label="Booked" onClick={getPaidBookings} {...a11yProps(1)} />
              <Tab sx={{ textTransform: 'none' }} label="Subscriptions" onClick={getSubscriptions} {...a11yProps(2)} />
            </Tabs>
          </Box>
          <Box sx={{ pt: '7px', }}>
            <Breadcrumbs

              separator={<NavigateNextIcon fontSize="small" />}
            >
              <Link underline="hover" key="1" color="black" href="/">
                Home
              </Link>,
              <Link
                underline="hover"
                key="2"
                color="black"
                href="/home-services"
              >
                Home Services
              </Link>,
              <Typography key="3" color="text.primary">
                My Bookings
              </Typography>,

            </Breadcrumbs>
          </Box>
          <Box sx={{ background: 'white', height: '500px', border: '5px solid orange', borderRadius: 4, margin: '0px auto', mt: 1, overflowY: 'auto' }}>

            <TabPanel value={value} index={value === 0 ? 0 : 1}>
              {
                bookings.length !== 0 ? bookings.map((item) => {
                   const category = toTitle(item.Order_Details.Category.replace(/_/g, ' '))
                  const services = item.Order_Details.Services
                  return (
                    <>
                      <Divider sx={{ mt: 2, px: 2, fontSize: '18px', }}>{item.Order_Details.Order_Date} {item.Order_Details.Order_Time}</Divider>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, pt: 1 }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', }}>Category</Typography>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', fontFamily: 'Fredoka' }}>{category}</Typography>
                      </Box>
                      {services.map(data =>
                        <>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, pt: 1 }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: '600', }}>{data.Service}</Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: '600', fontFamily: 'Fredoka' }}>&#8377;{data.Price}</Typography>
                          </Box>
                        </>

                      )}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, pt: 1 }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Fredoka' }}>Total Price</Typography>
                        <Typography sx={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Fredoka' }}>&#8377;{item.Order_Details.Order_Amount}</Typography>
                      </Box>

                      {
                        item.Draft==='Yes'?
                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                        <a href={`/home-services/service=${category}`} style={{ textDecoration: 'none', }} target="_blank" rel="noreferrer">
                          <Button variant="contained">
                            Start Again
                          </Button>
                        </a>
                      </Box>
                      :
                      <Box></Box>
                      }
                      
                    </>
                  )
                })
                  :
                  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                    <Typography sx={{ color: 'black' }}>No Bookings Available</Typography>
                  </Box>
              }
            </TabPanel>
            <TabPanel value={value} index={2}>
              {
                subscription.length !== 0 ? subscription.map((item) =>
                  <>
                    <Divider sx={{ mt: 2, px: 2, fontSize: '18px', }}>{item.Order_Details.Order_Date} {item.Order_Details.Order_Time}</Divider>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, pt: 1 }}>
                      <Typography sx={{ fontSize: '16px', fontWeight: '600', }}>{item.Order_Details.Subscription.Name}</Typography>
                      <Typography sx={{ fontSize: '16px', fontWeight: '600', fontFamily: 'Fredoka' }}>&#8377;{item.Order_Details.Subscription.Price}</Typography>
                    </Box>
                  </>

                )
                  :
                  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                    <Typography sx={{ color: 'black' }}>No Subscription Available</Typography>
                  </Box>
              }
            </TabPanel>
          </Box>
        </Box>
        <Footer />
      </Box>

    </div >
  )
}
