import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Box, Link, Typography } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DrawerData } from '../../constants/data'

export default function Menubar() {
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
                <Drawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
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
                            Email - <a href="mailto:hello@Vapormop.in">hello@Vapormop.in</a>
                        </Typography>
                    </Box>
                </Drawer>
            </React.Fragment>
        </div >
    )
}
