import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ServicesDialog from '../DialogsComponents/ServicesDialog';
import { CleaningServicesData } from '../../constants/data';
import DialogWithoutLoginDisplay from '../DialogsComponents/DialogWithoutLoginDisplay';

export default function ServiceSelector({ width }) {
    const [openForService, setOpenForService] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const [options, setOptions] = React.useState([])
    const isLogin = forCheckingLogin()
    const handleClickOpen = (services) => {
        setOpenForService(true);
        setOptions(services)
    };
    function handleClick(){
        setOpen(true)
    }

    function forCheckingLogin() {

        try {
            const boolReturner = localStorage.getItem('isLogin')
            if (boolReturner === 'true') return true
            if (boolReturner === 'false') return false
        }
        catch (err) {
            localStorage.setItem('isLogin', JSON.stringify(false));
            return false;
        }
    }
    return (
        <div style={{ padding: '10px 20px' }}>
            <Box sx={{ width: width, background: 'white', height: 'auto', borderRadius: 3, padding: '0px 24px', }}>
                <Typography sx={{ mt: 2, padding: '20px 0 8px', fontSize: '18px', fontWeight: '600', color: '#464646' }}>Select Your Service</Typography>

                {
                    isLogin ?

                        CleaningServicesData.map(data =>
                            <>
                                <Box key={data.options} sx={{ padding: '15px 0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleClickOpen(data.options)}>
                                    <Typography sx={{ fontSize: '16px', color: '#464646' }}>{data.type}</Typography>
                                    <ArrowForwardIosIcon sx={{ fontSize: '16px', color: '#464646' }} />
                                </Box>
                                <Divider />
                            </>
                        )
                        :
                        CleaningServicesData.map(data =>
                            <>
                                <Box key={data.options} sx={{ padding: '15px 0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={handleClick}>
                                    <Typography sx={{ fontSize: '16px', color: '#464646' }}>{data.type}</Typography>
                                    <ArrowForwardIosIcon sx={{ fontSize: '16px', color: '#464646' }} />
                                </Box>
                                <Divider />
                            </>
                        )

                }
            </Box>
            <DialogWithoutLoginDisplay open={open} setOpen={setOpen} />
            <ServicesDialog options={options} open={openForService} setOpen={setOpenForService} />
        </div>
    )
}
