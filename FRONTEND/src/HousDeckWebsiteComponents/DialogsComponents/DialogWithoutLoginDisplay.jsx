import * as React from 'react';
import './OnlyForDialog.css'
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import firebase from '../../Api/otpFireBase.js';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    // width: '600px'
  },
}));


const useStyles = makeStyles({
  LoginBeforeText: {
    color: 'grey',
    fontSize: '12px',
    marginLeft: '23px'
  },
  abc: {
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
  },
})


export default function DialogWithoutLoginDisplay({ open, setOpen }) {
  const classes = useStyles()
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [display, setDisplay] = React.useState(false)
  const [number, setNumber] = React.useState('')
  const [message, setMessage] = React.useState('')
  const handleClose = () => {
    setOpen(false);
    setNumber('')
    setDisplay(false)
  };

  const [otp, setOtp] = React.useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  // const mainOTP = otp.join("")

  function forNewButtonDisplay() {
    if (number.length < 10 || number.length > 10) {
      setMessage('Please enter a valid number')
    }
    else if (number.length === 10) {
      setDisplay((prevDisplay) => prevDisplay = true)
      console.log(number);
      // handleOTP()
    }
  }
  function handleNumChange(num) {
    setMessage('')
    setNumber(num.value)
    if (num.value.length < 10) return setDisplay((prevDisplay) => prevDisplay = false)
  }


  const configureCaptcha = () => {

    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      }
    }, auth);
  }

  const onSignInSubmit = () => {
    const phoneNumber = number
    configureCaptcha()
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log('otp sent');
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        console.log('otp nhi gya');

      });

  }

  // function handleOTP() {
  //   let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha')
  //   let phoneNumber = `+91${number}`
  //   firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function (e) {
  //     if (mainOTP == null) return;
  //     e.confirm(mainOTP).then(function (result) {
  //       console.log(result.user, 'user')
  //       setMessage('number verified')
  //     }).catch((error) => {
  //       console.log(error)
  //     })
  //   })
  // }
  return (
    <>
      <BootstrapDialog
        fullScreen={fullScreen}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
      >
        <Box sx={{ display: 'flex', height: '70vh', width: '650px' }} >
          <Box sx={{ width: '40%', background: '#f8f8f8', paddingLeft: '30px' }}>
            <img style={{ height: '100px', width: "100px", marginTop: '9rem' }} src="../logos/isLogin.png" alt="Login" />
            <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: '600', ml: 1 }}>Login/Signup</Typography>

            <Box sx={{
              display: 'flex',
              color: 'grey',
              fontSize: '12px',
              alignItems: 'center'
            }}>
              <Box className={classes.abc} sx={{ ml: 1.5 }}></Box>
              <Typography className={classes.LoginBeforeText}>Zero Brokerage</Typography>
            </Box>

            <Box sx={{
              display: 'flex',
              color: 'grey',
              fontSize: '12px',
              alignItems: 'center'
            }}>
              <Box className={classes.abc} sx={{ ml: 1.5 }}></Box>
              <Typography className={classes.LoginBeforeText}>
                Thousands of new listings daily.</Typography>

            </Box>
            <Box sx={{
              display: 'flex',
              color: 'grey',
              fontSize: '12px',
              alignItems: 'center'
            }}>
              <Box className={classes.abc} sx={{ ml: 1.5 }}></Box>
              <Typography className={classes.LoginBeforeText}>100 Cr+ Brokerage saved monthly.</Typography>
            </Box>
          </Box>
          <Box sx={{ ml: 5 }}>
            <Box >
              <CloseIcon onClick={handleClose} sx={{ margin: '8px 0px auto 290px', cursor: 'pointer' }} />
            </Box>
            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3 }}>Enter phone to continue</Typography>

            <form onSubmit={onSignInSubmit}>
              <Box sx={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #e5e5e5', width: '95%', my: 2, textAlign: 'center',
              }}>
                <Typography sx={{ fontSize: '14px', margin: '0px auto' }}> +91 </Typography>
                <input
                  placeholder='Enter Mobile Number'
                  type='number'
                  onChange={e => handleNumChange(e.target)}
                  style={{
                    border: 'none',
                    userSelect: 'none',
                    width: '85%',
                    height: '40px',
                    fontSize: '14px',
                  }} />
              </Box>
              <Box sx={{ color: 'red', fontSize: '14px', my: -1 }}>{message}</Box>

              <Button sx={{
                display: !display ? 'block' : 'none', my: 2, boxShadow: 0, width: '96%', background: 'rgb(253, 55, 82)', color: 'white', padding: '8px 0px', textTransform: 'none',
                '&:hover': {
                  background: 'rgb(253, 55, 82)', color: 'white',
                }
              }} onClick={forNewButtonDisplay} type="submit">
                Continue
              </Button>

              <Box sx={{ display: display ? 'block' : 'none', margin: '0px auto', textAlign: 'center' }}>
                <div id='sign-in-button'></div>
                <Typography sx={{ fontSize: '14px', fontWeight: '600', color: 'green' }}>Enter OTP : </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {otp.map((data, index) => {
                    return (
                      <>
                        <input
                          type="number"
                          name="otp"
                          maxLength="1"
                          key={index}
                          value={data}
                          style={{
                            width: '10px',
                            margin: '10px',
                            padding: '8px',
                            textAlign: 'center'
                          }}
                          onChange={e => handleChange(e.target, index)}
                          onFocus={e => e.target.select()}
                        />
                      </>
                    );
                  })}
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                  <Button
                    sx={{
                      color: 'white',
                      padding: '5px',
                      background: 'red',
                      boxShadow: 0,
                      textTransform: 'none',
                      '&:hover': {
                        color: 'white',
                        background: 'red',
                      }
                    }}
                    onClick={e => {
                      setOtp([...otp.map(v => "")])
                    }}
                  >
                    Clear
                  </Button>
                  <Box sx={{ width: '10px' }}></Box>
                  <Button
                    sx={{
                      color: 'white',
                      padding: '5px',
                      background: 'green',
                      boxShadow: 0,
                      textTransform: 'none',
                      '&:hover': {
                        color: 'white',
                        background: 'green',
                      }
                    }}
                    onClick={e => {
                      setOtp([...otp.map(v => "")])
                    }}
                  >
                    Resend
                  </Button>

                </Box>

                <Button sx={{
                  // display: !display ? 'block' : 'none',
                  my: 2,
                  boxShadow: 0,
                  width: '96%',
                  background: 'rgb(253, 55, 82)',
                  color: 'white',
                  padding: '8px 0px',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'rgb(253, 55, 82)',
                    color: 'white',
                  }
                }} onClick={() => setDisplay(true)}>
                  Continue
                </Button>

              </Box>
            </form>

          </Box>
        </Box>
      </BootstrapDialog>
    </>
  );
}






