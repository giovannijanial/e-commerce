import { SBoxProduct } from '../../components/productBox/index.styled'
import { IProduct } from '../../interfaces/Product'

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