import { Box, IconButton, Input, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }:any) => {
    const [searchTerm, setSearchTerm] = useState('');

  return (
    <OutlinedInput
    startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
    placeholder='ค้นหาชื่อ'
    sx={{fontFamily: 'FC Iconic', borderRadius: '8px', width: '592px', height: '48px'}}
    size='small'
    />
  )
}

export default SearchBar