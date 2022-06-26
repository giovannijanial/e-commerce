import { IProduct } from '../../interfaces/Product'
import { SBoxProduct } from './index.styled'

const ProductBox = ({ product, data }: { product: IProduct, data: any }) => {
  return (
    <SBoxProduct>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
    </SBoxProduct>
  )
}

export default ProductBox