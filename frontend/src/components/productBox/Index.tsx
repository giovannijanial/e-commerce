import { Link } from 'react-router-dom'
import { IProduct } from '../../interfaces/Product'
import { SBoxProduct } from './index.styled'

const ProductBox = ({ product }: { product: IProduct }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <SBoxProduct>
        <p>{product.id}</p>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.quantity}</p>
      </SBoxProduct>
    </Link>
  )
}

export default ProductBox