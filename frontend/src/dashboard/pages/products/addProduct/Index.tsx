import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Autocomplete, Box, Button, Checkbox, Container, Fab, Grid, Input, TextField, Toolbar, Typography } from '@mui/material';
import { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCategory } from '../../../../hooks/useCategory';
import { useProduct } from '../../../../hooks/useProduct';
import { ICategory, IProduct } from '../../../../interfaces/Product';
import { DashBoxMain } from '../../../components/main/main.styled';
import { NumberFormatCustom } from './priceFormat';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { IUploadImage } from '../../../../interfaces/UploadImage';

export interface IPriceFormat {
  price: string;
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const DashAddProductPage = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState<File>();
  const [priceFormat, setPriceFormat] = useState<IPriceFormat>({ price: "" });
  const [quantity, setQuantity] = useState(0);
  const [newCategories, setNewCategories] = useState<ICategory[]>([]);

  const navigate = useNavigate();
  const { create, error, loading, success, uploadImage } = useProduct();
  const { getAll, categories } = useCategory();

  useEffect(() => {
    getAll()
  }, [getAll])

  useEffect(() => {
    if (success) {
      setName('');
      setPriceFormat({ price: "" });
      setQuantity(0);
      setNewCategories([]);
      navigate("/dash/products");
    }
  }, [success])


  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const product: IProduct = {
      name,
      price: parseFloat(priceFormat.price),
      quantity,
      image: "",
      categories: newCategories,
      cartItems: {}
    }

    const currentProduct = await create(product)

    if (currentProduct?.id) {
      const data = new FormData();

      data.append("actioon", "ADD");
      data.append("id", currentProduct.id.toString());
      data.append("file", image as Blob)
      uploadImage(data);
    }

  }, [create, name, priceFormat, quantity, newCategories]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPriceFormat({
      ...priceFormat,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      setImage(file);
    }
  };

  return (
    <DashBoxMain sx={{ height: "100vh" }}>
      <Toolbar />
      <Container maxWidth="lg"
        sx={{
          mt: 4, mb: 4, display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        }}>
        <Typography variant="h2">ADD PRODUCT</Typography>
        <Box component="form" onSubmit={handleSubmit}
          sx={{
            mt: 10, display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Grid container spacing={2} sx={{ display: "flex", alignItems: "center" }}>
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
            <Grid item xs={10}>
              <TextField
                fullWidth
                disabled
                value={image?.name}
              />
            </Grid>
            <Grid item xs={2} sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained" component="label" endIcon={<PhotoCamera />}>
                Upload
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={handleImageChange}
                />
              </Button>
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
            <Grid item xs={12}>
              <Autocomplete
                multiple
                id="categories"
                options={categories}
                disableCloseOnSelect
                isOptionEqualToValue={(option, value) => option.id === value.id}
                getOptionLabel={(category) => category.name}
                renderOption={(props, category, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {category.name}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField {...params} label="Categories" />
                )}
                value={newCategories}
                onChange={(e, value) => setNewCategories(value)}
                fullWidth
                aria-required

                sx={{ marginTop: "15px" }}
              />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "space-around", width: "600px" }}>
            <NavLink to='/dash/products'>
              <Button variant="contained" sx={{ mt: 3, mb: 2, width: 250 }}>
                Back
              </Button>
            </NavLink>
            {!loading ? (
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, width: 250 }}>
                Add Product
              </Button>
            ) : (
              <Button disabled={true} variant="contained" sx={{ mt: 3, mb: 2, width: 250 }}>
                Wait...
              </Button>
            )}
          </Box>
        </Box>
      </Container >
    </DashBoxMain >
  )
}

export default DashAddProductPage