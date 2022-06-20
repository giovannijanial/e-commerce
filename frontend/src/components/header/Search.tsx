import { IconButton } from '@mui/material'
import { StyleTextField } from './search.styled'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
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
  )
}

export default Search