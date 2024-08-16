import {
  Autocomplete,
  TextField
} from '@mui/material'
import React from 'react'

interface IDropdown {
  options: string[]
  label: string
}

const Dropdown: React.FC<IDropdown> = ({ options, label }) => {
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