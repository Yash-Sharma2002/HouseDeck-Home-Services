import React from 'react'
import { Box, Typography } from '@mui/material'
import { ServiceWithImage } from '../../constants/data'

export default function ServicesListed() {
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', backgroundColor: '#f7f7f7', padding: '30px 50px' }}>
                {ServiceWithImage.map(data =>
                    <Box sx={{textAlign:'center',padding:'5px',cursor:'pointer'}}>
                        <Typography sx={{textAlign:'center',
                        fontSize:'12px',
                         border: '1px solid #ba7a16' ,
                          backgroundColor: '#fff1d6',
                           color: '#ba7a16',
                            padding: '2px 8px',
                            //  minHeight: '20px',
                              borderRadius: '20px'
                               }}>{data.offer}</Typography>
                        <img style={{width:'38px',height:'38px'}} src={data.src} alt={data.id} />
                        <Typography sx={{fontSize:'16px'}}>{data.id}</Typography>
                    </Box>
                )}
            </Box>
        </div>
    )
}
