import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ServicesDialog from '../DialogsComponents/ServicesDialog';

export default function ServiceSelector({width}) {
    const [open,setOpen]= React.useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <div style={{ padding: '10px 20px' }}>
            <Box sx={{ width: width, background: 'white', height: 'auto', borderRadius: 3,padding:'0px 24px', }}>
                <Typography sx={{ mt:2,padding: '20px 0 8px', fontSize: '18px', fontWeight: '600',color:'#464646' }}>Select Your Service</Typography>
                <Box sx={{ padding:'15px 0px',display: 'flex', justifyContent: 'space-between', alignItems: 'center',cursor:'pointer' }} onClick={handleClickOpen}>
                    <Typography sx={{  fontSize: '16px' ,color:'#464646'}}>Essential Home Cleaning</Typography>
                    <ArrowForwardIosIcon sx={{ fontSize: '16px',color:'#464646' }} />
                </Box>
                <Divider />
                <Box sx={{ padding:'15px 0px',display: 'flex', justifyContent: 'space-between', alignItems: 'center',cursor:'pointer' }} onClick={handleClickOpen}>
                    <Typography sx={{  fontSize: '16px',color:'#464646' }}>Full Home Cleaning</Typography>
                    <ArrowForwardIosIcon sx={{ fontSize: '16px',color:'#464646' }} />
                </Box>
                <Divider />
                <Box sx={{ padding:'15px 0px',display: 'flex', justifyContent: 'space-between', alignItems: 'center',cursor:'pointer' }} onClick={handleClickOpen}>
                    <Typography sx={{  fontSize: '16px',color:'#464646' }}>Cleaning</Typography>
                    <ArrowForwardIosIcon sx={{ fontSize: '16px' ,color:'#464646'}} />
                </Box>
                <Divider />
                <Box sx={{ padding:'15px 0px',display: 'flex', justifyContent: 'space-between', alignItems: 'center',cursor:'pointer' }} onClick={handleClickOpen}>
                    <Typography sx={{  fontSize: '16px',color:'#464646' }}>Mini Services</Typography>
                    <ArrowForwardIosIcon sx={{ fontSize: '16px' ,color:'#464646'}} />
                </Box>
            </Box>
            <ServicesDialog open={open} setOpen={setOpen} />
        </div>
    )
}
