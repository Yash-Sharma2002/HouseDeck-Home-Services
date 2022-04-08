import React from 'react'
import { Link } from '@mui/material';
import { useMediaQuery, Box, Button } from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import {
  searchBarOptionsBangalore, searchBarOptionsNoida, searchBarOptionsChennai,
  searchBarOptionsDelhi, searchBarOptionsGN, searchBarOptionsGurgaon, searchBarOptionsPune, searchBarOptionsMumbai,
  searchBarOptionsFaridabad, searchBarOptionsGhaziabad, searchBarOptionsHyderabad, IconHeaderImage
} from '../../constants/data';
import { LoginContext } from '../../context/Context'
import Search from './Search'

const CitySelector = React.lazy(()=>import('../city-selector/CitySelector'))

export default function Top() {
  const { city } = React.useContext(LoginContext)
  const xlMax = useMediaQuery('(max-width:2000px)');
  const xlMin = useMediaQuery('(min-width:900px)');
  const mdMax = useMediaQuery('(max-width:900px)');
  const mdMin = useMediaQuery('(min-width:360px)');
  const sm = useMediaQuery('(max-width:360px)');


  const style1 = {
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '0px 10px',
    alignItems: 'center',
    minWidth: 100,
    backgroundColor: 'white',
    height: '50px!important',
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
          background: '#24C6DC',

        }}>
          <Box sx={{
            padding: '7rem 100px 3rem 100px',
            display: 'flex', justifyContent: 'space-between'
          }}>
            {city === "Bangalore" && <Search options={searchBarOptionsBangalore} width={'500px'} />}
            {city === "Noida" && <Search width={'500px'} options={searchBarOptionsNoida} />}
            {city === "Chennai" && <Search width={'500px'} options={searchBarOptionsChennai} />}
            {city === "Delhi" && <Search width={'500px'} options={searchBarOptionsDelhi} />}
            {city === "Greater Noida" && <Search width={'500px'} options={searchBarOptionsGN} />}
            {city === "Gurgaon" && <Search width={'500px'} options={searchBarOptionsGurgaon} />}
            {city === "Pune" && <Search width={'500px'} options={searchBarOptionsPune} />}
            {city === "Faridabad" && <Search width={'500px'} options={searchBarOptionsFaridabad} />}
            {city === "Ghaziabad" && <Search width={'500px'} options={searchBarOptionsGhaziabad} />}
            {city === "Hyderabad" && <Search width={'500px'} options={searchBarOptionsHyderabad} />}
            {city === "Mumbai" && <Search width={'500px'} options={searchBarOptionsMumbai} />}
            {city === " " && <Search width={'500px'} options={searchBarOptionsBangalore} />}

            <CitySelector style={style1} />
          </Box>
        </div>
      )}
      {!(xlMax && xlMin) && mdMax && mdMin && (
        <div style={{
          background: '#24C6DC',

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


            {city === "Bangalore" && <Search width={'100%'} options={searchBarOptionsBangalore} />}
            {city === "Noida" && <Search width={'100%'} options={searchBarOptionsNoida} />}
            {city === "Chennai" && <Search width={'100%'} options={searchBarOptionsChennai} />}
            {city === "Delhi" && <Search width={'100%'} options={searchBarOptionsDelhi} />}
            {city === "Greater Noida" && <Search width={'100%'} options={searchBarOptionsGN} />}
            {city === "Gurgaon" && <Search width={'100%'} options={searchBarOptionsGurgaon} />}
            {city === "Pune" && <Search width={'100%'} options={searchBarOptionsPune} />}
            {city === "Faridabad" && <Search width={'100%'} options={searchBarOptionsFaridabad} />}
            {city === "Ghaziabad" && <Search width={'100%'} options={searchBarOptionsGhaziabad} />}
            {city === "Hyderabad" && <Search width={'100%'} options={searchBarOptionsHyderabad} />}
            {city === "Mumbai" && <Search width={'100%'} options={searchBarOptionsMumbai} />}
            {city === " " && <Search width={'100%'} options={searchBarOptionsBangalore} />}

          </Box>
        </div>
      )}
      {!(mdMax && mdMin) && sm && (
        <div style={{
          background: '#24C6DC',

        }}>
          <Box sx={{
            padding: '3rem 10px 3rem 10px',
            display: 'block',
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0rem 0px 1rem 0px', alignItems: 'center' }}>
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


            {city === "Bangalore" && <Search width={'100%'} options={searchBarOptionsBangalore} />}
            {city === "Noida" && <Search width={'100%'} options={searchBarOptionsNoida} />}
            {city === "Chennai" && <Search width={'100%'} options={searchBarOptionsChennai} />}
            {city === "Delhi" && <Search width={'100%'} options={searchBarOptionsDelhi} />}
            {city === "Greater Noida" && <Search width={'100%'} options={searchBarOptionsGN} />}
            {city === "Gurgaon" && <Search width={'100%'} options={searchBarOptionsGurgaon} />}
            {city === "Pune" && <Search width={'100%'} options={searchBarOptionsPune} />}
            {city === "Faridabad" && <Search width={'100%'} options={searchBarOptionsFaridabad} />}
            {city === "Ghaziabad" && <Search width={'100%'} options={searchBarOptionsGhaziabad} />}
            {city === "Hyderabad" && <Search width={'100%'} options={searchBarOptionsHyderabad} />}
            {city === "Mumbai" && <Search width={'100%'} options={searchBarOptionsMumbai} />}
            {city === " " && <Search width={'100%'} options={searchBarOptionsBangalore} />}

          </Box>
        </div>)}
    </>
  )

}
