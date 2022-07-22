import { Button } from "@mui/material";
import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authProvider";
import CartContext from "../../contexts/cartProvider";
import { IProduct } from "../../interfaces/Product";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DialogContinueCart from "../dialogs/ContinueCartDialog";
import { useCart } from "../../hooks/useCart";

interface Props {
  product: IProduct,
  origin: string
}

export default function BuyButton({ product, origin }: Props) {
  const { auth } = useContext(AuthContext);
  const { addProduct } = useContext(CartContext);
  const { create } = useCart();
  const [openDialogCart, setOpenDialogCart] = useState(false);

  const navigate = useNavigate();

  const handleCloseDialogContinueCart = () => {
    setOpenDialogCart(false);
  };

  const handleButton = useCallback(async () => {
    if (auth.token) {
      if (product.id) {
        setOpenDialogCart(true);
        await create(auth.user, product, 1)
        addProduct(product, 1);
      }
    }
    else {
      navigate("/login")
    }
  }, [])

  return (
    <>
      {origin === "info" ? (
        <Button
          onClick={(e) => handleButton()}
          variant="contained"
          endIcon={<ShoppingCartIcon />}
          sx={{ width: 250, height: 60, fontSize: "1.2em" }}>
          <b>Comprar</b>
        </Button>

      ) : (
        <Button
          onClick={(e) => handleButton()}
          fullWidth variant="contained"
          startIcon={<ShoppingCartIcon />}>
          Comprar
        </Button>
      )}

      <DialogContinueCart
        dialog={openDialogCart}
        onClose={handleCloseDialogContinueCart} />
    </>
  )
}
