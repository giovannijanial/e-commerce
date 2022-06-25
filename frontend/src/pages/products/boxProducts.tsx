import { useEffect, useState } from 'react';
import { url } from '../../App';
import { useFetch } from '../../hooks/useFetch';
import { IProduct } from '../../interfaces/Product';
import BoxProduct from './boxProduct';
import { SBoxProducts } from './index.styled'

const BoxProducts = () => {
  const [products, setProducts] = useState<IProduct[] | any>(null);

  const { data, loading, error, httpConfig } = useFetch(`${url}/product`);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data])

  function showProducts() {
    return products && products.slice(0, 12).map((product: IProduct) => (
      <BoxProduct key={product.id} product={product} />
    ))
  }

  return (
    <SBoxProducts>
      {loading && (<p>Loading...</p>)}
      {error && (<p>{error.message}</p>)}
      {showProducts()}
    </SBoxProducts>
  )
}

export default BoxProducts