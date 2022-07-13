import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Autocomplete, Box, Checkbox, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { ChangeEvent, useState, useEffect, useCallback, FormEvent } from 'react';
import { useCategory } from '../../../../hooks/useCategory';
import { useProduct } from '../../../../hooks/useProduct';
import { ICategory, IProduct } from '../../../../interfaces/Product';
import { IPriceFormat } from '../addProduct/Index';
import { NumberFormatCustom } from '../addProduct/priceFormat';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
interface Props {
  dialog: boolean,
  setOpenDialogUpdate: any,
  currentProduct?: IProduct,
}

export default function DialogUpdateProduct({ dialog, setOpenDialogUpdate, currentProduct }: Props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [priceFormat, setPriceFormat] = useState<IPriceFormat>({ price: "" });
  const [quantity, setQuantity] = useState(0);
  const [newCategories, setNewCategories] = useState<ICategory[]>([]);

  const { getAll, categories } = useCategory();
  const { update, loading } = useProduct();

  useEffect(() => {
    getAll()
  }, [getAll])

  useEffect(() => {
    if (currentProduct) {
      setName(currentProduct?.name)
      setNewCategories(currentProduct?.categories)
      setPriceFormat({ price: currentProduct?.price.toString() })
      setQuantity(currentProduct?.quantity)
    }
  }, [dialog])

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedProduct: IProduct = {
      name,
      price: parseFloat(priceFormat.price),
      quantity,
      categories: newCategories,
      cartItems: {}
    }

    if (currentProduct?.id) {
      await update(currentProduct?.id, updatedProduct);
      setOpenDialogUpdate(false)
    }

  }, [update, name, priceFormat, quantity, newCategories]);

  const handleCloseDialogUpdate = () => {
    setOpenDialogUpdate(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPriceFormat({
      ...priceFormat,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box>
      <Dialog open={dialog} onClose={setOpenDialogUpdate} fullWidth maxWidth="lg">
        <DialogTitle>Product Details</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  fullWidth
                  id="name"
                  label="Product Name"
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
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
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="price"
                  fullWidth
                  id="price"
                  label="Price"
                  value={priceFormat.price}
                  InputProps={{
                    inputComponent: NumberFormatCustom as any,
                  }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="quantity"
                  fullWidth
                  id="quantity"
                  label="Quantity in Stock"
                  value={quantity}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setQuantity(parseInt(e.target.value))}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="createdAt"
                  fullWidth
                  id="createdAt"
                  label="Created At"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={currentProduct?.createdAt}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="updatedAt"
                  fullWidth
                  id="updatedAt"
                  label="Updated At"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={currentProduct?.updateAt}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "space-around", width: "150px", mt: 2, alignSelf: "flex-end" }}>
              <Button onClick={handleCloseDialogUpdate}>Cancel</Button>
              {!loading ? (
                <Button type='submit'>Save</Button>
              ) : (
                <Button disabled={true}>Wait...</Button>
              )}
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box >
  );
}
