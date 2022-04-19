import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import { Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DrawerData } from '../../constants/data'
import { Link, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Login from '../dialogs/Login';
import { LoginContext } from '../../context/Context';

export default function Sidebar({ commonProps }) {
    const { isLogin, userData, decrypt } = React.useContext(LoginContext)
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const handleClickOpen = () => {
        setOpen(true);
    };


    function logout() {
        try {
            localStorage.setItem('START_DATA', JSON.stringify({
                USERDATA_AS_NUMBER: '',
                USERDATA_AS_USERNAME: '',
                USERDATA_AS_EMAIL: '',
            }));
            localStorage.setItem('INIT_DATA', JSON.stringify(false))
            window.location.reload(false)
        }
        catch (err) {
            console.log(err);;
        }
    }
    return (
        <div>
            <React.Fragment key={'left'}>
                <IconButton
                    size="large"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={toggleDrawer('left', true)}
                    sx={{ ml: -2 }}
                    disableRipple>
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={toggleDrawer('left', false)}
                        onKeyDown={toggleDrawer('left', false)}
                    >
                        <List>

                            <ListItem sx={{ justifyContent: 'right', marginLeft: 0, overflowX: 'hiddenImportant' }} onClick={toggleDrawer('left', false)}>
                                <CloseIcon />
                            </ListItem>

                            {
                                ((userData.USERDATA_AS_USERNAME) && isLogin) ?
                                    <>
                                    <Link href='/home-services/profile' sx={{ color: 'black', display: 'flex', justifyContent: 'flex-start', alignItems: "center", marginLeft: '10px', textDecoration: 'none'}}>
                                            <AccountCircleIcon />
                                            <Typography sx={{ fontSize: '14px', fontFamily: 'Fredoka', marginLeft: '4px' }}>{decrypt(userData.USERDATA_AS_USERNAME)}</Typography>
                                        </Link>
                                        <Link href="/home-services/profile" target="_blank" sx={{
                                            textDecoration: 'none',
                                        }} >
                                            <Typography sx={{
                                                color: 'black',
                                                fontSize: '16px',
                                                height: '30px',
                                                userSelect: 'none',
                                                textTransform: 'none',
                                                paddingLeft: '16px',
                                                ml: 3,
                                                mt:1
                                            }}>
                                                Profile
                                            </Typography>
                                        </Link>
                                        <Link href="/home-services/my-bookings" target="_blank" sx={{
                                            textDecoration: 'none',
                                        }} >
                                            <Typography sx={{
                                                color: 'black',
                                                fontSize: '16px',
                                                height: '30px',
                                                userSelect: 'none',
                                                textTransform: 'none',
                                                paddingLeft: '16px',
                                                ml: 3
                                            }}>
                                                MyBookings
                                            </Typography>
                                        </Link>
                                        <Typography sx={{
                                            fontSize: '16px',
                                            padding: '0px 15px',
                                            ml: 3
                                        }} onClick={logout}>Logout</Typography>
                                    </>

                                    :
                                    <>
                                        <Box sx={{
                                            fontSize: '16px',
                                            userSelect: 'none',
                                            textTransform: 'none',
                                            color: 'black',
                                            padding: '0px 15px',
                                            mt:1
                                        }} onClick={handleClickOpen}>
                                            Login
                                        </Box>
                                        <Typography sx={{
                                            color: 'black',
                                            fontSize: '16px',
                                            height: '30px',
                                            userSelect: 'none',
                                            textTransform: 'none',
                                            paddingLeft: '16px',
                                            mt:1
                                        }} onClick={() => setOpen(true)}>
                                            MyBookings
                                        </Typography>
                                    </>
                            }

                        </List>
                        <Divider />

                        <List sx={{ mt: 1 }}>


                            {
                                DrawerData.map((data, index) => (
                                    <div key={index}>
                                        {
                                            data.tag ?
                                                <>
                                                    <Link href={data.url} sx={{ textDecoration: 'none', color: 'black' }}>
                                                        <ListItem button key={data.name} >
                                                            <ListItemText primary={data.name} />
                                                        </ListItem>
                                                    </Link>
                                                </>
                                                :
                                                <>
                                                    <Tooltip title="Coming Soon" placement="top" arrow>
                                                        <ListItem button key={data.name} >
                                                            <ListItemText primary={data.name} />
                                                        </ListItem>
                                                    </Tooltip>
                                                </>
                                        }
                                    </div>
                                ))}


                        </List>
                        <Divider />
                        <ListItem button  >
                            <ListItemText primary='Contact us' />
                        </ListItem>
                        <Typography sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>
                            Email - <a href="mailto:hello@housedeck.in">hello@housedeck.in</a>
                        </Typography>
                    </Box>
                </Drawer>
                {!isLogin && (<Login open={open} setOpen={setOpen} />)}
            </React.Fragment>
        </div>
    )
}
