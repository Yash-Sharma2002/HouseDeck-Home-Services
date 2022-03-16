import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import * as React from 'react';
import { authentication } from '../../Api/otpFireBase';
import './OnlyForDialog.css';
import { authenticateSignup } from '../../Api/signup';
import { authenticateLogin } from '../../Api/login';


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


export default function DialogWithoutLoginDisplay({ open, setOpen, setAccount }) {
  const classes = useStyles()
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  const [displayForFirst, setDisplayForFirst] = React.useState(true)
  const [displayForSecond, setDisplayForSecond] = React.useState(false)
  const [displayForLast, setDisplayForLast] = React.useState(false)
  const [otp, setOtp] = React.useState('');
  const [number, setNumber] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [messageForNumber, setMessageForNumber] = React.useState('')
  const [messageForOTP, setMessageForOTP] = React.useState('')



  // ----------------------------functions------------------------------ 
  const handleClose = () => {
    setOpen(false);
    setNumber('')
    setDisplayForSecond(false)
    setDisplayForFirst(true)
    setDisplayForLast(false)
    setMessageForNumber('')
    setMessageForOTP('')

  };


  // ----------For OTP--------------------------
  const generateReCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    }, authentication);
  }


  function OTPSender() {
    const phoneNumber = `+91${number}`
    generateReCaptcha();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log(`Sending OTP to Phone-Number - ${phoneNumber}`);
        setMessageForNumber("OTP Sent")
      }).catch((error) => {
        console.log(error);
        setMessageForOTP(`Error in OTP calling : ${error.message}`)
      });
  }

  const verifyOTP = () => {
    let confirmationResult = window.confirmationResult
    confirmationResult.confirm(otp).then((result) => {
      // User signed in successfully.
      // const user = result.user;
      console.log('signed in');
    }).catch((error) => {
      setMessageForOTP("Enter Valid OTP")
      console.log(error);
    });
  }

  //---------------END--------------------------


  function afterVerifiedOTP() {
    setDisplayForFirst(false)
    setDisplayForSecond(false)
    setDisplayForLast(true)
  }

  function forSecondButtonDisplay() {
    if (number.length < 10 || number.length > 10) {
      setMessageForNumber('Please enter a valid number')
    }
    else if (number.length === 10) {
      setDisplayForFirst((prevDisplay) => prevDisplay = false)
      setDisplayForSecond((prevDisplay) => prevDisplay = true)
      OTPSender()
    }
  }
  function handleNumChange(num) {
    setMessageForNumber('')
    setNumber(num.value)
    if (num.value.length < 10) {
      setDisplayForSecond((prevDisplay) => prevDisplay = false)
      setDisplayForFirst((prevDisplay) => prevDisplay = true)
    }
  }
  function handleOTPChange(num) {
    setMessageForOTP('')
    setOtp(num.value)
    if (num.value.length < 6) {
      setDisplayForSecond((prevDisplay) => prevDisplay = true)
      setDisplayForLast((prevDisplay) => prevDisplay = false)
    }
  }
  function getUserName(name) {
    setUsername(name.value)
  }
  function getEmail(name) {
    setEmail(name.value)
  }
  const onclickOTPButton = async () => {
    if (otp.length < 6 || otp.length > 6) {
      setMessageForOTP('OTP must be of 6 number.')
    }
    else if (otp.length === 6) {
      setMessageForOTP('')
      verifyOTP()
      const login = {
        Number: `+91${number}`
      }
      let response = await authenticateLogin(login)
      if (response) {
        setAccount((prevType) => prevType = response)
        handleClose();
        try {
          localStorage.setItem('userdata', JSON.stringify({
            Number: `+91${number}`,
            Username: response,
          }));
        } catch (err) {
          return undefined;
        }
      }
      else {
        setMessageForNumber('')
        afterVerifiedOTP()
      }
    }
  }
  const sendToDatabase = async () => {
    const signup = {
      Number: `+91${number}`,
      Username: username,
      Email: email
    }
    let response = await authenticateSignup(signup)
    if (!response) return;
    setAccount((prevType) => prevType = username)
    try {
      localStorage.setItem('userdata', JSON.stringify(signup));
    } catch (err) {
      return undefined;
    }
    handleClose();
  }

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


            <Box sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #e5e5e5', width: '95%', my: 2, textAlign: 'center',
            }}>
              <Typography sx={{ fontSize: '14px', margin: '0px auto' }}> +91 </Typography>
              <input
                placeholder='Enter Mobile Number'
                type='number'
                disabled={displayForLast}
                onChange={e => handleNumChange(e.target)}
                style={{
                  border: 'none',
                  userSelect: 'none',
                  width: '85%',
                  height: '40px',
                  fontSize: '14px',
                }} />
            </Box>
            <Typography sx={{ color: 'red', fontSize: '14px', marginTop: '-10px' }}>{messageForNumber}</Typography>

            <Button sx={{
              display: displayForFirst ? 'block' : 'none', my: 2, boxShadow: 0, width: '96%', background: 'rgb(253, 55, 82)', color: 'white', padding: '8px 0px', textTransform: 'none',
              '&:hover': {
                background: 'rgb(253, 55, 82)', color: 'white',
              }
            }} onClick={forSecondButtonDisplay} type="submit">
              Continue
            </Button>

            <Box sx={{ display: displayForSecond ? 'block' : 'none', margin: '0px auto', }}>

              <Typography sx={{ fontSize: '14px', fontWeight: '600', textALign: 'start' }}>Enter OTP : </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <input
                  placeholder='OTP'
                  type='number'
                  onChange={e => handleOTPChange(e.target)}
                  style={{
                    border: 'none',
                    borderBottom: "1px solid black",
                    userSelect: 'none',
                    width: '50%',
                    height: '35px',
                    fontSize: '14px',
                    margin: '5px auto',
                  }} />
              </Box>
              <Typography sx={{ color: 'red', fontSize: '14px', my: 1 }}>{messageForOTP}</Typography>

              <Button sx={{
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
              }} onClick={onclickOTPButton}>
                Continue
              </Button>

            </Box>


            <Box sx={{ display: displayForLast ? 'block' : 'none' }}>
              <input
                placeholder='Username'
                type='text'
                onChange={e => getUserName(e.target)}
                style={{
                  userSelect: 'none',
                  width: '90%',
                  height: '40px',
                  fontSize: '14px',
                  border: '1px solid #e5e5e5',
                  paddingLeft: '13px'
                }} />
              <Box sx={{ my: 1 }}></Box>
              <input
                placeholder='Email'
                onChange={e => getEmail(e.target)}
                type='email'
                style={{
                  userSelect: 'none',
                  width: '90%',
                  height: '40px',
                  fontSize: '14px',
                  border: '1px solid #e5e5e5',
                  paddingLeft: '13px'
                }} />
              <Button sx={{
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
              }}
                onClick={sendToDatabase}
              >
                Continue
              </Button>

            </Box>
          </Box>
        </Box>
        <div id='sign-in-button'></div>
      </BootstrapDialog>
    </>
  );
}






