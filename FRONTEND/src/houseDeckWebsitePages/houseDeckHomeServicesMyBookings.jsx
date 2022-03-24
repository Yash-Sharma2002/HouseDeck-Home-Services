import React from 'react'
import { getBookings } from '../Api/getBookings'
import Header from '../HousDeckWebsiteComponents/Header'
import { Box, Typography, Breadcrumbs, Link } from '@mui/material'

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
    console.log('functions called');
    const userData = loadUserData()
    const response = await getBookings({ Number: userData.Number })
    if (response) {
      setBookings(response)
    }
  }
  console.log(bookings)
  return (
    <div>
      <Header commonProps={commonProps} />

      <Box sx={{ background: 'rgb(229, 246, 245)', height: '300px', }}>
        <Box sx={{ pt: '5rem', }}>
          <Breadcrumbs
            sx={{ ml: 10 }}
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
        <Box sx={{ background: 'white', width: '70%', height: '400px', border: '1px solid black', borderRadius: 4, margin: '0px auto', mt: 10, overflowY: 'auto' }}>
          {bookings.map((item) => {
            const services = item.services
            console.log(services);
            return (
              services.map(data =>
                <>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Fredoka' }}>{data.ServiceChoseByUser}</Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Fredoka' }}>&#8377;{data.PriceForService}</Typography>
                  </Box>
                </>

              )
            )
          })}
        </Box>
      </Box>

      <button onClick={getMyBookings}>click me</button>
      <Box>


      </Box >
    </div>
  )
}
