import React from 'react'
import { Box, Typography } from '@mui/material'
import { ServiceWithImage } from '../../constants/data'

export default function ServicesListed() {
    return (
        <div>
            <Box sx={{ display: 'flex',WebkitBoxPack:"justify", justifyContent: 'space-between', flexWrap: 'wrap', backgroundColor: '#f7f7f7', padding: '30px 50px', alignItems: "center" }}>
                {ServiceWithImage.map(data =>
                    <Box sx={{ textAlign: 'center', padding: '5px', cursor: 'pointer',flexDirection:'column' }}>
                        <Typography sx={{
                            textAlign: 'center',
                            fontSize: '12px',
                            border: '1px solid #ba7a16',
                            backgroundColor: '#fff1d6',
                            color: '#ba7a16',
                            padding: '2px 8px',
                            borderRadius: '20px', 
                            width:'fit-content',
                            margin:'auto'
                        }}>{data.offer}</Typography>
                        <img style={{ width: '4rem', borderRadius: '10px',padding:'4px' }} src={data.src} alt={data.id} />
                        <Typography sx={{ fontSize: '16px' }}>{data.id}</Typography>
                    </Box>
                )}
            </Box>
        </div>
    )
}
