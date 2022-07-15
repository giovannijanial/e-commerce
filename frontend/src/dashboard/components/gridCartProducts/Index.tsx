import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridColumns, GridRowId, GridValueGetterParams } from '@mui/x-data-grid';
import { useCallback, useEffect, useState } from 'react';
import { theme } from '../../../app.styled';
import { useCart } from '../../../hooks/useCart';
import { useProduct } from '../../../hooks/useProduct';
import { ICartItem } from '../../../interfaces/Cart';
import { ICategory, IProduct } from '../../../interfaces/Product';
import DialogDelete from '../../../components/dialogs/DeleteDialog';

interface Props {
  cartId: string;
  cartProducts: ICartItem[];
  origin: "details" | "update"
}

export default function GridCartProducts({ cartId, cartProducts, origin }: Props) {

  const { removeProduct, getOne, loading, cart } = useCart();

  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [currentId, setCurrentId] = useState<GridRowId>(0)
  const [currentProduct, setCurrentProduct] = useState<IProduct>();

  // DELETE
  const handleOpenDialogDelete = (id: GridRowId) => () => {
    setOpenDialogDelete(true);
    setCurrentId(id)
  };

  const handleCloseDialogDelete = () => {
    setOpenDialogDelete(false);
  };

  const deleteProduct = useCallback((id: GridRowId) => async () => {
    await removeProduct(cartId, +id);
    await getOne(cartId);
    setOpenDialogDelete(false);
  }, [removeProduct, getOne]);

  useEffect(() => {
    getOne(cartId)
  }, [getOne])

  const columnsUpdate: GridColumns<ICartItem> = [
    {
      field: 'productId',
      headerName: 'ID',
      width: 60,
      headerClassName: 'header',
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.product.id}`,
    },
    {
      field: 'productName',
      headerName: 'Product Name',
      width: 550,
      headerClassName: 'header',
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.product.name}`,
    },
    { field: 'quantity', headerName: 'Quantity', width: 100, headerClassName: 'header', headerAlign: "center", align: "center", },
    {
      field: 'price',
      headerName: 'Unit Price',
      width: 100,
      headerClassName: 'header',
      headerAlign: "center",
      align: "center",
      valueGetter: (params: GridValueGetterParams) =>
        `${(params.row.price).toFixed(2)}`,
    },
    {
      field: 'total',
      headerName: 'Subtotal',
      width: 150,
      headerClassName: 'header',
      headerAlign: "center",
      align: "center",
      valueGetter: (params: GridValueGetterParams) =>
        `${(params.row.quantity * params.row.price).toFixed(2)}`,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      headerClassName: 'header',
      width: 100,
      getActions: (params) => [
        <Box>
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleOpenDialogDelete(params.id)}
          />
        </Box>
      ],
    },
  ];

  const columnsDetails: GridColumns<ICartItem> = [
    {
      field: 'productId',
      headerName: 'ID',
      width: 100,
      headerClassName: 'header',
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.product.id}`,
    },
    {
      field: 'productName',
      headerName: 'Product Name',
      width: 650,
      headerClassName: 'header',
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.product.name}`,
    },
    { field: 'quantity', headerName: 'Quantity', width: 100, headerClassName: 'header', headerAlign: "center", align: "center", },
    { field: 'price', headerName: 'Unit Price', width: 100, headerClassName: 'header', headerAlign: "center", align: "center", },
    {
      field: 'total',
      headerName: 'Subtotal',
      width: 100,
      headerClassName: 'header',
      headerAlign: "center",
      align: "center",
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.quantity * params.row.price}`,
    },
  ];

  return (
    <Box sx={{
      height: 500,
      width: '100%',
      '& .header div': {
        fontWeight: "600",
      }
    }}>
      {cart && (
        <DataGrid
          loading={loading}
          rows={cart.cartProducts}
          columns={origin === "details" ? columnsDetails : columnsUpdate}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          sx={{
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        />
      )}
      <DialogDelete
        dialog={openDialogDelete}
        onClose={handleCloseDialogDelete}
        onConfirm={deleteProduct}
        id={currentId}
        loading={loading} />
    </Box>
  );
}
