import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton } from '@mui/material';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyleTextField } from './search.styled';

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState<String>("");

  console.log(query)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("search?q=" + query)
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "90%" }}>
      <StyleTextField
        id="input-with-icon-textfield"
        placeholder='Procurar produtos...'
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton type='submit'>
              <SearchIcon />
            </IconButton>
          )
        }}
      />
    </Box>
  )
}

export default Search