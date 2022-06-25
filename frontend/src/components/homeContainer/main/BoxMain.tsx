import { useEffect, useState } from 'react'
import { IHttpConfig } from '../../../interfaces/HttpConfig'
import { IProduct } from '../../../interfaces/Product'
import ProductBox from '../../productBox/Index'
import { StyledBoxMid } from './boxMain.styled'

const BoxMain = ({ httpConfig, data, loading, error, locale }:
  { httpConfig: IHttpConfig, data: any, loading: Boolean, error: any, locale: String }) => {

  const [products, setProducts] = useState<IProduct[] | any>(null);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data])

  function showProductsLeft() {
    return products && products.slice(0, 2).map((product: IProduct) => (
      <ProductBox key={product.id} product={product} data={data} />
    ))
  }
  function showProductsRight() {
    return products && products.slice(3, 6).map((product: IProduct) => (
      <ProductBox key={product.id} product={product} data={data} />
    ))
  }

  return (
    <StyledBoxMid>
      {loading && (<p>Loading...</p>)}
      {error && (<p>{error.message}</p>)}
      {(locale === "left") ? showProductsLeft() : showProductsRight()}
    </StyledBoxMid>
  )
}

export default BoxMain