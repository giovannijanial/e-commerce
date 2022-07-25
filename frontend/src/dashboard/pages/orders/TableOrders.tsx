import ArticleIcon from '@mui/icons-material/Article';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridCellParams, GridColumns, GridRowId, GridValueGetterParams } from '@mui/x-data-grid';
import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';
import { theme } from '../../../app.styled';
import AproveOrderDialog from '../../../components/dialogs/AproveOrderDialog';
import DialogDelete from '../../../components/dialogs/DeleteDialog';
import { useCart } from '../../../hooks/useCart';
import { ICart, ICartItem } from '../../../interfaces/Cart';
import DialogDetailsOrder from './detailsOrder/Index';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';

export default function TableOrders() {
  const { getAll, carts, loading, update, remove } = useCart();

  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [openDialogDetails, setOpenDialogDetails] = useState(false);
  const [openDialogAprove, setOpenDialogAprove] = useState(false);
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

  // APROVE
  const handleOpenDialogAprove = (id: GridRowId) => () => {
    setOpenDialogAprove(true);
    setCurrentId(id)
  };

  const handleCloseDialogAprove = () => {
    setOpenDialogAprove(false);
  };

  const aproveOrder = useCallback((id: GridRowId) => async () => {
    await update(id.toString(), "shipped");
    await getAll();
    setOpenDialogAprove(false);
  }, [update, getAll]);

  useEffect(() => {
    getAll()
  }, [getAll, openDialogAprove])

  const columns: GridColumns<ICart> = [
    { field: 'id', headerName: 'ID', width: 140, headerClassName: 'header' },
    {
      field: 'user',
      headerName: 'Username',
      width: 110,
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
      field: 'updateAt',
      headerName: 'Date',
      width: 100,
      headerClassName: 'header',
      align: "center",
      headerAlign: "center",
      valueGetter: (params: GridValueGetterParams) => {
        const date = new Date(params.row.updateAt.toString());
        const cartDate = `${date.getDate()}/${date.getUTCMonth() + 1}/${date.getFullYear()}`;
        return `${cartDate}`
      }
    },
    {
      field: 'cartStatus',
      headerName: 'Status',
      width: 150,
      headerClassName: 'header',
      align: "center",
      headerAlign: "center",
      cellClassName: (params: GridCellParams<string>) => {
        return clsx('super-app', {
          wp: params.value === "waitingPayment",
          sd: params.value === "shipped",
          pd: params.value === "payd",
        });
      },
    },
    {
      field: 'total',
      headerName: 'Total Value',
      width: 100,
      headerClassName: 'header',
      align: "center",
      headerAlign: "center",
      valueGetter: (params: GridValueGetterParams) =>
        `${(params.row.total).toFixed(2)}`,
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
            icon={<ArticleIcon />}
            label="Details"
            onClick={handleOpenDialogDetails(params.row)}
          />
          {params.row.cartStatus === 'payd' ? (
            <GridActionsCellItem
              icon={<FileDownloadDoneIcon />}
              label="Aprove"
              onClick={handleOpenDialogAprove(params.id)}
            />
          ) : (
            <GridActionsCellItem
              icon={<FileDownloadDoneIcon />}
              label="Aprove"
              disabled
              onClick={handleOpenDialogAprove(params.id)}
            />
          )}
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
        color: `${theme.palette.primary.main}`,
        fontWeight: "600",
      },
      '& .super-app.sd': {
        color: `${theme.palette.success.main}`,
        fontWeight: "600",
      },
      '& .super-app.pd': {
        color: `${theme.palette.warning.main}`,
        fontWeight: "600",
      },
    }}>
      <DataGrid
        loading={loading}
        rows={carts}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
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
      <DialogDetailsOrder
        dialog={openDialogDetails}
        onClose={handleCloseDialogDetails}
        currentCart={currentCart} />
      <AproveOrderDialog
        dialog={openDialogAprove}
        onClose={handleCloseDialogAprove}
        onConfirm={aproveOrder}
        id={currentId}
        loading={loading} />
    </Box >
  );
}

