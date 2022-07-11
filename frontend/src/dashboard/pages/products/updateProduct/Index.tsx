import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Autocomplete, Box, Checkbox, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { ChangeEvent, useState, useEffect } from 'react';
import { useCategory } from '../../../../hooks/useCategory';
import { ICategory, IProduct } from '../../../../interfaces/Product';
import { IPriceFormat } from '../addProduct/Index';
import { NumberFormatCustom } from '../addProduct/priceFormat';

interface Props {
  dialog: boolean,
  setOpenDialogUpdate: any,
  onConfirm: any,
  currentProduct?: IProduct,
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function DialogUpdateProduct({ dialog, setOpenDialogUpdate, onConfirm, currentProduct }: Props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [priceFormat, setPriceFormat] = useState<IPriceFormat>({ price: "" });
  const [quantity, setQuantity] = useState(0);
  const [newCategories, setNewCategories] = useState<ICategory[] | undefined>([]);

  const { getAllCategories, categories } = useCategory();

  useEffect(() => {
    getAllCategories()
  }, [getAllCategories])

  const handleCloseDialogUpdate = () => {
    setOpenDialogUpdate(false);
  };

  useEffect(() => {
    console.log(currentProduct?.categories)
    setNewCategories(currentProduct?.categories)
  }, [dialog])


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
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                name="name"
                fullWidth
                id="name"
                label="Product Name"
                value={currentProduct?.name}
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

                sx={{ marginTop: "15px" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="price"
                fullWidth
                id="price"
                label="Price"
                value={`${currentProduct?.price}0`}
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
                value={currentProduct?.quantity}
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
                value={currentProduct?.updatedAt}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogUpdate}>Cancel</Button>
          <Button onClick={setOpenDialogUpdate}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
