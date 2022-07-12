import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ServiceSelector from '../dialogs/ServiceSelector';
import {  ServiceDialogData } from '../../constants/data';
import Login from '../dialogs/Login';

export default function ServicesProvider({ service,width }) {
    const [openForService, setOpenForService] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const newService = service.replace(/ /g, '_').toLowerCase()
    const [options, setOptions] = React.useState({
        imgUrl: '',
        innerData: [{ type: '', price: '' }],
        quotes: [{ text: '' }]
    })
    const handleClickOpen = (services) => {
            setOpenForService(!open);
            setOptions(services)
        
    }

    return (
        <div style={{ padding: '10px 20px'}}>
            <Box sx={{ width: width, background: 'white', borderRadius: 3, padding: '0px 24px', boxShadow:2,border:'5px solid orange' }}>
                <Typography sx={{ mt: 2, padding: '20px 0 8px', fontSize: '18px', fontWeight: '600', color: '#464646' }}>Select Your Service</Typography>

                {
                    ServiceDialogData[newService].map(data =>
                        <>
                            <Box key={data.options} sx={{ padding: '15px 0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleClickOpen(data.options)}>
                                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
                                    <Box sx={{ background: `url(${data.imgUrl})`, width: '40px', height: '40px', borderRadius: '100%', backgroundPosition: '50%', backgroundRepeat: 'no-repeat', backgroundSize: 'auto 100%' }}></Box>
                                    <Typography sx={{ fontSize: '16px', color: '#464646',ml:1 }}>{data.type}</Typography>
                                </Box>
                                <ArrowForwardIosIcon sx={{ fontSize: '16px', color: '#464646' }} />
                            </Box>
                            <Divider />
                        </>
                    )
                }
            </Box>
            <Login open={open} setOpen={setOpen} />
            <ServiceSelector options={options} category={newService} data={ServiceDialogData[newService]} setOptions={setOptions} open={openForService} setOpen={setOpenForService} />
        </div>
    )
}
