import * as React from 'react';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import DialogWithoutLoginDisplay from './DialogsComponents/DialogWithoutLoginDisplay';
import HeaderRightMenuMainPage from './HeaderRightMenuMainPage';
import ResponsiveLeftMenuHeaderMainPage from './ResponsiveLeftMenuHeaderMainPage';
import { useMediaQuery, Link, Box, Typography, Container, AppBar, Button, Toolbar, Divider } from '@mui/material';
import { IconHeaderImage, isLogin } from '../constants/data';
import { LoginContext } from '../context/ContextProvider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const ImageTheme = {
    width: '10rem'
}

const PostLogo = <img src='../logos/houseDeck_copy1.png' style={ImageTheme} alt="HouseDeck" />



function XLHeader({ commonProps, userData, account, setAccount }) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };


    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'white', color: '#000000' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
                    >
                        {PostLogo}

                    </Typography>

                    {/* ----------------------------------------------------- Left side------------------------------- */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {commonProps.map((element) => (

                            <Link href={element.url}
                                key={element.name}
                                sx={{
                                    my: 2,
                                    // opacity: '0.6',
                                    display: 'block',
                                    userSelect: 'none',
                                    fontSize: '14px',
                                    color: '#464646',
                                    textDecoration: 'none',
                                    marginRight: '20px'
                                }} >
                                {element.name}
                            </Link>

                        ))}
                    </Box>


                    {/* -------------------------------------- Right side ---------------------------------- */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', marginRight: '-20px' }}>

                        <Link href="/home-services/my-bookings" target="_blank" sx={{
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
                            }} disableRipple onClick={handleClickOpen}>
                                <CallToActionIcon style={IconHeaderImage} />
                                MyBookings
                            </Button>
                        </Link>

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
                            (userData.Username || account) ?
                                <Link href='/home-services/profile' sx={{ color: 'black', display: 'flex', justifyContent: 'space-evenly', alignItems: "center", marginLeft: '18px', textDecoration: 'none' }}>
                                    <AccountCircleIcon />
                                    <Typography sx={{ fontSize: '14px', fontFamily: 'Fredoka', marginLeft: '4px' }}>{userData.Username || account}</Typography>
                                </Link>
                                :
                                <>
                                    <Button variant='outlined' sx={{
                                        marginLeft: 2,
                                        fontSize: '13px',
                                        height: '30px',
                                        userSelect: 'none',
                                        border: 'none',
                                        textTransform: 'none',
                                        color: '#c5c5c5',
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
                                        color: '#c5c5c5',
                                        padding: '0px 15px',
                                        '&:hover': {
                                            border: 'none',
                                            backgroundColo18: 'white'
                                        }
                                    }} disableRipple onClick={handleClickOpen}>
                                        Login
                                    </Button>
                                    <Divider orientation='vertical' sx={{ color: '#c5c5c5' }} flexItem />
                                </>
                        }

                        <HeaderRightMenuMainPage setAccount={setAccount} />
                    </Box>
                </Toolbar>
                {!isLogin && (<DialogWithoutLoginDisplay open={open} setOpen={setOpen} setAccount={setAccount} />)}
            </Container>
        </AppBar >

    )
}


function MDHeader({ commonProps, userData, account, setAccount }) {
    return (<>
        <AppBar position="static" sx={{ backgroundColor: 'white', color: '#000000' }}>
            <Container maxWidth="xl" sx={{ display: 'flex' }}>
                <Box sx={{ flexGrow: 1, display: 'flex' }}>
                    <ResponsiveLeftMenuHeaderMainPage commonProps={commonProps} userData={userData} />
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

    function loadUserData() {
        try {
            const serializedState = localStorage.getItem('userdata');
            if (serializedState === null) {
                return undefined;
            }
            return JSON.parse(serializedState);
        } catch (err) {
            return undefined;
        }
    }

    const [account, setAccount] = React.useState('');
    const userData = loadUserData()

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1160px)');
    const mdMax = useMediaQuery('(max-width:1160px)');
    const mdMin = useMediaQuery('(min-width:1000px)');
    const sm = useMediaQuery('(max-width:1000px)');

    return (
        <>
            {xlMax && xlMin && (
                <XLHeader commonProps={commonProps} userData={userData} account={account} setAccount={setAccount} />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <MDHeader commonProps={commonProps} userData={userData} account={account} setAccount={setAccount} />
            )}
            {sm && (<MDHeader commonProps={commonProps} userData={userData} account={account} setAccount={setAccount} />)}
        </>
    )
}