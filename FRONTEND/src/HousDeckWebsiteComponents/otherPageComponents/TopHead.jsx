import React from 'react'
import SearchNSelectForOtherPages from './SearchNSelectForOtherPages'
import { Box, Typography, useMediaQuery } from '@mui/material'
import ServiceSelector from '../otherPageComponents/serviceSelector'
import OtherPagesTopCarousel from './OtherPagesTopCarousel'

const TopHead = ({ service, handleData, currentCity, setCity }) => {
    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1200px)');
    const mdMax = useMediaQuery('(max-width:1200px)');
    const mdMin = useMediaQuery('(min-width:800px)');
    const sm = useMediaQuery('(max-width:800px)');

    const style1 = {
        display: 'flex',
        justifyContent: 'space-between',
        cursor: 'pointer',
        padding: '0px 10px',
        alignItems: 'center',
        minWidth: 100,
        height: '50px!important',
        color: 'black'
    }

    return (
        <>
            {xlMax && xlMin && (
                <div style={{
                    padding: '100px',
                      background: '#24C6DC'
                }}>
                    <SearchNSelectForOtherPages style={style1} city={currentCity} setCity={setCity} handleData={handleData} />
                    <Box sx={{ ml: 2 }}>
                        <Typography sx={{ fontSize: '30px', fontWeight: '900', color: '#1b685f' }}>Best {service} Services in {currentCity}</Typography>
                        <Typography sx={{ fontSize: '16px', color: '#1b685f' }}>Get lowest prices for {service.toLowerCase()} services in {currentCity}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                        <ServiceSelector width={'480px'} />
                        <div style={{ width: '45%' }}>
                            <OtherPagesTopCarousel />
                        </div>
                    </Box>

                </div>
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <div style={{
                    padding: '50px 30px',
                      background: '#24C6DC' 
                }}>
                    <SearchNSelectForOtherPages style={style1} city={currentCity} setCity={setCity} handleData={handleData} />
                    <Box sx={{ ml: 2 }}>
                        <Typography sx={{ fontSize: '30px', fontWeight: '900', color: '#1b685f' }}>Best {service} Services in {currentCity}</Typography>
                        <Typography sx={{ fontSize: '16px', color: '#1b685f' }}>Get lowest prices for {service.toLowerCase()} services in {currentCity}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <ServiceSelector width={'110%'} />
                        <div style={{ width: '45%' }}>
                            <OtherPagesTopCarousel />
                        </div>
                    </Box>
                </div>
            )}
            {!(mdMax && mdMin) && sm && (
                <div style={{
                    padding: '20px 10px',
                    background: '#24C6DC'
                }}>
                    <SearchNSelectForOtherPages style={style1} city={currentCity} setCity={setCity} handleData={handleData} />
                    <Box sx={{ ml: 2 }}>
                        <Typography sx={{ fontSize: '30px', fontWeight: '900', color: '#1b685f' }}>Best {service} Services in {currentCity}</Typography>
                        <Typography sx={{ fontSize: '16px', color: '#1b685f' }}>Get lowest prices for {service.toLowerCase()} services in {currentCity}</Typography>
                    </Box>
                    <Box sx={{ display: 'block' }}>
                        <ServiceSelector width={'unset'} />
                        <div style={{ padding: '20px' }}>
                            <OtherPagesTopCarousel />
                        </div>
                    </Box>
                </div>
            )}
        </>

    )

}


export default TopHead