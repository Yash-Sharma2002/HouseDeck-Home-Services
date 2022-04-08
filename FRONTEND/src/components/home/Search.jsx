import React, { useState } from 'react'
import { Box, Link, Divider, Input } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export default function Search({ options, width }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [open, setOpen] = useState(false);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = options.filter((item) => {
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

    <Box sx={{ width: width, background: 'white',boxShadow:2 }} >
      <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '4px', justifyContent: 'space-evenly', height: '50px!important' }} >
        <Input
          placeholder="Search..."
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
        width:width,
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: '1000',
        display: open ? 'grid' : 'none',
        boxShadow: 2
      }}>
        {options.map(item =>
          <Link key={item.url} href={item.url} sx={{
            padding: '10px',
            textDecoration: 'none',
            color: 'black',
            '&:hover': {
              background: '#24C6DC',
            }
          }}>
            {item.value}
          </Link>
        )}
      </Box>



      {filteredData.length !== 0 && (
        <Box sx={{
          width: width,
          position: 'absolute',
          backgroundColor: 'white',
          display: 'grid',
          zIndex: '1000',
        }} >
          {filteredData.map(item =>
            <Link key={item.url} href={item.url} sx={{
              padding: '10px',
              textDecoration: 'none',
              color: 'black',
              '&:hover': {
                background: '#24C6DC',
              }
            }}>{item.value} </Link>
          )}
        </Box>
      )}


    </Box>
  )
}
