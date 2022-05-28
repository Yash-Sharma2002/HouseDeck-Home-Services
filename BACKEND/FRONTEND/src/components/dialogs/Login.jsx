import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
// import { makeStyles } from '@mui/styles';
import { sendOTP } from '../../Api/otpSend';
import '../../css/OnlyForDialog.css';
import { authenticateSignup } from '../../Api/signup';
import { authenticateLogin } from '../../Api/login';
import { LoginContext } from '../../context/Context';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    // width: '600px'
  },
}));


function Content({ open, setOpen, width, display }) {
  const fullScreen = useMediaQuery('(max-width:700px)');

  const { setMessage, setMessageType, setShow, encrypt } = React.useContext(LoginContext)

  const timeRef = React.useRef()

  const [displayForFirst, setDisplayForFirst] = React.useState(true)
  const [displayForSecond, setDisplayForSecond] = React.useState(false)
  const [displayForLast, setDisplayForLast] = React.useState(false)
  const [otp, setOtp] = React.useState('');
  const [number, setNumber] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [RealOTP, setRealOTP] = React.useState('')
  const [resendTime, setResendTime] = React.useState(60)


  // ----------------------------functions------------------------------ 
  const handleClose = () => {
    setOpen(false);
    setNumber('')
    setDisplayForSecond(false)
    setDisplayForFirst(true)
    setDisplayForLast(false)

  }

  // ----------For OTP--------------------------



  async function OTPSender() {
    setRealOTP('')
    clearInterval(timeRef.current);
    setResendTime(60);
    const items = {
      Number: `+91${number}`
    }
    const response = await sendOTP(items)
    if (response) {
      setRealOTP(response.slice(0, 6))
    }
    timeRef.current = setInterval(() => {
      setResendTime((time) => time - 1)
    }, 1000);
  }
  if (resendTime === 0) {
    clearInterval(timeRef.current)
  }
  const verifyOTP = (enteredOtp) => {
    if (RealOTP === enteredOtp) {
      return true
    } else {
      return false
    }
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
    setNumber(num.value)
    if (num.value.length < 10 || number.length > 10) {
      setDisplayForSecond((prevDisplay) => prevDisplay = false)
      setDisplayForFirst((prevDisplay) => prevDisplay = true)
    }
  }
  function handleOTPChange(num) {
    setOtp(num.value)
    if (num.value.length < 6) {
      setDisplayForSecond((prevDisplay) => prevDisplay = true)
      setDisplayForLast((prevDisplay) => prevDisplay = false)
    }
  }


  function onClickResend() {
    setRealOTP('')
    OTPSender()
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
      const success = verifyOTP(otp)
      if (success) {
        const login = {
          Number: `+91${number}`
        }
        let response = await authenticateLogin(login)
        if (response) {
          console.log(response);
          window.location.reload(false)
          handleClose();
          try {
            localStorage.setItem('START_DATA', JSON.stringify({
              USERDATA_AS_NUMBER: encrypt(response.Number),
              USERDATA_AS_USERNAME: encrypt(response.Username),
              USERDATA_AS_EMAIL: encrypt(response.Email),
            }));
            localStorage.setItem('INIT_DATA', JSON.stringify(true));
          } catch (err) {
            return undefined;
          }
        } else {
          afterVerifiedOTP()
        }
      } else {
        afterVerifiedOTP()
      }
    }
  }
  const sendToDatabase = async () => {
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
      setMessage("Username mut be 8 characters long and alphanumeric")
      return
    }
    const signup = {
      Number: `+91${number}`,
      Username: username,
      Email: email
    }
    let response = await authenticateSignup(signup)
    if (!response) return;
    try {
      localStorage.setItem('START_DATA', JSON.stringify({
        USERDATA_AS_NUMBER: encrypt(`+91${number}`),
        USERDATA_AS_USERNAME: encrypt(signup.Username),
        USERDATA_AS_EMAIL: encrypt(signup.Email),
      }));
      localStorage.setItem('INIT_DATA', JSON.stringify(true));
      window.location.reload(false)
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
            <img style={{ height: '100px', width: "100px", marginTop: '9rem' }} src={require('../../assets/logos/isLogin.png')} alt="Login" />
            <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: '600', ml: 1 }}>Login/Signup</Typography>
          </Box>
          <Box sx={{ ml: 5 }}>
            <Box >
              <CloseIcon onClick={handleClose} sx={{ margin: '8px 0px auto 290px', cursor: 'pointer' }} />
            </Box>

            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: '#e65c00' }}>Enter phone to continue</Typography>
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
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: '600', textALign: 'start' }}>Enter OTP : </Typography>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography sx={{ pointerEvents: resendTime === 0 ? 'auto' : 'none', opacity: resendTime === 0 ? '1' : '0.6', cursor: resendTime === 0 ? 'pointer' : 'no-drop', fontSize: '16px', mr: 1 }} onClick={() => onClickResend()}>
                    Resend {
                      resendTime === 0 ? null :
                        <span>0:{resendTime < 10 ? `0${resendTime}` : resendTime}</span>
                    }
                  </Typography>
                </Box>
              </Box>

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
      </BootstrapDialog>
    </>
  );
}



