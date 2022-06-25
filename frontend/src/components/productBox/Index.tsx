import { IProduct } from '../../interfaces/Product'
import { SProductBox } from './index.styled'

const ProductBox = ({ product, data }: { product: IProduct, data: any }) => {
  return (
    <SProductBox>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
    </SProductBox>
  )
}

export default ProductBox