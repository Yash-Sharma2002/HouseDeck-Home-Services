import React from 'react'
import Header from '../components/head/Header';
import Footer from '../components/foot/Footer';
import { Box, Divider, Typography, useMediaQuery, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { LoginContext } from '../context/Context';
import { makeStyles } from '@mui/styles';
import Tooltip from '@mui/material/Tooltip';
import WarningIcon from '@mui/icons-material/Warning';
import { profileUpdate } from '../Api/profileUpdate';
import { sendOTP } from '../Api/otpSend';
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
  Verified2: {
    borderWidth: '0px 2px 2px 0px',
    borderStyle: 'solid',
    borderColor: 'green',
    transform: 'rotate(45deg)',
    height: '13px',
    width: '6px',
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
  const email = React.useState(decrypt(userData.USERDATA_AS_EMAIL))
  const [number, setNumber] = React.useState(userData.USERDATA_AS_NUMBER ? decrypt(userData.USERDATA_AS_NUMBER).slice(2,) : '')
  const [emailOTP, setEMailOTP] = React.useState('')
  const commonProps = [
    { name: 'Home Services', url: '/' }
  ]


  function handleNumChange(value) {
    setNumber(value)
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
      Number: `+1${number}`,
      Username: username,
      Email: email,
      Email_Verified: userData.EMAIL_VERIFIED,
      Phone_Verified: userData.PHONE_VERIFIED,
    }
    let response = await profileUpdate(update)
    if (response.acknowledged) {
      window.location.reload(false)
      try {
        localStorage.setItem('START_DATA', JSON.stringify({
          USERDATA_AS_NUMBER: userData.USERDATA_AS_NUMBER,
          USERDATA_AS_USERNAME: encrypt(username),
          USERDATA_AS_EMAIL: encrypt(email),
          PHONE_VERIFIED: userData.PHONE_VERIFIED,
          EMAIL_VERIFIED: userData.EMAIL_VERIFIED,
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

  const handleOTPChange = (value) => {
    console.log(value, emailOTP)
    if (value.length === 6) {
      if (value === emailOTP) {
        let startData = JSON.parse(localStorage.getItem('START_DATA'))
        startData.PHONE_VERIFIED = true
        localStorage.setItem('START_DATA', JSON.stringify(startData));
        window.location.reload(false)
        setEMailOTP('')
      }
    }
  }


  const emailVerify = async () => {
    if (number.length < 10 || number.length > 10) {
      setShow(true)
      setMessageType('error')
      setMessage("Invalid Phone Number")
      return
    }
    let response = await sendOTP({
      Number: `+1${number}`,
    })
    setEMailOTP('123456')
    // if (response) {
    // setEMailOTP(response.slice(0, 6))
    // } 
    // else {
    //   setShow(true)
    //   setMessageType('error')
    //   setMessage("Your entered Phone is incorrect. Please enter and verify again.")
    // }
  }

  return (

    <div>
      <Header commonProps={commonProps} />
      {
        xlMax && xlMin && (

          <Box sx={{ display: "flex", height: '730px', }}>
            <Box sx={{ width: '20%', pt: 10 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', alignItems: 'center', borderTop: '2px solid white', borderBottom: '2px solid white', px: 4, py: 2, background: '#1CD8D2' }}>
                <Typography sx={{ fontSize: '16px', }}> Profile</Typography>
                <ArrowForwardIosIcon sx={{ fontSize: '16px' }} />
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
                  type='text'
                  disabled={userData.EMAIL_VERIFIED === true}
                  style={{
                    width: userData.EMAIL_VERIFIED === true ? 'unset' : '45%',
                    borderTop: userData.EMAIL_VERIFIED === true ? 'none' : '1px solid #464646',
                    borderBottom: userData.EMAIL_VERIFIED === true ? 'none' : '1px solid #464646',
                    borderLeft: userData.EMAIL_VERIFIED === true ? 'none' : '1px solid #464646',
                    borderRight: 'none',
                    userSelect: 'none',
                    height: '30px',
                    fontSize: '14px',
                    backgroundColor: 'white',
                    paddingLeft: '10px',
                    marginLeft: '30px'
                  }} />
                {
                  userData.EMAIL_VERIFIED === true ?
                    <Tooltip title="Verified" placement="right" arrow>
                      <Box className={classes.Verified2} ></Box>
                    </Tooltip>
                    :
                    <Tooltip title="Not Verified" placement="right" arrow>
                      <WarningIcon sx={{ height: '32px', borderTop: '1px solid #464646', borderBottom: '1px solid #464646', borderRight: '1px solid #464646', borderLeft: 'none', fontSize: '20px', color: 'red', px: 1, background: '#e5e5e5' }} />
                    </Tooltip>
                }

              </Box>


              <Box sx={{ display: 'flex', displayContent: 'space-evenly', alignItems: 'center', p: 3 }}>
                <Typography sx={{ color: '#464646', fontSize: '15px', fontWeight: '600', ml: 3, py: 2 }}>Number</Typography>

                <Box sx={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: userData.PHONE_VERIFIED === true ?'unset': '1px solid #000000', marginLeft: '30px', width: userData.PHONE_VERIFIED === true ? 'unset' : '45%', my: 2, textAlign: 'center',
                }}>
                  <Typography sx={{ fontSize: '14px', margin: '0px auto', padding: "0 10px" }}> +1 </Typography>
                  <input
                    placeholder='Enter Mobile Number'
                    type='number'
                    defaultValue={userData.USERDATA_AS_NUMBER ? decrypt(userData.USERDATA_AS_NUMBER).slice(2,) : ''}
                    disabled={userData.PHONE_VERIFIED === true}
                    onChange={e => handleNumChange(e.target.value)}
                    style={{
                    border: 'none',
                    userSelect: 'none',
                      height: '30px',
                      fontSize: '14px',
                      backgroundColor: 'white',
                      paddingLeft: '10px',
                      width: userData.PHONE_VERIFIED === true ? 'unset' : '90%'

                    }} />
                  {
                    userData.PHONE_VERIFIED === true ?
                      <Tooltip title="Verified" placement="right" arrow>
                        <Box className={classes.Verified2} sx={{ml:2}}></Box>
                      </Tooltip>
                      :
                      <Tooltip title="Not Verified" placement="right" arrow>
                        <WarningIcon onClick={emailVerify} sx={{ height: '32px', borderTop: '1px solid #464646', borderBottom: '1px solid #464646', borderRight: '1px solid #464646', borderLeft: 'none', fontSize: '20px', color: 'red', px: 1, background: '#e5e5e5' }} />
                      </Tooltip>
                  }
                </Box>
                {
                  emailOTP ?
                    <Box sx={{ ml: 15 }}>
                      <input
                        placeholder='OTP'
                        type='number'
                        onChange={e => handleOTPChange(e.target.value)}
                        style={{
                          border: 'none',
                          borderBottom: "1px solid black",
                          userSelect: 'none',
                          textAlign: 'center',
                          // width: '50%',
                          height: '35px',
                          fontSize: '14px',
                          margin: '5px auto',
                        }} />
                      <br />
                      <Button sx={{ fontSize: '16px', textTransform: 'none', ml: 6 }} variant='contained' onClick={emailVerify} >Submit</Button>
                    </Box>
                    :
                    null
                  // <>{userData.PHONE_VERIFIED === true ? null : <Typography sx={{ opacity: '0.5', cursor: 'pointer', fontSize: '16px', marginLeft: '120px', textDecoration: 'underline' }} onClick={emailVerify}>Click here to generate phone verification OTP.</Typography>}</>
                }

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
          <Box sx={{ width: '100%', mt: 8 }}>
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
                disabled={userData.EMAIL_VERIFIED === true}
                type='text'
                style={{
                  borderTop: '1px solid #464646',
                  borderBottom: '1px solid #464646',
                  borderLeft: '1px solid #464646',
                  borderRight: 'none',
                  userSelect: 'none',
                  width: userData.EMAIL_VERIFIED === true ? 'unset' : '45%',
                  height: '30px',
                  fontSize: '14px',
                  paddingLeft: '10px',
                  marginLeft: '30px'
                }} />
              {
                userData.EMAIL_VERIFIED === true ?
                  <Tooltip title="Verified" placement="right" arrow>
                    <Box className={classes.Verified2} ></Box>
                  </Tooltip>
                  :
                  <Tooltip title="Not Verified" placement="right" arrow>
                    <WarningIcon onClick={emailVerify} sx={{ height: '32px', borderTop: '1px solid #464646', borderBottom: '1px solid #464646', borderRight: '1px solid #464646', borderLeft: 'none', fontSize: '20px', color: 'red', px: 1, background: '#e5e5e5' }} />
                  </Tooltip>
              }
            </Box>
            <Box sx={{ display: 'flex', displayContent: 'space-evenly', alignItems: 'center', p: 3 }}>
              <Typography sx={{ color: '#464646', fontSize: '15px', fontWeight: '600', ml: 3, py: 2 }}>Number</Typography>

              <Box sx={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: userData.PHONE_VERIFIED === true ?'unset': '1px solid #000000', width: userData.PHONE_VERIFIED === true ? 'unset' : '45%', my: 2, textAlign: 'center', marginLeft: '30px',
              }}>
                <Typography sx={{ fontSize: '14px', margin: '0px auto', padding: "0 10px" }}> +1 </Typography>
                <input
                  placeholder='Enter Mobile Number'
                  type='number'
                  defaultValue={userData.USERDATA_AS_NUMBER ? decrypt(userData.USERDATA_AS_NUMBER).slice(2,) : ''}
                  disabled={userData.PHONE_VERIFIED === true}
                  onChange={e => handleNumChange(e.target.value)}
                  style={{
                    border: 'none',
                    userSelect: 'none',
                    height: '30px',
                    fontSize: '14px',
                    backgroundColor: 'white',
                    paddingLeft: '10px',
                    width: userData.PHONE_VERIFIED === true ? 'unset' : '90%'
                  }} />
                {
                  userData.PHONE_VERIFIED === true ?
                    <Tooltip title="Verified" placement="right" arrow>
                      <Box className={classes.Verified2} ></Box>
                    </Tooltip>
                    :
                    <Tooltip title="Not Verified" placement="right" arrow>
                      <WarningIcon sx={{ height: '32px', borderTop: '1px solid #464646', borderBottom: '1px solid #464646', borderRight: '1px solid #464646', borderLeft: 'none', fontSize: '20px', color: 'red', px: 1, background: '#e5e5e5' }} />
                    </Tooltip>
                }
              </Box>
              {
                emailOTP ?
                  <Box sx={{ ml: 15 }}>
                    <input
                      placeholder='OTP'
                      type='number'
                      onChange={e => handleOTPChange(e.target.value)}
                      style={{
                        border: 'none',
                        borderBottom: "1px solid black",
                        userSelect: 'none',
                        textAlign: 'center',
                        // width: '50%',
                        height: '35px',
                        fontSize: '14px',
                        margin: '5px auto',
                      }} />
                    <br />
                    <Button sx={{ fontSize: '16px', textTransform: 'none', ml: 6 }} variant='contained' onClick={emailVerify} >Submit</Button>
                  </Box>
                  :
                  null
                // <>{userData.EMAIL_VERIFIED === true ? null : <Typography sx={{ opacity: '0.5', cursor: 'pointer', fontSize: '16px', marginLeft: '120px', textDecoration: 'underline' }} onClick={emailVerify}>Click here to generate phone verification OTP.</Typography>}</>
              }

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
