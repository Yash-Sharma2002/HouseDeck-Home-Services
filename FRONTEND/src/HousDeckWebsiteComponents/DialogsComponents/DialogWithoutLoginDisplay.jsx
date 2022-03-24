import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { authentication } from '../../Api/otpFireBase';
import './OnlyForDialog.css';
import { authenticateSignup } from '../../Api/signup';
import { authenticateLogin } from '../../Api/login';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

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


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Content({ open, setOpen, setAccount, width, display }) {
  const classes = useStyles()
  const fullScreen = useMediaQuery('(max-width:700px)');

  const [show, setShow] = React.useState(false);
  const [displayForFirst, setDisplayForFirst] = React.useState(true)
  const [displayForSecond, setDisplayForSecond] = React.useState(false)
  const [displayForLast, setDisplayForLast] = React.useState(false)
  const [otp, setOtp] = React.useState('');
  const [number, setNumber] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [messageType, setMessageType] = React.useState('')



  // ----------------------------functions------------------------------ 
  const handleClose = () => {
    setOpen(false);
    setNumber('')
    setDisplayForSecond(false)
    setDisplayForFirst(true)
    setDisplayForLast(false)

  };
  const handleAlertClose = () => {
    setShow(false)
    setMessage('')
    setMessageType('')
  }


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
      }).catch((error) => {
        console.log(error);
        setMessageType('error')
        setShow(true)
        setMessage(`Too many tries. Try again later.`)
        setMessageType('error')
      });
  }

  const verifyOTP = () => {
    let confirmationResult = window.confirmationResult
    confirmationResult.confirm(otp).then((result) => {
      // User signed in successfully.
      // const user = result.user;  
    }).catch((error) => {
      setShow(true)
      setMessageType('error')
      setMessage("Enter Valid OTP")
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
      setShow(true);
      setMessage('Enter valid number')
      setMessageType('error')
    }
    else if (number.length === 10) {
      OTPSender()
      setShow(true)
      setMessage("OTP Sent")
      setMessageType('success')
      setDisplayForFirst((prevDisplay) => prevDisplay = false)
      setDisplayForSecond((prevDisplay) => prevDisplay = true)
    }
  }
  function handleNumChange(num) {
    setMessage('')
    setMessageType('')
    setNumber(num.value)
    if (num.value.length < 10) {
      setDisplayForSecond((prevDisplay) => prevDisplay = false)
      setDisplayForFirst((prevDisplay) => prevDisplay = true)
    }
  }
  function handleOTPChange(num) {
    setMessageType('')
    setMessage('')
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
      setShow(true)
      setMessage('OTP must be of 6 number.')
      setMessageType('error')
    }
    else if (otp.length === 6) {
      setMessage('')
      setMessageType('')
      verifyOTP()
      setShow(true)
      setMessageType('success')
      setMessage("OTP Validation complete")
      const login = {
        Number: `+91${number}`
      }
      let response = await authenticateLogin(login)
      if (response) {
        setAccount(response)
        handleClose();
        try {
          localStorage.setItem('userdata', JSON.stringify({
            Number: `+91${number}`,
            Username: response,
          }));

            localStorage.setItem('isLogin', JSON.stringify(true));
    
        } catch (err) {
          return undefined;
        }
      }
      else {
        setMessageType('')
        setMessage('')
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
    setAccount(username)
    try {
      localStorage.setItem('userdata', JSON.stringify(signup));
        localStorage.setItem('isLogin', JSON.stringify(true));
      

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
        <Box sx={{ display: 'flex', height: '70vh', width: width }} >
          <Box sx={{ width: '40%', background: '#f8f8f8', paddingLeft: '30px' }}>
            <img style={{ height: '100px', width: "100px", marginTop: '9rem' }} src="../logos/isLogin.png" alt="Login" />
            <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: '600', ml: 1 }}>Login/Signup</Typography>

            <Box sx={{
              display: display,
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



            <Button sx={{
              display: displayForFirst ? 'block' : 'none', my: 2, boxShadow: 0, width: '96%', background: 'rgb(253, 55, 82)', color: 'white', padding: '8px 0px', textTransform: 'none',
              '&:hover': {
                background: 'rgb(253, 55, 82)', color: 'white',
              }
            }} onClick={forSecondButtonDisplay} type="submit">
              Continue
            </Button>

            <Typography sx={{ fontSize: '12px', fontFamily: 'Fredoka', position: 'absolute', bottom: 10 }}>By continuing, you agree to the <a href="/home-services/housedeck-partner-(Terms-of-Use)" style={{ color: 'black', textDecoration: 'none', fontWeight: '700' }}> Terms & Conditions</a></Typography>


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
        <Snackbar open={show} autoHideDuration={6000} onClose={handleAlertClose}>
          <Alert onClose={handleAlertClose} severity={messageType} sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
        <div id='sign-in-button'></div>
      </BootstrapDialog>
    </>
  );
}



function SMContent({ open, setOpen, setAccount }) {
  const fullScreen = useMediaQuery('(max-width:700px)');

  const [show, setShow] = React.useState(false)
  const [displayForFirst, setDisplayForFirst] = React.useState(true)
  const [displayForSecond, setDisplayForSecond] = React.useState(false)
  const [displayForLast, setDisplayForLast] = React.useState(false)
  const [otp, setOtp] = React.useState('');
  const [number, setNumber] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [messageType, setMessageType] = React.useState('')



  // ----------------------------functions------------------------------ 
  const handleClose = () => {
    setOpen(false);
    setNumber('')
    setDisplayForSecond(false)
    setDisplayForFirst(true)
    setDisplayForLast(false)

  };


  const handleAlertClose = () => {
    setShow(false)
    setMessage('')
    setMessageType('')
  }


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
        setShow(true)
        setMessageType('success')
        setMessage("OTP Sent")
      }).catch((error) => {
        console.log(error);
        setShow(true)
        setMessageType('error')
        setMessage(`Too many tries. Try again later.`)
      });
  }

  const verifyOTP = () => {
    let confirmationResult = window.confirmationResult
    confirmationResult.confirm(otp).then((result) => {
      // User signed in successfully.
      // const user = result.user;
      setShow(true)
      setMessageType('success')
      setMessage("OTP Validation complete")
    }).catch((error) => {
      setShow(true)
      setMessage("Enter Valid OTP")
      setMessageType('error')
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
      setShow(true)
      setMessageType('error')
      setMessage('Please enter a valid number')
    }
    else if (number.length === 10) {
      setDisplayForFirst((prevDisplay) => prevDisplay = false)
      setDisplayForSecond((prevDisplay) => prevDisplay = true)
      OTPSender()
    }
  }
  function handleNumChange(num) {
    setMessageType('')
    setMessage('')
    setNumber(num.value)
    if (num.value.length < 10) {
      setDisplayForSecond((prevDisplay) => prevDisplay = false)
      setDisplayForFirst((prevDisplay) => prevDisplay = true)
    }
  }
  function handleOTPChange(num) {
    setMessageType('')
    setMessage('')
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
      setShow(true)
      setMessage('OTP must be of 6 number.')
      setMessageType('error')
    }
    else if (otp.length === 6) {
      setMessageType('')
      setMessage('')
      verifyOTP()
      const login = {
        Number: `+91${number}`
      }
      const response = await authenticateLogin(login)
      if (response) {
        try {
          localStorage.setItem('userdata', JSON.stringify({
            Number: `+91${number}`,
            Username: response,
          }));
          setAccount(response)
          handleClose();
        } catch (err) {
          return '';
        }
      }
      else {
        setMessage('')
        setMessageType('')
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
    setAccount(username)
    try {
      localStorage.setItem('userdata', JSON.stringify(signup));
    } catch (err) {
      return '';
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
        <Box sx={{ background: '#f8f8f8' }}>
          <Box sx={{ textAlign: 'end', marginRight: "10px", mt: 1 }}>
            <CloseIcon onClick={handleClose} sx={{ margin: '8px 0px auto 290px', cursor: 'pointer' }} />
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <img style={{ height: '100px', width: "100px", }} src="../logos/isLogin.png" alt="Login" />
            <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: '600' }}>Login/Signup</Typography>

          </Box>
          <Box sx={{ ml: 2 }}>


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
        <Snackbar open={show} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={6000} onClose={handleAlertClose}>
          <Alert onClose={handleAlertClose} severity={messageType} sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </BootstrapDialog>
    </>
  );
}




export default function DialogWithoutLoginDisplay({ open, setOpen, setAccount }) {
  const xlMax = useMediaQuery('(max-width:2000px)');
  const xlMin = useMediaQuery('(min-width:1160px)');
  const mdMax = useMediaQuery('(max-width:1160px)');
  const mdMin = useMediaQuery('(min-width:610px)');
  const sm = useMediaQuery('(max-width:610px)');
  return (
    <>

      {xlMax && xlMin && (
        <Content open={open} setOpen={setOpen} setAccount={setAccount} width={'650px'} display={'flex'} />
      )}
      {!(xlMax && xlMin) && mdMax && mdMin && (
        <Content open={open} setOpen={setOpen} setAccount={setAccount} width={'650px'} display={'flex'} />
      )}
      {sm && (
        <SMContent open={open} setOpen={setOpen} setAccount={setAccount} />
      )}
    </>
  )
}


