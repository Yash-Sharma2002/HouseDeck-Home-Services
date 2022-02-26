import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

export default function ResponsiveLeftMenuHeaderMainPage({ commonProps }) {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
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
                        <ListItem sx={{justifyContent:'right',marginLeft:0,overflowX:'hiddenImportant'}}  onClick={toggleDrawer('left', false)}>
                                <CloseIcon />
                                </ListItem>
                            {commonProps.map((element) => (
                                <ListItem button key={element.name}>
                                    <Link sx={{textDecoration:'none',color:'black'}} href={element.url}>{element.name}</Link>
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
                </Drawer>
            </React.Fragment>
        </div>
    )
}
