import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridColumns, GridRowId } from '@mui/x-data-grid';
import { useCallback, useEffect, useState } from 'react';
import { theme } from '../../../app.styled';
import { useProduct } from '../../../hooks/useProduct';
import { ICategory, IProduct } from '../../../interfaces/Product';
import DialogDelete from '../../../components/dialogs/DeleteDialog';
import ArticleIcon from '@mui/icons-material/Article';
import DialogDetailsProduct from './detailsProduct/Index';
import DialogUpdateProduct from './updateProduct/Index';

export default function TableProducts() {
  const { getAll, products, loading, error, remove, setProduct } = useProduct();
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [openDialogDetails, setOpenDialogDetails] = useState(false);
  const [openDialogUpdate, setOpenDialogUpdate] = useState(false);
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
    await remove(+id);
    await getAll();
    setOpenDialogDelete(false);
  }, [remove, getAll]);

  //DETAILS
  const handleOpenDialogDetails = (product: IProduct) => () => {
    setOpenDialogDetails(true);
    setCurrentProduct(product)
  };

  const handleCloseDialogDetails = () => {
    setOpenDialogDetails(false);
  };

  // UPDATE
  const handleOpenDialogUpdate = (product: IProduct) => () => {
    setOpenDialogUpdate(true);
    setCurrentProduct(product)
  };

  useEffect(() => {
    getAll()
  }, [getAll, openDialogUpdate])

  const columns: GridColumns<IProduct> = [
    { field: 'id', headerName: 'ID', width: 70, headerClassName: 'header' },
    { field: 'name', headerName: 'Product Name', width: 550, headerClassName: 'header' },
    {
      field: 'categories',
      headerName: 'Categories',
      sortable: false,
      headerClassName: 'header',
      renderCell: (params) => (
        <>
          {params.value.map((cat: ICategory, index: number) => (
            index !== 1 ? (<p key={index}>{cat.name}</p>) : (<p key={index}>, {cat.name}</p>)

          ))}
        </>
      )
      ,
      width: 230
    },
    {
      field: 'price',
      headerName: 'Price',
      headerAlign: "center",
      align: "center",
      width: 130,
      valueFormatter: ({ value }) => `R$${value}0`,
      headerClassName: 'header',
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
      }
    }}>
      <DataGrid
        loading={loading}
        rows={products}
        columns={columns}
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
      <DialogDelete
        dialog={openDialogDelete}
        onClose={handleCloseDialogDelete}
        onConfirm={deleteProduct}
        id={currentId}
        loading={loading} />
      <DialogUpdateProduct
        dialog={openDialogUpdate}
        setOpenDialogUpdate={setOpenDialogUpdate}
        currentProduct={currentProduct} />
      <DialogDetailsProduct
        dialog={openDialogDetails}
        onClose={handleCloseDialogDetails}
        currentProduct={currentProduct} />
    </Box>
  );
}
