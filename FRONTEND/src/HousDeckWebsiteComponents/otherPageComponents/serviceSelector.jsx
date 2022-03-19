import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ServicesDialog from '../DialogsComponents/ServicesDialog';
import { CleaningServicesData } from '../../constants/data';

export default function ServiceSelector({ width }) {
    const [open, setOpen] = React.useState(false)
    const [options, setOptions] = React.useState([])

    const handleClickOpen = (services) => {
        setOpen(true);
        setOptions(services)
    };
    return (
        <div style={{ padding: '10px 20px' }}>
            <Box sx={{ width: width, background: 'white', height: 'auto', borderRadius: 3, padding: '0px 24px', }}>
                <Typography sx={{ mt: 2, padding: '20px 0 8px', fontSize: '18px', fontWeight: '600', color: '#464646' }}>Select Your Service</Typography>

                {
                    CleaningServicesData.map(data =>
                        <>
                            <Box key={data.options} sx={{ padding: '15px 0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={()=>handleClickOpen(data.options)}>
                                <Typography sx={{ fontSize: '16px', color: '#464646' }}>{data.type}</Typography>
                                <ArrowForwardIosIcon sx={{ fontSize: '16px', color: '#464646' }} />
                            </Box>
                            <Divider />
                        </>
                    )

                }
            </Box>
            <ServicesDialog options={options} open={open} setOpen={setOpen} />
        </div>
    )
}
