import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import Login from '../dialogs/Login';
import Menubar from '../drawers/Menubar';
import Sidebar from '../drawers/Sidebar';
import { useMediaQuery, Link, Box, Typography, Container, AppBar, Button, Toolbar, Divider } from '@mui/material';
import { IconHeaderImage } from '../../constants/data';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { LoginContext } from '../../context/Context';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const PostLogo = <img src={require('../../assets/logos/houseDeck_copy1.png')} style={{ width: '10rem' }} alt="HouseDeck" />



function XLHeader({ commonProps }) {
    const navigate = useNavigate()
    const { userData, isLogin, decrypt } = React.useContext(LoginContext)
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open1 = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (link) => {
        setAnchorEl(null);
        navigate(link)
    };

    function logout() {
        try {
            localStorage.setItem('START_DATA', JSON.stringify({
                USERDATA_AS_NUMBER: '',
                USERDATA_AS_USERNAME: '',
                USERDATA_AS_EMAIL: '',
            }));
            localStorage.setItem('INIT_DATA', JSON.stringify(false))
            navigate('/')
        }
        catch (err) {
        }
    }
    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'white', color: '#000000' }}>
            <Container maxWidth="2000px">
                <Toolbar disableGutters>
                    <Box
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
                    >
                        {PostLogo}

                    </Box>

                    {/* ----------------------------------------------------- Left side------------------------------- */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {commonProps.map((element) => (

                            <Link href={element.url}
                                key={element.name}
                                sx={{
                                    textDecoration: 'none',
                                    marginRight: '20px'
                                }} >
                                <Typography sx={{ fontSize: '14px', color: '#464646', }}>
                                    {element.name}
                                </Typography>
                            </Link>

                        ))}
                    </Box>

                    {/* -------------------------------------- Right side ---------------------------------- */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', marginRight: '-20px' }}>


                        {
                            isLogin ?
                                <>
                                    <a href="/home-services/my-bookings" target="_blank" style={{
                                        textDecoration: 'none'
                                    }}>
                                        <Button sx={{
                                            color: '#555',
                                            border: '0.4px solid #c5c5c5',
                                            fontSize: '13px',
                                            height: '30px',
                                            userSelect: 'none',
                                            textTransform: 'none',
                                            paddingLeft: '16px',
                                            '&:hover': {
                                                backgroundColor: 'white',
                                                borderColor: '#c5c5c5'
                                            }
                                        }} disableRipple>
                                            <CallToActionIcon style={IconHeaderImage} />
                                            MyBookings
                                        </Button>
                                    </a>
                                </> :
                                <>
                                    <Button sx={{
                                        color: '#555',
                                        border: '0.4px solid #c5c5c5',
                                        fontSize: '13px',
                                        height: '30px',
                                        userSelect: 'none',
                                        textTransform: 'none',
                                        paddingLeft: '16px',
                                        '&:hover': {
                                            backgroundColor: 'white',
                                            borderColor: '#c5c5c5'
                                        }
                                    }} disableRipple onClick={handleClickOpen}>
                                        <CallToActionIcon style={IconHeaderImage} />
                                        MyBookings
                                    </Button>
                                </>
                        }


                        <Link href="tel:18003096606" target="_blank" sx={{
                            textDecoration: 'none'
                        }}>
                            <Button variant='outlined' sx={{
                                marginLeft: 1,
                                borderColor: '#1976d2',
                                fontSize: '13px',
                                height: '30px',
                                userSelect: 'none',
                                '&:hover': {
                                    backgroundColor: 'unset'
                                }
                            }} disableRipple>
                                <AddIcCallIcon style={IconHeaderImage} />
                                18003096606
                            </Button></Link>

                        {
                            ((userData.USERDATA_AS_USERNAME) && isLogin) ?
                                <>
                                    <Link href='/home-services/profile' sx={{ color: 'black', display: 'flex', justifyContent: 'space-evenly', alignItems: "center", marginLeft: '18px', textDecoration: 'none' }}>
                                        <AccountCircleIcon />
                                        <Typography sx={{ fontSize: '14px', fontFamily: 'Fredoka', marginLeft: '4px' }} >{decrypt(userData.USERDATA_AS_USERNAME)}</Typography>
                                    </Link>
                                    {open1 ? <ExpandLessIcon sx={{ mt: '2px', cursor: 'pointer' }} /> : <ExpandMoreIcon sx={{ mt: '2px', cursor: 'pointer' }} onClick={handleClick} />}
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={open1}
                                        onClose={handleClose}
                                        sx={{ right: '91px', top: '44px', left: 'auto', width: "150px" }}
                                    >
                                        <MenuItem onClick={() => handleClose('/home-services/profile')}><Link href='/home-services/profile' sx={{
                                            color: 'black',
                                            textDecoration: 'none'
                                        }} >Profile</Link>  </MenuItem>
                                        <MenuItem onClick={() => handleClose('/home-services/my-bookings')}><Link href='/home-services/my-bookings' sx={{
                                            color: 'black',
                                            textDecoration: 'none'
                                        }}>My Bookings</Link>  </MenuItem>
                                        <MenuItem onClick={logout}>Logout</MenuItem>
                                    </Menu>
                                </>
                                :
                                <>
                                    <Button variant='outlined' sx={{
                                        marginLeft: 2,
                                        fontSize: '13px',
                                        height: '30px',
                                        color: 'black',
                                        userSelect: 'none',
                                        border: 'none',
                                        textTransform: 'none',
                                        padding: '0px 15px',
                                        '&:hover': {
                                            border: 'none',
                                            backgroundColor: 'white'
                                        }
                                    }} disableRipple onClick={handleClickOpen}>
                                        Sign Up
                                    </Button>

                                    <Divider orientation='vertical' sx={{ color: '#c5c5c5' }} flexItem />


                                    <Button variant='outlined' sx={{
                                        fontSize: '13px',
                                        height: '30px',
                                        userSelect: 'none',
                                        border: 'none',
                                        textTransform: 'none',
                                        color: 'black',
                                        padding: '0px 15px',
                                        '&:hover': {
                                            border: 'none',
                                            backgroundColor: 'white'
                                        },
                                    }} disableRipple onClick={handleClickOpen}>
                                        Login
                                    </Button>
                                    <Divider orientation='vertical' sx={{ color: '#c5c5c5' }} flexItem />
                                </>
                        }

                        <Menubar />
                    </Box>
                </Toolbar>

                <Login open={open} setOpen={setOpen} />
            </Container>
        </AppBar >

    )
}


function MDHeader({ commonProps }) {
    return (<>
        <AppBar position="absolute" sx={{ backgroundColor: 'white', color: '#000000', mb: 3 }}>
            <Container maxWidth="xl" sx={{ display: 'flex', }}>
                <Box sx={{ flexGrow: 1, display: 'flex' }}>
                    <Sidebar commonProps={commonProps} />
                </Box>

                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: 'flex', ml: { xs: -4 } }} >
                    {PostLogo}
                </Typography>
            </Container>
        </AppBar></>
    )
}

// This is the main function which divides every category in responsive 

export default function Header({ commonProps }) {

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1160px)');
    const mdMax = useMediaQuery('(max-width:1160px)');
    const mdMin = useMediaQuery('(min-width:1000px)');
    const sm = useMediaQuery('(max-width:1000px)');



    return (
        <>
            {xlMax && xlMin && (
                <XLHeader commonProps={commonProps} />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <MDHeader commonProps={commonProps} />
            )}
            {sm && (<MDHeader commonProps={commonProps} />)}
        </>
    )
}