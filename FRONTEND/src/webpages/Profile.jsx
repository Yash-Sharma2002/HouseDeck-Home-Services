import React from 'react'
import Header from '../components/head/Header';
import Footer from '../components/foot/Footer';
import { Box, Divider, Typography, useMediaQuery } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { LoginContext } from '../context/Context';
import { makeStyles } from '@mui/styles';
import Tooltip from '@mui/material/Tooltip';
import WarningIcon from '@mui/icons-material/Warning';
import { profileUpdate } from '../Api/profileUpdate';
const useStyles = makeStyles({
  Verified: {
    borderWidth: '0px 2px 2px 0px',
    borderStyle: 'solid',
    borderColor: 'green',
    position: 'absolute',
    transform: 'rotate(45deg)',
    height: '8px',
    width: '3px',
    display: 'block',
    marginTop: '-4px',
  },
})

export default function Profile() {
  const classes = useStyles()
  const xlMax = useMediaQuery('(max-width:2000px)');
  const xlMin = useMediaQuery('(min-width:550px)');
  const sm = useMediaQuery('(max-width:550px)');

  const { setShow, setMessage, setMessageType, userData, encrypt, decrypt } = React.useContext(LoginContext)
  const [username, setUsername] = React.useState(decrypt(userData.USERDATA_AS_USERNAME))
  const [email, setEmail] = React.useState(decrypt(userData.USERDATA_AS_EMAIL))

  const commonProps = [
    { name: 'Home Services', url: '/home-services' }
  ]


  function handleEmailChange(value) {
    setEmail(value)
  }

  function handleUsernameChange(value) {
    setUsername(value)
  }


  async function updateProfile() {
    var validRegexForEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validRegexForUsername = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    if (!email.match(validRegexForEmail)) {
      setShow(true)
      setMessageType('error')
      setMessage("Invalid Email")
      return
    }
    if (!username.match(validRegexForUsername)) {
      setShow(true)
      setMessageType('error')
      setMessage("Username does not contains spaces and must be alphanumeric")
      return
    }
    const update = {
      Number: decrypt(userData.USERDATA_AS_NUMBER),
      Username: username,
      Email: email
    }
    let response = await profileUpdate(update)
    if (response.acknowledged) {
      window.location.reload(false)
      try {
        localStorage.setItem('START_DATA', JSON.stringify({
          USERDATA_AS_NUMBER: userData.USERDATA_AS_NUMBER,
          USERDATA_AS_USERNAME: encrypt(username),
          USERDATA_AS_EMAIL: encrypt(email),
        }));
      } catch (err) {
        return undefined;
      }
    }
    else {
      setShow(true)
      setMessageType('error')
      setMessage("Something went wrong.Try again later.")
    }
  }

  return (
    <div>
      <Header commonProps={commonProps} />
      {
        xlMax && xlMin && (

          <Box sx={{ display: "flex", height: '730px' }}>
            <Box sx={{ width: '20%', background: "orange", pt: 10 }}>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', alignItems: 'center', borderTop: '2px solid white', borderBottom: '2px solid white', px: 4, py: 2, }}>
                <Typography sx={{ fontSize: '16px', }}> Profile</Typography>
                <ArrowForwardIosIcon sx={{ fontSize: '16px', mr: 5 }} />
              </Box>
            </Box>
            <Box sx={{ pt: 10, width: '100%' }}>
              <Typography sx={{ color: '#F45C43', fontSize: '18px', ml: 3, py: 2 }}>Edit Your Profile</Typography>
              <Divider />

              <Box sx={{ display: 'flex', displayContent: 'space-evenly', alignItems: 'center', p: 3 }}>
                <Typography sx={{ color: '#464646', fontSize: '16px', fontWeight: '600', ml: 3, py: 2 }}>Name</Typography>
                <input
                  defaultValue={decrypt(userData.USERDATA_AS_USERNAME)}
                  onChange={(e) => handleUsernameChange(e.target.value)}
                  type='text'
                  style={{
                    border: '1px solid #464646',
                    userSelect: 'none',
                    width: '45%',
                    height: '30px',
                    fontSize: '14px',
                    paddingLeft: '10px',
                    marginLeft: '30px',
                  }} />
              </Box>

              <Box sx={{ display: 'flex', displayContent: 'space-evenly', alignItems: 'center', p: 3 }}>
                <Typography sx={{ color: '#464646', fontSize: '16px', fontWeight: '600', ml: 3, py: 2 }}>Email</Typography>
                <input
                  defaultValue={decrypt(userData.USERDATA_AS_EMAIL)}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  type='text'
                  style={{
                    borderTop: '1px solid #464646',
                    borderBottom: '1px solid #464646',
                    borderLeft: '1px solid #464646',
                    borderRight: 'none',
                    userSelect: 'none',
                    width: '45%',
                    height: '30px',
                    fontSize: '14px',
                    paddingLeft: '10px',
                    marginLeft: '30px'
                  }} />
                <Tooltip title="Not Verified" placement="right" arrow>
                  <WarningIcon sx={{ height: '32px', borderTop: '1px solid #464646', borderBottom: '1px solid #464646', borderRight: '1px solid #464646', borderLeft: 'none', fontSize: '20px', color: 'red', px: 1, background: '#e5e5e5' }} />
                </Tooltip>
              </Box>


              {/* Email will be sent through twilio sendgrid we have to login to it  */}
              <Typography sx={{ opacity: '0.5', cursor: 'pointer', fontSize: '16px', marginLeft: '120px', textDecoration: 'underline' }}>Click here to generate email verification mail.</Typography>

              <Box sx={{ display: 'flex', displayContent: 'space-evenly', alignItems: 'center', p: 3 }}>
                <Typography sx={{ color: '#464646', fontSize: '15px', fontWeight: '600', ml: 3, py: 2 }}>Number</Typography>
                <Typography sx={{ color: '#464646', fontSize: '14px', fontWeight: '600', ml: 3, py: 2 }}>{decrypt(userData.USERDATA_AS_NUMBER).slice(3,)}</Typography>
                <Tooltip title="Verified" placement="right" arrow>
                  <Box className={classes.Verified} sx={{ ml: 25 }}></Box>
                </Tooltip>

              </Box>
              <Box sx={{
                textAlign: 'center',
                marginTop: '30px',
              }}>
                <p style={{
                  color: 'white',
                  fontSize: '16px',
                  textDecoration: 'none',
                  margin: '0px auto',
                  padding: '8px',
                  background: 'linear-gradient(to right,#F45C43 ,#EB3349 )',
                  fontFamily: "Fredoka",
                  width: '8%',
                  cursor: 'pointer'
                }}
                  onClick={updateProfile}
                >
                  Save Profile
                </p>
              </Box>
            </Box>
          </Box>

        )
      }

      {
        !(xlMax && xlMin) && sm && (
          <Box sx={{ width: '100%' }}>
            <Typography sx={{ color: '#F45C43', fontSize: '18px', ml: 3, py: 2 }}>Edit Your Profile</Typography>
            <Divider />

            <Box sx={{ display: 'flex', displayContent: 'space-evenly', alignItems: 'center', p: 3 }}>
              <Typography sx={{ color: '#464646', fontSize: '16px', fontWeight: '600', ml: 3, py: 2 }}>Name</Typography>
              <input
                value={decrypt(userData.USERDATA_AS_USERNAME)}
                type='text'
                style={{
                  border: '1px solid #464646',
                  userSelect: 'none',
                  width: '45%',
                  height: '30px',
                  fontSize: '14px',
                  paddingLeft: '10px',
                  marginLeft: '30px',
                }} />
            </Box>

            <Box sx={{ display: 'flex', displayContent: 'space-evenly', alignItems: 'center', p: 3 }}>
              <Typography sx={{ color: '#464646', fontSize: '16px', fontWeight: '600', ml: 3, py: 2 }}>Email</Typography>
              <input
                value={decrypt(userData.USERDATA_AS_EMAIL)}
                type='text'
                style={{
                  borderTop: '1px solid #464646',
                  borderBottom: '1px solid #464646',
                  borderLeft: '1px solid #464646',
                  borderRight: 'none',
                  userSelect: 'none',
                  width: '45%',
                  height: '30px',
                  fontSize: '14px',
                  paddingLeft: '10px',
                  marginLeft: '30px'
                }} />
              <Tooltip title="Not Verified" placement="right" arrow>
                <WarningIcon sx={{ height: '32px', borderTop: '1px solid #464646', borderBottom: '1px solid #464646', borderRight: '1px solid #464646', borderLeft: 'none', fontSize: '20px', color: 'red', px: 1, background: '#e5e5e5' }} />
              </Tooltip>
            </Box>
            <Typography sx={{ opacity: '0.5', cursor: 'pointer', fontSize: '16px', marginLeft: '120px', textDecoration: 'underline' }}>Verify you email</Typography>
            <Box sx={{ display: 'flex', displayContent: 'space-evenly', alignItems: 'center', p: 3 }}>
              <Typography sx={{ color: '#464646', fontSize: '15px', fontWeight: '600', ml: 3, py: 2 }}>Number</Typography>
              <Typography sx={{ color: '#464646', fontSize: '14px', fontWeight: '600', ml: 3, py: 2 }}>{decrypt(userData.USERDATA_AS_NUMBER).slice(3,)}</Typography>
              <Tooltip title="Verified" placement="right" arrow>
                <Box className={classes.Verified} sx={{ ml: 25 }}></Box>
              </Tooltip>

            </Box>
            <Box sx={{
              textAlign: 'center',
              marginTop: '30px',
            }}>
              <Typography sx={{
                color: 'white',
                fontSize: '16px',
                textDecoration: 'none',
                padding: '8px',
                background: 'linear-gradient(to right,#F45C43 ,#EB3349 )',
                cursor: 'pointer',
                fontFamily: "Fredoka",
              }}
                onClick={updateProfile}
              >
                Save Profile
              </Typography>
            </Box>
          </Box>

        )
      }
      <Footer />
    </div>
  )
}
