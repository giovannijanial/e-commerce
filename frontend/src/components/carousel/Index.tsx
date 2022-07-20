import { ProductionQuantityLimitsSharp } from '@mui/icons-material';
import React, { useEffect } from 'react'
import { useProduct } from '../../hooks/useProduct';
import Swiper from './Swiper';

const Carousel = () => {

  const { getAll, products, loading, error } = useProduct();

  useEffect(() => {
    getAll(1)
  }, [getAll])

  return (
    <>
      {products && (<Swiper products={products} />)}

    </>
  )
}

export default Carousel