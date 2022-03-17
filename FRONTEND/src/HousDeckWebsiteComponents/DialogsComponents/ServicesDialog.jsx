import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import './OnlyForDialog.css';
import { MiniServices } from '../../constants/data';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        // width: '600px'
    },
}));

export default function ServicesDialog({ open, setOpen }) {

    const fullScreen = useMediaQuery('(max-width:700px)');
    const [price, setPrice] = React.useState(0)

    const handleClose = () => {
        setOpen(false)

    };
    function add(data) {
        if (data) {
            setPrice((prevPrice) => parseFloat(prevPrice) + parseFloat(data))
        }
    }
    return (
        <>
            <BootstrapDialog
                fullScreen={fullScreen}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth={false}
            >
                <Box className='non-scroll' sx={{ height: 'unset', width: '550px', padding: '15px',}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: '700' }}>Select Your Services</Typography>
                        <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
                    </Box>
                    <Box>
                        {MiniServices.map(data =>
                            <>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100px', width: 'inherit' }}>
                                    <Typography>{data.type}</Typography>
                                    <Typography>&#8377;{data.price}</Typography>
                                </Box>
                                <Box sx={{ textAlign: 'end' }}>
                                    <Button variant='outlined' sx={{ marginLeft: 'auto', marginRight: '0px' }} onClick={()=>add(data.price)}>Select</Button>
                                </Box>
                            </>
                        )}
                        <Box sx={{ my:2,display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100px',}}>
                        <Typography>Total</Typography>
                        <Typography>&#8377;{price}</Typography>
                        </Box>
                    </Box>
                </Box>
            </BootstrapDialog>
        </>
    )
}
