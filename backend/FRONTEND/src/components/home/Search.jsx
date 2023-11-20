import React, { useState } from 'react'
import { Box, Link, Divider, Input, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { LoginContext } from '../../context/Context';
import { SearchBar } from '../../constants/data';

export default function Search({ width }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [open, setOpen] = useState(false);
  const { city } = React.useContext(LoginContext)
  const currentCity = city.replace(/ /g, '_').toLowerCase()

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = SearchBar[currentCity].filter((item) => {
      return item.value.toLowerCase().includes(searchWord.toLowerCase())
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const handleClick = () => {
    setOpen(!open)
    setWordEntered('')
    setFilteredData([]);
  }
  return (


    <Box sx={{ width: width, background: 'white', border: '7px solid #ffd416', borderRadius: '30px', overflow: 'hidden' }} >
      <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '4px', justifyContent: 'space-evenly', height: '50px!important' }} >
        <Input
          placeholder="Select Home Service..."
          value={wordEntered}
          onClick={() => setOpen(false)}
          onChange={handleFilter}
          variant='standard'
          sx={{
            border: 'none!important',
            userSelect: 'none',
            width: '90%',
            paddingLeft: '10px',
            '&::before': {
              border: 'none',
              content: '""',
              position: 'relative'
            },
            '&::after': {
              border: 'none'
            },
          }}
        />
        <Divider orientation='vertical' sx={{ color: '#c5c5c5' }} flexItem />
        {
          open ? <ExpandLess sx={{ textAlign: 'center', cursor: 'pointer' }} onClick={handleClick} />
            : <ExpandMore sx={{ textAlign: 'center', cursor: 'pointer' }} onClick={handleClick} />
        }

      </Box>
      <Box sx={{
        backgroundColor: 'white',
        width: width === '100%' ? '80%' : width,
        position: 'absolute',
        zIndex: '1000',
        display: open ? 'grid' : 'none',
        boxShadow: 2,
        mt: 2
      }}>
        {
          SearchBar[currentCity].length > 0 ?
            <>
              {SearchBar[currentCity].map((item, idx) =>
                <Link key={idx} href={item.url} sx={{
                  padding: '10px',
                  textDecoration: 'none',
                  color: 'black',
                  '&:hover': {
                    background: '#ffd416',
                    color: 'black'
                  }
                }}>
                  {item.value}
                </Link>
              )
              }
            </>
            :
            <Typography sx={{
              padding: '10px',
              textDecoration: 'none',
              color: 'black',
              '&:hover': {
                background: 'orange',
                color: 'white'
              }
            }}>
              No Service Available
            </Typography>
        }
      </Box>



      {/* */}
      <Box sx={{
        width: width === '100%' ? '80%' : width,
        position: 'absolute',
        backgroundColor: 'white',
        display: 'grid',
        zIndex: '1000',
        boxShadow: 2,
        mt: 2,
      }} >
        {
          filteredData.length === 0 && wordEntered.length > 0 && (
            <Typography sx={{
              padding: '10px',
              textDecoration: 'none',
              color: 'black',
              '&:hover': {
                background: 'orange',
                color: 'white'
              }
            }}>
              No Service Available
            </Typography>
          )
        }
        {filteredData.length !== 0 && (
            filteredData.map((item, idx) =>
              <Link key={idx} href={item.url} sx={{
                padding: '10px',
                textDecoration: 'none',
                color: 'black',
                '&:hover': {
                  background: 'orange',
                  color: 'white'
                }
              }}>{item.value} </Link>
            )
          )}
      </Box>



    </Box>
  )
}
