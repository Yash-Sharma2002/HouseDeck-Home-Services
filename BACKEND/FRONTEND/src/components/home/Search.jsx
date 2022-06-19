import React, { useState } from 'react'
import { Box, Link, Divider, Input } from '@mui/material';
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

    <Box sx={{ width: width, background: 'white', border: '7px solid orange', borderRadius: '30px', overflow: 'hidden' }} >
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
        backgroundColor: 'white',
        width: width==='100%'?'80%':width,
        position: 'absolute',
        zIndex: '1000',
        display: open ? 'grid' : 'none',
        boxShadow: 2,
        mt:2
      }}>
        {SearchBar[currentCity].map(item =>
          <Link key={item.url} href={item.url} sx={{
            padding: '10px',
            textDecoration: 'none',
            color: 'black',
            '&:hover': {
              background: 'orange',
              color: 'white'
            }
          }}>
            {item.value}
          </Link>
        )}
      </Box>



      {filteredData.length !== 0 && (
        <Box sx={{
          width: width==='100%'?'80%':width,
          position: 'absolute',
          backgroundColor: 'white',
          display: 'grid',
          zIndex: '1000',
          mt:2
        }} >
          {filteredData.map(item =>
            <Link key={item.url} href={item.url} sx={{
              padding: '10px',
              textDecoration: 'none',
              color: 'black',
              '&:hover': {
                background: 'orange',
                color: 'white'
              }
            }}>{item.value} </Link>
          )}
        </Box>
      )}

    </Box>
  )
}
