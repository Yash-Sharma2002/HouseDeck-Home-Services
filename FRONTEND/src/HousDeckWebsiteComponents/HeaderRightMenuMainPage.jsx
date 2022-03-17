import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Box, Link } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function HeaderRightMenuMainPage({ setAccount }) {

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    function logout() {
        setAccount('')
        try {
            localStorage.setItem("userdata", JSON.stringify({
                Number: '',
                Username: ''
            }))
        }
        catch (err) {
            console.log(err);;
        }
    }
    return (
        <div>
            <React.Fragment key={'right'}>
                <Button variant='outlined' sx={{
                    fontSize: '13px',
                    height: '30px',
                    padding: '0px 15px',
                    userSelect: 'none',
                    border: 'none',
                    textTransform: 'none',
                    color: '#c5c5c5',
                    '&:hover': {
                        border: 'none',
                        backgroundColor: 'white'
                    }
                }}
                    onClick={toggleDrawer('right', true)} disableRipple>
                    <MenuIcon sx={{ mr: 1 }} />
                    Menu
                </Button>
                <Drawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                // onOpen={toggleDrawer('right', true)}
                >
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={toggleDrawer('right', false)}
                        onKeyDown={toggleDrawer('right', false)}
                    >
                        <List>
                            <ListItem onClick={toggleDrawer('right', false)}>
                                <CloseIcon />
                            </ListItem>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>

                        <Link href="/home-services">
                            <Button onClick={logout}>
                                logout
                            </Button>
                        </Link>
                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    )
}
