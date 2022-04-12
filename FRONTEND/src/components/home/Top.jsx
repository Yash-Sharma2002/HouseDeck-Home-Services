import React from 'react'
import { Link } from '@mui/material';
import { useMediaQuery, Box, Button } from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { IconHeaderImage } from '../../constants/data';
import Search from './Search'

const CitySelector = React.lazy(() => import('../city-selector/CitySelector'))

export default function Top() {
  const xlMax = useMediaQuery('(max-width:2000px)');
  const xlMin = useMediaQuery('(min-width:900px)');
  const mdMax = useMediaQuery('(max-width:900px)');
  const mdMin = useMediaQuery('(min-width:360px)');
  const sm = useMediaQuery('(max-width:360px)');


  const style1 = {
    display: 'flex',
    justifyContent: 'space-around',
    cursor: 'pointer',
    padding: '0px 10px',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '50px!important',
    minWidth: '150px',
    border: '7px solid orange',
    textAlign: 'center',
    borderRadius: '30px'
  }


  const style2 = {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding: '0px 10px',
    alignItems: 'center',
    minWidth: 100,
    height: '50px!important',
    color: "black",
  }
  return (


    <>
      {xlMax && xlMin && (
        <div style={{
          // background: '#24C6DC',

        }}>
          <Box sx={{
            padding: '7rem 100px 3rem 100px',
            display: 'flex', justifyContent: 'space-between'
          }}>
            <Box sx={{ boxShadow: 2 }}>
              <Search width={'500px'} />
            </Box>
            <Box sx={{ boxShadow: 2 }}>
              <CitySelector style={style1} />
            </Box>
          </Box>
        </div>
      )}
      {!(xlMax && xlMin) && mdMax && mdMin && (
        <div style={{
          // background: '#24C6DC',

        }}>
          <Box sx={{
            padding: '4rem 50px 3rem 50px',
            display: 'block',
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0rem 0px 1rem 0px', alignItems: 'center' }}>
              <CitySelector style={style2} />
              <Box>

                <Link href="tel:18003096606" target="_blank" sx={{
                  textDecoration: 'none'
                }}>
                  <Button variant='outlined' sx={{
                    borderColor: 'black',
                    fontSize: '13px',
                    color: 'black',
                    height: '30px',
                    borderRadius: '20px',
                    userSelect: 'none',
                    '&:hover': {
                      backgroundColor: 'unset'
                    }
                  }} disableRipple>
                    <AddIcCallIcon style={IconHeaderImage} />
                    18003096606
                  </Button></Link>
              </Box>
            </Box>
            <Search width={'100%'} />
          </Box>
        </div>
      )}
      {!(mdMax && mdMin) && sm && (
        <div style={{
          // background: '#24C6DC',

        }}>
          <Box sx={{
            padding: '3rem 10px 3rem 10px',
            display: 'block',
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0rem 0px 1rem 0px', alignItems: 'center', }}>
              <CitySelector style={style2} />
              <Box>

                <Link href="tel:18003096606" target="_blank" sx={{
                  textDecoration: 'none'
                }}>
                  <Button variant='outlined' sx={{
                    marginLeft: 1,
                    borderColor: 'black',
                    fontSize: '13px',
                    color: 'black',
                    height: '30px',
                    borderRadius: '20px',
                    userSelect: 'none',
                    '&:hover': {
                      backgroundColor: 'unset'
                    }
                  }} disableRipple>
                    <AddIcCallIcon style={IconHeaderImage} />
                    18003096606
                  </Button></Link>

              </Box>
            </Box>
            <Search width={'100%'} />
          </Box>
        </div>)}
    </>
  )

}
