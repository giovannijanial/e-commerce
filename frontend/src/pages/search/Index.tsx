import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useSearchParams } from 'react-router-dom';
import { url } from '../../App';
import { MainContainer } from '../../components/main/main.styled';
import ProductBox from '../../components/productBox/Index';
import { useFetch } from '../../hooks/useFetch';
import { IProduct } from '../../interfaces/Product';
import { SBoxProducts } from '../products/index.styled';

const SearchPage = () => {
  const [result, setResult] = useState<IProduct[]>();
  const [searchParams] = useSearchParams();
  const urlSearch = url + "/product/?" + searchParams;

  const { data, loading, error, httpConfig } = useFetch(urlSearch)

  useEffect(() => {
    setResult(data);
  }, [data])

  function showResults() {
    return result && result.map((product: IProduct) => (
      <ProductBox key={product.id} product={product} data={data} />
    ))
  }

  return (
    <MainContainer>
      <Typography variant='h3'>Results:</Typography>
      <Grid container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        <Grid item xs={9} >

        </Grid>
      </Grid>
    </MainContainer >
  )
}

export default SearchPage