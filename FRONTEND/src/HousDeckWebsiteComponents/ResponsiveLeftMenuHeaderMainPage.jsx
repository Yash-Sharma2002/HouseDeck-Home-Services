import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from '@mui/material';
import { isLogin } from '../constants/data';
import DialogWithoutLoginDisplay from './DialogsComponents/DialogWithoutLoginDisplay';

export default function ResponsiveLeftMenuHeaderMainPage({ commonProps,setAccount }) {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };


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
                            {commonProps.map((element) => (
                                <ListItem button key={element.name}>
                                    <Link sx={{ textDecoration: 'none', color: 'black' }} href={element.url}>{element.name}</Link>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />

                        <List sx={{mt:1}}>
                            <Link href="/home-services/my-bookings" target="_blank" sx={{
                                textDecoration: 'none',
                                color: 'black',
                                fontSize: '16px',
                                height: '30px',
                                userSelect: 'none',
                                textTransform: 'none',
                                paddingLeft: '16px',
                            }} >
                                    MyBookings
                            </Link>

                           
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
                        </List>
                    </Box>
                </Drawer>
                {!isLogin && (<DialogWithoutLoginDisplay open={open} setOpen={setOpen} setAccount={setAccount} />)}
            </React.Fragment>
        </div>
    )
}
