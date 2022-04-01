import React, { useEffect } from 'react'
import { getBookings } from '../Api/getBookings'
import Header from '../HousDeckWebsiteComponents/Header'
import { Box, Typography, Breadcrumbs, Link, Divider } from '@mui/material'

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function HouseDeckHomeServicesMyBookings() {
  const commonProps = [

    { name: 'Home Services', url: '/home-services' },
  ]
  const [bookings, setBookings] = React.useState([])
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


  const getMyBookings = async () => {
    const userData = loadUserData()
    const response = await getBookings({ Number: userData.Number })
    if (response) {
      setBookings(response.reverse())
    }
  }


  useEffect(() => {
    let ignore = false;

    if (!ignore) getMyBookings()
    
    return () => { ignore = true; }
  }, []);
  return (
    <div>
      <Header commonProps={commonProps} />

      <Box sx={{ background: 'rgb(229, 246, 245)', height: '300px', }}>
        <Box sx={{ width: '70%', margin: '0px auto' }}>
          <Box sx={{ pt: '5rem', }}>
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
          <Box sx={{ background: 'white', height: '500px', border: '1px solid black', borderRadius: 4, margin: '0px auto', mt: 1, overflowY: 'auto' }}>
            {bookings.map((item) => {
              
              const services = item.Services
              return (
                <>
                   <Divider sx={{mt:2,px:2,fontSize: '18px',}}>{item.Service_Chosen_Date} {item.Service_Chosen_Time}</Divider>
                  {services.map(data =>
                    <>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, pt: 1 }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', }}>{data.Services_Chosen_By_User}</Typography>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', fontFamily: 'Fredoka' }}>&#8377;{data.Price_For_Chosen_Services}</Typography>
                      </Box>
                    </>

                  )}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, pt: 1 }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Fredoka' }}>Total Price</Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Fredoka' }}>&#8377;{item.Total_Price}</Typography>
                  </Box>
                </>
              )
            })}
          </Box>
        </Box>
      </Box>

      <Box>


      </Box >
    </div>
  )
}
