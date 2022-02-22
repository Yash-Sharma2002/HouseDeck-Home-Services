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
import HeaderRightMenuMainPage from './HeaderRightMenuMainPage';
import ResponsiveLeftMenuHeaderMainPage from './ResponsiveLeftMenuHeaderMainPage';

const ImageTheme = {
    width: '10rem'
}

const IconHeaderImage = {
    width: '15px',
    marginRight: 8,
    marginLeft: -8
}


export default function Header({ commonProps }) {
    // commonProps where sent from the page so they can be changed anytime in the header 
    // we also have to include Header component in everypage so commonProp can be altered

    // const classes = useStyles();




    const PostLogo = <img src={window.location.origin + '/logos/houseDeckLogo.png'} style={ImageTheme} alt="HouseDeck Logo" />

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

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <ResponsiveLeftMenuHeaderMainPage commonProps={commonProps} />
                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },ml:{xs:-4} }} >
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
                        ))}
                    </Box>


                    {/* -------------------------------------- Right side ---------------------------------- */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', marginRight: '-20px' }}>
                        <Button variant='outlined' sx={{
                            color: '#555',
                            border: '0.4px solid #c5c5c5',
                            fontSize: '13px',
                            height: '30px',
                            userSelect: 'none',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: 'white',
                                borderColor: '#c5c5c5'
                            }
                        }} disableRipple>
                            <CallToActionIcon style={IconHeaderImage} />
                            My Bookings
                        </Button>


                        <Button variant='outlined' sx={{
                            marginLeft: 1,
                            borderColor: '#1976d2',
                            fontSize: '13px',
                            height: '30px',
                            userSelect: 'none',
                        }} disableRipple>
                            <AddIcCallIcon style={IconHeaderImage} />
                            1234565432
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
                        }} disableRipple>
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
                        }} disableRipple>
                            Login
                        </Button>

                        <Divider orientation='vertical' sx={{ color: '#c5c5c5' }} flexItem />

                        <HeaderRightMenuMainPage />


                    </Box>
                </Toolbar>
            </Container>
        </AppBar >

    )
}
