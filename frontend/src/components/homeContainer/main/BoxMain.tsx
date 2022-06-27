import { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import { theme } from '../../../app.styled'
import { IHttpConfig } from '../../../interfaces/HttpConfig'
import { IProduct } from '../../../interfaces/Product'
import { StyledBoxMid } from './boxMain.styled'
import ProductBoxMain from './boxProductMain'

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
      <ProductBoxMain key={product.id} product={product} data={data} />
    ))
  }
  function showProductsRight() {
    return products && products.slice(3, 6).map((product: IProduct) => (
      <ProductBoxMain key={product.id} product={product} data={data} />
    ))
  }

  return (
    <StyledBoxMid>
      {loading && (<ReactLoading type={'spin'} color={'red'} height={60} width={60} />)}
      {error && (<p>{error.message}</p>)}
      {(locale === "left") ? showProductsLeft() : showProductsRight()}
    </StyledBoxMid>
  )
}

export default BoxMain