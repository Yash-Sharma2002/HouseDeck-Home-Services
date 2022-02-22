import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function HeaderRightMenuMainPage() {

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

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
                <SwipeableDrawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    onOpen={toggleDrawer('right', true)}
                >
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={toggleDrawer('right', false)}
                        onKeyDown={toggleDrawer('right', false)}
                    >
                        <List>
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
                    </Box>
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    )
}
