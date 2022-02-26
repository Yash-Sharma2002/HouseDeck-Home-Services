import React from 'react'
import SearchBar from './SearchBar'
import { Box } from '@mui/material'
import SearchNSelect from './SearchNSelect'

export default function TopFirsrtBar() {
  return (
    <div style={{
        background:'#803c6d',
    width:'100%'}}>
        <Box sx={{padding:'6rem 100px 3rem 100px',
    display:'flex',justifyContent:'space-between'}}>

        <SearchBar />
        <SearchNSelect />
        </Box>
    </div>
  )
}
