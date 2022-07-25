import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { ICart } from "../../interfaces/Cart"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OrderProduct from "./OrderProduct";

interface Props {
  cart: ICart;
  index: number;
}

const Orders = ({ cart, index }: Props) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const getCartDate = () => {
    let date;
    let cartDate;
    if (cart.updateAt) {
      date = new Date(cart.updateAt?.toString());
      cartDate = `${date.getDate()}/${date.getUTCMonth() + 1}/${date.getFullYear()}`;
    }
    return cartDate;
  }

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Accordion
      expanded={expanded === `panel${index}`}
      onChange={handleChange(`panel${index}`)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: '50%', flexShrink: 0 }}>
          {cart.id}
        </Typography>
        <Typography sx={{ width: '20%', flexShrink: 0 }}>
          {getCartDate()}
        </Typography>
        <Typography sx={{ width: '20%', flexShrink: 0 }}>{cart.cartStatus}</Typography>
        <Typography sx={{ width: '10%', flexShrink: 0 }}>{cart.total.toFixed(2)}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={2} />
          <Grid item xs={6} />
          <Grid
            item xs={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Typography>Quantidade</Typography>
          </Grid>
          <Grid item xs={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Typography>Total Parcial</Typography>
          </Grid>
          {cart.cartProducts && cart.cartProducts.map((cartProduct) => (
            <OrderProduct key={cartProduct.id} cartProduct={cartProduct} />
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

export default Orders