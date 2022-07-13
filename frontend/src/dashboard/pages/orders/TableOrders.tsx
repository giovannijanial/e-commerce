import ArticleIcon from '@mui/icons-material/Article';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridCellParams, GridColumns, GridRowId } from '@mui/x-data-grid';
import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';
import { theme } from '../../../app.styled';
import { useCart } from '../../../hooks/useCart';
import { ICart, ICartItem } from '../../../interfaces/Cart';
import DialogDelete from '../../components/dialogs/DeleteDialog';
import DialogDetailsOrder from './detailsOrder/Index';
import DialogUpdateOrder from './updateOrder/Index';

export default function TableOrders() {
  const { getAll, carts, loading, error, remove, setCart } = useCart();

  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [openDialogDetails, setOpenDialogDetails] = useState(false);
  const [openDialogUpdate, setOpenDialogUpdate] = useState(false);
  const [currentId, setCurrentId] = useState<GridRowId>(0)
  const [currentCart, setCurrentCart] = useState<ICart>();

  // DELETE
  const handleOpenDialogDelete = (id: GridRowId) => () => {
    setOpenDialogDelete(true);
    setCurrentId(id)
  };

  const handleCloseDialogDelete = () => {
    setOpenDialogDelete(false);
  };

  const deleteCart = useCallback((id: GridRowId) => async () => {
    await remove(id.toString());
    await getAll();
    setOpenDialogDelete(false);
  }, [remove, getAll]);

  //DETAILS
  const handleOpenDialogDetails = (cart: ICart) => () => {
    setOpenDialogDetails(true);
    setCurrentCart(cart)
  };

  const handleCloseDialogDetails = () => {
    setOpenDialogDetails(false);
  };

  // UPDATE
  const handleOpenDialogUpdate = (cart: ICart) => () => {
    setOpenDialogUpdate(true);
    setCurrentCart(cart)
  };

  useEffect(() => {
    getAll()
  }, [getAll, openDialogUpdate])

  const columns: GridColumns<ICart> = [
    { field: 'id', headerName: 'ID', width: 200, headerClassName: 'header' },
    {
      field: 'user',
      headerName: 'Username',
      width: 150,
      headerClassName: 'header',
      renderCell: (params) => (
        <p>{params.value.username}</p>
      )
    },
    {
      field: 'cartProducts',
      headerName: 'Products',
      width: 430,
      headerClassName: 'header',
      renderCell: (params) => (
        <>
          {params.value.map((cart: ICartItem, index: number) => (
            `${cart.product.name}, `
          ))}
        </>
      )
    },
    {
      field: 'cartStatus',
      headerName: 'Status',
      width: 180,
      headerClassName: 'header',
      align: "center",
      headerAlign: "center",
      cellClassName: (params: GridCellParams<string>) => {
        return clsx('super-app', {
          wp: params.value === "waitingPayment",
        });
      },
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      headerClassName: 'header',
      width: 120,
      getActions: (params) => [
        <Box>
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleOpenDialogDelete(params.id)}
          />
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={handleOpenDialogUpdate(params.row)}
          />
          <GridActionsCellItem
            icon={<ArticleIcon />}
            label="Details"
            onClick={handleOpenDialogDetails(params.row)}
          />
        </Box>
      ],
    },
  ];

  return (
    <Box sx={{
      height: 600,
      width: '100%',
      '& .header div': {
        fontWeight: "600",
      },
      '& .super-app.wp': {
        color: `${theme.palette.primary.main}`
      },
    }}>
      <DataGrid
        loading={loading}
        rows={carts}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        getRowHeight={() => 'auto'}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
      <DialogDelete
        dialog={openDialogDelete}
        onClose={handleCloseDialogDelete}
        onConfirm={deleteCart}
        id={currentId}
        loading={loading} />
      <DialogUpdateOrder
        dialog={openDialogUpdate}
        setOpenDialogUpdate={setOpenDialogUpdate}
        currentCart={currentCart} />
      <DialogDetailsOrder
        dialog={openDialogDetails}
        onClose={handleCloseDialogDetails}
        currentCart={currentCart} />
    </Box >
  );
}