function SMContent({ open, setOpen }) {
  const fullScreen = useMediaQuery('(max-width:700px)');

  const { setMessage, setMessageType, setShow, encrypt } = React.useContext(LoginContext)

  const timeRef = React.useRef()

  const [displayForFirst, setDisplayForFirst] = React.useState(true)
  const [displayForSecond, setDisplayForSecond] = React.useState(false)
  const [displayForLast, setDisplayForLast] = React.useState(false)
  const [otp, setOtp] = React.useState('');
  const [number, setNumber] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [RealOTP, setRealOTP] = React.useState('')
  const [resendTime, setResendTime] = React.useState(60)


  // ----------------------------functions------------------------------ 
  const handleClose = () => {
    setOpen(false);
    setNumber('')
    setDisplayForSecond(false)
    setDisplayForFirst(true)
    setDisplayForLast(false)

  };




  // ----------For OTP--------------------------

  async function OTPSender() {
    setRealOTP('')
    clearInterval(timeRef.current);
    setResendTime(60);
    const items = {
      Number: `+91${number}`
    }
    const response = await sendOTP(items)
    if (response) {
      setRealOTP(response.slice(0, 6))
    }
    timeRef.current = setInterval(() => {
      setResendTime((time) => time - 1)
    }, 1000);
  }
  if (resendTime === 0) {
    clearInterval(timeRef.current)
  }
  const verifyOTP = (enteredOtp) => {
    if (RealOTP === enteredOtp) {
      return true
    } else {
      return false
    }
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
    setNumber(num.value)
    if (num.value.length < 10) {
      setDisplayForSecond((prevDisplay) => prevDisplay = false)
      setDisplayForFirst((prevDisplay) => prevDisplay = true)
    }
  }
  function handleOTPChange(num) {
    setOtp(num.value)
    if (num.value.length < 6) {
      setDisplayForSecond((prevDisplay) => prevDisplay = true)
      setDisplayForLast((prevDisplay) => prevDisplay = false)
    }
  }

  function onClickResend() {
    setRealOTP('')
    OTPSender()
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
      const success = verifyOTP(otp)
      if (success) {
        const login = {
          Number: `+91${number}`
        }
        let response = await authenticateLogin(login)
        if (response) {
          console.log(response);
          window.location.reload(false)
          handleClose();
          try {
            localStorage.setItem('START_DATA', JSON.stringify({
              USERDATA_AS_NUMBER: encrypt(response.Number),
              USERDATA_AS_USERNAME: encrypt(response.Username),
              USERDATA_AS_EMAIL: encrypt(response.Email),
            }));
            localStorage.setItem('INIT_DATA', JSON.stringify(true));
          } catch (err) {
            return undefined;
          }
        } else {
          afterVerifiedOTP()
        }
      } else {
        afterVerifiedOTP()
      }
    }
  }
  const sendToDatabase = async () => {
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
    const signup = {
      Number: `+91${number}`,
      Username: username,
      Email: email
    }
    let response = await authenticateSignup(signup)
    if (!response) return;
    window.location.reload(false)
    try {
      localStorage.setItem('START_DATA', JSON.stringify({
        USERDATA_AS_NUMBER: encrypt(`+91${number}`),
        USERDATA_AS_USERNAME: encrypt(response.Username),
        USERDATA_AS_EMAIL: encrypt(response.Email),
      }));
      localStorage.setItem('INIT_DATA', JSON.stringify(true));
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
        <Box sx={{ background: '#f8f8f8' }}>
          <Box sx={{ textAlign: 'end', marginRight: "10px", mt: 1 }}>
            <CloseIcon onClick={handleClose} sx={{ margin: '8px 0px auto 290px', cursor: 'pointer' }} />
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <img style={{ height: '100px', width: "100px", }} src={require('../../assets/logos/isLogin.png')} alt="Login" />
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
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ my: 1, pointerEvents: resendTime === 0 ? 'auto' : 'none', opacity: resendTime === 0 ? '1' : '0.6', cursor: resendTime === 0 ? 'pointer' : 'no-drop', fontSize: '16px', mr: 1 }} onClick={() => onClickResend()}>
                  Resend {
                    resendTime === 0 ? null :
                      <span>0:{resendTime < 10 ? `0${resendTime}` : resendTime}</span>
                  }
                </Typography>
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
      </BootstrapDialog>
    </>
  );
}




export default function Login({ open, setOpen, setAccount }) {
  const xlMax = useMediaQuery('(max-width:2000px)');
  const xlMin = useMediaQuery('(min-width:1160px)');
  const mdMax = useMediaQuery('(max-width:1160px)');
  const mdMin = useMediaQuery('(min-width:610px)');
  const sm = useMediaQuery('(max-width:610px)');
  return (
    <>

      {xlMax && xlMin && (
        <Content open={open} setOpen={setOpen} width={'650px'} display={'flex'} />
      )}
      {!(xlMax && xlMin) && mdMax && mdMin && (
        <Content open={open} setOpen={setOpen} width={'650px'} display={'flex'} />
      )}
      {sm && (
        <SMContent open={open} setOpen={setOpen} />
      )}
    </>
  )
}


