import React, { useState } from 'react'
import { Box, Link, Divider, Input } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export default function SearchBar({ options, width }) {
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
    <Box sx={{ width: width, background: 'white', }} >
      <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '4px', justifyContent: 'space-evenly', border: '1px solid black', height: '50px!important' }} >
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
          open ? <ExpandLess sx={{ textAlign: 'center' }} onClick={handleClick} />
            : <ExpandMore sx={{ textAlign: 'center' }} onClick={handleClick} />
        }

      </Box>
      <Box sx={{
        width: width,
        height: 'auto',
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: '1000',
        display: open ? 'grid' : 'none',
      }}>
        {options.map(item =>
          <Link href={item.url} sx={{
            padding: '10px',
            textDecoration: 'none',
            color: 'black',
            '&:hover': {
              background: '#f7f7f7'
            }
          }}>
            {item.value}
          </Link>
        )}
      </Box>

      {filteredData.length !== 0 && (
        <Box sx={{
          width: width,
          height: 'auto',
          position: 'absolute',
          backgroundColor: 'white',
          display: 'grid',
          zIndex: '1000',
        }} >
          {filteredData.map(item =>
            <Link href={item.url} sx={{
              padding: '10px',
              textDecoration: 'none',
              color: 'black',
              '&:hover': {
                background: '#f7f7f7'
              }
            }}>{item.value} </Link>
          )}
        </Box>
      )}
    </Box>
  )
}
