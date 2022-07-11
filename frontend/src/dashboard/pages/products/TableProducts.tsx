
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridColumns, GridRowId } from '@mui/x-data-grid';
import { useCallback, useEffect, useState } from 'react';
import { theme } from '../../../app.styled';
import { useProduct } from '../../../hooks/useProduct';
import { ICategory, IProduct } from '../../../interfaces/Product';
import DialogDelete from '../../components/dialogs/DeleteDialog';
import ArticleIcon from '@mui/icons-material/Article';

export default function TableProducts() {
  const { getAll, products, loading, error, remove, setProduct } = useProduct();
  const [rows, setRows] = useState<IProduct[]>([]);
  const [openDialogDelete, setopenDialogDelete] = useState(false);
  const [currentId, setCurrentId] = useState<GridRowId>(0)

  const handleClickOpen = (id: GridRowId) => () => {
    setopenDialogDelete(true);
    setCurrentId(id)
  };

  const handleClose = () => {
    setopenDialogDelete(false);
  };

  const deleteProduct = useCallback((id: GridRowId) => async () => {
    await remove(+id);
    await getAll();
    setopenDialogDelete(false);
  }, [remove, getAll]);

  const editProduct = useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );

  useEffect(() => {
    getAll()
  }, [getAll])

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
            onClick={handleClickOpen(params.id)}
          />
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={editProduct(params.id)}
          />
          <GridActionsCellItem
            icon={<ArticleIcon />}
            label="Details"
            onClick={editProduct(params.id)}
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
      <DialogDelete dialog={openDialogDelete} onClose={handleClose} onConfirm={deleteProduct} id={currentId} />
    </Box>
  );
}
