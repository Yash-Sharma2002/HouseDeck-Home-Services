import React from 'react'
import { Box, Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material'


function Content({ ServiceWithImage, width }) {
    return (
        <div>
            <Box sx={{ display: 'flex', WebkitBoxPack: "justify", justifyContent: 'space-between', flexWrap: 'wrap', backgroundColor: '#f7f7f7', padding: '30px 50px', alignItems: "center" }}>
                {ServiceWithImage.map((data) => {
                    const disabled = `${data.tag}`
                    const offer = `${data.offer}`
                    return (
                        <Box sx={{ textAlign: 'center', padding: '5px', cursor: 'pointer', flexDirection: 'column', width: width, opacity: disabled }}>
                            {offer === '' ? null :
                                <Typography sx={{
                                    textAlign: 'center',
                                    fontSize: '12px',
                                    border: '1px solid #ba7a16',
                                    backgroundColor: '#fff1d6',
                                    color: '#ba7a16',
                                    padding: '2px 8px',
                                    borderRadius: '20px',
                                    width: 'fit-content',
                                    margin: 'auto',
                                }}>{data.offer}</Typography>}
                            <img style={{ width: '4rem', borderRadius: '10px', padding: '4px' }} src={data.src} alt={data.id} />
                            <Typography sx={{ fontSize: '16px' }}>{data.id}</Typography>
                        </Box>
                    )
                })}
            </Box>
        </div>
    )
}
function SmContent({ ServiceWithImage,width }) {
    return (
        <div>
            <Box sx={{ display: 'flex', WebkitBoxPack: "justify", justifyContent: 'inherit', flexWrap: 'wrap', backgroundColor: '#f7f7f7', padding: '30px 0px', alignItems: "center" }}>
                {ServiceWithImage.map((data) => {
                    const disabled = `${data.tag}`
                    const offer = `${data.offer}`
                    return (
                        <>
                            <Box sx={{ textAlign: 'center', mt: 1, padding: '5px', cursor: 'pointer', flexDirection: 'column', width: width, opacity: disabled }}>
                                {offer === '' ? null :
                                    <Typography sx={{
                                        textAlign: 'center',
                                        fontSize: '12px',
                                        border: '1px solid #ba7a16',
                                        backgroundColor: '#fff1d6',
                                        color: '#ba7a16',
                                        padding: '2px 8px',
                                        borderRadius: '20px',
                                        width: 'fit-content',
                                        margin: 'auto',
                                    }}>{data.offer}</Typography>}
                                <img style={{ width: '4rem', borderRadius: '10px', padding: '4px' }} src={data.src} alt={data.id} />
                                <Typography sx={{ fontSize: '16px' }}>{data.id}</Typography>
                            </Box>

                        </>
                    )
                })}
            </Box>
        </div>
    )
}


export default function ServicesListed({ ServiceWithImage }) {

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1000px)');
    const mdMax = useMediaQuery('(max-width:1000px)');
    const mdMin = useMediaQuery('(min-width:770px)');
    const sm = useMediaQuery('(max-width:770px)');
    return (
        <>
            {xlMax && xlMin && (
                <Content width={'unset'} ServiceWithImage={ServiceWithImage} />

            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <Content width={'20%'} ServiceWithImage={ServiceWithImage} />
            )}
            {sm &&(
            <SmContent width={'31%'} ServiceWithImage={ServiceWithImage} />
            )}
        </>
    )
}
