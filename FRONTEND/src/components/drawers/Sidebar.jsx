import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link, Typography } from '@mui/material';
import Login from '../dialogs/Login';
import { LoginContext } from '../../context/Context';

export default function Sidebar({ commonProps }) {
    const { isLogin, userData } = React.useContext(LoginContext)
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
            localStorage.setItem("userdata", JSON.stringify({
                Number: '',
                Username: '',
                Email: ''
            }))
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
                                ((userData.Username) && isLogin) ?
                                    <>
                                        <Typography sx={{
                                            fontSize: '16px',
                                            padding: '0px 15px',
                                            mt: 1,
                                            fontWeight: '900'
                                        }}>
                                            {userData.Username}
                                        </Typography>
                                    </>

                                    : null
                            }
                            {commonProps.map((element) => (
                                <ListItem button key={element.name}>
                                    <Link sx={{ textDecoration: 'none', color: 'black' }} href={element.url}>{element.name}</Link>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />

                        <List sx={{ mt: 1 }}>


                            {
                                ((userData.Username) && isLogin) ?
                                    <>
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
                                            }}>
                                                MyBookings
                                            </Typography>
                                        </Link>
                                    </>

                                    :
                                    <Typography sx={{
                                        color: 'black',
                                        fontSize: '16px',
                                        height: '30px',
                                        userSelect: 'none',
                                        textTransform: 'none',
                                        paddingLeft: '16px',
                                    }} onClick={() => setOpen(true)}>
                                        MyBookings
                                    </Typography>
                            }



                            {
                                ((userData.Username) && isLogin) ?
                                    <>
                                        <Typography sx={{
                                            fontSize: '16px',
                                            padding: '0px 15px',
                                            mt: 1,
                                            fontWeight: '600'
                                        }} onClick={logout}>Logout</Typography>
                                    </>

                                    :
                                    <Box sx={{
                                        fontSize: '16px',
                                        userSelect: 'none',
                                        textTransform: 'none',
                                        color: 'black',
                                        padding: '0px 15px',
                                        mt: 1
                                    }} onClick={handleClickOpen}>
                                        Login
                                    </Box>
                            }

                        </List>
                    </Box>
                </Drawer>
                {!isLogin && (<Login open={open} setOpen={setOpen} />)}
            </React.Fragment>
        </div>
    )
}
