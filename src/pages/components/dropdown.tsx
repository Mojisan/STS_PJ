import { Label } from '@mui/icons-material'
import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

const Dropdown = ({ options, label }:any) => {
  return (
    <Autocomplete
    classes={{ root: 'MuiAutocomplete-root' }}
    options={options}
    size='small'
    style={{ width: "100%", fontFamily: "FC Iconic" }}
    renderInput={(params) => <TextField {...params} label={label} />}
    />
  )
}

export default Dropdown