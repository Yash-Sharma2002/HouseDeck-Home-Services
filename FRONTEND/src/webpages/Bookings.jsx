import React, { useEffect } from 'react'
import { getPaidBookingsAPI, getDraftBookingsAPI } from '../Api/getBookings'
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

  const [bookings, setBookings] = React.useState(null)
  const [value, setValue] = React.useState(0);
  const {userData} = React.useContext(LoginContext)

  const handleChange = (newValue) => {
    setValue(newValue);
  };

// for always loading draft services first
  useEffect(() => {
    let ignore = false;
    if (!ignore) return getDraftBookings()
    return () => { ignore = true; }
  }, []);


  const getDraftBookings = async () => {
    const response = await getDraftBookingsAPI({ Number: userData.Number })
    if (response) {
      setBookings(response.reverse())
    }
  }
  const getPaidBookings = async () => {
    const response = await getPaidBookingsAPI({ Number: userData.Number })
    if (response) {
      setBookings(response.reverse())
    }
  }


  return (
    <div>
      <Header commonProps={commonProps} />

      <Box sx={{ background: 'rgb(229, 246, 245)', height: '300px', }}>
        <Box sx={{ width: '70%', margin: '0px auto' }}>
          <Box sx={{ pt: '7px', }}>
            <Breadcrumbs
              sx={{ mt: 10 }}
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
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3 }} >
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Draft Services" onClick={getDraftBookings} {...a11yProps(0)} />
              <Tab label="Paid Services" onClick={getPaidBookings} {...a11yProps(1)} />
            </Tabs>
          </Box>



          <Box sx={{ background: 'white', height: '500px', border: '1px solid black', borderRadius: 4, margin: '0px auto', mt: 1, overflowY: 'auto' }}>

            <TabPanel value={value} index={value}>
              {bookings ? bookings.map((item) => {

                const services = item.Order_Details.Services
                return (
                  <>
                    <Divider sx={{ mt: 2, px: 2, fontSize: '18px', }}>{item.Order_Details.Order_Date} {item.Order_Details.Order_Time}</Divider>
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
                      item.Payment_Details.Payment_Link ?
                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                          <a href={item.Payment_Details.Payment_Link} style={{ textDecoration: 'none', }} target="_blank" rel="noreferrer">
                            <Button variant="contained">
                              Pay Now
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
          </Box>
        </Box>
      </Box>
      <Footer />
    </div >
  )
}
