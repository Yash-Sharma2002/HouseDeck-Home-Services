import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import './OnlyForDialog.css';
import { v4 as uuidV4 } from 'uuid'
import { MiniServices } from '../../constants/data';
import { serviceSender } from '../../Api/serviceSender';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        // width: '600px'
    },
}));

export default function ServicesDialog({ open, setOpen }) {

    const fullScreen = useMediaQuery('(max-width:700px)');
    const [price, setPrice] = React.useState(0)
    const [Service, setService] = React.useState([])

    const handleClose = () => {
        setOpen(false)

    };
    function add(service, price) {
        console.log(service, price);
        setPrice((prevPrice) => parseFloat(prevPrice) + parseFloat(price))
        setService(prevItems => {
            return [...prevItems, { id: uuidV4(), ServiceChoseByUser: service, PriceForService: price }]
        })
    }
    function remove(id,price) {
        setService(Service => {
            return Service.filter(data => data.id !== id)
        })
        setPrice((prevPrice) => parseFloat(prevPrice) - parseFloat(price))
    }

    const sendToDatabase = async () => {
        const items = { Service, TotalPrice: price }
        let response = await serviceSender(items)
        if (response) {
            console.log(response);
        } else {
            console.log('error occured while calling api');
        }
    }

    console.log(Service)
    return (
        <>
            <BootstrapDialog
                fullScreen={fullScreen}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth={false}
            >
                <Box className='non-scroll' sx={{ height: 'unset', width: '550px', padding: '15px', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: '700' }}>Select Your Services</Typography>
                        <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
                    </Box>
                    <Box>
                        {MiniServices.map((data) => {
                            const service = data.type
                            const price = data.price
                            return (
                                <>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100px', width: 'inherit' }}>
                                        <Typography>{service}</Typography>
                                        <Typography>&#8377;{price}</Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'end' }}>
                                        <Button variant='outlined' sx={{ marginLeft: 'auto', marginRight: '0px' }} onClick={() => add(service, price)}>Select</Button>
                                    </Box>
                                </>
                            )
                        }
                        )}
                        <Box sx={{ my: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100px', }}>
                            <Typography>Total</Typography>
                            <Typography>&#8377;{price}</Typography>
                        </Box>
                        {Service.map(data =>
                            <>
                                <Box sx={{ my: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography>{data.ServiceChoseByUser}</Typography>
                                    {/* <Typography>{data.PriceForService}</Typography> */}
                                    <CloseIcon onClick={() => remove(data.id,data.PriceForService)} />
                                </Box>
                            </>
                        )}
                    </Box>
                    <Button variant="outlined" onClick={sendToDatabase}>Send To database</Button>
                </Box>
            </BootstrapDialog>
        </>
    )
}
