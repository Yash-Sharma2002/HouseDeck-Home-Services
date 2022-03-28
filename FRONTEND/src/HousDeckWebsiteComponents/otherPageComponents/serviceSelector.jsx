import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ServicesDialog from '../DialogsComponents/ServicesDialog';
import { CleaningServicesData } from '../../constants/data';
import DialogWithoutLoginDisplay from '../DialogsComponents/DialogWithoutLoginDisplay';

export default function ServiceSelector({ width }) {
    const [openForService, setOpenForService] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const [options, setOptions] = React.useState({
        imgUrl: '',
        innerData: [{ type: '', price: '' }],
        quotes: [{ text: '' }]
    })
    const isLogin = forCheckingLogin()

    const handleClickOpen = (services) => {
        // if (isLogin) {
            setOpenForService(!open);
            setOptions(services)
        // } else {
        //     setOpen(!open)
        // }
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
            <Box sx={{ width: width, background: 'white', borderRadius: 3, padding: '0px 24px', }}>
                <Typography sx={{ mt: 2, padding: '20px 0 8px', fontSize: '18px', fontWeight: '600', color: '#464646' }}>Select Your Service</Typography>

                {
                    CleaningServicesData.map(data =>
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
            <DialogWithoutLoginDisplay open={open} setOpen={setOpen} />
            <ServicesDialog options={options} open={openForService} setOpen={setOpenForService} />
        </div>
    )
}
