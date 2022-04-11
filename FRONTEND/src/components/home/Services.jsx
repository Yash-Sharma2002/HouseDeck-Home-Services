import React from 'react'
import { Box, Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { ServiceWithImage } from '../../constants/data'
import { LoginContext } from '../../context/Context'

function Content({ width }) {
    const { city } = React.useContext(LoginContext)
    const currentCity = city.replace(/ /g, '_').toLowerCase()
    return (
        <div>
            <Box sx={{ display: 'flex', WebkitBoxPack: "justify", justifyContent: 'space-between', flexWrap: 'wrap', backgroundColor: '#f7f7f7', padding: '30px 50px', alignItems: "center" }}>

                {ServiceWithImage[currentCity].map((data) => {
                    const notDisabled = data.tag
                    return (
                        <a href={data.takeToPath} style={{
                            textDecoration: 'none',
                            color: 'black',
                            pointerEvents: notDisabled ? 'auto' : 'none',
                            textAlign: 'center',
                            padding: '5px',
                            flexDirection: 'column',
                            width: width,
                            opacity: notDisabled ? '1' : '0.6',
                            cursor: data.tag ? 'pointer' : 'no-drop',
                        }}>
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
                            }}>{data.offer}</Typography>
                            <img style={{ width: '4rem', borderRadius: '10px', padding: '4px' }} src={data.src} alt={data.id} />
                            <Typography sx={{ fontSize: '16px' }}>{data.id}</Typography>
                        </a>
                    )
                })}
            </Box>
        </div >
    )
}
function SmContent({ width }) {
    const { city } = React.useContext(LoginContext)
    const currentCity = city.replace(/ /g, '_').toLowerCase()
    return (
        <div>
            <Box sx={{ display: 'flex', WebkitBoxPack: "justify", justifyContent: 'inherit', flexWrap: 'wrap', backgroundColor: '#f7f7f7', padding: '30px 0px', alignItems: "center", margin: '0px auto' }}>
                {ServiceWithImage[currentCity].map((data) => {
                    const notDisabled = data.tag
                    const offer = `${data.offer}`
                    return (
                        <>
                            <a href={data.takeToPath} style={{
                                textDecoration: 'none',
                                color: 'black',
                                pointerEvents: notDisabled ? 'auto' : 'none',
                                textAlign: 'center',
                                mt: 1,
                                padding: '5px',
                                cursor: 'pointer',
                                flexDirection: 'column',
                                width: width,
                                opacity: notDisabled ? '1' : '0.6',
                            }}>
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
                            </a>
                        </>
                    )
                })}
            </Box>
        </div>
    )
}



function VsmContent({ width }) {
    const { city } = React.useContext(LoginContext)
    const currentCity = city.replace(/ /g, '_').toLowerCase()
    return (
        <div>
            <Box sx={{ display: 'flex', WebkitBoxPack: "justify", justifyContent: 'space-evenly', flexWrap: 'wrap', backgroundColor: '#f7f7f7', padding: '30px 0px', alignItems: "center", }}>
                {ServiceWithImage[currentCity].map((data) => {
                    const notDisabled = data.tag
                    const offer = `${data.offer}`
                    return (
                        <>
                            <a href={data.takeToPath} style={{
                                textDecoration: 'none',
                                color: 'black',
                                pointerEvents: notDisabled ? 'auto' : 'none',
                                textAlign: 'center',
                                mt: 1,
                                padding: '5px',
                                cursor: 'pointer',
                                flexDirection: 'column',
                                width: width,
                                opacity: notDisabled ? '1' : '0.6',
                            }}>
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
                            </a>
                        </>
                    )
                })}
            </Box>
        </div>
    )
}



export default function Services() {

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1000px)');
    const mdMax = useMediaQuery('(max-width:1000px)');
    const mdMin = useMediaQuery('(min-width:770px)');
    const smMax = useMediaQuery('(max-width:770px)');
    const smMin = useMediaQuery('(min-width:429px)');
    const vsm = useMediaQuery('(max-width:429px)');
    return (
        <>
            {xlMax && xlMin && (
                <Content width={'unset'} />

            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <Content width={'20%'} />
            )}
            {smMax && smMin && (
                <SmContent width={'31%'} />
            )}
            {!(smMax && smMin) && vsm && (
                <VsmContent width={'31%'} />
            )}
        </>
    )
}
