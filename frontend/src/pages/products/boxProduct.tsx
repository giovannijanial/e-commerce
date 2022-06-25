import { IProduct } from '../../interfaces/Product'
import { SBoxProduct } from './index.styled'

const BoxProduct = ({ product }: { product: IProduct }) => {
  return (
    <SBoxProduct>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
    </SBoxProduct>
  )
}

export default BoxProduct