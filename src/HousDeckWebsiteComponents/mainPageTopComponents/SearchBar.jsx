import React from 'react'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Select from 'react-select'

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

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
    width: "500px",
    height: '50px!important',
    alignItems: 'center',
  }),
  singleValue:(provided, state) =>({
    ...provided,
    backgroundColor:'yellow'
  })
}
export default function SearchBar({options}) {
  // const options = CityOptions
  return (
    <Select styles={TopStyles} options={options} />
  )
}
