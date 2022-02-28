import React from 'react'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Select from 'react-select'
import { useMediaQuery } from '@mui/material';
export default function SearchBar({options,width}) {
  
const TopStyles = {
  container: (provided, state) => ({
    ...provided,
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: '16px',
    color: "#8a8a8a",
    border: '0px',
    height:'max-content',
    '&:hover':{ 
      backgroundColor: "rgb(204, 204, 204)" 
    }
  }),
  control: () => ({
    cursor: 'text',
    borderRadius: '2px',
    display: 'flex',
    backgroundColor: '#fff',
    width: width,
    height: '50px!important',
    alignItems: 'center',
  }),
  singleValue:(provided, state) =>({
    ...provided,
    backgroundColor:'yellow'
  })
}
  return (

    <Select styles={TopStyles} options={options} />
  )
}
