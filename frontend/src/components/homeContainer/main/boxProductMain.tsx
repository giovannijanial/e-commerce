import { IProduct } from "../../../interfaces/Product"
import { SProductBoxMain } from "./boxMain.styled"

const ProductBoxMain = ({ product, data }: { product: IProduct, data: any }) => {
  return (
    <SProductBoxMain>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
    </SProductBoxMain>
  )
}

export default ProductBoxMain