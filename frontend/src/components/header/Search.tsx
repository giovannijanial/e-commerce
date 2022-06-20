import { Button, FormControl, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { StyleSearchBox, StyleTextField } from './search.styled'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <StyleSearchBox>

      <StyleTextField
        id="input-with-icon-textfield"
        placeholder='Procurar produtos...'
        InputProps={{
          endAdornment: (
            <IconButton type='submit'>
              <SearchIcon />
            </IconButton>
          )
        }}
      />

    </StyleSearchBox>
  )
}

export default Search