import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authProvider";
import CartContext from "../../contexts/cartProvider";
import { IProduct } from "../../interfaces/Product";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DialogContinueCart from "../dialogs/ContinueCartDialog";

interface Props {
  product: IProduct,
  origin: string
}

export default function BuyButton({ product, origin }: Props) {
  const { auth } = useContext(AuthContext);
  const { addProduct } = useContext(CartContext);
  const [openDialogCart, setOpenDialogCart] = useState(false);

  const navigate = useNavigate();

  const handleCloseDialogContinueCart = () => {
    setOpenDialogCart(false);
  };

  const handleButton = () => {
    if (auth.token) {
      addProduct(auth.user, product, 1);
      setOpenDialogCart(true);
    }
    else {
      navigate("/login")
    }
  }

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
