import { Box, Container, Grid, Toolbar, Typography, TextField, FormControlLabel, Button } from '@mui/material'
import { ChangeEvent, FormEvent, forwardRef, useCallback, useState } from 'react'
import NumberFormat, { InputAttributes } from 'react-number-format';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../../hooks/useProduct';
import { ICategory } from '../../../interfaces/Product';
import { DashBoxMain } from '../../components/main/main.styled'

interface IPriceFormat {
  price: string;
}
interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumberFormatCustom = forwardRef<
  NumberFormat<InputAttributes>,
  CustomProps
>(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      decimalSeparator={"."}
      isNumericString
      prefix="R$"
    />
  );
});

const DashAddProductPage = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [priceFormat, setPriceFormat] = useState<IPriceFormat>({ price: "3213" });
  const [quantity, setQuantity] = useState(0);
  const [categories, setCategories] = useState<ICategory[]>([]);


  const navigate = useNavigate();
  const { create, error, loading, success } = useProduct();

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const product = {
      name,
      price: parseFloat(priceFormat.price),
      quantity,
      categories,
    }

    create(product)

  }, [create, name, priceFormat, quantity, categories]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceFormat({
      ...priceFormat,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <DashBoxMain sx={{ height: "100vh" }}>
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, display: "flex", flexDirection: "column" }}>
        <Typography variant="h2">ADD PRODUCT</Typography>
        <Box component="form" onSubmit={handleSubmit}
          sx={{
            mt: 10, display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Product Name"
                autoFocus
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                value={name}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="price"
                label="Price"
                name="price"
                onChange={handleChange}
                value={priceFormat.price}
                InputProps={{
                  inputComponent: NumberFormatCustom as any,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="quantity"
                type="number"
                label="Quantity in Stock"
                name="quantity"
                autoComplete="quantity"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setQuantity(parseInt(e.target.value))}
                value={+quantity}

              />
            </Grid>

          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, width: 600 }}
          >
            Sign Up
          </Button>
        </Box>
      </Container>
    </DashBoxMain>
  )
}

export default DashAddProductPage