import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import Divider from '@mui/material/Divider';
import DialogWithoutLoginDisplay from './DialogsComponents/DialogWithoutLoginDisplay';
import HeaderRightMenuMainPage from './HeaderRightMenuMainPage';
import ResponsiveLeftMenuHeaderMainPage from './ResponsiveLeftMenuHeaderMainPage';
import { useMediaQuery } from '@mui/material';
import { IconHeaderImage, isLogin } from '../constants/data';

const ImageTheme = {
    width: '10rem'
}

const PostLogo = <img src={window.location.origin + '/logos/houseDeckLogo.png'} style={ImageTheme} alt="HouseDeck Logo" />



function XLHeader({ commonProps }) {
    // commonProps where sent from the page so they can be changed anytime in the header 
    // we also have to include Header component in everypage so commonProp can be altered

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };


    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', color: '#000000' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        {PostLogo}

                    </Typography>

                    {/* ----------------------------------------------------- Left side------------------------------- */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {commonProps.map((element) => (
                            <Button
                                key={element.name}
                                sx={{
                                    my: 2,
                                    color: 'black',
                                    opacity: '0.6',
                                    display: 'block',
                                    fontSize: '13px',
                                    userSelect: 'none',
                                }} >
                                {element.name}
                            </Button>
                            // if the links are set for the website the use below code after doing stylings

                            // <Link href={element.url}
                            //     key={element.name}
                            //     sx={{
                            //         my: 2,
                            //         color: 'black',
                            //         opacity: '0.6',
                            //         display: 'block',
                            //         fontSize: '13px',
                            //         userSelect: 'none',
                            //     }} >
                            //     {element.name}
                            // </Link>

                        ))}
                    </Box>


                    {/* -------------------------------------- Right side ---------------------------------- */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', marginRight: '-20px' }}>
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

                        <Button variant='outlined' sx={{
                            marginLeft: 1,
                            borderColor: '#1976d2',
                            fontSize: '13px',
                            height: '30px',
                            userSelect: 'none',
                        }} disableRipple>
                            <AddIcCallIcon style={IconHeaderImage} />
                            18003096606
                        </Button>

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
                                backgroundColor: 'white'
                            }
                        }} disableRipple onClick={handleClickOpen}>
                            Login
                        </Button>

                        <Divider orientation='vertical' sx={{ color: '#c5c5c5' }} flexItem />

                        <HeaderRightMenuMainPage />
                    </Box>
                </Toolbar>
                {!isLogin && (<DialogWithoutLoginDisplay open={open} setOpen={setOpen} />)}
            </Container>
        </AppBar >

    )
}


function MDHeader({ commonProps }) {
    return (<>
    <AppBar position="static" sx={{ backgroundColor: 'white', color: '#000000' }}>
            <Container maxWidth="xl" sx={{display:'flex'}}>
        <Box sx={{ flexGrow: 1, display:'flex'}}>
            <ResponsiveLeftMenuHeaderMainPage commonProps={commonProps} />
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

export default function Header({commonProps}){
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